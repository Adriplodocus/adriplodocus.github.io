(function () {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    // Stagger skill tags on index page
    document.querySelectorAll('.skills-grid .skill-tag').forEach(function (tag, i) {
        tag.style.animationName = 'tagReveal';
        tag.style.animationDuration = '0.3s';
        tag.style.animationTimingFunction = 'ease';
        tag.style.animationFillMode = 'both';
        tag.style.animationDelay = (0.62 + i * 0.05) + 's';
    });

    // Scroll reveal: skip elements already in viewport on load
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('[data-reveal]').forEach(function (el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            // Already visible on load: CSS animation directly, no IO needed
            el.style.animation = 'fadeSlideUp 0.5s ease 0.05s both';
        } else {
            el.classList.add('reveal');
            observer.observe(el);
        }
    });
})();
