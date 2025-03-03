import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import GraphicDesign from "./pages/GraphicDesign/GraphicDesign";
import DigitalMarketing from "./pages/DigitalMarketing/DigitalMarketing";
import WebDevelopment from "./pages/WebDevelopment/WebDevelopment";
import MbaInternship from "./pages/MbaInternship/MbaInternship";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphic-design" element={<GraphicDesign/>} />
        <Route path="/digital-marketing" element={<DigitalMarketing/>} />
        <Route path="/web-development" element={<WebDevelopment/>} />
        <Route path="/mba-internship" element={<MbaInternship/>} />
      </Routes>
    </Router>
  );
};

export default App;
