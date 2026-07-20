# Portfolio with Firebase Authentication (React + Vite)

This repository is a personal portfolio project built with React and Vite, demonstrating Firebase Authentication integration and a collection of UI components and interactive examples.

**Features**

- **Authentication:** Firebase email/password sign-up & sign-in flows.
- **Responsive UI:** Components and pages optimized for mobile and desktop.
- **Reusable components:** A variety of UI widgets under `src/components`.
- **Vite + React:** Fast dev server with HMR and optimized builds.

**Prerequisites**

- Node.js (v16+ recommended)
- npm or Yarn
- A Firebase project with Web app credentials

**Quick Start**

1. Install dependencies:

```
npm install
```

2. Create a Firebase web app and copy the config values into a `.env` file at the project root (example below).

3. Run the development server:

```
npm run dev
```

**Firebase Setup (.env example)**

Create a `.env` file and add your Firebase config (replace values):

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

The app reads these variables via Vite's `import.meta.env` (prefixed with `VITE_`).

**Available Scripts**

- `npm run dev` : Starts the dev server with HMR.
- `npm run build` : Builds the production bundle.
- `npm run preview` : Serves the production build locally.

**Project Structure (high level)**

- `src/` — Application source
- `src/components/` — UI components and examples
- `src/pages/` — Page components (Hero, About, Projects, Contact, etc.)
- `public/` — Static assets

**Notes & Next Steps**

- Ensure your Firebase rules are configured appropriately for production.
- Consider adding CI (lint/tests) and deploying to Vercel, Netlify, or Firebase Hosting.

**Contributing**

Suggestions, fixes, and improvements are welcome. Open an issue or submit a pull request.

**License**

This project is provided as-is. Add a license file if you plan to open-source it.
