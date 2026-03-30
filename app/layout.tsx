import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// 1. Added subsets: ["latin"] to prevent Next.js build errors
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SEO SmartMaker - AI-Powered SEO Optimization Tool",
  description:
    "AI-driven tool to generate optimized meta tags, keywords, and JSON-LD schema.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      // 2. Changed ${poppins} to ${poppins.className}
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
