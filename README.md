# 🚀 Personal Portfolio & Blog

<div align="center">

[![Nuxt](https://img.shields.io/badge/Nuxt-3.20.0-00DC82?style=for-the-badge&logo=nuxt.js&logoColor=white)](https://nuxt.com/)
[![Vue](https://img.shields.io/badge/Vue-3.5.22-4FC08D?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.3-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

[![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.2.0-green.svg?style=for-the-badge)](https://github.com/ibidi/website/releases)
[![Security](https://img.shields.io/badge/vulnerabilities-0-brightgreen.svg?style=for-the-badge)](https://github.com/ibidi/website/security)

**A modern, performant, and accessible personal portfolio website built with Nuxt 3**

[Live Demo](https://ihsanbakidogan.com) • [Changelog](https://ihsanbakidogan.com/changelog) • [Report Bug](https://github.com/ibidi/website/issues) • [Request Feature](https://github.com/ibidi/website/issues)

</div>

---

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Development](#-development)
- [Deployment](#-deployment)
- [Performance](#-performance)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🎯 About

A full-featured personal portfolio and blog platform showcasing modern web development practices. Built with performance, accessibility, and user experience in mind.

### Key Highlights

- 🎨 **Modern Design** - Clean, minimalist interface with smooth animations
- ⚡ **Lightning Fast** - SSR, optimized bundles, and lazy loading
- 🔒 **Secure** - Zero vulnerabilities, regular security updates
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 📱 **Responsive** - Perfect on all devices
- 🌓 **Dark Mode** - Smooth theme switching with animations

---

## ✨ Features

### 🆕 Latest (v1.2.0)

<table>
<tr>
<td width="50%">

#### 📚 Resources Page
- Curated developer resources
- Frontend, UI/UX, and tools
- Search functionality
- Responsive grid layout

</td>
<td width="50%">

#### 🔒 Security Updates
- 10 vulnerabilities fixed
- Nuxt 3.20.0 upgrade
- Content v3 with XSS fix
- Modern PWA implementation

</td>
</tr>
</table>

### Core Features

<table>
<tr>
<td width="33%">

#### 📝 Blog System
- Markdown-based content
- Category & tag filtering
- Syntax highlighting
- Reading time estimates
- SEO optimized

</td>
<td width="33%">

#### 📋 Changelog
- Version management
- Semantic versioning
- Color-coded changes
- Release history
- Auto-generated badges

</td>
<td width="33%">

#### 🔖 Bookmarks
- Tag-based organization
- Multi-tag filtering
- URL synchronization
- Curated collections
- Quick search

</td>
</tr>
<tr>
<td width="33%">

#### 🎵 Music Integration
- Last.fm API
- Real-time stats
- Recently played
- Top tracks/artists
- Rich metadata

</td>
<td width="33%">

#### 🎨 Animations
- GSAP powered
- Scroll reveals
- Hover effects
- Theme transitions
- Reduced motion support

</td>
<td width="33%">

#### 💻 Projects
- GitHub integration
- Live demos
- Tech stack badges
- Repository stats
- Detailed descriptions

</td>
</tr>
</table>

---

## 🛠️ Tech Stack

### Core Framework

```
Nuxt 3.20.0          - The Intuitive Vue Framework
Vue 3.5.22           - Progressive JavaScript Framework
TypeScript 5.9.3     - JavaScript with Types
Vite 7.1.12          - Next Generation Frontend Tooling
```

### Styling & UI

```
Tailwind CSS 3.x     - Utility-first CSS Framework
@tailwindcss/typography - Beautiful typographic defaults
GSAP 3.12.5          - Professional-grade animation
@nuxt/icon 1.15.0    - Icon management system
```

### Content & Data

```
@nuxt/content 3.8.0  - File-based CMS
better-sqlite3       - Fast SQLite database
dayjs 1.11.18        - Date manipulation library
```

### Features & Modules

```
@vite-pwa/nuxt       - Progressive Web App support
@nuxtjs/color-mode   - Dark mode implementation
@nuxtjs/sitemap      - Automatic sitemap generation
@nuxtjs/robots       - Robots.txt management
```

### Development Tools

```
@types/node          - Node.js type definitions
ESLint (optional)    - Code linting
Prettier (optional)  - Code formatting
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** >= 18.0.0 ([Download](https://nodejs.org/))
- **npm** >= 9.0.0 or **yarn** >= 1.22.0
- **Git** ([Download](https://git-scm.com/))

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/ibidi/website.git
cd website
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
# Last.fm API (Optional - for music integration)
LASTFM_API_KEY=your_api_key_here
LASTFM_USERNAME=your_username_here
```

> 💡 **Tip:** Get your Last.fm API key from [last.fm/api](https://www.last.fm/api)

4. **Start development server**

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your site! 🎉

---

## 📁 Project Structure

```
website/
├── .data/                    # Content database (auto-generated)
├── .nuxt/                    # Nuxt build output (auto-generated)
├── components/               # Vue components
│   ├── blog/                 # Blog-specific components
│   ├── bookmarks/            # Bookmark components
│   ├── changelog/            # Changelog components
│   └── ...                   # Shared components
├── composables/              # Vue composables
│   ├── useFilter.ts          # Filtering logic
│   ├── useTheme.ts           # Theme management
│   └── useVersion.ts         # Version management
├── content/                  # Markdown content
│   ├── blog/                 # Blog posts
│   └── changelog/            # Version changelogs
├── data/                     # Static data files
│   └── version.json          # Version information
├── pages/                    # File-based routing
│   ├── blog/                 # Blog pages
│   ├── index.vue             # Homepage
│   ├── changelog.vue         # Changelog page
│   └── ...                   # Other pages
├── public/                   # Static assets
│   ├── images/               # Images
│   └── ...                   # Other static files
├── types/                    # TypeScript type definitions
├── utils/                    # Utility functions
│   └── animations.ts         # Animation helpers
├── nuxt.config.ts            # Nuxt configuration
├── tailwind.config.js        # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

---

## 💻 Development

### Available Scripts

```bash
# Development
npm run dev              # Start dev server (localhost:3000)
npm run build            # Build for production
npm run generate         # Generate static site
npm run preview          # Preview production build

# Maintenance
npm run postinstall      # Prepare Nuxt (auto-runs after install)
npm audit                # Check for vulnerabilities
npm outdated             # Check for outdated packages
```

### Adding Content

#### Create a Blog Post

1. Create a new `.md` file in `content/blog/`:

```markdown
---
title: 'Your Post Title'
description: 'Brief description'
date: '2025-10-30'
tags: ['nuxt', 'vue', 'typescript']
category: 'Development'
---

Your content here...
```

2. The post will automatically appear on the blog page!

#### Create a Changelog Entry

1. Create a new file in `content/changelog/`:

```markdown
---
version: '1.3.0'
date: '2025-10-30'
title: 'Feature Update'
---

## Added
- New feature 1
- New feature 2

## Changed
- Updated feature 3
```

2. Update `data/version.json`:

```json
{
  "current": "1.3.0",
  "history": [
    {
      "version": "1.3.0",
      "date": "2025-10-30",
      "changelog": "/changelog#v1.3.0"
    }
  ]
}
```

---

## 🚢 Deployment

### Netlify (Recommended)

1. **Connect your repository** to Netlify
2. **Configure build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Add environment variables** in Netlify dashboard
4. **Deploy!** 🎉

### Vercel

```bash
npm install -g vercel
vercel
```

### Static Hosting

```bash
npm run generate
# Upload .output/public to your hosting
```

---

## ⚡ Performance

### Lighthouse Scores

```
Performance:  98/100
Accessibility: 100/100
Best Practices: 100/100
SEO: 100/100
```

### Bundle Sizes

```
Client Bundle:  238 KB (87.5 KB gzip)
Server Bundle:  42.7 MB (12.3 MB gzip)
```

### Optimizations

- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Code splitting & lazy loading
- ✅ Image optimization
- ✅ Font optimization
- ✅ CSS purging
- ✅ Minification & compression
- ✅ Service Worker (PWA)

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add some AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

### Development Guidelines

- Follow existing code style
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all tests pass

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 İhsan Baki Doğan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 📧 Contact

**İhsan Baki Doğan**

- 🌐 Website: [ihsanbakidogan.com](https://ihsanbakidogan.com)
- 💼 LinkedIn: [linkedin.com/in/ibidi](https://linkedin.com/in/ibidi)
- 🐦 Twitter: [@ihsanbakidogan](https://twitter.com/ihsanbakidogan)
- 📧 Email: [contact@ihsanbakidogan.com](mailto:contact@ihsanbakidogan.com)
- 💻 GitHub: [@ibidi](https://github.com/ibidi)

---

## 🙏 Acknowledgments

- [Nuxt Team](https://nuxt.com/) - Amazing framework
- [Vue.js Team](https://vuejs.org/) - Reactive framework
- [Tailwind Labs](https://tailwindcss.com/) - Utility-first CSS
- [GSAP](https://greensock.com/gsap/) - Animation library
- [Iconify](https://iconify.design/) - Icon framework
- [Last.fm](https://www.last.fm/) - Music API

---

## 📊 Project Stats

![GitHub stars](https://img.shields.io/github/stars/ibidi/website?style=social)
![GitHub forks](https://img.shields.io/github/forks/ibidi/website?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/ibidi/website?style=social)

![GitHub last commit](https://img.shields.io/github/last-commit/ibidi/website)
![GitHub issues](https://img.shields.io/github/issues/ibidi/website)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ibidi/website)

---

<div align="center">

**[⬆ Back to Top](#-personal-portfolio--blog)**

Made with ❤️ and ☕ by [İhsan Baki Doğan](https://github.com/ibidi)

⭐ Star this repo if you find it helpful!

</div>
