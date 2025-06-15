import type { Metadata } from "next";
// 使用系统字体，避免在构建时从 Google Fonts 获取资源
import "./globals.css";

export const metadata: Metadata = {
  title: "我的个人主页",
  description: "一个简洁大方的个人网站",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
