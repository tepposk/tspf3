//import { useState, useEffect } from "react";
import Logo_placeholder from "../assets/logo_placeholder.png";
import InitialBg from "../assets/loading_bg.jpg";

export default function Loading(props) {
    /* 
        const [HeroBg, setHeroBg] = useState(null);
    
        useEffect(() => {
            import('../assets/hero_bg.jpg').then(({ default: LoadedBg }) => {
                setHeroBg(() => LoadedBg);
            });
            document.getElementById('fading-background').style.opacity = 0;
        }, []);
     */

    return (
        <div className="loading">
            <div className="loading-content ns">
                <img src={Logo_placeholder} alt="" className="loading-logo" />
                {/*                 <p>{props.loadingMessage}</p>
                <div className="loading-bar">
                    <div className="loading-bar-fill"></div>
                </div> */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" width="80" height="80" style={{shapeRendering: 'auto', background: 'transparent'}} xmlnsXlink="http://www.w3.org/1999/xlink"><g><circle strokeDasharray="136.659280431156 47.553093477052" r="29" strokeWidth="7" stroke="#ffa479" fill="none" cy="50" cx="50">
                    <animateTransform keyTimes="0;1" values="0 50 50;360 50 50" dur="1.0989010989010988s" repeatCount="indefinite" type="rotate" attributeName="transform"></animateTransform>
                </circle><g></g></g></svg>
                <img id="fading-background" rel="preload" src={InitialBg} alt="" className="loading-bg ns hero-img" />
                {/* <img src={HeroBg} alt="" className="loading-bg ns hero-img" /> */}
            </div>
        </div>
    )
};