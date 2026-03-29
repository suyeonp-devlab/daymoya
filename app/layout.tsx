import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import "../styles/animation.css";

export const metadata: Metadata = {
  title: {
    default: "데이모야",
    template: "%s | 데이모야"
  },
  description: "일정을 기록하고, 필요한 순간 함께 확인해요",
  openGraph: {
    title: "데이모야",
    description: "일정을 기록하고, 필요한 순간 함께 확인해요",
    url: "https://daymoya.com",
    siteName: "데이모야",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/images/og-image.png", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
