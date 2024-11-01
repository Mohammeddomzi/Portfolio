"use client";
import { VscAccount } from "react-icons/vsc";
import { Box, UserSearch, MessageCircleMore, House } from "lucide-react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import ContactDrawer from "./contactDrawer";

const Login = () => {
  return (
    <div
      className="fixed bottom-0 h-16 w-screen flex flex-row justify-around items-center
                  bg-gradient-to-t from-gray-950 to-bl bg-opacity-90 shadow-lg backdrop-blur-lg"
    >
      <ContactDrawer />
      <SideBarIcon
        icon={<MessageCircleMore size="26" />}
        Text="Chat"
        href="/chatting"
      />
      <SideBarIcon icon={<House size="26" />} Text="Home" href="/" />
      <SideBarIcon icon={<Box size="26" />} Text="Random" href="/Random" />
      <button onClick={() => signIn("google")}>
        <SideBarIcon icon={<VscAccount size="26" />} href="/" />
      </button>
    </div>
  );
};

const SideBarIcon = ({
  icon,
  Text,
  href,
}: {
  icon: React.ReactNode;
  Text?: string;
  href: string;
}) => (
  <Link href={href}>
    <div className="sidebar-icon group relative flex flex-col items-center">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{Text}</span>
    </div>
  </Link>
);

export default Login;
