import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./components/ui/navBar/sideBar";
import { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mohammed Portfolio",
  description: "Mohammed Alammar Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <SideBar />
        <Analytics />
      </body>
    </html>
  );
}
