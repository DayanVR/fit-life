import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./ui/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s - FitLife-Pro",
    default: "FitLife-Pro",
  },
  description: "FitLife-Pro Exercises is a comprehensive fitness website designed to help users achieve their health and wellness goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <header>
          <Header />
        </header>

        {children}

        <footer className="container mx-auto border-t border-gray-400 px-4 py-8 text-center mt-auto">
          <p>&copy; 2023 FitLife. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
