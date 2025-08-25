# XuanRong Frontend

A Next.js-based frontend application for the XuanRong project, featuring API integration and modern React components.

## Project Overview

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) and configured with:

- **Next.js 15.5.0** with Turbopack for fast development
- **React 19.1.0** with TypeScript support
- **Tailwind CSS 4** for styling
- **ESLint** for code quality

## Features

- **API Demo Page**: Interactive demo page that connects to backend API endpoints
- **Responsive Design**: Mobile-first design using Tailwind CSS
- **Error Handling**: Comprehensive error handling for API calls
- **Loading States**: User-friendly loading indicators
- **TypeScript**: Full TypeScript support for type safety

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

### API Integration

The demo page includes functionality to call the backend API at `http://localhost:8000/api/v1/hello/XuanRong`. Make sure your backend server is running on port 8000 for full functionality.

## Project Structure

```
src/
├── app/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout component
│   └── page.tsx         # Main demo page
└── ...
```

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
