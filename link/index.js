function initMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    if (!navToggle || !nav) return;

    navToggle.addEventListener('click', function () {
        this.classList.toggle('show');
        nav.classList.toggle('show');

        const expanded = this.classList.contains('show');
        this.setAttribute('aria-expanded', String(expanded));
        this.setAttribute('aria-label', expanded ? 'メニューを閉じる' : 'メニューを開く');
    });
}

function initScrollAnimation() {
    const fadeInTargets = document.querySelectorAll(
        'section, .top-topic, .news-section, .term-container, .map-container, .info-section, .activity-vertical-container'
    );
    if (!fadeInTargets.length) return;

    fadeInTargets.forEach(function (element) {
        element.classList.add('fade-in-section');
    });

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    fadeInTargets.forEach(function (element) {
        observer.observe(element);
    });
}

function initBackToTop() {
    const backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;

    window.addEventListener('scroll', function () {
        backToTopButton.classList.toggle('visible', window.scrollY > 300);
    });

    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initScrollAnimation();
    initBackToTop();
});
