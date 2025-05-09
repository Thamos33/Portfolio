window.setLanguage = async function (lang) {
    try {
        const response = await fetch(`translations/${lang}.json`);
        const translations = await response.json();

        // Texte simple (innerHTML)
        document.querySelectorAll('[data-i18n]').forEach((el) => {
            const key = el.getAttribute('data-i18n');
            if (translations[key]) {
                el.innerHTML = translations[key];
            }
        });

        // Traduction des attributs spécifiques comme title, alt, etc.
        document
            .querySelectorAll(
                '[data-i18n-title], [data-i18n-alt], [data-i18n-placeholder]'
            )
            .forEach((el) => {
                ['title', 'alt', 'placeholder'].forEach((attr) => {
                    const key = el.getAttribute(`data-i18n-${attr}`);
                    if (key && translations[key]) {
                        el.setAttribute(attr, translations[key]);
                    }
                });
            });

        // Change la langue HTML
        document.documentElement.lang = lang;
        localStorage.setItem('lang', lang);

        // Ajoute la classe 'active' aux boutons de langue
        document.querySelectorAll('.lang-switch-button').forEach((button) => {
            if (button.dataset.lang === lang) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    } catch (error) {
        console.error(
            `Erreur lors du chargement des traductions (${lang})`,
            error
        );
    }
};

const savedLang = localStorage.getItem('lang') || 'fr';
setLanguage(savedLang);
