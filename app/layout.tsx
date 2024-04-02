import { hindVadodara } from "@/fonts";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://myluck.no"
    : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
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
      <head>
        <script
          defer
          data-domain="myluck.no"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body className={hindVadodara.className}>
        {/* <Header /> */}
        {children}
        <Analytics />
        {/* <Footer /> */}
      </body>
    </html>
  );
}
