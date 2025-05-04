import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './component/Home/home.jsx';
import About from './component/About/about.jsx';
import Resume from './component/Resume/resume.jsx';
import Project from './component/Project/project.jsx';
import Contact from './component/Contact/contact.jsx';
import ParticlesBackground from './component/particlesBackground.jsx';
import ScrollToTop from './component/scrollToTop.jsx';
import Navbar from './component/navbar.jsx';

function App() {

  return (
    <>
      <Router>
        <Navbar />
      <ParticlesBackground />
      <ScrollToTop />
        <Routes>
          <Route path = "/" element={<Home />} />
          <Route path = "/about" element = {<About />} />
          <Route path = "/resume" element = {<Resume />} />
          <Route path = "/project" element = {<Project />} />
          <Route path = "/contact" element = {<Contact />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
