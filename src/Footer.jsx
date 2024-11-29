import ContactItem from "./components/ContactItem.jsx";
import SomeIconRow from "./components/SomeIconRow.jsx";
import SomeIcon from "./components/SomeIcon.jsx";
import Icon_Linkedin from "./assets/some_linkedin.svg";
import Icon_Dribbble from "./assets/some_dribbble.svg";
import Icon_Github from "./assets/some_github.svg";
import Icon_Email from "./assets/contact_email.svg";
import Icon_Phone from "./assets/contact_phone.svg";
import Arrow from "./components/Arrow.jsx";
import Logo from "./components/Logo.jsx";

import Nav from "./components/Nav.jsx";

export default function Footer(props) {

    const arrowTarget = document.body;

    return (
        <div id="footer">
            <div className="footer-border"></div>
            <div className="footer-content">
                <div>
                    <Logo />
                </div>
                <Nav openProject={props.openProject} setOpenProject={props.setOpenProject} />
                <div className="bottom-row">
                    <SomeIconRow />
                    <div className="contact-row">
                        <ContactItem name="email" icon={Icon_Email} content={"teppo@tepposaarikoski.fi"} />
                        <ContactItem name="phone" icon={Icon_Phone} content={"+358 40 864 3679"} />
                    </div>
                </div>
            </div>
            <div className="footer-arrow-wrapper">
                <Arrow target={arrowTarget} />
            </div>
        </div>
    )
};