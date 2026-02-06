# Expert Wood Flooring - Complete Next.js Website

## Overview
This is a complete Next.js website for Expert Wood Flooring, a premium hardwood flooring company with 20 years of experience, specializing in residential, commercial, and gym floor services including installation, repair, scrape, sand & refinish. Call 929-235-6311 for free estimates.

## Features
- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Layout**: Mobile-first design that works on all devices
- **Component-Based Architecture**: Modular components for easy maintenance
- **SEO Optimized**: Proper metadata and structured content
- **Fast Performance**: Optimized for speed and user experience

## Pages
- **Home**: Hero section, services overview, gallery, testimonials, contact form
- **Services**: Detailed hardwood flooring services
- **Gallery**: Portfolio of completed projects with filtering
- **About**: Company story and values
- **Contact**: Contact form and business information

## Components
- Header with responsive navigation
- Hero with image carousel
- Services grid with icons and descriptions
- Gallery with category filtering and lightbox
- Testimonials from satisfied customers
- Contact form with validation
- Footer with links and social media

## Customization for Wood Flooring
- **Highlights**: 20 Years of Experience, Residential, Commercial, Gym floors
- **Services**: Installation, Repair, Scrape, Sand & Refinish
- Focus on hardwood types: oak, walnut, hickory, ash
- Emphasis on sustainability and eco-friendly practices
- Room inspiration and design consultation services
- Premium quality craftsmanship messaging

## Setup Instructions

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Add Images**:
   Place the following images in `public/images/`:
   - `logo.png` - Company logo (50x50px recommended)
   - `hero-oak-hardwood.jpg` - Oak hardwood hero image
   - `hero-walnut-hardwood.jpg` - Walnut hardwood hero image
   - `hero-hickory-hardwood.jpg` - Hickory hardwood hero image
   - `hero-ash-hardwood.jpg` - Ash hardwood hero image
   - Service images (service-*.jpg)
   - Gallery images (gallery-*.jpg)
   - Testimonial images (testimonial-*.jpg)
   - `og-image.jpg` - Open Graph image for social sharing

3. **Update Content**:
   - Edit contact information in components and pages (phone: 929-235-6311)
   - Customize testimonials and services
   - Update business hours and service areas

4. **Run Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   npm start
   ```

## Color Scheme
- Primary: Amber (#D97706) for CTAs and accents
- Background: White and light gray
- Text: Dark gray for readability

## Technologies Used
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first styling
- **ESLint**: Code quality and consistency

## Deployment
Ready for deployment on Vercel, Netlify, or any Node.js hosting platform.

## Contact Form
The contact form currently logs submissions to console. To make it functional:
1. Set up a backend API endpoint
2. Configure email service (e.g., Nodemailer with SMTP)
3. Add form validation and spam protection

## Image Optimization
All images use Next.js Image component for automatic optimization, lazy loading, and responsive sizing.

## Scripts
- `npm run dev`: Start the development server
- `npm run build`: Build the application for production
- `npm run start`: Start the production server
- `npm run lint`: Run ESLint for code quality checks

## Dependencies
### Production
- **Next.js**: 16.1.6 - React framework
- **React**: 19.2.3 - UI library
- **React DOM**: 19.2.3 - React rendering
- **clsx**: 2.1.1 - Utility for conditional CSS classes
- **tailwind-merge**: 3.4.0 - Tailwind CSS utility merger

### Development
- **TypeScript**: 5.x - Type-safe JavaScript
- **Tailwind CSS**: 4.x - Utility-first CSS framework
- **ESLint**: 9.x - Code linting
- **@types/node**: 20.x - Node.js types
- **@types/react**: 19.x - React types
- **@types/react-dom**: 19.x - React DOM types

## Contributing
We welcome contributions! To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

Please ensure your code follows our coding standards and includes tests where applicable.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support
For questions or support, please contact us at 929-235-6311 or email support@expertwoodflooring.com.
