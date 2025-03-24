# Bal Bharati Public School Navi Mumbai - Website Redesign

A modern, responsive website redesign for Bal Bharati Public School Navi Mumbai, focused on improving user experience, accessibility, and visual appeal.

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **State Management**: React Hooks
- **Routing**: React Router
- **UI Components**: Shadcn UI components (based on Radix UI)
- **Animation**: Framer Motion
- **Data Fetching**: Axios for API requests
- **Web Scraping**: Cheerio for content extraction from the existing website

## Features

- **Modern Design**: Clean, minimalist interface with professional color palette
- **Responsive Layout**: Mobile-first approach ensuring perfect viewing on all devices
- **Accessibility**: WCAG 2.1 AA compliant design
- **Performance Optimized**: Fast loading, image optimization, and lazy loading
- **Content Organization**: Improved information architecture and navigation
- **Interactive Elements**: Subtle animations and micro-interactions

## Project Structure

```
src/
├── components/
│   ├── auth/              # Authentication related components
│   ├── events/            # Event display components
│   ├── home/              # Homepage components
│   ├── layout/            # Layout components (Navigation, Footer)
│   ├── news/              # News components
│   └── ui/                # Reusable UI components
├── lib/
│   ├── scraper.ts         # Web scraper for content extraction
│   └── utils.ts           # Utility functions
└── types/                 # TypeScript type definitions
```

## Data Extraction Process

The project includes a comprehensive web scraper (in `src/lib/scraper.ts`) that:

1. Crawls the existing school website
2. Extracts all content, including text, images, and downloadable resources
3. Preserves the original content structure and hierarchy
4. Captures metadata for SEO optimization
5. Maps all internal links for navigation reconstruction

## Implementation Details

### Content Migration

- All existing content is preserved during migration
- Educational context and institutional voice maintained
- Content is restructured for improved readability and access

### Design Improvements

- Modern typography for better readability
- Professional color scheme that reflects the school's identity
- Whitespace optimization for cleaner presentation
- High-quality imagery and custom iconography

### Technical Optimizations

- Server-side rendering for improved performance
- Lazy loading of images and components
- Optimized asset delivery
- Efficient caching strategies

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. To extract content from the existing website:
   ```
   npm run scrape
   ```

## Deployment

The site can be built for production using:
```
npm run build
```

The output in the `dist` directory is ready for deployment to any static hosting service.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
