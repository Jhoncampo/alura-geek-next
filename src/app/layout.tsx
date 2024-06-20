import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Alura Geek",
  description:
    "Descubre lo mejor en productos geek en Alura Geek. Ofrecemos una amplia gama de artículos como figuras de acción, cómics, ropa temática, gadgets y más. Compra con confianza y disfruta de envío rápido y seguro. ¡Visítanos y encuentra tus productos favoritos hoy!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
