import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import DefualtNavbar from "@/component/Bars/DefualtNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HM",
  description: "Manage your products and customers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
