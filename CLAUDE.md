# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for KT СТРОЙ КОНСУЛТ ЕООД (KT STROY CONSULT Ltd.), a Bulgarian construction consulting company. The site showcases completed and ongoing construction projects through dynamic galleries and serves as the company's primary marketing presence.

## Commands

### Development
- **Run locally**: Open `index.html` directly in a browser or use a local server:
  ```bash
  python3 -m http.server 8000
  # or
  npx http-server
  ```

### Deployment
- **Deploy to GitHub Pages**: Push changes to the main branch - GitHub Pages automatically deploys from the repository root
- **Update domain**: Ensure CNAME file contains `www.ktstroyconsult.com`

## Architecture

### Project Structure
- **Static Site**: Pure HTML/CSS/JavaScript with no build process
- **Data Layer**: Project information stored in JSON files under `/data/`
  - `projects-completed.json`: Completed projects
  - `projects-in-progress.json`: Ongoing projects
- **Dynamic Content**: JavaScript fetches and renders project data from JSON files
- **PWA**: Includes service worker (`sw.js`) and manifest for offline functionality

### Key Pages
- `index.html`: Homepage with services, testimonials, and contact
- `completed.html`: Completed projects gallery
- `in-progress.html`: Ongoing projects gallery  
- `detail.html`: Individual project detail view

### Styling & Scripts
- `style.css`: Main stylesheet with responsive design
- Inline JavaScript in each HTML file handles:
  - Dynamic project loading from JSON
  - Service modals
  - Image lightbox
  - Mobile navigation
  - Scroll animations (AOS library)

### External Dependencies
- Font Awesome 6.0+ (icons)
- Google Fonts (Open Sans, Montserrat, Inter)
- AOS (Animate On Scroll) library
- All loaded via CDN - no local package management

## Important Considerations

### Language
- All content is in Bulgarian (Cyrillic script)
- When updating text, maintain proper Bulgarian grammar and formatting

### Project Data Updates
- To add/modify projects, edit the JSON files in `/data/`
- Ensure image paths in JSON match actual files in `/images/completed/` or `/images/in-progress/`
- Project thumbnails should be in `/images/projects/`

### Image Management
- Keep image file sizes optimized for web
- Use descriptive Bulgarian filenames for SEO
- Maintain consistent aspect ratios for gallery presentation

### GitHub Pages Deployment
- Changes to main branch auto-deploy
- CNAME file must remain for custom domain
- Service worker may cache old content - increment version in `sw.js` when making updates