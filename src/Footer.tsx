import Logo from "./Logo";

import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";

import "./Footer.css";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer-inner-wrapper">
      <div>
        <div>
          <Logo />
        </div>
        <address>
          <strong>Heal Health</strong>
          <br />
          Muldager 56, Brønshøj,
          <br />
          Copenhagen 2700
          <br />
          CVR number: 43883372
        </address>
      </div>
      <div>
        <nav className="social-media-links">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/company/healhealth/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/healhealthdk"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebookSquare />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
);

export default Footer;
