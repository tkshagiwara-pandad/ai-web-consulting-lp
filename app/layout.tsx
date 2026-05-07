import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "地域中小企業のためのAI・Web活用相談室",
  description:
    "古いHP・止まったSNS・伝わらない文章を、AIで今の商売に合う形へ整える地域中小企業向けの相談室です。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
