import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Casa do Pinhal Comporta",
  description:
    "Alojamento local premium na Comporta, pensado para dias tranquilos, luz natural e reservas diretas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-PT">
      <body className={`${manrope.variable} antialiased`}>{children}</body>
    </html>
  );
}
