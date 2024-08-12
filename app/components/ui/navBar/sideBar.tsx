"use client";
import { VscAccount } from "react-icons/vsc";
import { IoChatbubblesOutline } from "react-icons/io5";
import { LuHome } from "react-icons/lu";
import { TbHexagon3D } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import Link from "next/link";
import HoverAvatar from "./hoverAvatar";

const SideBar = () => {
  return (
    <div
      className="fixed bottom-0 h-16 w-screen flex flex-row justify-around items-center
                  bg-gradient-to-t from-gray-900 to-gray-800 bg-opacity-90 shadow-lg backdrop-blur-lg"
    >
      <SideBarIcon
        icon={<RiContactsLine size="22" />}
        Text="Contact"
        href="/Contact"
      />
      <SideBarIcon
        icon={<IoChatbubblesOutline size="32" />}
        Text="Chat"
        href="/chatting"
      />
      <SideBarIcon icon={<LuHome size="20" />} Text="Home" href="/" />
      <SideBarIcon icon={<TbHexagon3D size="20" />} Text="3D" href="/3D" />
      <HoverAvatar />
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
