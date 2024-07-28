import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "../styles/index.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Christian Zhou",
  description: "Portfolio website for Christian Zhou",
  /* icons: {
    icon: "/favicon.ico",
  }, */
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="icon" href="public/favicon.ico" sizes="16x16" />
      </head> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
