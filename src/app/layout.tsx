import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import styles from "./page.module.css";
import NavLink from "@/components/navlink";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Try Angle",
  description: "A portfolio site about trying new things.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <nav>
          <div className={styles.navWrapper}>
            <NavLink href="/" label="Home" />
            <NavLink href="/about" label="About Me" />
            <NavLink href="/projects" label="Projects" />
            <NavLink href="/contact" label="Contact Page" />
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
