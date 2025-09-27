# Resume App

A modern, responsive resume website built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- 📱 Responsive design that works on all devices
- 🌙 Dark mode support
- 📄 PDF generation and print functionality
- ⚡ Static site generation for optimal performance
- 🎨 Clean, professional design with Tailwind CSS
- 🔤 Geist font for modern typography

## Getting Started

### Prerequisites

- Node.js 20.0.0 or later
- Bun 1.0.0 or later (recommended) or npm

### Installation

1. Clone or download this project
2. Install dependencies:

```bash
bun install
# or
npm install
```

3. Start the development server:

```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit the configuration objects in `src/app/page.tsx`:

- `personalInfo` - Your name, title, contact details
- `education` - Educational background
- `skills` - Technical skills organized by category
- `projects` - Project portfolio
- `interests` - Personal interests and hobbies

### Styling

The project uses Tailwind CSS for styling. You can customize:

- Colors and themes in `tailwind.config.js`
- Global styles in `src/app/globals.css`
- Print styles for PDF generation

## Build for Production

```bash
bun run build
# or
npm run build
```

This generates a static site in the `out/` directory that can be deployed to any static hosting service.

## PDF Generation

The resume includes two PDF options:

1. **Download PDF** - Downloads a pre-generated PDF file (place your PDF in `public/resume/Resume.pdf`)
2. **Print to PDF** - Uses the browser's print function to generate a PDF

## Deployment

The app is configured for static export and can be deployed to:

- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

## License

This project is open source and available under the MIT License.