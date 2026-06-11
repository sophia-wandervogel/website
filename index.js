function initMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileNav = document.querySelector('.nav');
    if (!navToggle || !mobileNav) return;

    navToggle.addEventListener('click', function () {
        this.classList.toggle('show');
        mobileNav.classList.toggle('show');

        const isMenuOpen = this.classList.contains('show');
        this.setAttribute('aria-expanded', String(isMenuOpen));
        this.setAttribute('aria-label', isMenuOpen ? 'メニューを閉じる' : 'メニューを開く');
    });
}

function initScrollAnimation() {
    const animatedElements = document.querySelectorAll(
        'section, .top-topic, .news-section, .term-container, .map-container, .info-section, .activity-vertical-container'
    );
    if (!animatedElements.length) return;

    animatedElements.forEach(function (element) {
        element.classList.add('fade-in-section');
    });

    const scrollObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    animatedElements.forEach(function (element) {
        scrollObserver.observe(element);
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

function initSlideshow() {
    const slideshowImages = document.querySelectorAll('#slideshow img');
    const slideshowDots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    let hasLoadedDeferredImages = false;
    if (slideshowImages.length <= 1) return;

    function loadDeferredSlideshowImages() {
        if (hasLoadedDeferredImages) return;
        hasLoadedDeferredImages = true;
        slideshowImages.forEach(function (img) {
            if (img.dataset.src) {
                img.src = img.dataset.src;
                delete img.dataset.src;
            }
        });
    }

    setInterval(function () {
        loadDeferredSlideshowImages();
        slideshowImages[currentIndex].classList.remove('active');
        if (slideshowDots[currentIndex]) slideshowDots[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slideshowImages.length;
        slideshowImages[currentIndex].classList.add('active');
        if (slideshowDots[currentIndex]) slideshowDots[currentIndex].classList.add('active');
    }, 5000);
}

document.addEventListener('DOMContentLoaded', function () {
    initMenu();
    initScrollAnimation();
    initBackToTop();
    initSlideshow();
});
