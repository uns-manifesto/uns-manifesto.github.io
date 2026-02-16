
document.addEventListener('DOMContentLoaded', () => {
    const langSelect = document.getElementById('lang-select');
    const manifestoContainer = document.getElementById('manifesto-content');

    // Set default language
    let currentLang = localStorage.getItem('uns_lang') || navigator.language.slice(0, 2);
    if (!['en', 'fr', 'es'].includes(currentLang)) {
        currentLang = 'en'; // Default fallback
    }

    // Set dropdown value
    if (langSelect) {
        langSelect.value = currentLang;
        langSelect.setAttribute('data-lang', currentLang); // For flag CSS
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('uns_lang', currentLang);
            langSelect.setAttribute('data-lang', currentLang); // Update flag
            loadLanguage(currentLang);
        });
    }

    // Initial load
    loadLanguage(currentLang);

    async function loadLanguage(lang) {
        // Update HTML lang attribute
        document.documentElement.lang = lang;

        try {
            // 1. Load UI strings
            const uiRes = await fetch(`lang/${lang}.json`);
            if (!uiRes.ok) throw new Error(`Could not load lang/${lang}.json`);
            const uiData = await uiRes.json();
            applyTranslations(uiData);

            // 2. Load Manifesto Parts
            const containers = {
                'manifesto-intro': `UNSManifesto/UNSManifesto-Part1-Intro-${lang}.md`,
                'manifesto-principles': `UNSManifesto/UNSManifesto-Part2-Principles-${lang}.md`,
                'manifesto-consequences': `UNSManifesto/UNSManifesto-Part3-Consequences-${lang}.md`
            };

            for (const [id, path] of Object.entries(containers)) {
                const container = document.getElementById(id);
                if (container) {
                    try {
                        const res = await fetch(path);
                        if (!res.ok) throw new Error(`Could not load ${path}`);
                        const text = await res.text();

                        // Use special rendering for Principles if it's the principles container
                        if (id === 'manifesto-principles' && !container.classList.contains('markdown-body')) {
                            renderPrinciples(text, container);
                        } else {
                            container.innerHTML = marked.parse(text);
                        }
                    } catch (err) {
                        console.error(`Error loading ${id}:`, err);
                        container.innerHTML = `<p class="error">Error loading section.</p>`;
                    }
                }
            }

            // 4. If URL has a hash, scroll to it after content is loaded
            if (window.location.hash) {
                const targetId = window.location.hash.substring(1);
                const targetEl = document.getElementById(targetId);
                if (targetEl) {
                    setTimeout(() => {
                        targetEl.scrollIntoView({ behavior: 'smooth' });
                    }, 200); // Slightly more delay for multiple fetch operations
                }
            }

        } catch (error) {
            console.error('Error loading content:', error);
        }
    }

    /**
     * Custom renderer for the Principles section to give it a better UI/UX
     */
    function renderPrinciples(mdText, container) {
        let htmlContent = marked.parse(mdText);

        // Split by <h3> to detect individual principles
        // The first part will be the intro text
        const parts = htmlContent.split('<h3>');
        const intro = parts[0];

        let processedHtml = `<div class="principles-intro">${intro}</div>`;
        processedHtml += '<div class="principles-grid-cards">';

        for (let i = 1; i < parts.length; i++) {
            // Clean up separators like <hr> if they ended up at the end of a card or start of next
            let cardContent = parts[i].replace(/<hr\s*\/?>\s*$/i, '');
            processedHtml += `<div class="principle-card"><h3>${cardContent}</div>`;
        }

        processedHtml += '</div>';
        container.innerHTML = processedHtml;
    }

    function applyTranslations(data) {
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (data[key]) {
                // Handle specific elements
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = data[key];
                } else if (el.tagName === 'IMG') {
                    el.alt = data[key];
                } else {
                    el.innerText = data[key]; // Or innerHTML if keys contain tags
                }
            }
        });

        // Translate meta tags with data-i18n-content
        document.querySelectorAll('[data-i18n-content]').forEach(el => {
            const key = el.getAttribute('data-i18n-content');
            if (data[key]) {
                el.setAttribute('content', data[key]);
            }
        });
    }

    // --- Back to Top & Scroll Handling ---
    const backToTopBtn = document.getElementById('back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
