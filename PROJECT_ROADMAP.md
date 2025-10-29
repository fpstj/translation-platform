# Project Roadmap - IN & OUT Translation Platform

## Overview
This document outlines the development roadmap for transforming the current frontend-only website into a comprehensive full-stack platform with admin dashboard capabilities.

---

## Phase 1: Public Website  COMPLETED
**Status**: Production Ready  
**Timeline**: Completed October 2025

### Deliverables
-  6 responsive pages (Home, Services, Languages, About, Contact, Login)
-  8 reusable components
-  Custom theme system with CSS variables
-  Bootstrap 5 Flexbox layouts
-  WCAG 2.2 accessibility compliance
-  Comprehensive documentation

---

## Phase 2: Backend API & Database  PLANNED
**Priority**: High  
**Estimated Timeline**: 2-3 months

### Goals
Set up the backend infrastructure to support the admin dashboard and future features.

### Technical Stack
- **Runtime**: Node.js 18+
- **Framework**: Express.js or NestJS
- **Database**: PostgreSQL (recommended) or MongoDB
- **ORM**: Prisma (SQL) or Mongoose (MongoDB)
- **Authentication**: JWT + bcrypt
- **Validation**: Zod or Joi

### Database Schema

#### Users Table
- id (UUID, PK)
- email (unique)
- password_hash
- role (admin, manager, translator)
- created_at
- updated_at

#### Translators Table
- id (UUID, PK)
- user_id (FK to Users, nullable)
- full_name
- email
- phone
- specializations (JSON/Array)
- languages (JSON/Array)
- rate_per_word
- status (active, inactive, on_leave)
- availability_calendar (JSON)
- created_at
- updated_at

#### Companies Table
- id (UUID, PK)
- name
- contact_person
- email
- phone
- address
- contract_terms (TEXT)
- total_revenue (DECIMAL)
- created_at
- updated_at

#### Projects Table
- id (UUID, PK)
- company_id (FK)
- translator_id (FK)
- title
- description
- source_language
- target_language
- word_count
- rate
- total_amount (DECIMAL)
- status (pending, in_progress, completed, paid)
- deadline
- created_at
- completed_at

#### Payments Table
- id (UUID, PK)
- project_id (FK)
- translator_id (FK)
- company_id (FK)
- amount (DECIMAL)
- payment_date
- status (pending, paid, overdue)
- created_at

### API Endpoints

#### Authentication
- POST /api/auth/login
- POST /api/auth/logout
- POST /api/auth/refresh
- GET /api/auth/me

#### Translators
- GET /api/translators (list all)
- GET /api/translators/:id
- POST /api/translators (create)
- PUT /api/translators/:id (update)
- DELETE /api/translators/:id
- PATCH /api/translators/:id/status (activate/deactivate)

#### Companies
- GET /api/companies
- GET /api/companies/:id
- POST /api/companies
- PUT /api/companies/:id
- DELETE /api/companies/:id
- GET /api/companies/:id/revenue (company revenue analytics)

#### Projects
- GET /api/projects
- GET /api/projects/:id
- POST /api/projects
- PUT /api/projects/:id
- PATCH /api/projects/:id/status
- GET /api/projects/translator/:translatorId

#### Payments
- GET /api/payments
- GET /api/payments/pending
- GET /api/payments/translator/:translatorId
- POST /api/payments
- PATCH /api/payments/:id/mark-paid

#### Analytics
- GET /api/analytics/revenue (total revenue)
- GET /api/analytics/revenue/by-company
- GET /api/analytics/translators/performance
- GET /api/analytics/projects/status

### Deliverables
- [ ] Database schema design
- [ ] API implementation
- [ ] Authentication system
- [ ] Data validation
- [ ] API documentation (Swagger/OpenAPI)
- [ ] Unit tests
- [ ] Integration tests

---

## Phase 3: Admin Dashboard  PLANNED
**Priority**: High  
**Estimated Timeline**: 2-3 months (parallel with Phase 2)

### Goals
Create a comprehensive admin dashboard for managing translators, companies, projects, and analytics.

### Technical Stack
- **Framework**: React 19 + TypeScript
- **UI Library**: Material-UI (MUI) or Ant Design
- **State Management**: Redux Toolkit or Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Forms**: React Hook Form + Zod validation
- **Tables**: TanStack Table (React Table v8)
- **Charts**: Recharts or Chart.js
- **Date Handling**: date-fns or Day.js

### Dashboard Features

#### 1. Dashboard Home
- Revenue overview (monthly, quarterly, annual)
- Active projects count
- Active translators count
- Recent activities timeline
- Top performing translators
- Top revenue-generating companies

#### 2. Translator Management
- **List View**: Table with search, filter, sort
- **Create/Edit**: Form with validation
- **Details View**: 
  - Personal information
  - Languages & specializations
  - Project history
  - Payment history
  - Performance metrics
- **Status Management**: Active/Inactive toggle
- **Availability Calendar**: Visual calendar for scheduling

#### 3. Company Management
- **List View**: Searchable table
- **Create/Edit**: Detailed company form
- **Details View**:
  - Company information
  - Contact details
  - Project history
  - Revenue analytics
  - Payment history
- **Revenue Analytics**: Charts and graphs

#### 4. Project Management
- **List View**: Projects with status badges
- **Create Project**: Multi-step form
  - Select company
  - Select translator
  - Project details
  - Pricing calculation
- **Project Details**:
  - Status tracking
  - Timeline
  - Documents (future)
  - Comments/Notes
- **Status Updates**: Drag-and-drop Kanban board (optional)

#### 5. Payment Tracking
- **Pending Payments**: List view with due dates
- **Payment History**: Complete payment log
- **Mark as Paid**: Quick action
- **Generate Invoices**: PDF generation (future)
- **Payment Analytics**: Charts and trends

#### 6. Analytics & Reports
- **Revenue Dashboard**:
  - Total revenue
  - Revenue by company
  - Revenue by language pair
  - Monthly/yearly trends
- **Translator Analytics**:
  - Projects completed
  - Average rating (future)
  - Earnings
  - Efficiency metrics
- **Export Reports**: CSV/Excel export

### Page Structure
```
/dashboard
  /home - Overview dashboard
  /translators
    / - List all translators
    /add - Add new translator
    /:id - Translator details
    /:id/edit - Edit translator
  /companies
    / - List all companies
    /add - Add new company
    /:id - Company details
    /:id/edit - Edit company
  /projects
    / - List all projects
    /add - Create project
    /:id - Project details
    /:id/edit - Edit project
  /payments
    / - Payment overview
    /pending - Pending payments
    /history - Payment history
  /analytics
    /revenue - Revenue analytics
    /translators - Translator performance
    /companies - Company analytics
  /settings
    /profile - User profile
    /preferences - Dashboard preferences
```

### Deliverables
- [ ] Dashboard layout and navigation
- [ ] All CRUD interfaces
- [ ] Data tables with search/filter/sort
- [ ] Forms with validation
- [ ] Charts and visualizations
- [ ] Responsive design
- [ ] Role-based access control
- [ ] Real-time updates (optional with WebSockets)

---

## Phase 4: Integration & Testing  PLANNED
**Priority**: High  
**Estimated Timeline**: 1 month

### Goals
Connect all pieces and ensure everything works together seamlessly.

### Tasks
- [ ] Connect frontend to backend API
- [ ] Implement authentication flow
- [ ] Protected routes implementation
- [ ] End-to-end testing
- [ ] Performance optimization
- [ ] Security audit
- [ ] User acceptance testing

---

## Phase 5: Advanced Features  FUTURE
**Priority**: Medium  
**Estimated Timeline**: 3-6 months

### Potential Features
- **Document Management**: Upload and store project files
- **Email Notifications**: Automated emails for project updates
- **Invoice Generation**: Automated PDF invoices
- **Client Portal**: Limited access for companies to track projects
- **Translator Portal**: Self-service portal for translators
- **Advanced Analytics**: Machine learning insights
- **Mobile App**: React Native mobile application
- **Real-time Collaboration**: Live document editing
- **API Integration**: Integration with CAT tools
- **Multi-language Support**: Dashboard in multiple languages

---

## Technology Recommendations

### For Backend
**Recommended**: NestJS + Prisma + PostgreSQL
- **Pros**: TypeScript-native, excellent architecture, great ORM, SQL reliability
- **Cons**: Steeper learning curve than Express

**Alternative**: Express.js + Mongoose + MongoDB
- **Pros**: Simpler, flexible, faster development
- **Cons**: Less structure, NoSQL trade-offs

### For Dashboard
**Recommended**: Material-UI (MUI)
- **Pros**: Comprehensive components, excellent documentation, active community
- **Cons**: Larger bundle size

**Alternative**: Ant Design
- **Pros**: Enterprise-ready, beautiful defaults, great for data-heavy apps
- **Cons**: Chinese-first documentation (but good English support)

### For State Management
**Recommended**: Zustand
- **Pros**: Simple, lightweight, minimal boilerplate
- **Cons**: Less ecosystem than Redux

**Alternative**: Redux Toolkit
- **Pros**: Industry standard, excellent DevTools, large ecosystem
- **Cons**: More boilerplate, steeper learning curve

---

## Success Metrics

### Phase 2 (Backend)
- API response time < 200ms
- 100% endpoint coverage
- 80%+ test coverage
- Zero critical security vulnerabilities

### Phase 3 (Dashboard)
- All CRUD operations functional
- < 3 second load time
- 90%+ Lighthouse accessibility score
- Mobile responsive (all breakpoints)

### Phase 4 (Integration)
- Zero critical bugs
- Successful UAT completion
- 95%+ uptime in staging

---

## Resource Requirements

### Development Team
- 1 Backend Developer (3-4 months)
- 1 Frontend Developer (3-4 months)
- 1 UI/UX Designer (1 month, part-time)
- 1 QA Engineer (2 months)

### Infrastructure
- Database hosting (Supabase, PlanetScale, or Railway)
- Backend hosting (Railway, Render, or AWS)
- Frontend hosting (Vercel or Netlify)
- CI/CD pipeline (GitHub Actions)

---

## Risk Management

### Potential Risks
1. **Database Performance**: Large datasets may slow queries
   - **Mitigation**: Proper indexing, query optimization, caching

2. **Authentication Security**: Vulnerable to attacks
   - **Mitigation**: Use proven libraries, security audit, rate limiting

3. **Data Loss**: Accidental deletion or corruption
   - **Mitigation**: Soft deletes, regular backups, audit logs

4. **Scope Creep**: Feature requests exceeding timeline
   - **Mitigation**: Strict MVP definition, phased approach

---

## Next Steps

1. **Immediate**:
   - [ ] Finalize technology stack decisions
   - [ ] Set up development environment
   - [ ] Create detailed database schema
   - [ ] Design API contracts

2. **Short-term** (Next 2 weeks):
   - [ ] Set up backend project structure
   - [ ] Implement authentication
   - [ ] Create first API endpoints
   - [ ] Set up dashboard project structure

3. **Mid-term** (Next 1-2 months):
   - [ ] Complete backend API
   - [ ] Build core dashboard features
   - [ ] Begin integration testing

---

**Document Version**: 1.0  
**Last Updated**: October 29, 2025  
**Next Review**: December 2025
