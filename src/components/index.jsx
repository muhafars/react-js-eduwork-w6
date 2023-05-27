import "./styles.scss";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";

export default function DisplayApp() {
  return (
    <div className="App">
      <NavBar />
      <Content />
      <Footer />{" "}
    </div>
  );
}
