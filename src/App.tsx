import Logo from "./Logo";

import "./App.css";

const App = () => (
  <div className="site">
    <header className="site-header">
      <div className="site-header-inner-wrapper">
        <div className="logo-wrapper">
          <Logo />
          <h1>Heal Health</h1>
        </div>
      </div>
    </header>
    <main className="site-main">
      <div className="site-main-inner-wrapper">
        <h2>About us</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
          eum quo, quasi rem ut sit quibusdam error neque perferendis doloremque
          dolores impedit expedita vero similique ad? Nostrum labore blanditiis
          molestiae!
        </p>
        <h2>Products and solutions</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae officia
          id amet sint et repellat corporis sapiente maiores, voluptatum modi
          suscipit ab aut in ex, repellendus doloribus eius reiciendis. Sed.
        </p>
        <h2>Our amazing people</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum,
          excepturi. Debitis dolorem obcaecati eaque ullam repellat porro. Non
          accusantium nesciunt perferendis repudiandae magnam nostrum iure,
          distinctio doloribus inventore voluptates molestiae.
        </p>
      </div>
    </main>
    <footer className="site-footer">
      <div className="site-footer-inner-wrapper">
        <div>Logo again</div>
        <div>Address</div>
        <nav>Social media links</nav>
      </div>
    </footer>
  </div>
);

export default App;
