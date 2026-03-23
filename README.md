# Mindtrix Media 🚀
### Premium Web Development & Digital Solutions Agency

Mindtrix Media is a high-end, modern digital agency platform designed with a focus on **Visual Excellence** and **Premium Aesthetics**. We specialize in building scalable websites, e-commerce stores, CRM systems, and ERP platforms that help businesses grow and scale worldwide.

---

## ✨ Features

- **💎 Premium Visual Experience**: Smooth, high-performance web experience with custom 3D carousels, spring physics, and glassmorphic UI elements.
- **⚡ Performance First**: Built with **React 19** and **Vite** for ultra-fast loading times and optimized asset delivery.
- **🛠️ Full-Stack Lead Generation**: Integrated **Express** backend to handle contact forms and "Free Prototype" requests efficiently.
- **📧 Automated Notifications**: Automated email workflows via **Brevo (formerly Sendinblue)**, sending instant confirmations to clients and notifications to our team.
- **📱 Responsive by Design**: Fully fluid layouts that look stunning on everything from mobile devices to 4K displays.
- **🎨 Modern Animations**: Extensive use of **Framer Motion** and **GSAP** for micro-interactions and page transitions that WOW the user.
- **🔍 SEO Optimized**: Structurally sound HTML with meta-tag management for high search engine visibility.

---

## 🛠️ Technology Stack

### Frontend
- **React 19** - For building a robust, component-driven UI.
- **TypeScript** - Ensuring type safety and better developer experience.
- **Vite** - Next-generation frontend tooling for fast builds.
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development.
- **Framer Motion & GSAP** - Powering industry-leading web animations.
- **React Router 7** - Handling complex client-side routing.

### Backend
- **Node.js & Express** - Scalable server architecture.
- **Brevo SDK** - Transactional email service integration.
- **Axios** - For seamless API communication between client and server.

---

## 📁 Project Structure

The project is organized into modular workspaces to separate concerns and improve maintainability:

```text
Mindtrix-Media/
├── client/              # React 19 + Vite Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI elements (Navbar, Footer, etc.)
│   │   ├── pages/       # Complete page views (Home, Services, Contact, etc.)
│   │   ├── styles/      # Global CSS and Tailwind configurations
│   │   └── App.tsx      # Routing and Theme providers
├── server/              # Express + TypeScript Backend
│   ├── src/
│   │   ├── templates/   # HTML Email templates for Brevo
│   │   └── index.ts     # Main API logic and email handling
├── api/                 # Vercel-ready serverless entry point
└── vercel.json          # Deployment configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AnishDebnath/Mindtrix-Media.git
   cd Mindtrix-Media
   ```

2. **Install Root and Workspace Dependencies**:
   ```bash
   npm install
   # This will install root dependencies and ideally workspace ones
   # To be sure, you can also run:
   cd client && npm install
   cd ../server && npm install
   ```

3. **Configure Environment Variables**:
   Create a `.env` file in the `server` directory:
   ```env
   BREVO_API_KEY=your_api_key_here
   SENDER_EMAIL=hello@mindtrixmedia.com
   RECIPIENT_EMAIL=your_office_email@example.com
   ```

4. **Run Development Mode (Monorepo)**:
   From the root or respective folders:
   ```bash
   # Client (Frontend)
   cd client && npm run dev
   
   # Server (Backend)
   cd server && npm run dev
   ```

---

## 🌎 Deployment

This project is optimized for deployment on **Vercel**. The root `vercel.json` ensures both the frontend and the serverless functions (`/api`) are correctly routed and served.

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📩 Contact

**Agency Name**: Mindtrix Media  
**Developer**: Anish Debnath  
**Website**: [mindtrixmedia.com](https://mindtrixmedia.com)  
**Email**: hello@mindtrixmedia.com

Project Link: [https://github.com/AnishDebnath/Mindtrix-Media](https://github.com/AnishDebnath/Mindtrix-Media)

---

Built with ❤️ by **Mindtrix Media Team**.
