// ハンバーガーメニューのトグル
const navToggle = document.querySelector('.nav-toggle');
if (navToggle) {
    navToggle.addEventListener('click', function () {
        document.querySelector('.nav-toggle').classList.toggle('show');
        document.querySelector('.nav').classList.toggle('show');
        const expanded = this.classList.contains('show');
        this.setAttribute('aria-expanded', expanded);
        this.setAttribute('aria-label', expanded ? 'メニューを閉じる' : 'メニューを開く');
    });
}

// スクロールアニメーション
document.addEventListener('DOMContentLoaded', function () {
    var fadeInTargets = document.querySelectorAll(
        'section, .top-topic, .news-section, .term-container, .map-container, .info-section, .activity-vertical-container'
    );
    fadeInTargets.forEach(function (element) {
        element.classList.add('fade-in-section');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.fade-in-section').forEach(function (element) {
        observer.observe(element);
    });
});

// トップへ戻るボタン
window.addEventListener('scroll', function () {
    var backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var backToTopButton = document.getElementById('back-to-top');
    if (!backToTopButton) return;
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
