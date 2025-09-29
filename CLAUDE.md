# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Tech Stack
- Next.js 15 with TypeScript
- Tailwind CSS v3.4.0 for styling
- Bun (primary) / npm (fallback) for package management
- Static export configuration for deployment

## Development Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production (static export)
- `bun run lint` - Run ESLint
- `bun install` - Install dependencies

## Architecture Overview
This is a single-page resume website built with Next.js App Router. The main component (`app/page.tsx`) contains all resume content as embedded configuration objects at the top of the file:

- `personalInfo` - Contact details and professional summary
- `education` - Educational background
- `skills` - Technical skills organized by category
- `projects` - Project portfolio with descriptions and tech stacks
- `interests` - Personal interests

## Key Configuration
- **next.config.mjs**: Static export mode enabled for deployment to static hosts
- **tsconfig.json**: Path aliases configured (`@/*` maps to `./`)
- **app/globals.css**: Contains extensive print media queries for PDF generation

## PDF Functionality
Dual approach for PDF generation:
1. Static PDF download (expects file at `/public/resume/Resume.pdf`)
2. Browser print function with specialized print CSS (A4 size, 0.5in margins, 11px font)

## Styling Approach
- Utility-first with Tailwind CSS
- Dark mode support built-in
- Print-optimized styles in globals.css for professional PDF output
- Responsive design with mobile-first approach

## Development Notes
- All resume data is configuration-driven in page.tsx
- Uses client-side rendering with 'use client' directive
- No testing framework currently configured
- Optimized for static deployment (Vercel, Netlify, GitHub Pages)