# Ranjana Yoga Studio - Website PRD

## Original Problem Statement
Build a visually appealing yoga studio website using content and colors from a provided PDF. Design inspired by a modern yoga website video reference. Frontend-only (React + Tailwind CSS).

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Framer Motion
- **Routing**: React Router DOM (6 pages)
- **Animations**: Framer Motion (scroll-based fade-in, parallax)
- **Styling**: Custom Tailwind config with brand colors
- **Backend**: Not needed (frontend-only static site)

## User Personas
- Prospective yoga students looking for classes
- Existing members checking schedules
- People interested in Ayurveda/acupressure/marma therapy
- Weight loss program seekers

## Core Requirements
- 6-page website: Home, About, Services, Schedule, Gallery, Contact
- Color palette: Blush Pink, Deep Rose, Beige, Sand, Gold, Ivory, Charcoal, Taupe
- Typography: Cormorant Garamond (headings) + Jost (body)
- Smooth scroll animations and parallax effects
- Contact form with dropdowns
- Gallery with lightbox
- Responsive design

## What's Been Implemented (March 2026)
- [x] Home page (Hero, Stats, Services Cards, Weight Loss, Why Us, Testimonials, CTA, Gallery Strip)
- [x] About page (Story, Instructor, Philosophy, Highlights)
- [x] Services page (5 detailed service sections with alternating layouts)
- [x] Schedule page (Weekly timetable - desktop table + mobile cards)
- [x] Gallery page (Masonry grid, Lightbox, Testimonials with stars)
- [x] Contact page (Contact info, Enquiry form, Map placeholder)
- [x] Sticky navbar with glassmorphism
- [x] Multi-column footer
- [x] Framer Motion animations
- [x] Mobile responsive with hamburger menu
- [x] Lotus SVG section dividers

## Backlog
- P0: Replace placeholder contact details with real data
- P1: Add Google Maps embed with actual coordinates
- P1: Add instructor's real name, photo, and bio
- P1: Add real testimonials from clients
- P2: Add real gallery photos
- P2: Connect contact form to email service (SendGrid/Resend)
- P2: Add SEO meta tags per page
- P3: Add WhatsApp chat widget
- P3: Add online booking/payment integration
