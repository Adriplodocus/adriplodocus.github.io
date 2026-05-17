fetch('header.html')
    .then(response => {
        if (!response.ok) throw new Error('Failed to load header');
        return response.text();
    })
    .then(data => {
        const container = document.getElementById('header');
        if (!container) return;
        container.innerHTML = data;

        // Highlight current page
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        if (currentPage === 'index.html' || currentPage === '') {
            const homeLink = document.getElementById('nav-home');
            if (homeLink) homeLink.id = 'current';
        } else if (currentPage === 'CV.html') {
            const cvLink = document.getElementById('nav-cv');
            if (cvLink) cvLink.id = 'current';
        } else if (['PersonalProjects.html', 'Overcrowded.html', 'TinyHunters.html', 'CutTheRope.html', 'Eduzland.html', 'Tools.html', 'CaseStudies.html'].includes(currentPage)) {
            const portfolioLink = document.getElementById('nav-portfolio');
            if (portfolioLink) portfolioLink.id = 'current';
        }

        // Wire up language switcher buttons
        container.querySelectorAll('.lang-switcher button[data-lang]').forEach(button => {
            button.addEventListener('click', () => {
                const lang = button.getAttribute('data-lang');
                localStorage.setItem('language', lang);
                if (window.applyTranslations) window.applyTranslations(lang);
            });
        });

        // Apply translations after header is loaded
        if (window.applyTranslations) {
            const savedLang = localStorage.getItem('language') || 'en';
            window.applyTranslations(savedLang);
        }
    })
    .catch(error => console.error('Error loading header component:', error));
