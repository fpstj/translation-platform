# IN & OUT Translation Services Platform

A comprehensive full-stack web application for translation and language services management.

##  Project Overview

This is a complete translation services platform that includes:
- **Public Website**: Customer-facing website showcasing services, languages, and company information
- **Admin Dashboard** *(Coming Soon)*: Internal management system for translators, clients, and revenue tracking

##  Project Structure

```
translation/
 translation_frontend/     # React + TypeScript public website
 translation_backend/      # Node.js + Express API (Future)
 translation_dashboard/    # Admin dashboard (Future)
 shared/                   # Shared types and utilities (Future)
 docs/                     # Additional documentation (Future)
 README.md                 # This file
```

##  Current Status

###  Completed - Public Website (Frontend)
- **Technology Stack**:
  - React 19.1.0
  - TypeScript 5.8.3
  - Vite 6.3.5
  - React Router DOM 7
  - Bootstrap 5 (Flexbox only)
  
- **Features**:
  - 6 complete pages (Home, Services, Languages, About, Contact, Login)
  - 8 reusable components
  - Custom theme system with CSS variables
  - Fully responsive design
  - WCAG 2.2 accessibility compliance
  - Modern UI with smooth animations

###  Planned - Admin Dashboard
The admin dashboard will include:
- **Translator Management**
  - Add/edit/remove translators
  - Track translator availability and status
  - View translator performance metrics
  - Manage translator contact details (name, email, phone)

- **Client/Company Management**
  - Add/edit/remove client companies
  - Store company details and contact information
  - Track company project history
  - View company spending and contracts

- **Revenue Analytics**
  - Real-time revenue dashboard
  - Company revenue breakdown
  - Translator payment tracking
  - Payment status monitoring (paid/pending)
  - Financial reports and exports

- **Translator Status Tracking**
  - Active/inactive translator status
  - Availability calendar
  - Assignment tracking
  - Performance metrics

##  Technology Stack (Planned Full Stack)

### Frontend (Current)
- **Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM v7
- **Styling**: Bootstrap 5 + Custom CSS
- **State Management**: React Hooks

### Backend (Planned)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: PostgreSQL or MongoDB
- **ORM**: Prisma or TypeORM
- **Authentication**: JWT + bcrypt
- **API**: RESTful API

### Dashboard (Planned)
- **Framework**: React + TypeScript
- **UI Library**: Material-UI or Ant Design
- **Charts**: Recharts or Chart.js
- **State Management**: Redux Toolkit or Zustand
- **Tables**: TanStack Table (React Table v8)

##  Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Current Frontend Setup

1. **Clone the repository**
```bash
git clone <repository-url>
cd translation/translation_frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```

4. **Build for production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

The application will be available at http://localhost:5174

##  Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options:
- **Vercel** (Recommended for frontend)
- **Netlify**
- **GitHub Pages**
- **Render**
- **Traditional Hosting** (VPS, shared hosting)

##  Frontend Structure

```
translation_frontend/
 public/                  # Static assets
 src/
    assets/             # Images, icons, fonts
    components/         # Reusable React components
    pages/             # Page components
    styles/            # Global styles and theme
    App.tsx            # Main app component
    main.tsx           # Entry point
 index.html
 package.json
 tsconfig.json
 vite.config.ts
 README.md
```

##  Design System

- **Color Palette**:
  - Primary Blue: #2E6FEE
  - Accent Pink: #F77087
  - Accent Blue: #AED5DA
  - Dark: #1E1E1E
  - Light: #FAFAFA

- **Typography**:
  - Headings: Libre Baskerville (Serif)
  - Body: Roboto (Sans-serif)

- **Spacing**: 8px grid system
- **Responsive Breakpoints**: Bootstrap 5 standard

##  Future Authentication Flow

1. Public website  Login page
2. JWT authentication
3. Role-based access (Admin, Manager, Translator)
4. Protected dashboard routes
5. Secure API endpoints

##  Future Database Schema (Planned)

### Core Entities:
- **Users** (Authentication)
- **Translators** (Name, email, phone, status, specializations)
- **Companies** (Name, contact, contracts, revenue)
- **Projects** (Translation jobs)
- **Payments** (Revenue tracking, translator payments)
- **Languages** (Supported languages)

##  Contributing

This is a private project for IN & OUT Translation Services.

##  License

Proprietary - All rights reserved by IN & OUT Translation Services

##  Contact

For questions or support, contact IN & OUT Translation Services.

---

**Last Updated**: October 29, 2025  
**Version**: 1.0.0 (Frontend Only)  
**Status**: Production Ready (Public Website) | Planning Phase (Dashboard)
