import type { Metadata } from "next";
import { Tomorrow } from "next/font/google";
import "./globals.css";

const tomorrow = Tomorrow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-tmr",
});

export const metadata: Metadata = {
  title: "Milap Magar",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body
        className={`${tomorrow.variable} font-[var(--font-tmr)] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
