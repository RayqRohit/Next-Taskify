import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
