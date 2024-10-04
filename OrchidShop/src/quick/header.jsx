import { useState } from "react";
import "./header.css";
import { Toggle } from "../Theme/Toggle";

function Header() {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
      <header className="header">
        <div className="nav-bar">
          <a href="#home">
            <p>Home</p>
          </a>
          <a href="#news">
            <p>News</p>
          </a>
          <a href="#contact">
            <p>Contact</p>
          </a>
          <a href="#about">
            <p>About</p>
          </a>
        </div>
        <i>Orchids of your choicids</i>
        <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
      </header>
    </>
  );
}
export default Header;
