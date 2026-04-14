# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website for Sophia University's Wandervogel (mountaineering) club (上智大学体育会ワンダーフォーゲル部). No build system or package manager — plain HTML, CSS, and JavaScript served as-is.

**Live site:** `https://sophia-wandervogel.github.io/website/`

## Tech Stack

- Vanilla HTML5, CSS3, JavaScript
- jQuery 3.6.0 (local file: `jquery-3.6.0.min.js`) — used only for the hamburger menu toggle
- Google Fonts (Oswald, Hannari)
- No build step, no npm, no framework

## Development

Open any `.html` file directly in a browser. No server required for most features, but the Google Maps iframe in `hyutte/hyutte.html` requires network access.

## Site Architecture

Each section lives in its own directory with a self-contained HTML + CSS pair:

| Path | Content |
|------|---------|
| `index.html` + `index.css` | Landing page — slideshow, news, topic links |
| `activity-contents/` | Club activities (部会, トレ, 山行) |
| `hyutte/` | Mountain hut info with embedded Google Map |
| `link/` | External links collection |
| `images/` | Photos, logos, social media icons |
| `illustration/` | Decorative PNGs for activity pages |

`hamburger_menu.js` is loaded by every page and provides the responsive navigation toggle.

## CSS Conventions

All CSS files define the same root variables — changes to brand colors must be applied to each file:

```css
--head-background-color: #9A003D  /* Sophia University maroon */
--head-font-color: #ffffff
--background-color: #fffefe
--font-color: #454545
--btn-background-color: #9A003D
```

The header, hamburger button, and footer are duplicated across every HTML page (no templating system).

## Slideshow (index.html)

The hero slideshow is implemented with vanilla JS inline in `index.html`. It cycles through images every 5 seconds using `setInterval` and CSS `display` toggling.

## Language

All content is written in Japanese. Page `lang` attribute is `lang="ja"`.
