// app/layout.tsx
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Courtava – Basketball Runs, Organized",
  description:
    "Courtava helps hoopers find, organize, and join basketball runs without the group chat chaos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${spaceMono.variable} antialiased bg-sky-100`}>
        {children}
      </body>
    </html>
  );
}
