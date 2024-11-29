import { useEffect } from "react";
import trackem_header from "./assets/trackem_header.png";
import Logo from "./components/Logo.jsx";
import { useLocation } from "react-router-dom";
import "./projectpage.css";

export default function ProjectPage(props) {

    useEffect(() => {
        document.title = `${props.projects.title.rendered} | Teppo Saarikoski`;
        function parallaxScroll() {
            const parallax = document.querySelectorAll('.header-bg');
            let scrollPosition = window.scrollY;
            parallax.forEach(e => {
                e.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            })
        }
        window.addEventListener('scroll', parallaxScroll);
        return () => window.removeEventListener('scroll', parallaxScroll);
    }, []);

    const intro = props.projects.excerpt.rendered.replace(/<[^>]*>/g, "");

    const handleClick = () => {
        document.body.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <header id="header" className="project-header">
{/*                 <div className="logo-wrapper">
                    <Logo />
                </div> */}

                <div className="header-subtext"><div className="logo-wrapper">
                    <Logo />
                </div></div>
                <h1 className="post-title header-content">{props.projects.title.rendered}</h1>
                <span className="header-subtext header-content">{intro}</span>
                <img src={trackem_header} className="header-bg ns" alt="" />
            </header>

            <div className="content">
                <div className="project-content" dangerouslySetInnerHTML={{ __html: props.projects.content.rendered }}>
                </div>
            </div>
            <div className="button-wrapper">
                <button onClick={() => handleClick()}>Back to top ↑</button>
            </div>
        </div>
    )
};