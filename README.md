# PingMyHeart 💖

A romantic, aesthetic React web app with glassmorphism effects, playful button interactions, and lovely fonts. Perfect for expressing love in a modern, interactive way!

## Features

- **Responsive Design:** Looks beautiful on mobile, tablet, and desktop.
- **Glassmorphism UI:** Soft, dreamy card effects with pink-yellow lighting.
- **Romantic Fonts:** Uses [Dancing Script](https://fonts.google.com/specimen/Dancing+Script) for headings and [Quicksand](https://fonts.google.com/specimen/Quicksand) for body text.
- **Playful Button Swap:** "No" button swaps position on hover (desktop) or click (mobile/tablet).
- **Lovely Backgrounds:** Gradient overlays and romantic images.

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm run dev
   ```
3. **Open in browser:**  
   Visit [https://ping-myheart.onrender.com](https://ping-myheart.onrender.com).

## Project Structure

```
src/
  ├── App.jsx           # Main router
  ├── main.jsx          # Entry point
  ├── index.css         # Global styles & font imports
  └── component/
        └── content/
            ├── Hosi.jsx   # Main love interaction page
            └── Dummy.jsx  # Romantic message page
public/
  ├── heart.svg
  └── vite.svg
```

## Customization

- **Change background images:**  
  Edit the `backgroundImage` property in `Hosi.jsx` and `Dummy.jsx`.
- **Update Instagram link:**  
  Add your Instagram URL in `Dummy.jsx`.

## Fonts

Fonts are loaded via Google Fonts in [`index.html`](index.html):
```html
<link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Quicksand:wght@400;600&display=swap" rel="stylesheet">
```
Font classes are set in [`index.css`](src/index.css).

## License

MIT

---

Made with 💖 by Vikas Maurya
