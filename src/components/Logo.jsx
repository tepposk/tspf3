import Logo_icon from "/assets/logo_mockup.png";
import { Link } from "react-router-dom";

export default function Logo(props) {

    const handleClick = () => {
        if (props.closeMenu) {
            props.closeMenu();
        };
    };

    return (
        <Link to="/" state={{ scrollTo: "#hero" }}>
            <img src={Logo_icon} alt="" className="logo" onClick={() => handleClick()} />
        </Link>
    )
};