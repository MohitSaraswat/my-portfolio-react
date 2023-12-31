import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import useReadingProgress from "../hooks/useReadingProgress";

const NavBar = () => {
  const completion = useReadingProgress();
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 4,
      link: "experience",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white nav-style fixed z-50">
      <div>
        <h1 className="text-5xl font-signature ml-2 red-text">MS</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white-500 hover:scale-105 duration-200"
          >
            <Link to={link} smooth duration={500} activeClass="red-text" spy={true}>
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen nav-bg-style  text-white-500">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                activeClass="red-text"
                spy={true}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-red-400 h-1 w-full bottom-0 red-text -z-1"
      />
    </div>
  );
};

export default NavBar;
