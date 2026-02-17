# FitNexa Landing Page

The official marketing and waitlist landing page for the FitNexa platform.

## 🚀 Overview

This is a **React + TypeScript + Vite** application designed to showcase FitNexa's features, pricing, and value proposition. It includes a waitlist signup form, blog (The Playbook), and interactive UI elements.

## 🛠️ Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Deployment:** Vercel

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file.

| Variable              | Description                                                                        | Default                            |
| :-------------------- | :--------------------------------------------------------------------------------- | :--------------------------------- |
| `VITE_ONBOARDING_URL` | The URL for the Onboarding Application. Links the "Get Started" / "Login" buttons. | `https://onboarding.uat.gymia.fit` |

## 📦 Third Party Libraries

Key dependencies used in this project:

| Library                   | Purpose                                                          |
| :------------------------ | :--------------------------------------------------------------- |
| **react-i18next**         | Internationalization (i18n) handling for multi-language support. |
| **framer-motion**         | Production-ready animation library for React.                    |
| **lucide-react**          | Beautiful & consistent icon toolkit.                             |
| **react-router-dom**      | Client-side routing for React applications.                      |
| **clsx / tailwind-merge** | Utilities for constructing className strings conditionally.      |

## 🏗️ Project Structure

```
fitnexa-landing/
├── src/
│   ├── components/     # Reusable UI components (Hero, Features, Pricing, etc.)
│   ├── pages/          # Page views (Home, Blog, BlogPost)
│   ├── assets/         # Images and icons
│   ├── styles/         # Global styles (Tailwind)
│   ├── App.tsx         # Main application component
│   └── main.tsx        # Entry point
├── public/             # Static assets
└── vite.config.ts      # Vite configuration
```

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Start dev server
npm run dev
```
The app will open at `http://localhost:5173` (or the next available port).

### Building for Production

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

This project is configured for deployment on **Vercel**.

1.  Push changes to the `main` branch.
2.  Vercel automatically detects the Vite framework and builds the project.
3.  The `playbook` route is handled via client-side routing.

## 📝 Key Features

-   **Waitlist Signup:** Captures user interest.
-   **The Playbook:** A blog section sharing insights and updates.
-   **Responsive Design:** Optimized for mobile, tablet, and desktop.
-   **Animations:** Smooth transitions using Framer Motion.

## 🤝 Contributing

1.  Fork the repository.
2.  Create a feature branch (`git checkout -b feature/amazing-feature`).
3.  Commit your changes.
4.  Push to the branch.
5.  Open a Pull Request.
