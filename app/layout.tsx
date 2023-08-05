import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";

// This is a font package (Google font)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next tutorial title",
  description: "tutorial description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="px-10 pt-5">
          <Link prefetch href="/" className="text-2xl font-semibold">
            GG Bond <span className="text-teal-500">DB</span>
          </Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
