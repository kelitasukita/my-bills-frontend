import "./menu.scss";

import { MenuItem } from "./MenuItem";
import {
  BsPlusLg,
  BsGraphUp,
  BsFileEarmarkSpreadsheet,
  BsHouseDoor,
} from "react-icons/Bs";

export function Menu() {
  return (
    <nav className="menu">
      <ul>
        <MenuItem title="Overview" link="/" icon={<BsHouseDoor />} />
        <MenuItem title="Dashboard" link="/dashboard" icon={<BsGraphUp />} />
        <MenuItem
          title="Reports"
          link="/reports"
          icon={<BsFileEarmarkSpreadsheet />}
        />
        <MenuItem title="Add" link="/add" icon={<BsPlusLg />} />
      </ul>
    </nav>
  );
}
