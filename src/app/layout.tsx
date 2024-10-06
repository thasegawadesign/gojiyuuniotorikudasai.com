import { GoogleAnalytics } from "@next/third-parties/google";
import clsx from "clsx";
import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "ご自由にお取りください.com",
  description: "ご自由にお取りください.com",
};

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

const isProduction = process.env.NODE_ENV === "production";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={clsx(notoSansJP.className)}>{children}</body>
      {isProduction && <GoogleAnalytics gaId="G-1S7X4290NM" />}
    </html>
  );
}
