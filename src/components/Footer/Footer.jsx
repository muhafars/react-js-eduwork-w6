import "./footer.scss";
const Footer = function () {
  const footerItems = [
    { name: "resume", link: "#" },
    { name: "about", link: "#" },
  ];
  return (
    <>
      <nav className=" d-flex footer-content flex-rows">
        <span className="footer-brand-name">Coprights @Muhammad Fajri Assidiq</span>
        <div className=" flex-rows">
          {footerItems.map((item, index) => (
            <a key={index} href={item.link} className="mx-4 footer-nav-items">
              {item.name}
            </a>
          ))}
        </div>
      </nav>
    </>
  );
};

export default Footer;
