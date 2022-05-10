import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import userPic from "../../assets/images/hannah.png";
import "./Hamburger.scss";

export default function Hamburger({ user }) {
  // used react-burger-menu package: https://www.npmjs.com/package/react-burger-menu

  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!isOpen);
  };

  const closeSideBar = () => {
    setOpen(false);
  };

  return (
    <Menu
      className="header__menu"
      pageWrapId={"page-wrap"}
      outerContainerId={"outer-container"}
      width={"100%"}
      right
      isOpen={isOpen}
      onOpen={handleOpen}
      onClose={handleOpen}
      styles={{
        bmCrossButton: {
          top: "-30px",
          right: "25px",
        },
      }}
    >
      <div className="header__menu-container" style={{ display: "flex" }}>
        {user.username === "Hannah" ? (
          <img className="header__menu-pic" src={userPic} alt="user" />
        ) : (
          <div className="header__menu-placeholder"></div>
        )}
        <h2 className="header__menu-user">{user.username}</h2>
      </div>
      <hr></hr>
      <Link
        to="/booking"
        className="header__menu-cta header__menu-cta--schedule"
        onClick={() => closeSideBar()}
      >
        Schedule
      </Link>
      <hr></hr>
      <Link
        to="/events"
        className="header__menu-cta"
        onClick={() => closeSideBar()}
      >
        Events
      </Link>
      <hr></hr>
      <Link
        to="/profile"
        className="header__menu-cta"
        onClick={() => closeSideBar()}
      >
        Profile
      </Link>
      <hr></hr>
      <Link
        to="/"
        className="header__menu-cta header__menu-cta--signOut"
        onClick={() => closeSideBar()}
      >
        Sign Out
      </Link>
    </Menu>
  );
}
