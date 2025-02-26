# Potato Chat - Next.js 15 + React 19 Project

A modern messaging platform mockup built with Next.js 15 and React 19, featuring a responsive design for both desktop and mobile devices.

## Features

- Responsive design that adapts to desktop and mobile devices
- Interactive UI elements with hover effects
- Feature showcase with animated cards
- Mobile-optimized navigation with hamburger menu
- Sidebar navigation with tooltips
- Scroll-to-top functionality

## Tech Stack

- **Next.js 15**: For server-side rendering, routing, and optimizations
- **React 19**: For component-based UI development with the latest features
- **Tailwind CSS**: For utility-first styling
- **React Icons**: For high-quality icons
- **Heroicons**: For additional icon options

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/potato-chat-next.git
cd potato-chat-next
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
potato-chat-next/
├── public/
│   └── images/
│       ├── ic_header_logo.svg
│       ├── ic_safe.svg
│       └── ... (other icons)
├── src/
│   ├── app/
│   │   ├── layout.js
│   │   ├── page.js
│   │   └── globals.css
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Feedback.jsx
│   │   └── Footer.jsx
│   └── constants/
│       └── features.js
├── tailwind.config.js
├── next.config.js
└── package.json
```

## Key Components

- **Navbar**: Responsive navigation bar with mobile menu
- **Hero**: Main landing section with download options
- **Features**: Grid of feature cards with hover effects
- **Sidebar**: Fixed sidebar with navigation icons and tooltips
- **Footer**: Responsive footer with links and subscription form

## Deployment to Vercel

Next.js projects deploy seamlessly to Vercel:

1. Push your code to a GitHub repository
2. Go to [vercel.com](https://vercel.com/) and sign in
3. Click "Add New..." → "Project"
4. Import your GitHub repository
5. Vercel will automatically detect it's a Next.js project
6. Click "Deploy"

## Key Benefits of Next.js 15 + React 19

1. **Performance**: Next.js 15 includes optimizations for faster page loads and better Core Web Vitals
2. **Image Optimization**: Automatic image optimization with the Next.js Image component
3. **Server Components**: React 19 server components for improved performance
4. **App Router**: More intuitive routing with nested layouts
5. **Built-in SEO**: Improved metadata API for better SEO
6. **Streaming**: Incremental rendering for faster initial page loads
7. **Vercel Integration**: Seamless deployment and analytics

## Mobile Optimization

The project includes specific optimizations for mobile devices:
- Responsive layout that adapts to screen size
- Touch-friendly UI elements
- Mobile-specific navigation with hamburger menu
- Optimized image sizes for faster loading on mobile networks

## Browser Compatibility

The application is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Android Chrome)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Design inspiration from modern messaging platforms
- Icons from React Icons and Heroicons
- Tailwind CSS for the utility-first styling approach
