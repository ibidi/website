# Personal Portfolio Website

<div align="center">
  <img src="https://img.shields.io/badge/Nuxt-3-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white" alt="Nuxt 3" />
  <img src="https://img.shields.io/badge/Vue.js-3-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white" alt="Vue 3" />
  <img src="https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<p align="center">
  A modern and responsive personal portfolio website with changelog system, blog filtering, animated theme switching, bookmark management, and comprehensive micro-interactions.
</p>

<p align="center">
  <strong>Version 1.1.0</strong> • <a href="/changelog">View Changelog</a>
</p>

<div align="center">
  <img src="public/images/projects/ibidi.png" alt="Website Preview" width="100%" />
</div>

## ✨ Features

### 🆕 New in v1.1.0

<table>
  <tr>
    <td>📋</td>
    <td><strong>Changelog System:</strong> Complete version management with semantic versioning</td>
  </tr>
  <tr>
    <td>🔍</td>
    <td><strong>Blog Filtering:</strong> Filter posts by categories and tags with URL sync</td>
  </tr>
  <tr>
    <td>🌓</td>
    <td><strong>Animated Theme Toggle:</strong> Smooth circle-expand animation on theme switch</td>
  </tr>
  <tr>
    <td>🏷️</td>
    <td><strong>Bookmark Tags:</strong> Organize and filter bookmarks with multi-tag support</td>
  </tr>
  <tr>
    <td>✨</td>
    <td><strong>Micro-interactions:</strong> Hover effects, ripples, and scroll animations</td>
  </tr>
</table>

### Core Features

<table>
  <tr>
    <td>🎵</td>
    <td><strong>Last.fm Integration:</strong> Real-time music statistics and recently played</td>
  </tr>
  <tr>
    <td>🎨</td>
    <td><strong>Modern UI:</strong> Beautiful gradient animations and GSAP transitions</td>
  </tr>
  <tr>
    <td>📱</td>
    <td><strong>Responsive:</strong> Perfect display on all device sizes</td>
  </tr>
  <tr>
    <td>⚡️</td>
    <td><strong>Performance:</strong> SSR, lazy loading, and optimized animations</td>
  </tr>
  <tr>
    <td>💻</td>
    <td><strong>Animated Background:</strong> Subtle drifting code snippets on homepage</td>
  </tr>
  <tr>
    <td>♿</td>
    <td><strong>Accessible:</strong> WCAG 2.1 AA compliant with reduced motion support</td>
  </tr>
</table>

## 🚀 Tech Stack

<details>
<summary>Click to expand!</summary>

- **[Nuxt 3](https://nuxt.com/)** - The Vue.js Framework
  - Server-Side Rendering
  - Auto-imports
  - File-based routing
  - `@nuxt/content` for Markdown-based blog

- **[Vue 3](https://vuejs.org/)** - The Progressive JavaScript Framework
  - Composition API
  - Script setup syntax
  - TypeScript support

- **[Tailwind CSS](https://tailwindcss.com/)** - A utility-first CSS framework
  - Custom animations
  - Dark mode support
  - Responsive design

- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript with syntax for types
  - Type safety
  - Better IDE support
  - Enhanced code quality


  - OAuth integration
  - Real-time track updates
  - Rich track metadata

</details>

## 📦 Setup

### Prerequisites

- Node.js (v16 or higher)

- Git

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/ibidi/website.git
   cd website
   ```

2. **Install dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using pnpm
   pnpm install
   ```

3. **Configure environment variables**
   
   Create a `.env` file in the root directory with your Last.fm credentials:
   ```env
LASTFM_API_KEY=your_lastfm_api_key_here
LASTFM_USERNAME=your_lastfm_username_here
   ```

4. **Start development server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using pnpm
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

## 🏗️ Build

### Production Build

```bash
# Generate static files
npm run build

# Preview the build
npm run preview
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/ibidi">İhsan Baki Doğan</a>
</p>
