# XuanRong Frontend

A comprehensive Next.js-based frontend application for the XuanRong project, featuring weather monitoring, API integration, and modern React components with responsive design.

## Project Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured with:

- **Next.js 15.5.0** with Turbopack for fast development
- **React 19.1.0** with TypeScript support
- **Tailwind CSS 4** for styling
- **ESLint** for code quality

## Features

### 🌐 Navigation System
- **Responsive Navigation Bar**: Fixed navigation with mobile-friendly hamburger menu
- **Active State Indicators**: Visual feedback for current page location
- **Brand Integration**: XuanRong branding throughout the application

### 🌦️ Weather Monitoring System
- **Weather Stations Grid**: Interactive grid displaying multiple weather stations
- **Real-time Status Indicators**: Online/offline/maintenance status with color coding
- **Detailed Station Views**: Comprehensive weather data including temperature, humidity, pressure, wind, UV index
- **Dynamic Routing**: Individual pages for each weather station (`/weather/[station]`)

### 🔌 API Integration
- **Demo API Page**: Interactive demo page that connects to backend API endpoints
- **Error Handling**: Comprehensive error handling for API calls
- **Loading States**: User-friendly loading indicators throughout the app

### 🎨 Design & UX
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Consistent Styling**: Unified color scheme and component design
- **TypeScript**: Full TypeScript support for type safety
- **Accessibility**: Semantic HTML and ARIA labels

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Application Routes

### Main Routes
- **`/`** - Home page with API demo functionality
- **`/weather`** - Weather stations grid overview
- **`/weather/[station]`** - Individual weather station details

### API Integration

The demo page includes functionality to call the backend API at `http://localhost:8000/api/v1/hello/XuanRong`. Make sure your backend server is running on port 8000 for full functionality.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with navigation
│   ├── page.tsx             # Home/demo page
│   ├── globals.css          # Global styles
│   └── weather/
│       ├── page.tsx         # Weather stations grid
│       └── [station]/
│           └── page.tsx     # Individual station details
├── components/
│   └── Navigation.tsx       # Responsive navigation component
└── ...
```

## Weather Station Features

The weather monitoring system includes:

- **6 Mock Weather Stations** across major Chinese cities
- **Real-time Data Display**: Temperature, humidity, pressure, wind, visibility, UV index
- **Status Monitoring**: Online/offline/maintenance indicators
- **Detailed Information**: Station coordinates, elevation, installation date
- **Interactive Cards**: Click to view detailed station information

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
