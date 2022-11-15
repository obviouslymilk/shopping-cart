import { Link } from "react-router-dom";

export default function NavElement({ link, name }) {
    return <li className="nav-element">
        <Link to={link}>{name}</Link>
    </li>
}