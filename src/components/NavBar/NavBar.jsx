import { useState } from "react";
import "./navbar.scss";
import NavAbout from "./NavAbout/NavAbout";
const NavBar = function () {
  const [opennav, setopennav] = useState(false);

  return (
    <>
      <div className="navbar-option-mobile bg-new ">
        <div className="d-flex flex-row justify-content-between">
          <span className="brand-name d-flex aling-items-center justify-content-center">
            Muhammad Fajri Assidiq
          </span>
          <div
            className={!opennav ? "bars mx-2 transition-all " : " transition-all open bars mx-2 "}
            style={{ background: opennav && "#02203c" }}
            onClick={() => setopennav(!opennav)}
          >
            {" "}
          </div>
        </div>
      </div>
      <nav
        className={
          !opennav
            ? " d-flex bg-new px-9 navbar-new py-5 flex-rows transition-all "
            : " d-flex bg-new px-9 navbar-fixed-new py-5 flex-rows transition-all "
        }
      >
        <span className="brand-name">ASH DEV</span>
        <div className=" d-flex flex-rows">
          <a href="#home" className="mx-4 nav-items" onClick={() => setopennav(false)}>
            Home{" "}
          </a>
          <a href="#aboutme" className="mx-4 nav-items" onClick={() => setopennav(false)}>
            About me
          </a>
          <a href="#resume" className="mx-4 nav-items" onClick={() => setopennav(false)}>
            Resume
          </a>
          <a href="#testimonials" className="mx-4 nav-items" onClick={() => setopennav(false)}>
            Testimonial
          </a>
          <a href="#contactme" className="mx-4 nav-items" onClick={() => setopennav(false)}>
            Contact me
          </a>
        </div>
      </nav>
      <NavAbout />
    </>
  );
};

export default NavBar;
