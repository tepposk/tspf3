import Postit from "./assets/postit.jpg";

export default function About(props) {

    return (
        <div id="about" className="align-left">
            <div className="page-section" dangerouslySetInnerHTML={{ __html: props.data.content.rendered }}>
            </div>
{/*             <div className="image-wrapper">
                <a href="#contact"><button>Get in touch</button></a>
                <img src={Postit} alt="" />
            </div> */}
        </div>
    )
};