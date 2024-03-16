import { Navi } from "./layouts/Navi";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./layouts/Footer";

import Treatments from "./pages/Treatments";
import AboutUs from "./pages/AboutUs";
import Guidance from "./pages/Guidance";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import AestheticSurgery from "./pages/AestheticSurgery";
import HairTreatments from "./pages/HairTreatments";
import DentalTreatments from "./pages/DentalTreatments";
import MetabolicSurgery from "./pages/MetabolicSurgery";
import EyeDiseases from "./pages/EyeDiseases";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/treatments/aesthetic-surgery" Component={AestheticSurgery} />
        <Route path="/treatments/hair-treatments" Component={HairTreatments} />
        <Route path="/treatments/dental-treatments" Component={DentalTreatments} />
        <Route path="/treatments/metabolic-surgery" Component={MetabolicSurgery} />
        <Route path="/treatments/eye-diseases" Component={EyeDiseases} />
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
