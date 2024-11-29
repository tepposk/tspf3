import Stickynote from "./assets/sticky_note.png";

export default function About(props) {

    const handleClick = (target) => {
        const test = document.getElementById(target);
        test.scrollIntoView({ behavior: 'smooth' })
    };

    return (
        <div id="about">
            <div className="page-section" dangerouslySetInnerHTML={{ __html: props.about.content.rendered }}>
            </div>
            <div className="note">   
                <button onClick={() => handleClick("contact")}>Get in touch!</button>
                <img src={Stickynote} alt="Hey! I'm looking for employment opportunities in the Helsinki area. I'm open to internships and junior positions." className="ns" />
            </div>
            {/*             <div className="image-wrapper">
                <a href="#contact"><button>Get in touch</button></a>
                <img src={Postit} alt="" />
            </div> */}
        </div>
    )
};