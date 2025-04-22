import React from "react";
import { NavLink } from "react-router";

export const Heading = () => {
  return (
    <div className="flex items-center justify-between bg-white pt-2">
      <div className="flex items-center justify-center p-2 pl-4">
        <div className="w-max">
          <img className="w-20" src="/logo/logo.svg" alt="organization logo" />
        </div>
        <div className="flex flex-col items-start justify-center text-sm text-gray-500 font-bold">
          <p>Lions International</p>
          <p>District 325k (MD 325) Nepal</p>
          <p>L/Y 2025-2026</p>
        </div>
      </div>
      <div className="flex items-start justify-center mb-auto pt-4 pr-8">
        <select
          name="language"
          className="shadow-md pl-4 pr-4 pt-2 pb-2 rounded-full shadow-gray-500"
        >
          <option value="english">English</option>
          <option value="nepali">Nepali</option>
        </select>
      </div>
    </div>
  );
};

const Nav = () => {
  const navigation = [
    { label: "Home", link: "/home" },
    {
      label: "Our Team",
      link: "/home",
      submenu: [
        {
          title: "Digi Team",
          items: [
            { label: "Current Digi Team", link: "/currentDigiTeam" },
            { label: "Past District Governor", link: "/pastDigiTeam" },
          ],
        },
        {
          title: "Cabinet Officials",
          items: [
            { label: "Senior Officials", link: "/seniorOfficials" },
            { label: "Cluster Head and Deputy Head", link: "/clusterHead_DeputyHead" },
            { label: "Region Chairperson", link: "/regionChairPerson" },
            { label: "Zone Chairperson", link: "/zoneChairPerson" },
            { label: "Global Causes Team", link: "/globalCausesTeam" },
            { label: "Digi Program Team", link: "/digiProgramTeam" },
          ],
        },
        {
          title: "Leo District",
          items: [
            { label: "Leo District Council", link: "/leoDistrict" },
            { label: "Leo Clubs", link: "/leoDistrict" },
          ],
        },
      ],
    },
    { label: "Clubs", link: "/clubs" },
    { label: "Resources", link: "#" },
    { label: "Login", link: "#", isButton: true },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-[900] bg-white">
      <Heading />
      <nav className="bg-blue-200 p-6">
        <ul className="flex items-center justify-start gap-10 text-sm pl-2 text-gray-950">
          {navigation.map((item, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={item.link}
                className={`font-bold ${
                  item.isButton
                    ? "bg-yellow-400 pt-1.5 pb-1.5 pr-4 pl-4 rounded-full"
                    : "hover:underline"
                }`}
              >
                {item.label}
              </NavLink>

              {item.submenu && (
                <div className="absolute pt-8 top-full left-0 hidden  bg-white w-[800px] p-6 group-hover:flex gap-8 z-50">
                  {item.submenu.map((submenu, index) => (
                    <div key={index} className="w-1/3">
                      <div className="bg-[#f8a41c] px-4 py-2 [clip-path:polygon(0_0,100%_0%,80%_90%,0_90%)] font-bold text-black w-full mb-2">

                        {submenu.title}

                      </div>
                      <ul className="text-sm text-black pl-4">
                        {submenu.items.map((subItem, index) => (
                          <li key={index} className="m-2 hover:underline hover:text-info">
                            <a href={subItem.link}>{subItem.label}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
