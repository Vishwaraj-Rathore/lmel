import type { Metadata } from "next";
import { Roboto_Slab } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Last Mile Enterprises Limited",
  description: "Your website description",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`pt-[75px] md:pt-[95px] ${robotoSlab.className}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
