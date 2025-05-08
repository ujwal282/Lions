import React from "react";
import {
  ChevronFirst,
  ChartColumn,
  Users,
  CircleUser,
  Boxes,
  CalendarDays,
  LogOut,
} from "lucide-react";
const Aside = () => {
  const navigation = [
    {
      icon: <ChartColumn />,
      label: "Dashboard",
    },
    {
      icon: <Users />,
      label: "Admin",
    },
    {
      icon: <CircleUser />,
      label: "Profile",
    },
    {
      icon: <Boxes />,
      label: "Clubs",
    },
    {
      icon: <CalendarDays />,
      label: "Events",
    },
  ];
  return (
    <aside className="flex flex-col justify-start items-start gap-10 bg-blue-800 w-2xs h-screen">

        <div className="flex items-center gap-2.5 pl-6 pt-5 text-white">
          <h1 className="text-2xl">Lions International</h1>
          <ChevronFirst className="cursor-pointer" />
        </div>
        <div className="relative  h-full">
          <ul className="flex flex-col items-start gap-6 pl-4">
            {navigation.map((nav, index) => {
              return (
                <li key={index}>
                  <span className="flex gap-3 text-white">
                    {nav.icon}
                    <a href="" className="hover:underline">{nav.label}</a>
                  </span>
                </li>
              );
            })}
            <li className="flex items-center absolute bottom-0 mb-6 gap-1 text-white">
              <span className="flex items-center w-14">
                <img src="/images/logo.svg" alt="" className="w-full" />
              </span>
              <span className="flex flex-col items-center">
                <h2 className="text-sm">Administrator</h2>
                <span className="flex items-center w-max">
                  <LogOut className="mr-3" width={16} />
                  <a href="" className="text-xs">Logout</a>
                </span>
              </span>
            </li>
          </ul>
        </div>
    </aside>
  );
};

export default Aside;
