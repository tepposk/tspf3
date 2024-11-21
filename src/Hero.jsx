import { useState } from 'react';

export default function Hero() {

    const [intro, setIntro] = useState("Hi, my name is");
    const introLines = ["I am a", "and a", "Hi, my name is", "I've lived my whole life in", "I'm also a"];
    const [lockIntro, setLockIntro] = useState(2);

    const handleHeroLines = (id) => {
        const line = document.getElementById(`hero-line-${id}`);
        const otherLines = document.getElementsByClassName('stroke-text');
        for (let i = 0; i < otherLines.length; i++) {
            otherLines[i].classList.remove('stroke-text-active');
        };
        line.classList.add('stroke-text-active');
        setIntro(introLines[id]);
    };

    const handleHeroClick = (id) => {
        if (id === lockIntro) {
            setLockIntro(2);
        } else {
            setLockIntro(id);
        }
    };

    return (
        <div id="hero" className="page-section">
            <div className="hero-content" onMouseLeave={() => handleHeroLines(lockIntro)}>
                <div className="intro">{intro}</div>
                <div className="stroke-text" id="hero-line-0"><div className="span-wrapper" onMouseOver={() => handleHeroLines(0)} onClick={() => handleHeroClick(0)}><span>UI/UX DESIGNER</span></div></div>
                <div className="stroke-text" id="hero-line-1"><div className="span-wrapper" onMouseOver={() => handleHeroLines(1)} onClick={() => handleHeroClick(1)}><span>WEB DEVELOPER</span></div></div>
                <div className="stroke-text hero-line-active" id="hero-line-2"><div className="span-wrapper" onMouseOver={() => handleHeroLines(2)} onClick={() => handleHeroClick(2)}><span>TEPPO SAARIKOSKI</span></div></div>
                <div className="stroke-text" id="hero-line-3"><div className="span-wrapper" onMouseOver={() => handleHeroLines(3)} onClick={() => handleHeroClick(3)}><span>HELSINKI, FINLAND</span></div></div>
                <div className="stroke-text" id="hero-line-4"><div className="span-wrapper" onMouseOver={() => handleHeroLines(4)} onClick={() => handleHeroClick(4)}><span>PRETTY COOL DUDE*</span></div></div>
            </div>
        </div>
    );
};