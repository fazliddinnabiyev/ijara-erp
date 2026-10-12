import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "KvartiraERP — Ijara boshqaruvi",
  description: "Shaxsiy kvartira ijarasi, shartnomalar, to‘lovlar va xarajatlarni boshqarish tizimi",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="uz">
      <body className="antialiased">{children}</body>
    </html>
  );
}
