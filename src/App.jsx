import { useState, useEffect } from 'react';
import Loading from "./components/Loading.jsx";
import "./loading.css";
import './main.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home.jsx";
import Menu from "./components/Menu.jsx";
import ProjectPage from "./ProjectPage.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {

  const [loading, setLoading] = useState(true);

  const [projects, setProjects] = useState([]);
  const [pages, setPages] = useState([]);
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const [pagesResponse, projectsResponse] = await Promise.all([
        fetch('https://www.tepposaarikoski.fi/wp/wp-json/wp/v2/pages'),
        fetch('https://www.tepposaarikoski.fi/wp/wp-json/wp/v2/posts')
      ]);
      if (!pagesResponse.ok || !projectsResponse.ok) {
        console.log("something went wrong :(");
        return;
      }
      const [pages, projects] = await Promise.all([
        pagesResponse.json(),
        projectsResponse.json()
      ]);
      setPages(pages);
      setProjects(projects);

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

      setLoading(false);

    }
    loadData();
  }, []);

  if (loading) {
    return (
      <Loading />
    )
  } else {
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
          <Route path="*" element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    )
  }

};