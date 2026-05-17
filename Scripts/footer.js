fetch('footer.html')
    .then(response => {
        if (!response.ok) throw new Error('Failed to load footer');
        return response.text();
    })
    .then(data => {
        const container = document.getElementById('footer');
        if (container) {
            container.innerHTML = data;

            // Apply translations after footer is loaded
            if (window.applyTranslations) {
                const savedLang = localStorage.getItem('language') || 'en';
                window.applyTranslations(savedLang);
            }
        }
    })
    .catch(error => console.error('Error loading footer component:', error));
