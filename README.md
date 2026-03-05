# Mindtrix Media | Website building SaaS Agency

Mindtrix Media is a high-end, modern web application for a professional video editing agency based in London, UK. Designed with a focus on "Visual Excellence" and "Premium Aesthetics," the platform showcases the agency's portfolio, services, and growth-focused editing philosophy.

## ✨ Premium Features

- **Dynamic 3D Carousel**: A custom-built, high-performance 3D image carousel with inward rotation and spring physics.
- **Micro-Animations**: Extensive use of `Framer Motion` for smooth page transitions, entrance animations, and interactive hover effects.
- **Glassmorphic UI**: Modern navigation and interface elements using backdrop filters and subtle gradients.
- **Dark & Light Mode**: Fully integrated dark mode system that respects system preferences and allows manual toggling.
- **Modular Architecture**: A clean, scalable project structure where every page and global component is self-contained with its own UI logic and data.
- **Responsive Design**: Tailored experiences for mobile, tablet, and desktop users.

## 🛠️ Technology Stack

- **Core**: React 19 + TypeScript
- **Build Tool**: Vite
- **Animations**: Framer Motion
- **Styling**: Tailwind CSS (Utility-first framework)
- **Routing**: React Router DOM (v7)
- **Icons**: Material Symbols Rounded & Simple Icons

## 📁 Project Structure

The project follows a modular "Page/Component Folder" pattern to ensure high maintainability:

```text
src/
├── components/          # Global UI components
│   ├── Navbar/          # Navbar logic + data.tsx
│   └── Footer/          # Footer logic + data.tsx
├── pages/               # Page-specific views
│   ├── Home/            # Hero, Carousel, Testimonials, etc.
│   ├── Work/            # Portfolio grid with filters
│   ├── Services/        # Service lists and CTA
│   ├── About/           # Team and Values
│   ├── Blog/            # Articles and Sidebar
│   └── Contact/         # Professional contact forms
├── styles/              # Global CSS and themes
└── App.tsx              # Routing and Theme providers
```

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Run Development Server**:
   ```bash
   npm run dev
   ```
   *The server will start on [http://localhost:3000](http://localhost:3000)*

3. **Production Build**:
   ```bash
   npm run build
   ```

---

Built with ❤️ by **Anish Debnath** for **Agency**.
