# Harsh Pardhi - Portfolio

A personal portfolio for Harsh Pardhi, a Cloud & DevOps Engineer focused on Azure platform engineering, AIOps, and AI infrastructure.

The site presents professional experience, technical skills, certifications, education, selected GitHub projects, and contact channels in a responsive single-page experience.

## Built With

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- `canvas-confetti` for interactive UI details
- `vite-plugin-singlefile` for the production bundle

## Features

 - In-progress: RAG assistant for operational knowledge (AKS + LiteLLM) — status: in progress (target ship ~Oct 1)
## Project Structure

```text
.
├── public/
│   ├── harsh.jpg
│   └── Harsh_Pardhi_Resume.pdf
├── src/
│   ├── components/     Reusable page sections and UI components
│   ├── data/           Portfolio content and project data
│   ├── hooks/          Scroll, time, and reveal behavior
│   ├── utils/          Shared utility functions
│   ├── App.tsx         Page composition
│   ├── index.css       Global styles and design tokens
│   └── main.tsx        React entry point
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js 20 or newer
- npm

### Install dependencies

```bash
npm install
```

### Start the development server

```bash
npm run dev
```

The app is available at `http://localhost:5173/`.

### Create a production build

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Customization

Most portfolio content is maintained in `src/data/portfolio.ts`. Update that file to change profile details, navigation labels, skills, experience, projects, certifications, or education.

- Replace `public/harsh.jpg` to update the profile photo.
- Replace `public/Harsh_Pardhi_Resume.pdf` to update the downloadable resume.
- Update contact links in `src/data/portfolio.ts` and `src/components/ContactPanel.tsx`.

## Deployment

This is a standard Vite application and can be deployed to Vercel, Netlify, GitHub Pages, or any static hosting provider.

For Vercel or Netlify, use:

- Build command: `npm run build`
- Output directory: `dist`

## Contact

- Website: [harsh-pardhi.vercel.app](https://harsh-pardhi.vercel.app)
- GitHub: [github.com/HP04Harsh](https://github.com/HP04Harsh)
- LinkedIn: [linkedin.com/in/harsh-pardhi](https://www.linkedin.com/in/harsh-pardhi)
- Email: [harshpardhi499@gmail.com](mailto:harshpardhi499@gmail.com)
