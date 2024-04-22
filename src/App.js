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
import BlogDetails1 from "./pages/blog/blogDetails/BlogDetails1";
import BlogDetails2 from "./pages/blog/blogDetails/BlogDetails2";
import BlogDetails3 from "./pages/blog/blogDetails/BlogDetails3";
import BlogDetails4 from "./pages/blog/blogDetails/BlogDetails4";
import BlogDetails5 from "./pages/blog/blogDetails/BlogDetails5";
import BlogDetails6 from "./pages/blog/blogDetails/BlogDetails6";
import TreatmentDetail from "./pages/treatments/TreatmentDetail";

function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route exact path="/treatments" Component={Dashboard} />
        <Route exact path="/treatments/:retreat_id" Component={TreatmentDetail} />
        <Route path="/about-us" Component={AboutUs} />
        <Route path="/guidance" Component={Guidance} />
        <Route path="/blogs" Component={Blogs} />
        <Route path="/blogs/what-nose-fillers-can-do-for-your-nose" Component={BlogDetails1} />
        <Route path="/blogs/hair-loss-is-a-common-problem-that-affects-millions-of-women" Component={BlogDetails2} />
        <Route path="/blogs/How-To-Maintain-Good-Oral-Hygiene" Component={BlogDetails3} />
        <Route path="/blogs/Hair-Loss-for-Men" Component={BlogDetails4} />
        <Route path="/blogs/Almond-Eye-Surgery-in-Turkey" Component={BlogDetails5} />
        <Route path="/blogs/Everything-You-Need-to-Know-About-General-Anaesthesia" Component={BlogDetails6} />
        <Route path="/contact" Component={Contact} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
