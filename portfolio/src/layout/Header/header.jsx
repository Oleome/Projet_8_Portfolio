import { NavLink } from "react-router-dom";
import "./header.scss";

function Header() {
    return (
        <header>
            <NavLink className="logo" to="/">LOGO</NavLink>
            <nav className="nav">
                <NavLink className="nav--link" to="a_propos">A propos</NavLink>
                <NavLink className="nav--link" to="projets">Mes projets</NavLink>
                <NavLink className="nav--link" to="services">Mes services</NavLink>
                <NavLink className="nav--link" to="contact">Contact</NavLink>
            </nav>
        </header>
    )
}

export default Header