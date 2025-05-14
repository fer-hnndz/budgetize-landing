import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

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
      <head>
        <Script
          id="mcjs"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,h,i,m,p){
                m=c.createElement(h),p=c.getElementsByTagName(h)[0];
                m.async=1;m.src=i;p.parentNode.insertBefore(m,p);
              })(document,"script","https://chimpstatic.com/mcjs-connected/js/users/65b6be58aa0fcd8c541241f1f/85b0469d05f9df96de3e46807.js");
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
