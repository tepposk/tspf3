import { useState, useEffect } from 'react';
import './main.css';
import Post from './Post.jsx';
import Trackem_casestudy from './assets/Trackem_casestudy.jpg';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';

import Home from "./Home.jsx";
import ProjectPage from "./ProjectPage.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import Menu from "./components/Menu.jsx";

import Icon_Email from "./assets/contact_email.svg";

function formatWpString(data) {
  return (
    <div dangerouslySetInnerHTML={{ __html: data }}>
    </div>
  )
};

export default function App() {

  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);
  const [pages, setPages] = useState([]);
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);
  /* const [openProject, setOpenProject] = useState(false); */

  useEffect(() => {
    async function loadData() {
      const pagesResponse = await fetch('http://www.tepposaarikoski.fi/wp/wp-json/wp/v2/pages');
      const projectsResponse = await fetch('http://www.tepposaarikoski.fi/wp/wp-json/wp/v2/posts');
      if (!pagesResponse.ok || !projectsResponse.ok) {
        console.log("something went wrong :(");
        return;
      }

      const pages = await pagesResponse.json();
      const projects = await projectsResponse.json();
      setPages(pages);
      setProjects(projects);
/*       setLoading(false);
 */
      const parseContent = () => {
        const skills = [];
        pages.forEach(p => {
          if (p.slug === "about") {
            setAbout(p);
          } else if (p.parent === 65) {
            skills.push({
              id: p.menu_order,
              slug: p.slug,
              title: p.title.rendered,
              content: p.content.rendered,
            })
          }
        })
        skills.sort((a, b) => (a.id > b.id) ? 1 : -1);
        setSkills(skills);
      }
      parseContent();
    }
    loadData();
  }, []);

  if (loading) {
    return (
      <div>
        Loading
      </div>
    )
  }
  else {
    return (
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route exact path="/" element={<Home about={about} skills={skills} projects={projects} />} />
          {
            projects.map(p => {
              return (
                <Route key={p.id} path={`/case/${p.slug}`} element={<ProjectPage projects={p} />} />
              )
            })
          }
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }
};