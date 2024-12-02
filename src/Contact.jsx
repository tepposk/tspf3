import ContactItem from "./components/ContactItem.jsx";

import Icon_Email from "/assets/contact_email.svg";
import Icon_Phone from "/assets/contact_phone.svg";

export default function Contact(props) {

    return (
        <div id="contact" className="page-section">
            <h3>What can<br />I do for you?</h3>
            <div className="contact-section">
                <ContactItem name="email" icon={Icon_Email} content={"teppo@tepposaarikoski.fi"} />
                <ContactItem name="phone" icon={Icon_Phone} content={"+358 40 864 3679"} />
            </div>
        </div>
    )
};