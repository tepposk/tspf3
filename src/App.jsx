import { useState, useEffect } from 'react';
import './main.css';
import Post from './Post.jsx';
import Icon_email from './assets/email_icon.svg';
import Trackem_casestudy from './assets/Trackem_casestudy.jpg';

import Test from "./Test.jsx";
import Hero from "./Hero.jsx";
import About from "./About.jsx";
import Skills from "./Skills.jsx";
import Projects from "./Projects.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

import MenuIcon from "./components/MenuIcon.jsx";

function formatWpString(data) {
  return (
    <div dangerouslySetInnerHTML={{ __html: data }}>
    </div>
  )
};

export default function App() {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [pages, setPages] = useState([]);
  const [about, setAbout] = useState("");
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function loadData() {
      const pagesResponse = await fetch('http://www.tepposaarikoski.fi/wp/wp-json/wp/v2/pages');
      const postsResponse = await fetch('http://www.tepposaarikoski.fi/wp/wp-json/wp/v2/posts');
      if (!pagesResponse.ok || !postsResponse.ok) {
        console.log("something went wrong :(");
        return;
      }

      const pages = await pagesResponse.json();
      const posts = await postsResponse.json();
      setPages(pages);
      setPosts(posts);
      setLoading(false);

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
  } else {
    return (
      <div>
        <MenuIcon />
        <Hero />
        <About data={about} />
        <Skills skills={skills} />
        <Projects />
        <Contact />
        <Footer />
      </div>
    )
  }
};