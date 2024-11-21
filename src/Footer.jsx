import Nav from "./components/Nav.jsx";

export default function Footer() {

    return (
        <div id="footer" className="page-section">
            <div className="footer-border"></div>
            <div className="footer-content">
                <h3>Teppo<br />Saarikoski</h3>
                <Nav />
                <div className="some-icons">
                </div>
            </div>
            <div className="footer-border"></div>
        </div>
    )
};