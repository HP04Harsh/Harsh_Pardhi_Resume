# Harsh Pardhi - Portfolio

A personal portfolio for Harsh Pardhi, an Applied AI Engineer focused on agentic AI, enterprise RAG, Azure, cloud operations, and automation.

The site presents professional experience, technical skills, certifications, education, selected GitHub projects, and contact channels in a responsive single-page experience.

## Built With

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- `canvas-confetti` for interactive UI details
- `vite-plugin-singlefile` for the production bundle

## Features

- Responsive single-page portfolio with keyboard-visible focus, reduced-motion support, and section navigation.
- Featured project filters connect to selectable tools in the skills section.
- Scrollable certification cards and expandable project and experience details.
- Contact form validates in the browser and opens a pre-filled email draft; it does not send or store messages on a server.
- Downloadable resume PDF is served from `public/Harsh_Pardhi_Resume.pdf`.

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

The portfolio is deployed to Vercel at [harsh-pardhi.vercel.app](https://harsh-pardhi.vercel.app/). The `vercel.json` configuration builds the Vite app and serves the generated `dist` directory, including the downloadable resume PDF.

To deploy updates, install the dependencies and run a production build:

```bash
npm ci
npm run build
```

With the Vercel CLI installed and authenticated, link the repository to the existing project once, then deploy to production:

```bash
vercel link --yes --project harsh-pardhi-resume --scope hp04harshs-projects
vercel deploy --prod
```

The production deployment should serve the resume at `/Harsh_Pardhi_Resume.pdf`.

## Contact

- Website: [harsh-pardhi.vercel.app](https://harsh-pardhi.vercel.app)
- GitHub: [github.com/HP04Harsh](https://github.com/HP04Harsh)
- LinkedIn: [linkedin.com/in/harsh-pardhi](https://www.linkedin.com/in/harsh-pardhi)
- Email: [harshpardhi477@gmail.com](mailto:harshpardhi477@gmail.com)
