import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import AboutPage from "./components/pages/AboutPage";

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutPage />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
