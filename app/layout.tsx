import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fraunces = Fraunces({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: "400",
});

const siteDescription =
  "Full-stack AI Product Engineer — Next.js, RAG pipelines, TypeScript, PostgreSQL. Built production clinical SaaS and AI therapy platforms for UK clients. Open to remote UK and UAE roles.";

// TODO: Replace /webclip.png with a dedicated 1200×630 OG image when ready.
const ogImagePath = "/webclip.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.haiderhamayoun.com/"),
  title: "Muhammad Haider Hamayoun — AI Product Engineer",
  description: siteDescription,
  icons: {
    icon: "/webclip.png?v=3",
    shortcut: "/webclip.png?v=3",
    apple: "/webclip.png?v=3",
  },
  openGraph: {
    title: "Muhammad Haider Hamayoun — AI Product Engineer",
    description: siteDescription,
    images: [{ url: ogImagePath }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Haider Hamayoun — AI Product Engineer",
    description: siteDescription,
    images: [ogImagePath],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${fraunces.variable} font-sans text-[17px] leading-relaxed antialiased md:text-lg`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
