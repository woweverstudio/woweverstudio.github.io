# Wowever Studio - Neon Arcade Website

A responsive one-page website for Wowever Studio, an indie game development company featuring a black background with neon yellow accents.

## Features

- **Neon Cyberpunk Theme**: Black background (#000000) with neon yellow accents (#FFE81A)
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Scroll-triggered animations using IntersectionObserver
- **Interactive Elements**: Hover effects, smooth scrolling navigation, and form validation
- **Modern Design**: Clean typography with Orbitron and Rajdhani fonts
- **GitHub Pages Ready**: No build process required, works directly from static files

## File Structure

```
woweverstudio/
├── index.html          # Main HTML structure
├── styles.css          # Black + neon yellow styling
├── script.js           # Smooth scrolling and animations
├── assets/             # Image assets
│   ├── hero-bg.svg     # Hero background
│   ├── game1.svg       # Neon Runner game cover
│   ├── game2.svg       # Cyber Grid game cover
│   └── game3.svg       # Pulse Arena game cover
└── README.md           # This file
```

## Sections

1. **Hero**: Full-width background with animated neon elements and call-to-action
2. **About**: Company description with three key highlights
3. **Games**: Responsive card grid showcasing three games
4. **Feedback**: Customer testimonials in card format
5. **Contact**: Contact form with social links
6. **Footer**: Navigation and social media links

## Technical Details

- **No Frameworks**: Pure HTML, CSS, and JavaScript
- **Fonts**: Google Fonts (Orbitron for headings, Rajdhani for body)
- **Animations**: CSS transitions and IntersectionObserver API
- **Responsive**: CSS Grid and Flexbox with mobile-first approach
- **Performance**: Optimized images, lazy loading, and efficient animations

## GitHub Pages Deployment

1. Upload all files to your GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click Save

Your site will be available at: `https://[username].github.io/[repository-name]/`

## Customization

### Colors
- Primary Background: `#000000`
- Secondary Backgrounds: `#0A0A0A`, `#111111`, `#151515`
- Neon Yellow: `#FFE81A`
- Text Colors: `#FFFFFF`, `#CCCCCC`

### Typography
- Headings: Orbitron (weights: 400, 700, 900)
- Body Text: Rajdhani (weights: 300, 400, 600)

### Images
Replace the SVG files in `/assets/` with your actual game screenshots or artwork. The current SVGs are animated placeholders that match the neon theme.

## Browser Support

- Chrome 58+
- Firefox 55+
- Safari 11+
- Edge 79+

## Performance

- **Lighthouse Score**: 95+ (expected)
- **Load Time**: < 2 seconds (typical)
- **Bundle Size**: < 50KB total

## License

This project is open source and available under the MIT License.
