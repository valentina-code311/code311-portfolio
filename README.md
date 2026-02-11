# Valentina Code311 - Portfolio

Professional portfolio of **Valentina Code311**, Data Engineer specialized in DataOps, cloud solutions (GCP/AWS) and AI automation.

![OpenGraph](docs/opengraph-image.png)

## Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Framework** | React 18, TypeScript, Vite |
| **UI** | Tailwind CSS, shadcn/ui (Radix UI), Lucide Icons |
| **Routing** | React Router DOM |
| **Testing** | Vitest, Testing Library |
| **Container** | Docker (multi-stage with Nginx) |
| **CI/CD** | GitHub Actions |
| **Hosting** | Google Cloud Run + Artifact Registry |

## Project Structure

```
src/
├── components/        # Main site components
│   ├── Hero.tsx       # Welcome section with typing animation
│   ├── About.tsx      # Professional timeline (2021-2025)
│   ├── Skills.tsx     # Technical skills with progress bars
│   ├── Projects.tsx   # Featured projects with expandable view
│   ├── Services.tsx   # Offered services
│   ├── Contact.tsx    # Contact info and social media
│   ├── Navbar.tsx     # Responsive navigation with mobile menu
│   └── ui/            # shadcn/ui components
├── pages/
│   ├── Index.tsx      # Main page (SPA)
│   └── NotFound.tsx   # 404 page
├── hooks/             # Custom hooks (mobile detection, toast)
└── lib/               # Utilities (cn class merger)

docker/
└── front.Dockerfile   # Multi-stage build (Node 20 + Nginx)

scripts/
├── deploy.sh          # Cloud Run deployment
├── setup.sh           # GCP infrastructure setup
├── startup.sh         # Tools installer (gcloud, docker, aws, jq)
└── gcp_login.sh       # GCP authentication

.github/workflows/
└── gcp-deploy.yml     # Automated CI/CD pipeline
```

## Local Development

Requirements: [Node.js](https://nodejs.org/) >= 18

```sh
# Install dependencies
npm install

# Start development server (port 8080)
npm run dev

# Run tests
npm test

# Lint
npm run lint

# Production build
npm run build
```

## Docker

```sh
# Build and run with Docker Compose (port 8081)
docker compose up --build

# Or manual build
docker build -f docker/front.Dockerfile -t c311-front .
docker run -p 8081:80 c311-front
```

## Deployment

The project is automatically deployed to **Google Cloud Run** when pushing to `main` with changes in `src/`.

### Initial GCP Setup

```sh
# Set up infrastructure (Artifact Registry, service accounts, IAM)
sh scripts/setup.sh
```

### Manual Deployment

```sh
# Deploy frontend
sh scripts/deploy.sh front
```

### Environment Variables

Secrets are managed via GitHub Variables/Secrets and injected during CI/CD:

| Variable | Description |
|----------|-------------|
| `ENV_FILE` | Main `.env` file content |
| `FRONTEND_ENV_FILE` | Frontend variables (`VITE_API_URL`, etc.) |
| `GCP_CREDENTIALS_JSON` | GCP service credentials |

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server with HMR |
| `npm run build` | Production build |
| `npm run build:dev` | Development mode build |
| `npm run preview` | Production build preview |
| `npm test` | Run tests (once) |
| `npm run test:watch` | Tests in watch mode |
| `npm run lint` | Run ESLint |
