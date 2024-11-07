import { useState, useEffect } from 'react';
import './main.css';
import Icon_email from './assets/email_icon.svg';

function App() {

  return (
    <div>
      <h1 className="ns">Teppo Saarikoski</h1>
      <p>
        Hi there, welcome to my portfolio! The site is currently under construction but I'm hoping to get it up and running in November. Meanwhile you can <a _blank href="https://tepposk.github.io/portfolio/" target="_blank">check out my old portfolio</a> or connect with me on <a href="http://www.linkedin.com/in/tepposaarikoski" target="_blank">Linkedin</a>.
      </p>
      <p>- Teppo 😊</p>
      <p><img src={Icon_email} className="contact-icon ns" /> teppo@tepposaarikoski.fi </p>
    </div>
  )
}

export default App
