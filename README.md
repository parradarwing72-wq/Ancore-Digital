# Ancore Digital - Company Portfolio

A modern, sleek portfolio website for Ancore Digital, an IT solutions company specializing in website development, mobile apps, AI/ML, blockchain, and cutting-edge technologies.

## Company Overview

- **Company Name**: Ancore Digital
- **CEO/Founder**: Emir Hammani
- **Team Size**: 6 developers (including CEO)
- **Services**: Website Development, Android/iOS App Development, AI & ML Development
- **Expertise**: Blockchain and Artificial Intelligence

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3001](http://localhost:3001) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx   # Fixed navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services showcase
│   ├── Technologies.tsx # Blockchain & AI section
│   ├── Team.tsx         # Team members section
│   └── Contact.tsx      # Contact form
└── assets/
    ├── background/      # Background images
    └── people/          # Team member photos
```

## Features

- ✅ Modern, minimalist design inspired by outlier.ai
- ✅ Smooth scroll animations
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Fixed navigation with scroll effects
- ✅ Hero section with call-to-action buttons
- ✅ Services section (Website, Mobile Apps, AI/ML)
- ✅ Technologies section (Blockchain & AI)
- ✅ Team section with 6 developers
- ✅ Contact form

## Customization

### Team Member Images

Place team member photos in `public/assets/people/`:
- `CEO.jpg` (already exists)
- `developer1.jpg` through `developer5.jpg` (or update paths in `components/Team.tsx`)

### Background Images

Update background images in `public/assets/background/`:
- `software-developing-team.jpg` (used in hero section)
- `room.jpg` (available for use)

### Contact Information

Update contact details in `components/Contact.tsx`:
- Email: `contact@ancoredigital.com`
- Phone: `+1 (234) 567-890`

## Design Inspiration

The design is inspired by outlier.ai's clean, modern aesthetic with:
- Large, bold typography
- Minimal color palette (black, white, accent colors)
- Smooth animations and transitions
- Generous white space
- Focus on content and readability

## License

Private - Ancore Digital
