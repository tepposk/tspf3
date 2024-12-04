import { useState } from "react";
import Logo from "./Logo.jsx";
import Nav from "./Nav.jsx";
import SomeIconRow from "./SomeIconRow.jsx";
import ContactItem from "./ContactItem.jsx";
import Icon_Email from "/assets/contact_email.svg";
import Icon_Phone from "/assets/contact_phone.svg";
import "./menu.css";

export default function Menu() {

    const [menuState, setMenuState] = useState(false);

    const openMenu = () => {
        setMenuState(true);
    };

    const closeMenu = () => {
        setMenuState(false);
    };

    const toggleMenu = () => {
        if (!menuState) {
            openMenu();
        } else {
            closeMenu();
        }
    };

    return (
        <div>
            <div className="menu-icon-wrapper">
                <div id="menu-icon" onClick={() => toggleMenu()} className={`${(menuState) ? "open" : ""}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div id="menu-wrapper" className="menu-wrapper">
                <div id="menu-border" className={`drawer-border ${(menuState) ? "open" : ""}`}>

                </div>
                <div id="drawer" className={`drawer-menu ${(menuState) ? "open" : ""}`}>
                    <div className={`menu-content ${(!menuState) ? "hide" : ""}`}>
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
            <div id="menu-bg" className={`menu-background ${(menuState) ? "open" : ""}`} onClick={() => closeMenu()}>
            </div>
        </div>
    )
};