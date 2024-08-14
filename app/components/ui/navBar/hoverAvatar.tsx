"use client";
import { LogOut } from "lucide-react";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/app/components/ui/avatar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/app/components/ui/hover-card";
import { signOut, useSession } from "next-auth/react";

const HoverAvatar = () => {
  const session = useSession();
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Avatar>
          <AvatarImage src={session?.data?.user?.image ?? ""} />
          <AvatarFallback>?</AvatarFallback>
        </Avatar>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src={session?.data?.user?.image ?? ""} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@{session?.data?.user?.name}</h4>
            <p className="text-sm">{session?.data?.user?.email}.</p>
            <div className="flex items-center pt-2">
              <LogOut className="mr-2 h-4 w-4 opacity-70 font-bold" />{" "}
              <span className="text-xs text-muted-foreground text-red-600 font-bold">
                <button onClick={() => signOut()}>logOut</button>
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default HoverAvatar;
