import type { Metadata } from "next";
import { Syne, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.haiderhamayoun.com/"),
  title: "Muhammad Haider Hamayoun | Freelance Full-Stack Developer",
  description:
    "Muhammad Haider Hamayoun is a freelance full-stack developer providing paid web development services to international clients, including Webflow, frontend, backend, and scalable web applications.",
  icons: {
    icon: "/webclip.png?v=3",
    shortcut: "/webclip.png?v=3",
    apple: "/webclip.png?v=3",
  },
  openGraph: {
    title: "Muhammad Haider Hamayoun | Freelance Full-Stack Developer",
    description:
      "Muhammad Haider Hamayoun is a freelance full-stack developer providing paid web development services to international clients, including Webflow, frontend, backend, and scalable web applications.",
    images: [
      {
        url: "https://cdn.prod.website-files.com/694be84a2cb92549ecc03854/69e4f5a9f4bee5c6412eca7f_cover.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Haider Hamayoun | Freelance Full-Stack Developer",
    description:
      "Muhammad Haider Hamayoun is a freelance full-stack developer providing paid web development services to international clients, including Webflow, frontend, backend, and scalable web applications.",
    images: [
      "https://cdn.prod.website-files.com/694be84a2cb92549ecc03854/69e4f5a9f4bee5c6412eca7f_cover.png",
    ],
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
        className={`${syne.variable} ${dmSans.variable} ${playfair.variable} font-sans text-[17px] leading-relaxed antialiased md:text-lg`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
