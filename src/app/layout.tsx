import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aashirbad Care | Compassionate Home Nursing Service in Nepal",
  description: "Affordable, 24/7 home healthcare and emotional support in Nepal. Certified professionals, personalized care, and flexible pricing. Book Aashirbad Care today!",
  keywords: [
    "home nursing Nepal",
    "Aashirbad Care",
    "elderly care",
    "post-surgery care",
    "personal care",
    "home healthcare",
    "nursing service Kathmandu",
    "affordable home care"
  ],
  openGraph: {
    title: "Aashirbad Care | Compassionate Home Nursing Service in Nepal",
    description: "Affordable, 24/7 home healthcare and emotional support in Nepal. Certified professionals, personalized care, and flexible pricing. Book Aashirbad Care today!",
    url: "https://aashirbadcare.com/",
    siteName: "Aashirbad Care",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#f6fbff]`}
      >
        {children}
      </body>
    </html>
  );
}
