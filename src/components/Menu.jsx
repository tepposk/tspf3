import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
import SomeIconRow from "./SomeIconRow.jsx";
import ContactItem from "./ContactItem.jsx";
import Icon_Email from "../assets/contact_email.svg";
import Icon_Phone from "../assets/contact_phone.svg";
import "./menu.css";

export default function Menu(props) {

    const [menuState, setMenuState] = useState(false);
    const icon = document.getElementById("menu-icon");
    const menu = document.getElementById("drawer");
    const menuBackground = document.getElementById("menu-bg");
    const menuBorder = document.getElementById("menu-border");
    const menuWrapper = document.getElementById("menu-wrapper");

    const openMenu = () => {
        icon.classList.add('open');
        menu.classList.add('open');
        menuBorder.classList.add('open');
        menuBackground.classList.add('open');
        menuBackground.style.visibility = "visible";
    }

    const closeMenu = () => {
        icon.classList.remove('open');
        menu.classList.remove('open');
        menuBorder.classList.remove('open');
        menuBackground.classList.remove('open');
        setMenuState(false);
    }

    const toggleMenu = () => {
        setMenuState(!menuState);
        if (!menuState) {
            openMenu();
        } else {
            closeMenu();
        }
    };

    return (
        <div>
            <div className="menu-icon-wrapper">
                <div id="menu-icon" onClick={() => toggleMenu()}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="menu-wrapper" className="menu-wrapper">
                <div id="menu-border" className="drawer-border">

                </div>
                <div id="drawer" className="drawer-menu">
                    <div className="menu-content">
                        <div className="menu-logo-wrapper">
                            <Logo closeMenu={closeMenu} />
                        </div>
                        <Nav closeMenu={closeMenu} />
                        <div className="menu-contact">
                            <ContactItem name="email" icon={Icon_Email} content={"teppo@tepposaarikoski.fi"} />
                            <ContactItem name="phone" icon={Icon_Phone} content={"+358 40 864 3679"} />
                            <SomeIconRow />
                        </div>
                    </div>
                </div>
            </div>
            <div id="menu-bg" className="menu-background" onClick={() => closeMenu()}>
            </div>
        </div>
    )
};