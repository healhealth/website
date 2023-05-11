import Logo from "./Logo";

import "./Header.css";

const Header = () => (
  <header className="site-header">
    <div className="site-header-inner-wrapper">
      <div className="logo-wrapper">
        <Logo />
        <h1>Heal&nbsp;Health</h1>
      </div>
      <div className="tagline">Democratizing mental&nbsp;wellbeing</div>
    </div>
  </header>
);

export default Header;
