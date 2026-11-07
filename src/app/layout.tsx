import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const figtree = localFont({
  src: [
    {
      path: "../fonts/figtree-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/figtree-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/figtree-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/figtree-bold.ttf",
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
      path: "../fonts/polymath-display-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/polymath-display-medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/polymath-display-semibold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/polymath-display-bold.ttf",
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
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
