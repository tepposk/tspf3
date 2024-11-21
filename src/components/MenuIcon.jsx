import { useState } from "react";
import "./menuicon.css";

export default function MenuIcon() {

    const [menuState, setMenuState] = useState(false);
    const icon = document.getElementById("menu-icon");

    const handleClick = () => {
        setMenuState(!menuState);
        icon.classList.toggle('open');
        console.log(icon)
    };

    return (
        <div className="menu-icon-wrapper">
            <div id="menu-icon" onClick={() => handleClick()}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div >
    )
};