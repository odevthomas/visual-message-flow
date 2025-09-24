# YOUWARE Template - React Modern Development Guide

This is a modern React application template built with React 18, TypeScript, Vite, and Tailwind CSS.

## IMPORTANT: Update This File After Completion

After completing the user requirements, please update this YOUWARE.md file to:
1. Remove the template notice section
2. Add specific project details and documentation
3. Include any special instructions for future development
4. Document key features implemented for the user
5. Follow the user's preferred language, not the default language of this file

## Project Status

- **Project Type**: React + TypeScript Modern Web Application
- **Entry Point**: `src/main.tsx` (React application entry)
- **Build System**: Vite 7.0.0 (Fast development and build)
- **Styling System**: Tailwind CSS 3.4.17 (Atomic CSS framework)

## Core Design Principles

### Context-Driven Design Strategy
- Scenario Analysis First: Analyze the user's specific use case, target audience, and functional requirements before making design decisions
- Contextual Appropriateness: Choose design styles that align with the content purpose
- User Journey Consideration: Design interactions and visual flow based on how users will actually engage with the content
IMPORTANT: When users don't specify UI style preferences, always default to modern and responsive UI design with minimalist aesthetic

### Modern Visual Sophistication
- Contemporary Aesthetics: Embrace contemporary design trends for modern aesthetics
- Typography Excellence: Master type scale relationships and strategic white space for premium hierarchy
- Advanced Layouts: Use CSS Grid, asymmetrical compositions, and purposeful negative space
- Strategic Color Systems: Choose palettes based on brand context and psychological impact

### Delightful Interactions
- Dynamic Over Static: Prioritize interactive experiences over passive presentations
- Micro-Interactions: Subtle hover effects, smooth transitions, and responsive feedback animations
- Animation Sophistication: Layer motion design that enhances usability without overwhelming
- Surprise Elements: Custom cursors, hidden Easter eggs, playful loading states, and unexpected interactive details (if applicable)

### Technical Excellence
- Reusable, typed React components with clear interfaces
- Leverage React 18's concurrent features to enhance user experience
- Adopt TypeScript for type-safe development experience
- Use Zustand for lightweight state management
- Implement smooth single-page application routing through React Router DOM

## Project Architecture

### Directory Structure

```
project-root/
├── index.html              # Main HTML template
├── package.json            # Node.js dependencies and scripts
├── package-lock.json       # Lock file for npm dependencies
├── README.md              # Project documentation
├── YOUWARE.md             # Development guide and template documentation
├── yw_manifest.json       # Project manifest file
├── vite.config.ts         # Vite build tool configuration
├── tsconfig.json          # TypeScript configuration (main)
├── tsconfig.app.json      # TypeScript configuration for app
├── tsconfig.node.json     # TypeScript configuration for Node.js
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── dist/                  # Build output directory (generated)
└── src/                   # Source code directory
    ├── App.tsx            # Main application component
    ├── main.tsx           # Application entry point
    ├── index.css          # Global styles and Tailwind CSS imports
    ├── vite-env.d.ts      # Vite type definitions
    ├── api/               # API related code
    ├── assets/            # Static assets
    ├── components/        # Reusable components
    ├── layouts/           # Layout components
    ├── pages/             # Page components
    ├── store/             # State management
    ├── styles/            # Style files
    └── types/             # TypeScript type definitions
```

### Code Organization Principles

- Write semantic React components with clear component hierarchy
- Use TypeScript interfaces and types to ensure type safety
- Create modular components with clear separation of concerns
- Prioritize maintainability and readability

## Tech Stack

### Core Framework
- **React**: 18.3.1 - Declarative UI library
- **TypeScript**: 5.8.3 - Type-safe JavaScript superset
- **Vite**: 7.0.0 - Next generation frontend build tool
- **Tailwind CSS**: 3.4.17 - Atomic CSS framework

### Routing and State Management
- **React Router DOM**: 6.30.1 - Client-side routing
- **Zustand**: 4.4.7 - Lightweight state management

### Internationalization Support
- **i18next**: 23.10.1 - Internationalization core library
- **react-i18next**: 14.1.0 - React integration for i18next
- **i18next-browser-languagedetector**: 7.2.0 - Browser language detection

### UI and Styling
- **Lucide React**: Beautiful icon library
- **Headless UI**: 1.7.18 - Unstyled UI components
- **Framer Motion**: 11.0.8 - Powerful animation library
- **GSAP**: 3.13.0 - High-performance professional animation library
- **clsx**: 2.1.0 - Conditional className utility

### 3D Graphics and Physics
- **Three.js**: 0.179.1 - JavaScript 3D graphics library
- **Cannon-es**: Modern TypeScript-enabled 3D physics engine
- **Matter.js**: 0.20.0 - 2D physics engine for web

## Technical Standards

### React Component Development Methodology

- Use functional components and React Hooks
- Implement single responsibility principle for components
- Create reusable and composable component architecture
- Use TypeScript for strict type checking

### Styling and Design System

- Use Tailwind CSS design token system
- Apply mobile-first responsive design approach
- Leverage modern layout techniques (Grid, Flexbox)
- Implement thoughtful animations and transitions through Framer Motion and GSAP
- Create immersive 3D visual experiences with Three.js
- Add realistic physics interactions using Cannon-es and Matter.js

### CSS Import Order Rules

**CRITICAL**: `@import` statements must come BEFORE all other CSS statements to avoid PostCSS warnings.

### State Management Approach

- Use Zustand for global state management
- Prioritize React built-in Hooks for local state
- Implement clear data flow and state update patterns
- Ensure state predictability and debugging capabilities

### Performance Optimization Requirements

- Use React.memo and useMemo for component optimization
- Implement code splitting and lazy loading
- Optimize resource loading and caching strategies
- Ensure all interactions work on both touch and pointer devices

## Development Commands

- **Install dependencies**: `npm install`
- **Build project**: `npm run build`

## ⚠️ CRITICAL: Do NOT Modify index.html Entry Point

**WARNING**: This is a Vite + React project. **NEVER** modify this critical line in `index.html`:

```html
<script type="module" src="/src/main.tsx"></script>
```

**Why**: This is the core entry point. Any modification will cause the app to completely stop working.

**Do instead**: Work in `src/` directory - modify `App.tsx`, add components in `src/components/`, pages in `src/pages/`.

**If accidentally modified**: 
1. Restore: `<script type="module" src="/src/main.tsx"></script>`
2. Rebuild: `npm run build`

## Landing Page Components Library

### Pre-built Business Components

This template is specifically optimized for Landing Page scenarios, featuring a comprehensive set of business components in `/src/components/` that includes 9 core landing page sections:

- **Header**: Modern navigation header with brand showcase and menu support
- **HeroSection**: Hero section with main title, subtitle, CTA buttons, and statistics
- **FeaturesSection**: Feature highlights display area with multi-column layouts
- **TestimonialsSection**: Customer testimonials and reviews showcase
- **LogoCloud**: Partner/client logo display section
- **PricingSection**: Pricing plans and subscription tiers display
- **FAQSection**: Frequently asked questions section
- **CTASection**: Call-to-action section for conversion optimization
- **Footer**: Footer component with links, contact info, and copyright

CRITICAL: Always examine the existing component code in /src/components/ first before implementation. These reference components contain essential animation patterns, interaction logic, and structural patterns that must be analyzed and adapted for your specific use case.

### Usage Guidelines

**Important Note**: These components serve as **reference templates** only and require customization based on specific business requirements:

1. **Requirements Analysis First**: Thoroughly understand the user's business scenario and target audience before implementation
2. **Component Code Review**: Mandatory step - study the existing component implementations in /src/components/ to understand their structure, animations, and interaction patterns
3. **Selective Usage**: Choose appropriate components based on business needs rather than using all components
4. **Customization Required**: Modify content, styling, interaction logic, and animation behaviors to match brand identity
5. **Component Restructuring**: Components can be split, merged, or reorganized as needed
6. **Content Replacement**: Replace example copy, images, and data with actual business content

### Anti-Homogenization Strategy

- **Content Differentiation**: Customize copy and visual elements based on industry characteristics
- **Interaction Innovation**: Design unique user interaction flows based on business requirements
- **Visual Personalization**: Adjust colors, fonts, layouts, and animations to match brand tone
- **Feature Customization**: Add or remove functional modules to meet specific business needs
- **Data Integration**: Integrate real business data and API endpoints

All components follow a zero-props design pattern for direct import and usage, but deep customization based on actual requirements is strongly recommended.

## Build and Deployment

The project uses Vite build system:
- **Development server**: `http://127.0.0.1:5173`
- **Build output**: `dist/` directory
- **Supports HMR**: Hot Module Replacement
- **Optimized production build**: Automatic code splitting and optimization

## Configuration Files

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `yw_manifest.json` - Project manifest file
