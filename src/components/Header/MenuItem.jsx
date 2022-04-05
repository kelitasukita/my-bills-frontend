import { Link } from "react-router-dom";

export function MenuItem(props) {
  return (
    <li>
      <Link to={props.link}>
        <span className="menu-icon">{props.icon}</span>
        <span className="menu-title">{props.title}</span>
      </Link>
    </li>
  );
}
