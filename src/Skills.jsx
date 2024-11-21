import { useState, useEffect } from "react";

export default function Skills(props) {

    useEffect(() => {
        if (props.skills.length > 0) {
            const line = document.getElementById('skill-header-0');
            if (line) {
                line.classList.add('stroke-text-active');
            }
        }
    }, [props.skills]);

    const [activeText, setActiveText] = useState(props.skills[0].content);

    const handleSkills = (id) => {
        const activeHeader = document.getElementById(`skill-header-${id}`);
        const allHeaders = document.getElementsByClassName('skill-header');
        for (let i = 0; i < allHeaders.length; i++) {
            allHeaders[i].classList.remove('stroke-text-active');
            allHeaders[i].classList.add('stroke-text');
        }
        activeHeader.classList.add('stroke-text-active');
    };

    const handleClick = (id) => {
        handleSkills(id);
        setActiveText(props.skills[id].content);
    };

    return (
        <div id="skills" className="page-section">
            <h3>What I<br />can do</h3>
            <div className="skill-carousel ">
                <div className="skill-carousel-navigation">
                    {props.skills.map(skill => {
                        if (skill.id === 0) {
                            return (
                                <h2 className="stroke-text-active skill-header" id={`skill-header-${skill.id}`} dangerouslySetInnerHTML={{ __html: skill.title }} onClick={() => handleClick(skill.id)} key={skill.id}></h2>
                            )
                        } else {
                            return (
                                <h2 className="stroke-text skill-header" id={`skill-header-${skill.id}`} dangerouslySetInnerHTML={{ __html: skill.title }} onClick={() => handleClick(skill.id)} key={skill.id}></h2>
                            )
                        }
                    })}
                </div>
                <div className="skill-carousel-content align-left" dangerouslySetInnerHTML={{ __html: activeText }}>
                </div>
            </div>
        </div>
    )
};