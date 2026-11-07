import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const figtree = localFont({
  src: [
    {
      path: "../fonts/Figtree-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Figtree-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Figtree-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Figtree-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-figtree",
  display: "swap",
});

const polymath = localFont({
  src: [
    {
      path: "../fonts/Polymath Display Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Polymath Display Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Polymath Display Semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Polymath Display Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-polymath",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taskify - Smart Task & Project Management",
  description: "A beautiful, intelligent task management platform inspired by Trello.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${polymath.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
