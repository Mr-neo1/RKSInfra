# RKS Infra - Next.js Website

A production-ready, modern website for RKS Infra built with Next.js 15+, TypeScript, and Tailwind CSS.

## ✨ Features

- 🚀 **Next.js 15+** - Latest App Router with Server Components
- 📱 **Fully Responsive** - Mobile-first design with Tailwind CSS
- ⚡ **Performance Optimized** - Static generation, image optimization, and code splitting
- 🎨 **Modern UI** - Beautiful, professional design with Framer Motion animations
- 📝 **Type-Safe** - Full TypeScript implementation
- 🔍 **SEO Optimized** - Metadata API, JSON-LD structured data, sitemap, and robots.txt
- 🛡️ **Security First** - Security headers and best practices

## 🏗️ Project Structure

```
rksinfra-nextjs/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   ├── services/          # Services pages
│   ├── case-studies/     # Case studies pages
│   ├── contact/          # Contact page
│   └── resources/        # Resources pages
├── components/           # React components
│   ├── layout/           # Layout components (Header, Footer)
│   ├── ui/               # Reusable UI components
│   ├── home/             # Homepage sections
│   ├── contact/          # Contact form components
│   └── shared/           # Shared components
├── lib/                   # Utilities and helpers
│   ├── constants.ts      # Site configuration
│   ├── content.ts        # Content data
│   ├── seo.ts            # SEO helpers
│   └── utils.ts          # Utility functions
├── types/                 # TypeScript type definitions
└── public/               # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm 9+

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy `.env.example` to `.env.local` and fill in your values:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Deploy to Vercel

The easiest way to deploy is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

## 🎨 Design System

The project uses a custom design system with:

- **Colors**: Security-focused palette (deep blue, security blue, trust green)
- **Typography**: Inter font family with fluid typography
- **Spacing**: 4px-based spacing system
- **Components**: Reusable UI components (Button, Card, Container, Section)

## 📝 Content Management

Content is managed in `lib/content.ts`. Update this file to modify:

- Services
- Case studies
- Homepage content
- FAQ items

## 🔍 SEO

SEO is handled through:

- Next.js Metadata API
- JSON-LD structured data
- Dynamic sitemap (`/sitemap.xml`)
- Robots.txt (`/robots.txt`)

## 🛠️ Tech Stack

- **Framework**: Next.js 15+
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.x
- **Animations**: Framer Motion 11+
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📄 License

Private - All rights reserved
