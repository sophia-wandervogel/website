$('.nav-toggle').on('click', function () {
    $('.nav-toggle, .nav').toggleClass('show');
});

// スクロールアニメーション
document.addEventListener('DOMContentLoaded', function () {
    var targets = document.querySelectorAll(
        'section, .top-topic, .news-section, .term-container, .map-container, .info-section, .activity-vertical-container'
    );
    targets.forEach(function (el) {
        el.classList.add('fade-in-section');
    });

    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.08 });

    document.querySelectorAll('.fade-in-section').forEach(function (el) {
        observer.observe(el);
    });
});

// トップへ戻るボタン
window.addEventListener('scroll', function () {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    if (window.scrollY > 300) {
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('back-to-top');
    if (!btn) return;
    btn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
