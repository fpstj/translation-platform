# IN & OUT Translation Company Website

A professional, multi-page translation and interpretation company website built with React, TypeScript, Bootstrap 5, and Flexbox layouts.

## 🎯 Project Overview

This website presents IN & OUT Translation and Course Centre's services in a trustworthy, elegant, and client-focused manner. The design reflects linguistic precision, professional credibility, and human connection.

### Key Features

- ✅ **Fully Responsive Design** - Mobile, tablet, and desktop optimized
- ✅ **Bootstrap 5 Flexbox Layouts** - No grid system, pure flexbox utilities
- ✅ **WCAG 2.2 Accessibility Compliant** - Semantic HTML, ARIA labels, keyboard navigation
- ✅ **Modern UI/UX** - Clean design with smooth transitions and hover effects
- ✅ **Multi-Page Architecture** - Home, Services, Languages, About, Contact, and Login pages
- ✅ **Professional Typography** - Libre Baskerville (headings) and Roboto (body text)
- ✅ **Consistent Branding** - Carefully crafted color scheme and spacing system

## 🎨 Design System

### Color Palette

```css
Primary: #2E6FEE (Blue)
Dark: #1E1E1E (Near Black)
Light: #FAFAFA (Off White)
Accent Blue: #AED5DA (Light Blue)
Accent Pink: #F77087 (Pink/Coral)
```

### Typography

- **Headings**: Libre Baskerville (Serif)
- **Body Text**: Roboto (Sans-serif)
- **Font Scale**: Based on modular scale from 12px to 60px

### Spacing System

Bootstrap's 8px grid system is used throughout:

- Base unit: 8px (0.5rem)
- Consistent spacing from 8px to 96px in 8px increments

## 📁 Project Structure

```
translation_frontend/
├── public/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   │   └── PlaceholderIcon.tsx
│   │   └── images/
│   │       └── Hero-img.jpg (to be added)
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── LogoSlider.tsx
│   │   └── ContactForm.tsx
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   ├── Languages.tsx
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   └── Login.tsx
│   ├── styles/
│   │   └── theme.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd translation_frontend
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## 📄 Pages Overview

### 1. Home Page (`/`)

**Components:**

- Hero section with call-to-action buttons
- Our Services grid (6 service cards)
- Video/Image placeholders
- Our History section with company background
- Logo slider with partner companies

**Key Features:**

- Engaging hero section based on provided mockup
- Service cards with hover animations
- Auto-scrolling logo slider
- Comprehensive company history

### 2. Services Page (`/services`)

**Components:**

- Page header with gradient background
- Services grid with images and descriptions
- Call-to-action section

**Key Features:**

- Detailed service descriptions
- Image placeholders for each service
- Professional layout with flexbox

### 3. Languages Page (`/services/languages`)

**Components:**

- Page header
- Languages grid with flags
- Additional information section

**Key Features:**

- 24+ languages displayed with flag emojis
- Interactive hover effects
- Language cards with smooth transitions

### 4. About Page (`/about`)

**Components:**

- Company story section
- Team member cards
- Location section with Google Maps embed

**Key Features:**

- Team showcase with 6 members
- Embedded Google Maps
- Contact information display

### 5. Contact Page (`/contact`)

**Components:**

- Contact form
- Job application form
- Quick contact info cards
- FAQ section

**Key Features:**

- Form validation
- Success message on submission
- File upload for job applications
- Responsive layout for both forms

### 6. Login Page (`/login`)

**Components:**

- Login form
- Information about future functionality

**Key Features:**

- Form validation
- Placeholder for admin dashboard (future feature)
- Clean, centered layout

## 🎯 Accessibility Features

### WCAG 2.2 Compliance

- ✅ **Semantic HTML** - Proper heading hierarchy, landmarks
- ✅ **ARIA Labels** - Screen reader support for icons and interactive elements
- ✅ **Keyboard Navigation** - All interactive elements are keyboard accessible
- ✅ **Focus Indicators** - Visible focus states for keyboard navigation
- ✅ **Color Contrast** - Minimum 4.5:1 contrast ratio
- ✅ **Skip Navigation** - "Skip to main content" link
- ✅ **Alt Text** - Images have descriptive alternative text
- ✅ **Form Labels** - All form inputs have associated labels

## 🛠️ Technologies Used

### Core

- **React 19.1.0** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 6.3.5** - Build tool and dev server

### Styling

- **Bootstrap 5** - CSS framework (Flexbox utilities only)
- **Custom CSS** - Theme variables and custom styles

### Routing

- **React Router DOM 7** - Client-side routing

### Development Tools

- **ESLint** - Code linting
- **TypeScript ESLint** - TypeScript-specific linting

## 🎨 Component Descriptions

### Navbar Component

- Responsive navigation with mobile menu
- Dropdown for Services submenu
- Active link highlighting
- "Sign In" button with outline style

### Footer Component

- Four-column layout (responsive)
- Social media links (placeholder icons)
- Quick links to pages
- Copyright information

### Hero Component

- Large heading and subtext
- Two CTA buttons
- Background circle decoration
- Hero image with fallback

### ServiceCard Component

- Icon placeholder
- Title and description
- Hover animation (lift effect)
- Consistent styling

### LogoSlider Component

- Auto-scrolling animation
- Infinite loop effect
- Partner company logos
- Hover effects

### ContactForm Component

- Supports two types: 'contact' and 'job'
- Form validation
- Success message display
- File upload for job applications

## 🚧 Future Enhancements

### Phase 2 (Future Development)

1. **Admin Dashboard**

   - User authentication
   - Translator management
   - Company/client management
   - Revenue tracking and insights
   - Document management system

2. **Additional Features**

   - Real backend integration
   - Email service integration
   - Blog/News section
   - Client testimonials
   - Project portfolio showcase
   - Real-time chat support

3. **Enhanced Functionality**
   - Multi-language support (i18n)
   - Online quote calculator
   - Document upload and tracking
   - Payment integration
   - Booking system for interpretation services

## 📝 Development Notes

### Design Decisions

1. **Flexbox Over Grid**: Exclusively used Bootstrap 5's Flexbox utilities (d-flex, flex-column, etc.) for all layouts as per requirements.

2. **Color Psychology**:

   - Blue (#2E6FEE) conveys trust and professionalism
   - Pink (#F77087) adds warmth and approachability
   - Light blue (#AED5DA) creates calm, professional atmosphere

3. **Typography Hierarchy**: Serif headings (Libre Baskerville) convey tradition and reliability, while sans-serif body text (Roboto) ensures readability.

4. **Spacing Consistency**: All spacing follows the 8px grid system for visual rhythm and consistency.

5. **Accessibility First**: All interactive elements are keyboard-accessible, have proper ARIA labels, and meet contrast requirements.

### Component Reusability

- `ServiceCard` can be reused for any card-based layout
- `ContactForm` supports multiple form types via props
- `PlaceholderIcon` serves as a universal icon component
- Theme variables in `theme.css` ensure consistent styling

### Performance Considerations

- CSS variables for efficient theme management
- Minimal external dependencies
- Optimized images (to be added)
- Code splitting via React Router

## 🐛 Known Issues / TODO

1. Add actual Hero image (`Hero-img.jpg` in `/src/assets/images/`)
2. Replace placeholder icons with actual icon library (e.g., React Icons, Lucide)
3. Implement backend API for form submissions
4. Add real logo images for LogoSlider
5. Add team member photos
6. Add service images
7. Implement actual authentication system
8. Add loading states for async operations

## 📞 Support

For questions or issues, please contact:

- **Email**: info@inout-translation.com
- **Phone**: +389 2 123 4567

## 📄 License

Copyright © 2025 IN & OUT Translation and Course Centre. All rights reserved.

---

**Built with ❤️ using React, TypeScript, and Bootstrap 5**
