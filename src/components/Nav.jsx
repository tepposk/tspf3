import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Nav(props) {

/*     const location = useLocation();
    console.log(location.pathname); */

    const NavItem = (props) => {

        const handleClick = () => {
            if (props.closeMenu) {
                props.closeMenu();
            }
        };

        return (
            <div className="nav-item" onClick={() => handleClick()}><Link to={"/"} state={{ scrollTo: `#${props.name}` }}>{props.name.charAt(0).toUpperCase() + props.name.substring(1)}</Link><div className="nav-item-border"></div></div>
        )
    };

    return (
        <div className="nav-links">
            <NavItem name="about" closeMenu={props.closeMenu} />
            <NavItem name="skills" closeMenu={props.closeMenu} />
            <NavItem name="work" closeMenu={props.closeMenu} />
            <NavItem name="contact" closeMenu={props.closeMenu} />
        </div>
    )
};