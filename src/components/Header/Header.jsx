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
        <h1>Username</h1>
      </div>
    </header>
  );
}
