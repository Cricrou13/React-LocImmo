import { NavLink } from "react-router-dom";
import logo from '../assets/images/Kasa.png';

function Header() {
    return (
        <header className="header">
           <img src={logo} alt="Kasa logo" className="header-logo" />

            <nav>
                <NavLink to="/">Accueil</NavLink>
                <NavLink to="/about">A Propos</NavLink>
            </nav>
        </header>
    );
}

export default Header;