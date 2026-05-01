import type { Metadata } from "next";
import "@/styles/globals.css";
export const metadata: Metadata = { title: "FixMaster Pro", description: "نظام إدارة ورشة صيانة أجهزة ذكية" };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">{children}</body>
    </html>
  );
}
