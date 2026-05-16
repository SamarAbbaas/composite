import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import localFont from "next/font/local";


const Silver = localFont({
  src: [
    {
      path: '../public/Silver.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/SilverItalic.woff2',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--font-silver',
});

const ibmPlexMono = IBM_Plex_Mono({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
});

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: " Composit app",
  description: "Generate",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", geistSans.variable, geistMono.variable, ibmPlexMono.variable, Silver.variable, "font-sans", figtree.variable)}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
