# Quanterae Solutions LTD - Business Consulting Website

A professional, high-end Next.js website for Quanterae Solutions LTD, showcasing comprehensive business management consulting services.

## Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Fully responsive across all devices
- **Professional Sections**:
  - Hero section with animated background
  - Services showcase
  - Multi-department expertise
  - About company
  - Client testimonials
  - Contact form
- **Optimized for Performance**: Server-side rendering with Next.js App Router
- **SEO Ready**: Meta tags and semantic HTML structure
- **Ready for Vercel Deployment**: One-click deployment to Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with fonts and metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles
│   └── components/
│       ├── Navbar.tsx       # Navigation component
│       ├── Hero.tsx         # Hero section
│       ├── Services.tsx     # Services showcase
│       ├── Expertise.tsx    # Department expertise
│       ├── About.tsx        # About section
│       ├── Testimonials.tsx # Client testimonials
│       ├── Contact.tsx      # Contact form
│       └── Footer.tsx       # Footer component
├── public/                  # Static assets
├── .github/
│   └── copilot-instructions.md
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.mjs         # Next.js configuration
```

## Customization

### Colors

The color scheme can be customized in `tailwind.config.ts`:

- **Primary**: Blue shades for main branding
- **Accent**: Purple shades for highlights

### Content

Update the following components with your actual content:

- **Services**: Edit `src/components/Services.tsx`
- **Testimonials**: Edit `src/components/Testimonials.tsx`
- **Contact Info**: Edit `src/components/Contact.tsx`
- **Company Info**: Edit `src/components/About.tsx`

### Fonts

The website uses:
- **Inter**: For body text (via Google Fonts)
- **Playfair Display**: For headings (via Google Fonts)

Change fonts in `src/app/layout.tsx` if needed.

## Deployment to Vercel

### Option 1: Using Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Click "Deploy"

### Option 2: Using Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

The site will be live at your Vercel URL!

## Environment Variables

For production, you may want to add:

- Contact form backend (consider Formspree, SendGrid, or similar)
- Analytics (Google Analytics, Plausible, etc.)

Create a `.env.local` file for local environment variables.

## Performance

- Built with Next.js 14 App Router for optimal performance
- Automatic code splitting
- Image optimization ready
- Server-side rendering for fast initial loads

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2026 Quanterae Solutions LTD. All rights reserved.

## Support

For questions or support, contact: info@quanteraesolutions.com

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
