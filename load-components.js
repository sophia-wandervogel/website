// load-components.js - 共通コンポーネントを動的に読み込む

document.addEventListener('DOMContentLoaded', function() {
    // ヘッダーを読み込む
    fetch('../templates/header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        })
        .catch(error => console.error('ヘッダーの読み込みエラー:', error));

    // フッターを読み込む
    fetch('../templates/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('フッターの読み込みエラー:', error));
});