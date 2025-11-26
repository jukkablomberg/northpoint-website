# NorthPoint.fi Website

A modern, dark luxury landing page for NorthPoint — Crypto Growth, Engineered by Exchange Executives.

## Features

- **Dark Luxury Theme**: Midnight black (#0D0D10) with teal-to-magenta gradient accents
- **Smooth Animations**: Parallax effects, fade-up scroll animations, and interactive hover states
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI/UX**: Glass morphism effects, magnetic buttons, and smooth transitions

## Structure

- `index.html` - Main HTML structure with all sections
- `styles.css` - Complete styling with global styles, typography, and section-specific CSS
- `script.js` - JavaScript for interactions, animations, and scroll effects

## Sections

1. **Navbar** - Sticky navigation with scroll-triggered background
2. **Hero** - Full viewport hero with animated grid and compass icon
3. **About** - Credibility section with bullet points and logo cluster
4. **Services** - 2x2 grid of service cards (Compass, Growth Engine, Product X-Ray, CMO Elite)
5. **Advantages** - Horizontal scrolling carousel of competitive advantages
6. **Results** - Case studies with impressive statistics
7. **Testimonials** - 3-column grid of client testimonials
8. **Contact** - Final CTA section with gradient background
9. **Footer** - Links, social media, and copyright

## Getting Started

Simply open `index.html` in a web browser. No build process or dependencies required.

For local development with live reload, you can use:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization

### Colors
Edit the CSS variables in `styles.css`:
- `--primary-black`: Main background color
- `--gradient-teal`: Teal gradient color (#00FFC6)
- `--gradient-magenta`: Magenta gradient color (#7A3FFF)

### Typography
Fonts are loaded from Google Fonts (Inter). To use custom fonts like Monument Extended or Satoshi, update the font imports in `index.html` and corresponding CSS.

### Content
All content is in `index.html` and can be easily edited.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The design follows the Figma specification provided
- All animations are optimized for performance
- The site is SEO-friendly with proper heading hierarchy
- Smooth scroll behavior is implemented for anchor links

