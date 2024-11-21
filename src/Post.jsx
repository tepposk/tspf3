import trackem_header from "./assets/trackem_header.png";
import p01 from "./assets/01.jpg";
import p02 from "./assets/02.jpg";
import p03 from "./assets/03.jpg";
import p04 from "./assets/04.jpg";
import p05 from "./assets/05.jpg";
import p06 from "./assets/06.jpg";


export default function Post() {

    return (
        <div className="wrapper">
            <header id="header">
                <div className="header-subtext header-content"></div>
                <h2 className="header-content">Trackem</h2>
                <span className="header-subtext header-content">A web application to keep track of snooker scores with your
                    phone</span>
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
                <div className="project-content">
                    <h3>Background</h3>
                    <p>I first started working on this application during an eight-week school course during my second year
                        in 2022. My aim during the course was to create an intuitive, easy-to-use mobile interface for the app and learn
                        React in the process. I wanted to give the app a different feel than the snooker score apps
                        available online, most of which have an outdated look to them with an on-the-nose baize-green UI.
                    </p>
                    <p>If you want to check out the old version I created during the course to see how the app has evolved,
                        you can do so <a href="https://tepposk.github.io/snooker" target="_blank">here</a>.</p>
                    <h3>User experience</h3>
                    <p>The biggest issue found during the initial user tests in the original version was the lack of
                        feedback the application gave to the user, which lead to them giving incorrect inputs, awarding
                        points to the wrong player and just made the experience a bit confusing at times.</p>
                    <p>After testing I aimed to include more micro-interactions, such as animations, to help the user keep
                        track of what's going on.</p>
                    <div className="post-image-container">
                        <div className="post-image">
                            <img src={p01} alt="" />
                        </div>
                        <p className="post-image-subtext">The active player is highlighted with an arrow whose shape references
                            traditional snooker scoreboards.</p>
                    </div>
                    <p>I changed the break counter to be visible from the first potted ball. Initially it was set to mimic TV
                        broadcast graphics and was only displayed on bigger breaks, which unnecessarily held important
                        information from the user.</p>
                    <h3>Interface overhaul</h3>
                    <p>A stronger visual identity for the app was needed. This included creating a new color palette and
                        more detailed buttons to achieve a polished, professional feel to the whole product. The buttons
                        representing the snooker balls in the main screen are still the main focus both functionally and
                        visually, and the red ball is also present in the logo and app icons.</p>
                    <div className="post-image-container">
                        <div className="post-image">
                            <img src={p02} alt="" />
                        </div>
                    </div>
                    <div className="post-image-container">
                        <div className="post-image">
                            <img src={p03} alt="" />
                            <img src={p04} alt="" />
                        </div>
                        <p className="post-image-subtext">Old and new versions of the main screens</p>
                    </div>
                    <p>As the app scope grew, I needed to create reusable components for different menus for consistency and
                        easier scalability. The primary buttons in menus resemble the main app controls to bring the ball buttons into focus even more. Inputs without a value (such as the plus and minus buttons) are also round to achieve a more consistent user experience.
                    </p>
                    <div className="post-image-container">
                        <div className="post-image">
                            <img src={p05} alt="" />
                            <img src={p06} alt="" />
                        </div>
                        <p className="post-image-subtext">Start menu evolution</p>
                    </div>

                    <h3>Next steps</h3>
                    <p>There's still a lot left to do with the app. The backlog includes things such as an undo button for
                        incorrect inputs, support for multi-frame matches, menus for better customization and match stats
                        etc.</p>
                </div>
            </div>
            <a href="#header"><button>Back to top ↑</button></a>
        </div>

    )
};