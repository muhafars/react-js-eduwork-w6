import "./styles.scss";
import NavBar from "./NavBar/NavBar";
import Content from "./Content/Content";

export default function DisplayApp() {
  return (
    <div className="App">
      <NavBar />
      <Content />
    </div>
  );
}
