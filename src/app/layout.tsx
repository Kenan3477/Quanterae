import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Quanterae Solutions LTD - Business Management Consulting",
  description: "Expert business management consulting services across all departments - Sales, Retention, Staff Management, and Process Optimization. Transform your business with Quanterae Solutions.",
  keywords: ["business consulting", "management consulting", "sales optimization", "staff management", "process improvement", "retention strategies"],
  authors: [{ name: "Quanterae Solutions LTD" }],
  openGraph: {
    title: "Quanterae Solutions LTD - Business Management Consulting",
    description: "Expert business management consulting services for growing businesses",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
