import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation } from "@/components/layout/navigation";
import { ThemeProvider } from "@/components/providers/theme-provider";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chang's Portfolio",
  description:
    "張勝麟（Sheng-Lin Chang）— 彰師大資工大四，全端開發與電腦視覺。展示 Fast-CLAHE 專題與上線全端作品。",
  openGraph: {
    title: "Chang's Portfolio",
    description:
      "彰師大資工大四｜全端開發與電腦視覺 — Fast-CLAHE 與上線全端作品",
    url: "https://slchang-portfolio.vercel.app/",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
