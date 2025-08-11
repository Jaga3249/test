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
  metadataBase: new URL("https://neuraltechanalytics.com"),
  title: {
    default: "Courses | Neural Techanalytics",
    template: "%s | Neural Techanalytics",
  },
  description:
    "Join thousands of learners and master new skills with our expert-led courses. Boost your career today!",
  keywords: [
    "online courses",
    "learn online",
    "full stack course",
    "data engineering",
    "Power BI",
    "Python",
    "SQL",
    "Next.js",
  ],
  authors: [
    { name: "Neural Techanalytics", url: "https://neuraltechanalytics.com" },
  ],
  creator: "Neural Techanalytics",
  openGraph: {
    title: "Courses | Neural Techanalytics",
    description:
      "Explore high-quality courses and learn from industry experts. Start your learning journey today!",
    url: "https://nta-courses.web.app/",
    siteName: "Neural Techanalytics",
    images: [
      {
        url: "https://firebasestorage.googleapis.com/v0/b/nta-courses.firebasestorage.app/o/nta-courses-thumbnails%2F1_Data%20Engineering%20Masterclass%20with%20Databricks%2C%20Python%20and%20SQL.jpg?alt=media&token=b79e5e7c-af1e-48be-a537-220a7c07f564",
        width: 1200,
        height: 630,
        alt: "Courses | Neural Techanalytics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/assets/favicon.svg",
    shortcut: "/assets/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://neuraltechanalytics.com",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
