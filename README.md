# 3D Printing Service - Hugo Static Site

A modern, vibrant website for a 3D printing service built with Hugo static site generator.

## Features

- Clean, semantic HTML5 structure
- Mobile-responsive design
- Custom CSS with gradient effects and animations
- jQuery for form handling and smooth scrolling
- SEO optimized with proper meta tags and semantic markup
- Fast-loading static site

## Prerequisites

- Hugo (Extended version recommended)
- Download from: https://gohugo.io/installation/

## Installation

1. Install Hugo:
   ```bash
   # macOS
   brew install hugo
   
   # Windows (using Chocolatey)
   choco install hugo-extended
   
   # Linux
   snap install hugo
   ```

2. Clone or download this repository

## Development

Run the development server:

```bash
hugo server -D
```

Visit `http://localhost:1313` to view the site.

## Building for Production

Generate static files:

```bash
hugo
```

The static site will be generated in the `public/` directory.

## Deployment

The `public/` directory contains all the static files needed for deployment. You can deploy to:

- **Netlify**: Connect your Git repository or drag & drop the `public` folder
- **Vercel**: Import your repository or deploy via CLI
- **GitHub Pages**: Push the `public` folder to your gh-pages branch
- **Any static hosting**: Upload the contents of `public/` folder

## Project Structure

```
.
├── config.toml              # Hugo configuration
├── content/                 # Content files
│   └── _index.md           # Homepage content
├── layouts/                 # Template files
│   ├── _default/
│   │   └── baseof.html     # Base template
│   ├── index.html          # Homepage template
│   └── partials/           # Reusable components
│       ├── hero.html
│       ├── services.html
│       ├── gallery.html
│       ├── how-it-works.html
│       └── contact.html
├── static/                  # Static assets
│   ├── css/
│   │   └── styles.css      # Main stylesheet
│   ├── js/
│   │   └── main.js         # jQuery scripts
│   └── images/             # Image assets
└── public/                  # Generated site (after build)
```

## Customization

### Colors & Styling
Edit `static/css/styles.css` to modify colors, gradients, and styles. All colors use HSL format for easy customization.

### Content
- Edit partials in `layouts/partials/` to modify section content
- Update contact information in `layouts/partials/contact.html`
- Modify site title and description in `config.toml`

### Images
Replace images in `static/images/` with your own. Maintain the same filenames or update references in the partial templates.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available for personal and commercial use.
