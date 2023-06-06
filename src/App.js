import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutPage from "./components/pages/AboutPage";
import ProjectPage from "./components/pages/ProjectPage";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutPage />} />
        <Route exact path="/projects" element={<ProjectPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
