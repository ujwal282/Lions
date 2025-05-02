import React, { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Menu, X, Plus, Minus } from "lucide-react";

export const Heading = () => {
  return (
    <div className="flex items-center justify-between bg-header pr-2">
      <div className="flex items-center justify-center p-1 md:pl-4">
        <div className="w-max">
          <img className="w-15" src="/logo/logo.svg" alt="organization logo" />
        </div>
        <div className="flex flex-col items-start justify-center text-xs text-secondary font-bold pl-1 sm:pl-0">
          <p>Lions International</p>
          <p>District 325k (MD 325) Nepal</p>
          <p>L/Y 2025-2026</p>
        </div>
      </div>
      <div className="flex items-center justify-center mb-auto pt-4 sm:gap-10 gap-2.5 sm:pr-8">
        <NavLink
          className="flex items-center justify-center sm:gap-1"
          to={"/lio_ai"}
        >
          <span className="text-orange-600 font-bold text-sm">Lio</span>
          <img
            src={
              "https://www.lionsclubs.org/themes/lionsclubs/images/chatbot-red.svg"
            }
            alt=""
            className="sm:w-5 w-4"
          />
        </NavLink>
        <select
          name="language"
          className="shadow-md text-xs sm:pl-4 sm:pr-4 pt-2 pb-2 rounded-full outline-1 outline-white text-white"
        >
          <option value="english">English</option>
          <option value="nepali">Nepali</option>
        </select>
      </div>
    </div>
  );
};

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenus, setActiveSubmenus] = useState({});

  const handleOpen = () => setIsOpen(!isOpen);

  const toggleSubmenu = (key) => {
    setActiveSubmenus((prev) => ({
      [key]: !prev[key], // Open clicked, close others
    }));
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const navigation = [
    { label: "Home", link: "/" },
    {
      label: "Our Team",
      link: "/currentDigiTeam",
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
            {
              label: "Cluster Head and Deputy Head",
              link: "/clusterHead_DeputyHead",
            },
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
            { label: "Leo Clubs", link: "/leoClubs" },
          ],
        },
      ],
    },
    { label: "Clubs", link: "/clubs" },
    { label: "Resources", link: "/resources" },
    {
      label: "Login",
      link: "https://lionsinternational.my.site.com/s/login/?language=en_US",
      isButton: true,
      target: "_blank",
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-[900] bg-white">
      <Heading />
      <nav className="bg-blue-200 p-6">
        {/* Desktop Nav */}
        <ul className="hidden xl:flex md:flex items-center justify-start gap-10 text-sm pl-2 text-gray-950 z-[999]">
          {navigation.map((item, index) => (
            <li key={index} className="relative group">
              <NavLink
                to={item.link}
                className={`font-bold ${
                  item.isButton
                    ? "bg-yellow-400 pt-1.5 pb-1.5 pr-4 pl-4 rounded-full"
                    : "hover:underline"
                }`}
                target={item.isButton ? "_blank" : ""}
              >
                {item.label}
              </NavLink>
              {item.submenu && (
                <div className="absolute pt-8 top-full left-0 hidden bg-blue-200 w-[800px] p-6 group-hover:flex gap-8">
                  {item.submenu.map((submenu, subIndex) => (
                    <div key={subIndex} className="w-1/3">
                      <div className="bg-[#f8a41c] px-4 py-2 [clip-path:polygon(0_0,100%_0%,80%_90%,0_90%)] font-bold text-black w-full mb-2">
                        {submenu.title}
                      </div>
                      <ul className="text-sm text-black pl-4">
                        {submenu.items.map((subItem, subSubIndex) => (
                          <li
                            key={subSubIndex}
                            className="m-2 hover:underline hover:text-info"
                          >
                            <NavLink to={subItem.link}>{subItem.label}</NavLink>
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

        {/* Mobile Toggle Button */}
        <div className="flex justify-end xl:hidden md:hidden">
          <button onClick={handleOpen} className="cursor-pointer">
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile side bar */}
        <div
          className={`fixed top-0 right-0 w-80 h-screen bg-heading z-40 shadow-md transform transition-transform duration-500 ease-in-out overflow-y-auto ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={handleOpen}
            className="absolute top-4 right-4 cursor-pointer"
          >
            <X />
          </button>
          <ul className="flex flex-col justify-center items-start gap-2 text-lg mt-10 pl-4 pb-4">
            {navigation.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.link}
                  onClick={handleOpen}
                  className={`block font-semibold text-black ${
                    item.isButton
                      ? "bg-yellow-400 px-4 py-2 rounded-full text-center"
                      : "text-gray-900 hover:underline"
                  }`}
                  target={item.isButton ? "_blank" : ""}
                >
                  {item.label}
                </NavLink>

                {/*Mobile sub menu */}
                {item.submenu && (
                  <div className="flex flex-col items-start justify-center">
                    {item.submenu.map((submenu, subIndex) => (
                      <div key={subIndex} className="mb-4 mt-2">
                        <div
                          className="font-bold text-black bg-[#f8a41c] cursor-pointer [clip-path:polygon(0_0,100%_0%,80%_90%,0_90%)] mb-1 flex items-center justify-center  w-max p-5 h-2"
                          onClick={() => toggleSubmenu(`${index}-${subIndex}`)}
                        >
                          <span className="flex-grow">{submenu.title}</span>
                          {activeSubmenus[`${index}-${subIndex}`] ? (
                            <Minus className="cursor-pointer mr-2  text-black" />
                          ) : (
                            <Plus className="cursor-pointer mr-2 text-black" />
                          )}
                        </div>

                        {activeSubmenus[`${index}-${subIndex}`] && (
                         <ul className="flex flex-col items-start justify-center w-full">
                         {submenu.items.map((subItem, subSubIndex) => (
                           <li
                             key={subSubIndex}
                             className="text-white  p-4 hover:bg-gray-400 rounded-md transition-all duration-200"
                           >
                             <NavLink
                               to={subItem.link}
                               onClick={handleOpen}
                               className="block w-full"
                             >
                               {subItem.label}
                             </NavLink>
                           </li>
                         ))}
                       </ul>
                       
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
