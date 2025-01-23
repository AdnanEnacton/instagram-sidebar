import Link from "next/link";
import React from "react";
import {
  SvgHomeIcon,
  SvgSearchIcon,
  SvgReelsIcon,
  SvgMessengerIcon,
  SvgUserIcon,
} from "../../../public/Icons/Icons";
const MobileNavigation = [
  {
    id: 1,
    icon: <SvgHomeIcon />,
    path: "/",
  },
  {
    id: 2,
    icon: <SvgSearchIcon />,
    path: "/item/search",
  },
  {
    id: 3,
    icon: <SvgReelsIcon />,
    path: "/item/reels",
  },
  {
    id: 4,
    icon: <SvgMessengerIcon />,
    path: "/item/messenger",
  },
  {
    id: 5,
    icon: <SvgUserIcon />,
    path: "/item/profile",
  },
];

export default function BottomNavigation() {
  return (
    <div className="flex justify-evenly md:hidden">
      {MobileNavigation.map((item) => (
        <Link
          className="flex items-center gap-4 p-3 my-1 justify-center xl:justify-start"
          href={item.path}
          key={item.id}
        >
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
