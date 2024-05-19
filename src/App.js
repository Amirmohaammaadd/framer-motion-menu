import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import HomePage from "./Components/Pages/Homepage/Homepage";
import About from "./Components/Pages/About/About";
import Services from "./Components/Pages/Services/services";
import Contact from "./Components/Pages/Contact/Contact";
import Navbarr from "./Components/NavBar/nav";
import Card from "./Components/Cards/Card";
import Carousel from "./Components/Carousel/Carousel";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/card" Component={Card}/>
        <Route path="/carousel" Component={Carousel}/>
        <Route path="/nav" Component={Navbarr} />
        <Route path="/about" Component={About} />
        <Route path="/services" Component={Services} />
        <Route path="/contact" Component={Contact} />
      </Routes>
    </Router>
  );
}

export default App;
