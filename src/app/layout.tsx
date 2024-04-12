import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header, Sidebar, Footer } from "./components/Layout/index";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Arisha's Diary",
    template: "%s | section",
  },
  description: "Generated for personal use",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className="wrapper">
          <Header layoutStyle="header" />
          <Sidebar layoutStyle="sidebar" />
          <div className="maincontent">{children}</div>
          <Footer layoutStyle="footer" />
        </div>
      </body>
    </html>
  );
}
