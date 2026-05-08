import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Seda Dalkiran — Unreal Engine Game Developer",
  description:
    "Portfolio of Seda Dalkiran, an Unreal Engine Gameplay Programmer specializing in combat systems, AI behavior, and animation-driven gameplay.",
  keywords: [
    "Unreal Engine",
    "Game Developer",
    "Gameplay Programmer",
    "C++",
    "Blueprint",
    "Combat Systems",
    "AI",
  ],
  openGraph: {
    title: "Seda Dalkiran — Unreal Engine Game Developer",
    description:
      "Portfolio of Seda Dalkiran, an Unreal Engine Gameplay Programmer specializing in combat systems, AI behavior, and animation-driven gameplay.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="bg-[#0a0a0f] text-gray-200 antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
