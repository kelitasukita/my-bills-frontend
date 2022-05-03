import { Menu } from "./Menu";

import "./headerStyles.scss";

export function Header(props) {
  return (
    <header>
      <div>
        <h1 id="logo">my.bill$</h1>
      </div>
      <Menu />
      <div>
        <ul className="profile">
          <li className="list-profile">{props.user.name}</li>
          <li className="list-profile">
            <img src={props.user.imageUrl} alt="" />
          </li>
        </ul>
      </div>
    </header>
  );
}
