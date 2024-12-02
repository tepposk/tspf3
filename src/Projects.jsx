import { Link } from "react-router-dom";
import Thumbnail_Trackem from "/assets/trackem_thumbnail_primary.png";

export default function Projects(props) {

    const projectsArray = props.projects;
    const handleClick = (id) => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    };
    return (
        <div id="work" className="page-section">
            <h3>My<br />work</h3>
            <div className="projects-wrapper">
                {
                    projectsArray.map(project => {
                        return (
                            <Link key={project.id} to={`/case/${project.slug}`}>
                                <div className="project-thumbnail">
                                    <div id={`${project.slug}-thumbnail-image`} className="project-thumbnail-image" onClick={() => handleClick()}>
                                        <div className="thumbnail-primary"></div>
                                        <div className="project-thumbnail-info-wrapper">
                                            <div id={`${project.slug}-thumbnail`} className="project-thumbnail-info">
                                                <h4>{project.title.rendered}</h4>
                                                <div className="project-thumbnail-info-divider"></div>
                                                <p className="project-thumbnail-description"></p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    )
};