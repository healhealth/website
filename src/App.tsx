import Logo from "./Logo";

import "./App.css";

const App = () => (
  <div className="site">
    <header>
      <div className="site-header-inner-wrapper">
        <div className="logo-wrapper">
          <Logo />
          Rest of the header will come here
        </div>
      </div>
    </header>
    <main>
      <div className="site-main-inner-wrapper">Main content will come here</div>
    </main>
    <footer>
      <div className="site-footer-inner-wrapper">Footer will come here</div>
    </footer>
  </div>
);

export default App;
