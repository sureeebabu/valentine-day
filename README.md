# 💖 Valentine's Day Website

A beautiful, romantic single-page website created with love for Valentine's Day 2026.

## 🌹 Features

- **Romantic Landing Section** - Beautiful hero section with animated hearts and heartfelt message
- **Why I Love You Section** - 6 animated cards with reasons why you're special
- **Photo Gallery** - Elegant gallery with hover effects (currently using placeholder images)
- **Valentine Proposal** - Interactive proposal section with celebration animation
- **Floating Hearts Background** - Continuous heart animations throughout the page
- **Background Music Control** - Optional romantic background music with play/pause
- **Smooth Animations** - Subtle micro-animations and transitions throughout
- **Responsive Design** - Mobile-first, works beautifully on all devices
- **Easter Egg** - Secret Konami code for extra hearts! (↑↑↓↓←→←→BA)

## 🎨 Design

- **Color Palette**: Soft pastels (pink, red, white, cream)
- **Typography**: Playfair Display (headings) + Poppins (body)
- **Style**: Romantic, elegant, modern with glassmorphism effects
- **Animations**: Heartbeat, floating, fade-in, parallax effects

## 📁 Project Structure

```
valentine-day/
├── index.html          # Main HTML structure
├── style.css           # Complete styling with animations
├── script.js           # Interactive features and animations
└── README.md           # This file
```

## 🚀 How to Use

### Local Development

1. Simply open `index.html` in your web browser
2. No build process or dependencies required!

### GitHub Pages Deployment

1. Create a new repository on GitHub
2. Upload all files (index.html, style.css, script.js)
3. Go to repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/" (root) folder
6. Click Save
7. Your site will be live at: `https://[your-username].github.io/[repository-name]`

## 🖼️ Adding Your Photos

Replace the placeholder images in the gallery:

1. Add your photos to the project folder (e.g., `photo1.jpg`, `photo2.jpg`, etc.)
2. In `index.html`, find the gallery section (around line 150)
3. Update the `src` attributes:
   ```html
   <img src="photo1.jpg" alt="Our beautiful moment together">
   ```
4. Recommended image size: 800x800px (square format)
5. Supported formats: JPG, PNG, WebP

## 🎵 Adding Background Music

1. Add your romantic music file to the project folder (e.g., `romantic-music.mp3`)
2. In `index.html`, find the audio element (around line 28)
3. Uncomment and update the source:
   ```html
   <audio id="bgMusic" loop>
       <source src="romantic-music.mp3" type="audio/mpeg">
   </audio>
   ```
4. Supported formats: MP3, WAV, OGG

## ✏️ Customization

### Changing the Message

Edit the text in `index.html`:
- **Hero message**: Line 45-50
- **Reasons**: Lines 70-140 (6 cards)
- **Proposal message**: Lines 230-245

### Changing Colors

Edit CSS variables in `style.css` (lines 10-20):
```css
--color-primary: #ff6b9d;        /* Main pink */
--color-primary-light: #ffb3d9;  /* Light pink */
--color-primary-dark: #c9184a;   /* Dark pink */
```

### Adding More Reasons

Copy a reason card block in `index.html` and paste it within the `reasons-grid` div.

## 🌐 Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:
- 768px (tablets)
- 480px (mobile phones)

## 💡 Tips

1. **Test locally first** - Open the HTML file in your browser before deploying
2. **Optimize images** - Compress photos to reduce loading time
3. **Music file size** - Keep music file under 5MB for faster loading
4. **Personal touch** - Customize the messages to make them truly personal
5. **Preview on mobile** - Use browser dev tools to test mobile view

## 🎁 Special Features

- **Intersection Observer**: Elements animate as you scroll
- **Parallax Effect**: Decorative hearts move at different speeds
- **Celebration Animation**: Hearts burst when proposal is accepted
- **Smooth Scrolling**: Elegant navigation between sections
- **Hover Effects**: Interactive cards and gallery items

## ❤️ Made With Love

This website was created with:
- Pure HTML5
- Vanilla CSS3
- Vanilla JavaScript (ES6+)
- No frameworks or dependencies
- Google Fonts (Playfair Display, Poppins)

## 📝 License

This is a personal project. Feel free to use and customize it for your own romantic purposes! 💕

---

**Happy Valentine's Day! 🌹💖**

*May your love story be as beautiful as this website!*
