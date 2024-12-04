import { useState, useEffect } from 'react';
import Teppo from "/assets/hero_teppo.png";
import Background from "/assets/hero_bg.jpg";
import Logo from "./components/Logo.jsx";
import Arrow from "./components/Arrow";


export default function Hero() {

    const [intro, setIntro] = useState("Hi, my name is");
    const introLines = ["I'm a", "I'm a", "Hi, my name is", "Born and raised in", "I'm also a"];
    const [lockIntro, setLockIntro] = useState(2);
    const [showAsterisk, setShowAsterisk] = useState(false);
    const [showArrow, setShowArrow] = useState(true);
    const arrowTarget = document.getElementById('about');

    const handleHeroLines = (id) => {
        const line = document.getElementById(`hero-line-${id}`);
        const otherLines = document.getElementsByClassName('stroke-text');
        for (let i = 0; i < otherLines.length; i++) {
            otherLines[i].classList.remove('stroke-text-active');
        };
        line.classList.add('stroke-text-active');
        setIntro(introLines[id]);

        if (id === 4) {
            setShowAsterisk(true);
        } else {
            setShowAsterisk(false);
        }
    };

    const handleHeroClick = (id) => {
        if (id === lockIntro) {
            setLockIntro(2);
        } else {
            setLockIntro(id);
        }
    };

    useEffect(() => {
        let userScrolled = false;
        const arrow = document.getElementById('arrow-hero');
        function parallaxScroll() {
            const parallax = document.querySelectorAll('.hero-img');
            let scrollPosition = window.scrollY;
            parallax.forEach(e => {
                e.style.transform = `translateY(${scrollPosition * 0.3}px)`;
            })
            if (scrollPosition > 50 && !userScrolled) {
                userScrolled = true;
                setShowArrow(false);
            }
        }
        window.addEventListener('scroll', parallaxScroll);
        return () => window.removeEventListener('scroll', parallaxScroll);
    }, []);



    return (
        <div id="hero" className="page-section">
            <div className="logo-wrapper">
                <Logo />
            </div>
            <img src={Teppo} alt="" id="teppo" className="hero-img ns" />
            <div className="hero-content" onMouseLeave={() => handleHeroLines(lockIntro)}>
                <div className="intro">{intro}</div>
                <div className="stroke-text" id="hero-line-0"><div className="span-wrapper" onMouseOver={() => handleHeroLines(0)} onClick={() => handleHeroClick(0)}><span>UI/UX DESIGNER</span></div></div>
                <div className="stroke-text" id="hero-line-1"><div className="span-wrapper" onMouseOver={() => handleHeroLines(1)} onClick={() => handleHeroClick(1)}><span>WEB DEVELOPER</span></div></div>
                <div className="stroke-text stroke-text-active" id="hero-line-2"><div className="span-wrapper" onMouseOver={() => handleHeroLines(2)} onClick={() => handleHeroClick(2)}><span>TEPPO SAARIKOSKI</span></div></div>
                <div className="stroke-text" id="hero-line-3"><div className="span-wrapper" onMouseOver={() => handleHeroLines(3)} onClick={() => handleHeroClick(3)}><span>HELSINKI, FINLAND</span></div></div>
                <div className="stroke-text" id="hero-line-4"><div className="span-wrapper" onMouseOver={() => handleHeroLines(4)} onClick={() => handleHeroClick(4)}><span>PRETTY COOL DUDE*</span></div></div>
                <div id="asterisk" style={{ visibility: showAsterisk ? "visible" : "hidden" }}>* according to my mom and others</div>
            </div>
            <Arrow id="arrow-hero" target={arrowTarget} showArrow={showArrow} />
            <img src={Background} id="hero-bg" alt="" className="hero-img ns" />
        </div>
    );
};