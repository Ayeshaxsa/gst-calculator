# Project Structure

## File Organization
```
gst-calculator/
├── index.html    # Main HTML structure and markup
├── style.css     # All styling and responsive design
├── app.js        # Calculator logic and DOM manipulation
└── README.md     # Project documentation
```

## Architecture Pattern
Simple three-layer separation:
- **Presentation (HTML)**: Semantic markup with ARIA attributes for accessibility
- **Styling (CSS)**: Global styles, component-specific styles, responsive breakpoints
- **Logic (JavaScript)**: Pure functions for calculations, DOM manipulation for UI updates

## Code Conventions

### HTML
- Use semantic HTML5 elements (`<main>`, `<header>`, `<footer>`, `<section>`)
- Include ARIA attributes for accessibility (`aria-required`, `aria-describedby`, `aria-live`)
- Add descriptive meta tags for SEO
- Use `novalidate` on forms with custom validation

### CSS
- Mobile-first responsive design
- Use CSS custom properties for theme colors if extending
- BEM-like naming for clarity (e.g., `.result-item`, `.btn-primary`)
- Consistent spacing units (8px base grid)
- Smooth transitions for interactive elements

### JavaScript
- JSDoc comments for all functions
- Pure calculation functions separate from DOM manipulation
- Event delegation where appropriate
- Validate all user inputs before processing
- Use `const` and `let` (no `var`)
- Format currency consistently with 2 decimal places

## Key Components
- **Form validation**: Client-side validation with helpful error messages
- **Results display**: Dynamic update with formatted currency values
- **Reset functionality**: Clear form and results to initial state
- **Accessibility**: Keyboard navigation, screen reader support, focus management
