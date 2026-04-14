# 上智大学体育会ワンダーフォーゲル部 公式Webサイト

**Sophia University Wander Vogel — Official Website**

🌐 ライブサイト: https://sophia-wandervogel.github.io/website/

---

## 概要

1957年創部の上智大学体育会ワンダーフォーゲル部の公式Webサイトです。
無雪期登山を主な活動とし、サイクリング・離島遠征・スキースノーシュー・ボルダリングなど幅広いアウトドア活動を行っています。

---

## サイト構成

```
website-main/
├── index.html                 # TOPページ
├── 404.html                   # 旧URLからのリダイレクト
├── index.css                  # TOPページ専用スタイル
├── header.css                 # 全ページ共通のヘッダー・共通UI
├── hamburger_menu.js          # メニュー開閉・スクロール演出
├── jquery-3.6.0.min.js        # 依存ライブラリ
├── activity-contents/
│   ├── activity-contents.html # 活動内容ページ
│   └── activity-contents.css
├── hyutte/
│   ├── hyutte.html            # 宝台樹ヒュッテ紹介ページ
│   └── hyutte.css
├── link/
│   ├── link.html              # リンク集ページ
│   └── link.css
└── images/                    # 写真・ロゴ・SNSアイコン
```

共通ヘッダーやフッターはテンプレート読み込みではなく、各HTMLに直接書かれています。
そのため、このリポジトリは「ビルドなしの静的サイト」として読むのがいちばん分かりやすい構成です。

---

## 技術スタック

- **HTML5 / CSS3 / Vanilla JavaScript**
- **jQuery 3.6.0**（ハンバーガーメニューのトグルのみに使用）
- **Google Fonts**（Noto Serif JP, Noto Sans JP, Oswald, Hannari）
- ビルドツール・パッケージマネージャーなし

---

## ローカルでの確認方法

ビルド不要です。任意のHTMLファイルをブラウザで直接開いてください。

```bash
# 例：VS Code の Live Server 拡張を使う場合
# index.html を右クリック → "Open with Live Server"
```

> **注意:** `hyutte/hyutte.html` のGoogleマップはネットワーク接続が必要です。

---

## ページ一覧

| ページ | URL | 説明 |
|--------|-----|------|
| TOP | `/index.html` | スライドショー・部の紹介・新歓SNS案内 |
| 活動内容 | `/activity-contents/activity-contents.html` | 部会・トレ・山行・年間予定 |
| 保有ヒュッテ | `/hyutte/hyutte.html` | 宝台樹ヒュッテの紹介・アクセス情報 |
| リンク集 | `/link/link.html` | 上智大学関連・実用サイトへのリンク |

---

## デザイン仕様

| 項目 | 値 |
|------|-----|
| ブランドカラー（エンジ） | `#862030` |
| テキストカラー | `#454545` |
| 背景 | `#f7f5f2`（ドットグリッドパターン） |
| 見出しスタイル | 左側エンジ縦線 `border-left: 4px solid #862030` |

カラー等の変更は **`header.css` の `:root` 変数** を編集してください。
各ページ固有の見た目は `index.css` / `activity-contents/activity-contents.css` / `hyutte/hyutte.css` / `link/link.css` で調整します。

---

## 公式SNS

| プラットフォーム | アカウント |
|----------------|-----------|
| Instagram | [@sophia_wandervogel](https://www.instagram.com/sophia_wandervogel/) |
| X (Twitter) | [@wv_sophia](https://twitter.com/wv_sophia) |
| Facebook | [wangerusophia.hp](https://www.facebook.com/wangerusophia.hp) |
