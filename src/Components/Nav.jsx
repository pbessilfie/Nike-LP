// import { headerLogo } from "../assets/images/header-logo.svg";
// import { humburger } from "../assets/icons/hamburger.svg";
import { useState } from "react";
import { navLinks } from "../constants";
const Nav = () => {
  let headerLogoSrc = "src/assets/images/header-logo.svg";
  let humburgerSrc = "src/assets/icons/hamburger.svg";
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header className="padding-x pu-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container p-5">
        <a href="/">
          <img src={headerLogoSrc} alt="Nike Logo" width={130} height={29} />
        </a>
        <ul
          className={`flex-1 flex justify-center items-center gap-16 nav-res z-50 ${
            openMenu && "right-[2%] " 
          }`}
          onClick={() => setOpenMenu(false)}
        >
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montoserrat leading-normal text-lg text-slate-gray max-lg:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img
            className="cursor-pointer"
            src={humburgerSrc}
            alt="Hamburger Icon"
            width={25}
            height={25}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
