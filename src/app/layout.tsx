import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "@/app/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Last Mile Enterprises Limited",
  description: "Your website description",
  icons: {
    icon: [{ url: "/icon.png" }, { url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`pt-[75px] mobile:pt-[78px] tablet:pt-[85px] bg-[#DDE6ED] ${jost.className}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
