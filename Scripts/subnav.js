fetch('subnav.html')
    .then(response => {
        if (!response.ok) throw new Error('Failed to load subnav');
        return response.text();
    })
    .then(data => {
        const subnav = document.getElementById('div_games');
        if (subnav) {
            subnav.innerHTML = data;

            // Highlight current subnav link
            const currentPage = window.location.pathname.split('/').pop() || 'PersonalProjects.html';
            const links = subnav.querySelectorAll('a');
            links.forEach(link => {
                link.classList.add('link'); // ensure it has the styling class
                if (link.getAttribute('href') === currentPage) {
                    link.id = 'current';
                }
            });

            // Apply translations after subnav is loaded
            if (window.applyTranslations) {
                const savedLang = localStorage.getItem('language') || 'en';
                window.applyTranslations(savedLang);
            }
        }
    })
    .catch(error => console.error('Error loading subnav component:', error));
