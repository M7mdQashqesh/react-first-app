# First App - Student Management System

This project was developed during the Gaza Sky Geeks (GSG) React and Next.js course. It's a student management system built with React, TypeScript, and Vite.

## Project Overview

The application is a student management system that includes features like:
- Student attendance tracking
- Course management
- Student details viewing
- Authentication and protected routes
- Local storage integration

## Tech Stack

- **React** - A JavaScript library for building user interfaces
- **TypeScript** - For type-safe code development
- **Vite** - Next generation frontend tooling
- **React Router DOM** - For client-side routing
- **CSS** - For styling components

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── absents/       # Attendance tracking components
│   ├── common/        # Shared components like guards
│   ├── courses-list/  # Course management components
│   ├── nav-bar/       # Navigation component
│   └── student/       # Student-related components
├── hooks/             # Custom React hooks
├── providers/         # Context providers
├── screens/           # Application pages/routes
├── state/            # State management
└── utils/            # Utility functions
```

## Features

- **Authentication** - Secure login system with protected routes
- **Student Management** - Add and view student details
- **Course Management** - Handle course listings and information
- **Attendance Tracking** - Track student absences
- **Responsive Design** - Mobile-friendly interface

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Development

This project uses:
- TypeScript for type checking
- ESLint for code linting
- React Router for navigation
- Local storage for data persistence

## Course Context

This project was implemented as part of the GSG (Gaza Sky Geeks) React and Next.js course curriculum, focusing on modern web development practices and React ecosystem.
