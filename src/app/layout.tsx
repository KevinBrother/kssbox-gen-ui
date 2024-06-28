import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./header";
import { CodeEditor } from "./code-editor";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "kssbox-gen-ui",
  description: "A web app for generating ui code for kssbox",
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
      </body>
    </html>
  );
}
