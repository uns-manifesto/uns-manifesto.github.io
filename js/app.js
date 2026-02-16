
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
        langSelect.addEventListener('change', (e) => {
            currentLang = e.target.value;
            localStorage.setItem('uns_lang', currentLang);
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

            // 2. Load Manifesto Markdown (only if container exists)
            if (manifestoContainer) {
                const mdRes = await fetch(`UNSManifesto/UNSManifesto-${lang}.md`);
                if (!mdRes.ok) throw new Error(`Could not load UNSManifesto-${lang}.md`);
                const mdText = await mdRes.text();

                // 3. Render Markdown
                // Clean up the markdown a bit if needed (e.g. remove first H1 if it duplicates hero)
                // But let's keep it as is for now as requested "inject the files"
                manifestoContainer.innerHTML = marked.parse(mdText);
            }

        } catch (error) {
            console.error('Error loading content:', error);
            if (manifestoContainer) {
                manifestoContainer.innerHTML = `<p class="error">Error loading content. Please check your connection or try again. (${error.message})</p>`;
            }
        }
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
    }
});
