import { Menu } from "./Menu";

import "./headerStyles.scss";

export function Header() {
  return (
    <header>
      <div>
        <h1 id="logo">my.bill$</h1>
      </div>
      <Menu />
      <div>
        <ul className="profile">
          <li className="list-profile">Kelita</li>
          <li className="list-profile">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQEQwlvbBKLAgQ/profile-displayphoto-shrink_800_800/0/1648908523315?e=1656547200&v=beta&t=bwmtlbkeVXuL2deigCvseQKjLiT88ZWZzi1T1Rif3qU"
              alt=""
            />
          </li>
        </ul>
      </div>
    </header>
  );
}
