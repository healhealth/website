import Logo from "./Logo";

import "./Header.css";

const Header = () => (
  <header className="site-header">
    <div className="site-header-inner-wrapper">
      <div className="logo-wrapper">
        <Logo />
        <h1>Heal Health</h1>
      </div>
      <span>Democratizing mental wellbeing</span>
    </div>
  </header>
);

export default Header;
