import { Link } from "react-router-dom";

export function MenuItem(props) {
  return (
    <li>
      <Link to={props.link}>{props.title}</Link>
    </li>
  );
}
