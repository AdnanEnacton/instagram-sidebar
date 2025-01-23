"use client";
import Link from "next/link";
import React from "react";
import {
  SvgAiStudioIcon,
  SvgCreateIcon,
  SvgExploreIcon,
  SvgHomeIcon,
  SvgInstagramIcon,
  SvgInstagramLogo,
  SvgMenuIcon,
  SvgMessengerIcon,
  SvgNotificationIcon,
  SvgReelsIcon,
  SvgSearchIcon,
  SvgThreadsIcon,
  SvgUserIcon,
} from "../../../public/Icons/Icons";
import { usePathname } from "next/navigation";

const SideBarTopData = [
  { id: 1, name: "Home", icon: <SvgHomeIcon />, path: "/" },
  { id: 2, name: "Search", icon: <SvgSearchIcon />, path: "/item/search" },
  { id: 3, name: "Explore", icon: <SvgExploreIcon />, path: "/item/explore" },
  { id: 4, name: "Reels", icon: <SvgReelsIcon />, path: "/item/reels" },
  {
    id: 5,
    name: "Messages",
    icon: <SvgMessengerIcon />,
    path: "/item/messages",
  },
  {
    id: 6,
    name: "Notifications",
    icon: <SvgNotificationIcon />,
    path: "/item/notifications",
  },
  { id: 7, name: "Create", icon: <SvgCreateIcon />, path: "/item/create" },
  { id: 8, name: "Profile", icon: <SvgUserIcon />, path: "/item/profile" },
];

const SideBarBottomData = [
  {
    id: 1,
    name: "AI Studio",
    icon: <SvgAiStudioIcon />,
    path: "/item/ai-studio",
  },
  { id: 2, name: "Threads", icon: <SvgThreadsIcon />, path: "/item/threads" },
  { id: 3, name: "More", icon: <SvgMenuIcon />, path: "/item/more" },
];

function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="hidden h-screen w-fit xl:min-w-[335px] px-3 pt-2 pb-5 md:flex flex-col border-r-2 border-[#262626] space-y-5">
      <Link href="/" className="p-4">
        <p className="xl:hidden">
          <SvgInstagramIcon />
        </p>
        <p className="hidden xl:block">
          <SvgInstagramLogo />
        </p>
      </Link>
      <div className="h-full flex flex-col justify-between">
        <div>
          {SideBarTopData.map((item) => (
            <Link
              className={`flex items-center gap-4 p-3 my-1 justify-center xl:justify-start ${
                pathname === item.path ? "font-bold" : ""
              }`}
              href={item.path}
              key={item.id}
            >
              {item.icon}
              <p className="hidden xl:block">{item.name}</p>
            </Link>
          ))}
        </div>
        <div>
          {SideBarBottomData.map((item) => (
            <Link
              className={`flex items-center justify-center xl:justify-start gap-4 p-3 my-1 ${
                pathname === item.path ? "font-bold" : ""
              }`}
              href={item.path}
              key={item.id}
            >
              {item.icon}
              <p className="hidden xl:block">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
