# AI Tool Research (aitoolresearch.com)

A premium, manually curated dictionary for discovering and publishing open-source AI tools.

## Tech Stack
- **Framework:** Next.js (App Router)
- **Database ORM:** Prisma
- **Database:** SQLite (Local) / Supabase PostgreSQL (Production)
- **Authentication:** Supabase Auth
- **Styling:** Tailwind CSS / Vanilla CSS
- **Email:** Resend

## Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or pnpm

## Local Setup Instructions

### 1. Clone and Install
First, navigate to the `tools-section` directory and install the dependencies:
```bash
cd tools-section
npm install
```

### 2. Environment Variables
Create a `.env.local` file in the `tools-section` directory. Copy the required keys below. Reach out to the repository owner for the actual development secrets.

```env
# Database
DATABASE_URL="file:./dev.db"

# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-supabase-service-role-key"

# GitHub Integration
GITHUB_PERSONAL_ACCESS_TOKEN="your-github-token"

# Email Configuration (Resend)
RESEND_API_KEY="your-resend-api-key"
```

### 3. Database Setup (Prisma)
We use Prisma as our ORM with a local SQLite database for development.

Run the following commands to initialize and sync your local database:
```bash
# Generate the Prisma Client
npx prisma generate

# Apply migrations to your local SQLite database
npx prisma migrate dev

# (Optional) Seed the database with initial data
npx prisma db seed
```

### 4. Run the Development Server
Start the Next.js development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Contribution Guidelines
- **Curation Policy:** This directory prioritizes high-quality, manual entries over automated scrapers to ensure accuracy and a premium feel.
- **Agent Guidelines & Rules:** Please read the `.gemini/` directory at the root of the repository before making major architectural changes. It contains project-specific guidelines for UI design, security, SEO, and database migrations.
- **Commit Format:** We use conventional commits (`feat:`, `fix:`, `chore:`, etc.).
