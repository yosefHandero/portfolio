import type { Metadata } from "next";
import { Geist } from "next/font/google";
import MotionProvider from "@/components/ui/MotionProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yosef Handero | Full-Stack Web Developer",
  description:
    "Portfolio of Yosef Handero — full-stack developer who designs, builds, and deploys React and Next.js apps. Four live projects, skills, and contact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col" suppressHydrationWarning>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
