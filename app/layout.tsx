import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SmartSEO | Rank your websites on autopilot",
  description:
    "One simple dashboard to reverse-engineer competitors, track your SEO growth, and generate production-ready code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body
        className={`${inter.className} bg-background text-on-background min-h-screen flex flex-col font-body-md overflow-x-hidden selection:bg-primary selection:text-on-primary`}
      >
        {children}
      </body>
    </html>
  );
}
