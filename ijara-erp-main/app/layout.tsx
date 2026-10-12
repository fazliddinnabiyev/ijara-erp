import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KvartiraERP — Ijara boshqaruvi",
  description: "Shaxsiy kvartira ijarasi, shartnomalar, to‘lovlar va xarajatlarni boshqarish tizimi",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
