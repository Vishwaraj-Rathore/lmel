import type { Metadata } from "next";
import { Cormorant_Garamond } from "next/font/google";
import "@/app/styles/globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Last Mile",
  description: "Your website description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cormorantGaramond.className}>{children}</body>
    </html>
  );
}
