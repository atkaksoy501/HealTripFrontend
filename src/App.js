import { Navi } from "./layouts/Navi";
import "bootstrap/dist/css/bootstrap.min.css";
// eslint-disable-next-line
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./layouts/Footer";

import AboutUs from "./pages/about/AboutUs";
import Guidance from "./pages/Guidance";
import Blogs from "./pages/blog/Blogs";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Dashboard from "./pages/treatments/Dashboard";
import BlogDetails1 from "./pages/blog/blogDetails/BlogDetails1"
import TreatmentDetail from "./pages/treatments/TreatmentDetail";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/treatments" Component={Dashboard} />
        <Route exact path="/treatments/:retreat_name" Component={TreatmentDetail} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/guidance" Component={Guidance} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/blogs/what-nose-fillers-can-do-for-your-nose" Component={BlogDetails1} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
