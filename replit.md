# Portfolio Website - Victor Essang

## Overview

This is a modern, responsive portfolio website built for Victor Essang, a Software Engineer and GIS Expert. The application showcases his skills in mobile development, web technologies, and geospatial solutions through an interactive single-page application.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component system
- **Animations**: Framer Motion for smooth transitions and interactions
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Architecture Pattern**: RESTful API design
- **Request Handling**: Express middleware for JSON parsing and logging
- **Development Server**: Vite integration for hot module replacement

### Database Layer
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL (configured but not actively used)
- **Schema**: Centralized schema definition in `/shared/schema.ts`
- **Storage**: In-memory storage implementation for development
- **Migrations**: Drizzle Kit for database schema management

## Key Components

### Client-Side Components
- **Navigation**: Fixed navigation with smooth scrolling and theme toggle
- **Hero Section**: Animated landing section with floating elements
- **Projects Section**: Responsive project showcase with technology tags
- **Skills Section**: Categorized skill display with icons
- **About Section**: Personal introduction and motivations
- **Contact Section**: Contact information and availability status
- **Footer**: Social links and copyright information

### UI System
- **Theme Provider**: Dark/light mode with system preference detection
- **Component Library**: Comprehensive UI components based on Radix UI
- **Responsive Design**: Mobile-first approach with breakpoint-based layouts
- **Accessibility**: ARIA-compliant components with keyboard navigation

### Backend Services
- **Storage Interface**: Abstracted storage layer with CRUD operations
- **Route Registration**: Modular route handling system
- **Error Handling**: Centralized error handling middleware
- **Development Tools**: Request logging and performance monitoring

## Data Flow

1. **Client Requests**: React components initiate API calls through TanStack Query
2. **Server Processing**: Express routes handle requests and interact with storage layer
3. **Data Storage**: Memory-based storage for user data (extendable to PostgreSQL)
4. **Response Handling**: Structured JSON responses with error handling
5. **State Management**: Client-side state updates through React Query cache

## External Dependencies

### Core Technologies
- **React Ecosystem**: React 18, React DOM, React Router (implicit)
- **TypeScript**: Full type safety across frontend and backend
- **Vite**: Development server and build tooling
- **Express**: Web framework for API endpoints

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework
- **Radix UI**: Headless UI components
- **Framer Motion**: Animation library
- **Lucide React**: Icon library

### Database and ORM
- **Drizzle ORM**: Type-safe database toolkit
- **PostgreSQL**: Production database (Neon serverless)
- **Zod**: Schema validation library

### Development Tools
- **ESBuild**: Fast JavaScript bundler
- **PostCSS**: CSS processing
- **TSX**: TypeScript execution for development

## Deployment Strategy

### Build Process
- **Frontend**: Vite builds optimized static assets to `/dist/public`
- **Backend**: ESBuild bundles server code to `/dist/index.js`
- **Assets**: Static files served from build output directory

### Environment Configuration
- **Development**: `npm run dev` with hot reload and development middleware
- **Production**: `npm run build && npm run start` for optimized deployment
- **Database**: Environment-based DATABASE_URL configuration

### Hosting
- **Platform**: Replit with autoscale deployment target
- **Port Configuration**: Internal port 5000, external port 80
- **Static Files**: Served through Express with Vite middleware in development

## Changelog

```
Changelog:
- June 16, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```