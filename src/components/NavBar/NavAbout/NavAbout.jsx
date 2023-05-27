import { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./nav-about.scss";

const NavAbout = () => {
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Enthusiastic Dev 😎 ",
        "Full Stack JS Developer 💻 ",
        "Data Enthusiastic ☁️",
        "Internet Of Things Developer",
        "Active Learner 🚧",
      ],
      startDelay: 0,
      typeSpeed: 90,
      backSpeed: 20,
      backDelay: 110,
      smartBackspace: true,
      loop: true,
      showCursor: false,
      autoInsertCss: true,
      // cursorChar: "|"
    });
    return () => {
      typed.destroy();
    };
  }, []);
  const el = useRef(null);
  return (
    <>
      <div className="herosection px-10 py-2" id="home">
        <div className="herosection-2 row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex flex-column justify-content-center Im-text-section">
              <span className="Im-text">
                Hello, I'm <span className="name-Im-text">Muhammad Fajri Assidiq</span>
              </span>
              <span
                className="Im-text-enthusiastic py-2"
                ref={el}
                style={{ minHeight: "79px" }}
              ></span>
              <span className="Im-text-subheading">
                Let's build together Front-End & Back-End App Technologies
              </span>
              <div className="d-flex flex-row justify-content-center mt-5">
                <a href="#contactme" className="btn-hire-me">
                  Let's Collaborate With Me
                </a>
                <a href="none" className="btn-resume-me">
                  Get Resume
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="d-flex justify-content-center Anim">
              <img
                className="custom-img"
                alt="heroimage"
                src="https://res.cloudinary.com/dhh8ngjhp/image/upload/v1685135183/ava_ouhls7.png"
              />
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default NavAbout;
