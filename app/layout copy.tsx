import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from './Navbar/page'
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aesthetic Hub Sargodha",
  description: "Discover premium aesthetic treatments and professional skin care services at Aesthetic Hub Sargodha.",
  keywords: ["Aesthetic Hub", "Sargodha", "Skin Care", "Aesthetic Clinic"],
  authors: [{ name: "MQs Creativity" }],
  openGraph: {
    title: "Aesthetic Hub Sargodha",
    description: "Premium aesthetic and skin care services in Sargodha.",
    type: "website",
  },
};

// Next.js 14+ ke liye themeColor yahan define hoga
export const viewport = {
  themeColor: "#000000",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="h-full bg-slate-50 text-slate-900 flex flex-col">
        <header>
          <Navbar/>
        </header>
        <main className="flex-1 w-full">{children}</main>
      </body>
    </html>
  );
}
