// import { headerLogo } from "../assets/images/header-logo.svg";
// import { humburger } from "../assets/icons/hamburger.svg";
import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { FaTimes, FaMoon, FaSun, FaBars } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
const Nav = ({ darkMode, setDarkMode, toggleDarkMode }) => {
  let headerLogoSrc = "src/assets/images/header-logo.svg";
  let humburgerSrc = "src/assets/icons/hamburger.svg";
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [darkMode]);
  return (
    <header className="padding-x pu-8 fixed  w-full  backdrop-blur-md z-[100]">
      <nav className="flex justify-between items-center max-container p-5">
        <a href="/">
          <img src={headerLogoSrc} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 nav-res z-50 ${
            openMenu && "right-[1%] "
          }`}
        >
          {navLinks.map((item) => (
            <li key={item.label} >
              <a
                href={item.href}
                className="font-montoserrat leading-normal text-lg text-slate-gray max-lg:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
          <button
            width={24}
            className="text-[30px] text-coral-red bg-white border-coral-red border-2 rounded-bl-[20px] p-1 absolute top-0 right-0 hidden max-lg:block"
            onClick={() => setOpenMenu(false)}
          >
            <FaTimes />
          </button>
        </ul>
        <button
          className=" text-coral-red text-[20px] outline-none"
          onClick={toggleDarkMode}
        >
          {darkMode ? <FaMoon /> : <FaSun />}
        </button>
        <div className="hidden max-lg:block">
          {darkMode ? (
            <button
              className="text-white text-[20px]
            "
              onClick={() => setOpenMenu(!openMenu)}
            >
              <FaBars />
            </button>
          ) : (
            <img
              className="cursor-pointer"
              src={humburgerSrc}
              alt="Hamburger Icon"
              width={20}
              height={20}
              onClick={() => setOpenMenu(!openMenu)}
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
