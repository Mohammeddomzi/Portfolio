"use client";
import { CalendarDays, House } from "lucide-react";
// Hidden imports - preserved for later use:
// import { MessageCircleMore } from "lucide-react";
import Link from "next/link";
import ContactDrawer from "./contactDrawer";

const SideBar = () => {
  return (
    <div
      className="fixed bottom-0 h-16 w-screen flex flex-row justify-around items-center
                  bg-gradient-to-t from-gray-950 "
    >
      <ContactDrawer />
      {/* Commented out - Chat page hidden but code preserved in app/_chatting folder */}
      {/* To restore: rename app/_chatting to app/chatting and uncomment below */}
      {/* <SideBarIcon
        icon={<MessageCircleMore size="26" />}
        Text="Chat"
        href="/chatting"
      /> */}
      <SideBarIcon icon={<House size="26" />} Text="Home" href="/" />
      <SideBarIcon
        icon={<CalendarDays size="26" />}
        Text="Timeline"
        href="/Timeline"
      />
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

export default SideBar;
