import React from "react";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import { useDarkMode } from "../components/useDarkMode";

const Header = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <div className="header-container">
      <WiMoonAltFirstQuarter
        size="1.7rem"
        style={{ cursor: "pointer" }}
        onClick={() => setDarkMode(!darkMode)}
      />
    </div>
  );
};

export default Header;
