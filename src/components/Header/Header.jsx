import { Menu } from "./Menu";
import { Logo } from "./Logo/Logo";

import { FaCog, FaSignOutAlt } from "react-icons/fa";

import "./headerStyles.scss";
import { useState } from "react";
import { GoogleLogout } from "react-google-login";

const clientId =
  "685508486820-8nvol3gsgc43jj55bqscipokc3vvp8eu.apps.googleusercontent.com";

export function Header(props) {
  const [menuClass, setMenuClass] = useState("");

  const toggleMenu = () => {
    console.log("Vai clicar: " + menuClass);
    setMenuClass(menuClass == "" ? "active" : "");
  };

  const handleLogout = () => {
    props.updateUser(false);
  };

  return (
    <header>
      <Logo />
      <Menu />
      <div>
        <ul className="profile">
          <li className="list-profile">{props.user.name}</li>
          <li className="list-profile">
            <img
              src={props.user.imageUrl}
              alt=""
              onClick={toggleMenu}
              className="pointer"
            />

            <div className={"dropdown-menu " + menuClass}>
              <div className="logo-left">
                <ul>
                  <li>
                    <FaCog />
                  </li>
                  <li>
                    <FaSignOutAlt />
                  </li>
                </ul>
              </div>
              <div className="logo-right">
                <ul>
                  <li>Settings</li>
                  <GoogleLogout
                    clientId={clientId}
                    onLogoutSuccess={handleLogout}
                    render={(renderProps) => (
                      <li className="pointer" onClick={renderProps.onClick}>
                        Logout
                      </li>
                    )}
                  />
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}
