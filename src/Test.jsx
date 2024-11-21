import trackem_header from "./assets/trackem_header.png";

export default function Test(props) {
    console.log(props.posts);
    const intro = props.posts.excerpt.rendered.replace(/<[^>]*>/g, "");

    return (
        <div className="wrapper">
            <header id="header">
                <div className="header-subtext header-content"></div>
                <h1 className="post-title header-content">{props.posts.title.rendered}</h1>
                <span className="header-subtext header-content" >{intro}</span>
                <img src={trackem_header} className="header-bg ns" alt="" />
            </header>


            <div className="content">
                <div className="project-info">
                    <div className="project-info-row">
                        <div className="project-info-row-item">
                            <div className="project-info-category">Platforms</div><span>Mobile</span>
                        </div>
                        <div className="project-info-row-item">
                            <div className="project-info-category">Status</div><span>In progress</span>
                        </div>
                        <div className="project-info-row-item">
                            <div className="project-info-category">URL</div><a href="https://tepposaarikoski.fi/trackem"
                                target="_blank">tepposaarikoski.fi/trackem</a>
                        </div>
                    </div>
                    <div className="project-info-row">
                        <div className="project-info-row-item">
                            <div className="project-info-category">Responsibilities</div><span>UI/UX design, Visual identity
                                design, Front-end development, Project management</span>
                        </div>
                    </div>
                </div>
                <div className="project-content" dangerouslySetInnerHTML={{__html: props.posts.content.rendered}}>
                    
                </div>
            </div>
            <a href="#header"><button>Back to top ↑</button></a>
        </div>
    )
};