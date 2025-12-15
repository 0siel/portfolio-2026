// src/app/about/page.tsx
import React from 'react';
import type { NextPage } from 'next'; // Example of importing a Next.js type

// Define a type for your component props (optional but good practice)
interface AboutPageProps {
  name: string;
}

// Define the component using the NextPage type for added safety
const AboutPage: NextPage<AboutPageProps> = ({ name }) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-4">
        Hello, I'm {name}
      </h1>
      <p className="text-lg">
        This is the perfect place to talk about your skills and experience!
      </p>
    </main>
  );
};

// To pass props in Next.js App Router, you typically fetch data
// in the component itself or use URL params. For this simple
// example, we'll export the component directly.

export default function About() {
  // In a real app, you would fetch the user name here.
  const myName = "Your Name";
  return <AboutPage name={myName} />;
}