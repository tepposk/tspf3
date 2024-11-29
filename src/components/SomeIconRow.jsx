import SomeIcon from "./SomeIcon.jsx";
import Icon_Linkedin from "../assets/some_linkedin.svg";
import Icon_Dribbble from "../assets/some_dribbble.svg";
import Icon_Github from "../assets/some_github.svg";

export default function SomeIconRow() {

    return (
        <div className="some-icon-row">
            <SomeIcon link="https://linkedin.com/in/tepposaarikoski" icon={Icon_Linkedin} name="Linkedin" />
            <SomeIcon link="https://dribbble.com" icon={Icon_Dribbble} name="Dribbble" />
            <SomeIcon link="https://github.com/tepposk" icon={Icon_Github} name="Github" />
        </div>
    )
};