import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.tsx';
import AboutMe from './Pages/AboutMe.tsx';
import Tecnologies from './Pages/Tecnologies.tsx';
import ProjectsMobile from './Pages/ProjectsMobile.tsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/tecnologies" element={<Tecnologies />} />
        <Route path="/projects" element={<ProjectsMobile />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App
