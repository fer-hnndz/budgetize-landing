import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Budgetize",
  description:
    "Budgetize is an open source personal finance tracker that helps you manage your money, plan expenses, and gain insights into your spending habits.",
  authors: [
    {
      name: "Jorge Hernández",
      url: "https://github.com/fer-hnndz",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="scroll-smooth">{children}</body>
    </html>
  );
}
