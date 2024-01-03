import { Header } from "@/app/components/Header";
import { hindVadodara } from "@/fonts";
import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "Myluck by Mila",
  description: "Gjennomfør treningsmaraton sammen med Mila på Myluck-appen",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-white ">
      <body className={hindVadodara.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
