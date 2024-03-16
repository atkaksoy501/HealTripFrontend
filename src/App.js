import { Navi } from "./layouts/Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./layouts/Footer";

import AboutUs from "./pages/AboutUs";
import Guidance from "./pages/Guidance";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/home/Home";
import Dashboard from "./pages/treatments/Dashboard";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/treatments" Component={Dashboard} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/guidance" Component={Guidance} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
