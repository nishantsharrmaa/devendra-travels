import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Devendra Sharma Tour & Travels",
  description:
    "Explore the incredible beauty of India with Devendra Sharma Tour & Travels. Trusted domestic tour packages across India.",
  keywords: "tour and travel, India tours, domestic travel, Devendra Sharma, travel packages",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
