import { MenuItem } from "./MenuItem";

export function Menu() {
  return (
    <nav className="menu">
      <ul>
        <MenuItem title="Overview" link="/" />
        <MenuItem title="Dashboard" link="/dashboard" />
        <MenuItem title="Reports" link="/reports" />
        <MenuItem title="Add" link="/add" />
      </ul>
    </nav>
  );
}
