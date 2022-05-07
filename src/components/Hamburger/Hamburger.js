import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./Hamburger.scss";

export default function Hamburger() {
  return (
    <Menu
      className="header__menu"
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      width={"100%"}
      right
      bodyClassName="header__menu"
    >
      <Link to="/dashboard" className="header__menu-cta">
        Schedule
      </Link>
      <Link to="/events" className="header__menu-cta">
        Events
      </Link>
      <Link to="/profile" className="header__menu-cta">
        Profile
      </Link>
      <Link to="/" className="header__menu-cta">
        Sign Out
      </Link>
    </Menu>
  );
}
