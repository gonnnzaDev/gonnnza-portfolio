import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home.tsx';
import AboutMe from './Pages/AboutMe.tsx';
import Projects from './Pages/Projects.tsx';


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App
