import "./headerStyle.scss";

import { Logo } from "./Logo/Logo";
import { Menu } from "./Menu/Menu";
import { Profile } from "./Profile/Profile";

export function Header(props) {
  return (
    <header>
      <Logo />
      <Menu />
      <Profile user={props.user} updateUser={props.updateUser} />
    </header>
  );
}
