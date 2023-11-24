// import { headerLogo } from "../assets/images/header-logo.svg";
// import { humburger } from "../assets/icons/hamburger.svg";
import { navLinks } from "../constants";
const Nav = () => {
  let headerLogoSrc = "src/assets/images/header-logo.svg";
  let humburgerSrc = "src/assets/icons/hamburger.svg";
  return (
    <header className="padding-x pu-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container p-5">
        <a href="/">
          <img
            src={headerLogoSrc}
            alt="Nike Logo"
            width={130}
            height={29}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montoserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className='hidden max-lg:block'>
          <img src={humburgerSrc}
          alt="Hamburger Icon"
            width={25}
            height={25}
          />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
