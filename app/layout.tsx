import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import SideBar from "./components/ui/navBar/sideBar";

import SessionProvider from "./SessionProvider";
import Login from "./components/ui/navBar/login";

const inter = Inter({ subsets: ["latin"] });




export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en">
      <body className={inter.className}>
      <SessionProvider session={session}>
      {children}
      {session? (<SideBar/>): (<Login/>)}
      </SessionProvider>
      </body>
    </html>
  );
}
