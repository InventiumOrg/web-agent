import { NavLink } from "react-router-dom";

export default function Tab() {
    return (
        <ul className="nav nav-pills">
            <li className="nav-item">
                <NavLink className="nav-link"  to="exports">Exports</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="imports">Imports</NavLink>
            </li>
        </ul>
    )
}