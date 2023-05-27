import { useState } from "react";
import "./navbar.scss";
import NavAbout from "./NavAbout/NavAbout";
const NavBar = function () {
  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#aboutme" },
    { name: "Resume", href: "#resume" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact me", href: "#contactme" },
  ];
  const [openNav, setOpenNav] = useState(false);

  return (
    <>
      <div className="navbar-option-mobile bg-new ">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex  justify-content-center">Muhammad Fajri Assidiq</span>
          <div
            className={!openNav ? "bars mx-2 transition-all " : " transition-all open bars mx-2 "}
            style={{ background: openNav && "#02203c" }}
            onClick={() => setOpenNav(!openNav)}
          ></div>
        </div>
      </div>
      <nav
        className={
          !openNav
            ? " d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all "
            : " d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all "
        }
      >
        <span className="brand-name">ASH DEV</span>
        <div className="d-flex flex-rows">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="mx-4 nav-items"
              onClick={() => setOpenNav(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <NavAbout />
    </>
  );
};

export default NavBar;
