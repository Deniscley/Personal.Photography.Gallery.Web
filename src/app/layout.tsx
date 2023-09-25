// "use client";
import Navbar from "@/components/layout/navbar/navbar";
import "../styles/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { kalam } from "@/assets/fonts/fonts";
import Footer from "@/components/layout/footer/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deniscley Marfran - Galeria de Fotografias Pessoal",
  description: "Este é o meu site pessoal de fotografias.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={kalam.className} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
