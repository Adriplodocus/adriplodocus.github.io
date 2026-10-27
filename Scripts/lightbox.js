// Click-to-enlarge for project captures and the CV image.
(() => {
    const images = document.querySelectorAll('img.gameCapture, img.documentImg');
    if (!images.length) return;

    const overlay = document.createElement('div');
    overlay.className = 'lightbox';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.hidden = true;
    const big = document.createElement('img');
    overlay.appendChild(big);
    document.body.appendChild(overlay);

    let lastFocused = null;

    function open(img) {
        lastFocused = img;
        big.src = img.currentSrc || img.src;
        big.alt = img.alt;
        overlay.hidden = false;
        document.body.style.overflow = 'hidden';
        requestAnimationFrame(() => overlay.classList.add('is-open'));
        overlay.tabIndex = -1;
        overlay.focus();
    }

    function close() {
        overlay.classList.remove('is-open');
        overlay.hidden = true;
        document.body.style.overflow = '';
        if (lastFocused) lastFocused.focus();
    }

    images.forEach(img => {
        img.tabIndex = 0;
        img.addEventListener('click', () => open(img));
        img.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                open(img);
            }
        });
    });

    overlay.addEventListener('click', close);
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && !overlay.hidden) close();
    });
})();
