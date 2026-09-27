import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Spire Academy | School & College - Inspiring Excellence",
  description:
    "Spire School & College (Morning) and Spire Academy / Evening Coaching (Evening). Quality education with highly qualified faculty, digital skills training, and modern facilities in Wah Cantt.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col bg-white text-gray-800">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
