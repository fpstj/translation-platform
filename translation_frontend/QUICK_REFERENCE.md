# Quick Reference Guide - IN & OUT Translation Website

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Adding New Content

### Adding a New Service

1. Open `src/pages/Home.tsx` or `src/pages/Services.tsx`
2. Add to the `services` array:

```typescript
{
  title: 'Your Service Name',
  description: 'Service description text'
}
```

### Adding a Team Member

1. Open `src/pages/About.tsx`
2. Add to the `teamMembers` array:

```typescript
{
  name: 'Full Name',
  role: 'Position',
  image: 'filename.jpg',
  bio: 'Short biography'
}
```

### Adding a Language

1. Open `src/pages/Languages.tsx`
2. Add to the `languages` array:

```typescript
{ name: 'Language Name', flag: '🏳️' }
```

## 🎨 Customizing Styles

### Changing Colors

Edit `src/styles/theme.css`:

```css
:root {
  --color-primary: #2e6fee; /* Main brand color */
  --color-accent-pink: #f77087; /* CTA buttons */
  --color-accent-blue: #aed5da; /* Backgrounds */
}
```

### Changing Typography

Edit `src/styles/theme.css`:

```css
:root {
  --font-heading: "Your Heading Font", serif;
  --font-body: "Your Body Font", sans-serif;
}
```

Update import in `theme.css`:

```css
@import url("https://fonts.googleapis.com/css2?family=Your+Font&display=swap");
```

### Adjusting Spacing

All spacing uses the 8px grid system:

```css
--spacing-1: 0.5rem; /* 8px */
--spacing-2: 1rem; /* 16px */
--spacing-3: 1.5rem; /* 24px */
--spacing-4: 2rem; /* 32px */
```

## 🖼️ Adding Images

### Hero Image

1. Place image in `src/assets/images/`
2. Rename to `Hero-img.jpg` (or update path in `src/components/Hero.tsx`)

### Service Images

1. Add images to `src/assets/images/`
2. Update image paths in service components

### Team Photos

1. Add photos to `src/assets/images/team/`
2. Update `image` property in team members array

## 🔧 Common Customizations

### Update Company Information

**Contact Details** - Edit `src/pages/About.tsx` and `src/pages/Contact.tsx`:

```typescript
Email: info@inout-translation.com
Phone: +389 2 123 4567
Address: 123 Language Street, Skopje 1000
```

**Business Hours** - Edit `src/pages/About.tsx`:

```typescript
Monday - Friday: 9:00 AM - 6:00 PM
Saturday: 10:00 AM - 2:00 PM
```

### Update Social Media Links

Edit `src/components/Footer.tsx`:

```tsx
<a href="https://twitter.com/yourhandle">
<a href="https://instagram.com/yourhandle">
<a href="https://youtube.com/@yourchannel">
<a href="https://linkedin.com/company/yourcompany">
```

### Update Google Maps Location

Edit `src/pages/About.tsx`:

```tsx
<iframe
  src="https://www.google.com/maps/embed?pb=YOUR_EMBED_CODE"
  ...
/>
```

To get embed code:

1. Go to Google Maps
2. Search for your location
3. Click "Share" → "Embed a map"
4. Copy iframe code

## 🆕 Adding New Pages

### 1. Create Page Component

Create `src/pages/YourPage.tsx`:

```tsx
import React from "react";

const YourPage: React.FC = () => {
  return (
    <main>
      <section className="section-lg">
        <div className="container">
          <h1>Your Page Title</h1>
          <p>Your content here</p>
        </div>
      </section>
    </main>
  );
};

export default YourPage;
```

### 2. Add Route

Edit `src/App.tsx`:

```tsx
import YourPage from "./pages/YourPage";

// In Routes:
<Route path="/your-page" element={<YourPage />} />;
```

### 3. Add Navigation Link

Edit `src/components/Navbar.tsx`:

```tsx
<li className="nav-item">
  <NavLink className="nav-link" to="/your-page">
    Your Page
  </NavLink>
</li>
```

## 🎨 Using Design System

### Colors

```tsx
// In JSX style prop:
style={{ color: 'var(--color-primary)' }}
style={{ backgroundColor: 'var(--color-accent-pink)' }}
```

### Spacing

```tsx
// Using spacing variables:
style={{ padding: 'var(--spacing-4)' }}
style={{ marginBottom: 'var(--spacing-3)' }}
```

### Typography

```tsx
// Heading:
style={{ fontFamily: 'var(--font-heading)' }}

// Body text:
style={{ fontFamily: 'var(--font-body)' }}
```

### Common Classes

```tsx
// Layout:
className = "d-flex flex-column align-items-center";
className = "container";
className = "section-lg";

// Buttons:
className = "btn btn-primary";
className = "btn btn-secondary";
className = "btn btn-outline-primary";

// Cards:
className = "card border-0";
```

## 📱 Responsive Utilities

```tsx
// Hide on mobile:
className = "d-none d-md-block";

// Hide on desktop:
className = "d-block d-md-none";

// Flex direction changes:
className = "d-flex flex-column flex-lg-row";

// Spacing responsive:
className = "gap-3 gap-lg-5";
```

## 🔍 Debugging Tips

### Component Not Rendering?

1. Check import path
2. Verify export/import syntax
3. Check console for errors
4. Verify route path in App.tsx

### Styles Not Applying?

1. Check CSS variable spelling
2. Verify Bootstrap classes
3. Check for conflicting styles
4. Clear browser cache

### Form Not Submitting?

1. Check validation logic
2. Verify form fields match state
3. Check console for errors
4. Ensure onSubmit is bound

## 📦 Production Deployment

### Build Checklist

- [ ] Update all placeholder content
- [ ] Add real images
- [ ] Update contact information
- [ ] Test all forms
- [ ] Test on mobile devices
- [ ] Run accessibility audit
- [ ] Test in multiple browsers
- [ ] Optimize images
- [ ] Review SEO meta tags

### Build Process

```bash
# 1. Build the project
npm run build

# 2. Files will be in dist/ folder
# 3. Upload dist/ contents to web server

# Test production build locally:
npm run preview
```

### Environment Variables

Create `.env` file for production:

```
VITE_API_URL=https://your-api.com
VITE_GOOGLE_MAPS_KEY=your_key_here
```

Access in code:

```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

## 🐛 Common Issues & Solutions

### Issue: Port 5173 already in use

**Solution**:

```bash
# Kill the process or use different port:
npm run dev -- --port 3000
```

### Issue: Module not found

**Solution**:

```bash
# Reinstall dependencies:
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution**:

```bash
# Check tsconfig.json
# Ensure all imports have correct extensions
# Restart TypeScript server in VS Code
```

### Issue: Bootstrap styles not working

**Solution**:

1. Verify import in `App.tsx`:

```typescript
import "bootstrap/dist/css/bootstrap.min.css";
```

2. Check Bootstrap is installed:

```bash
npm list bootstrap
```

## 📞 Getting Help

### Resources

- **React Docs**: https://react.dev
- **TypeScript**: https://www.typescriptlang.org
- **Bootstrap 5**: https://getbootstrap.com
- **React Router**: https://reactrouter.com

### Project Documentation

- See `PROJECT_DOCUMENTATION.md` for complete guide
- See `DESIGN_RATIONALE.md` for design decisions
- See `SUMMARY.md` for project overview

## 💡 Best Practices

### Code Organization

- One component per file
- Group related files in folders
- Use descriptive names
- Keep components small and focused

### Component Structure

```tsx
// 1. Imports
import React from "react";

// 2. Types/Interfaces
interface Props {
  title: string;
}

// 3. Component
const MyComponent: React.FC<Props> = ({ title }) => {
  // 4. State & Hooks
  const [state, setState] = useState();

  // 5. Functions
  const handleClick = () => {};

  // 6. Return JSX
  return <div>{title}</div>;
};

// 7. Export
export default MyComponent;
```

### Naming Conventions

- Components: PascalCase (`ServiceCard.tsx`)
- Files: PascalCase for components, camelCase for utilities
- CSS classes: kebab-case (`.nav-link`)
- Variables: camelCase (`userName`)
- Constants: UPPER_SNAKE_CASE (`API_URL`)

---

**Keep this guide handy for quick reference during development!** 📚
