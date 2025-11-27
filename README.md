# Mauritz Langer - Personal Portfolio

Welcome to my personal portfolio website repository! This project showcases my work, skills, and professional journey as a Full Stack Software Engineer. It is designed with a modern, dark-themed aesthetic and built for performance and responsiveness.

## 🚀 Features

- **Modern Tech Stack**: Built with React, TypeScript, and Tailwind CSS.
- **Dark Mode Support**: Seamless switching between light and dark themes, respecting system preferences by default.
- **Internationalization (i18n)**: Full support for German and English languages.
- **Responsive Design**: Optimized for all devices, from mobile phones to large desktop screens.
- **Interactive UI**: Smooth animations, scroll-spy navigation, and interactive elements powered by modern CSS and React hooks.
- **Contact Form**: Integrated contact form that generates mail-to links for direct communication.
- **SEO Optimized**: Dynamic meta tags and structured data for better search engine visibility.

## 🛠️ Tech Stack

- **Frontend Framework**: React
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite

## 📂 Project Structure

```
src/
├── assets/          # Images and static assets
├── components/      # Reusable UI components (Buttons, Cards, etc.)
├── App.tsx          # Main application component
├── main.tsx         # Entry point
├── index.css        # Global styles and Tailwind directives
└── vite-env.d.ts    # Vite type definitions
```

## 🚀 Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/Mauritz-Langer/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    # or
    yarn install
    ```

3.  **Start the development server:**
    ```sh
    npm run dev
    # or
    yarn dev
    ```

4.  **Open your browser:**
    Navigate to [http://localhost:5173](http://localhost:5173) to view the application.

## 🎨 Customization

### Tailwind Configuration

The project uses a custom Tailwind configuration to enable class-based dark mode. Ensure your `tailwind.config.js` includes:

```javascript
export default {
  darkMode: 'class',
  // ... rest of the config
}
```

### Content

All text content is managed within the `translations` object in `src/App.tsx`. To update your portfolio information, simply edit the respective fields in the `de` (German) and `en` (English) sections.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Mauritz Langer - Software Developer**

[GitHub](https://github.com/Mauritz-Langer) | [LinkedIn](https://www.linkedin.com/in/mauritz-langer/)
