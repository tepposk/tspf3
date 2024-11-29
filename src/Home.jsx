import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";

export default function Home(props) {

    const location = useLocation();

    useEffect(() => {
        document.title = `Teppo Saarikoski`;
    }, []);


    useEffect(() => {
        const scrollTo = location.state?.scrollTo;
        if (scrollTo && typeof scrollTo === "string") {
            const element = document.querySelector(scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            } else {
                console.error(`No element found for selector: ${scrollTo}`);
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
            window.history.replaceState({}, document.title, location.pathname); // Reset the scroll 

        }
    }, [location]);


    return (
        <div>
            <Hero />
            <div className="stack-above-hero">
                <About about={props.about} />
                <Skills skills={props.skills} />
                <Projects projects={props.projects} setOpenProject={props.setOpenProject} />
                <Contact />
            </div>
        </div>
    )
};