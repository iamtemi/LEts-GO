import "./Header.scss";
import { Link } from "react-router-dom";
import legoLogo from "/LEGO_logo.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="mainbar">
        <div className="mainbar__wrapper">
          <div className="mainbar__wrapper--navigation">
            <nav aria-label="Main Navigation" className="mainbar__navigation">
              <Link to="/" aria-label="Lego" className="mainbar__logo">
                <img
                  src={legoLogo}
                  alt="LEGO Logo"
                  className="mainbar__logo--img"
                />
              </Link>
              <ul className="mainbar__menu">
                <li className="mainbar__menuitem">SHOP</li>
                <li className="mainbar__menuitem">DISCOVER</li>
                <li className="mainbar__menuitem">HELP</li>
              </ul>
            </nav>
          </div>
          <div className="mainbar__wrapper mainbar__wrapper--actions"></div>
        </div>
      </div>
    </header>
  );
}
