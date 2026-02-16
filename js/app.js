
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
                // Check if it's a CORS/fetch error (common in localhost)
                const isCorsError = error.message.includes('fetch') || error.message.includes('CORS');

                if (isCorsError) {
                    manifestoContainer.innerHTML = `
                        <div class="error-message" style="text-align: center; padding: 40px; background: #fff3cd; border: 2px solid #ffc107; border-radius: 8px; margin: 20px 0;">
                            <p style="color: #856404; margin-bottom: 20px;">
                                The manifesto content cannot be loaded directly from the file system. 
                                This is a browser security restriction with "CORS".
                            </p>
                            <p style="margin-bottom: 20px;">
                                <strong>Solution:</strong> Click the link below to view the manifesto:
                            </p>
                            <a href="UNSManifesto/UNSManifesto-${lang}.md" 
                               target="_blank" 
                               class="btn-primary" 
                               style="display: inline-block; padding: 12px 30px; background: var(--primary-color); color: white; text-decoration: none; border-radius: 25px; font-weight: 600;">
                                📄 Open UNS Manifesto (${lang.toUpperCase()})
                            </a>
                        </div>
                    `;
                } else {
                    manifestoContainer.innerHTML = `<p class="error">Error loading content: ${error.message}</p>`;
                }
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
