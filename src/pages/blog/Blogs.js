
import "./Blogs.Css";
import { Container, Row, Col } from "reactstrap";
import photo1 from "./blog1.jpg";
import photo2 from "./blog2.jpg";
import photo3 from "./blog3.jpg";
import photo4 from "./blog4.jpg";
import photo5 from "./blog5.jpg";
import photo6 from "./blog6.jpg";
import photo7 from "./Blog7.webp";
import photo8 from "./blog8.jpg";
import photo9 from "./blog9.jpg";
import photo10 from "./blog10.jpg";
import { Link } from "react-router-dom";

import about_background from "./blog10.jpg"

export default function Blogs() {
  

  
  return (
    <div style={{ marginTop: "2%" }}>
            <div className="section-title" style={{backgroundImage: `url(${about_background})`}}>
        <h1 style={{textAlign: "center", color: "#295D6D", fontSize: "4.5rem", fontWeight: "bold", fontFamily: "'Oswald', sans-serif"}}>BLOGS</h1>
          <p style={{textAlign:"center", color:"#295D6D", fontSize:"1.1rem",fontWeight:"700"}}>Welcome to our blog page! Explore insightful articles, helpful tips, and engaging content created just for you.</p>
        </div>
      <Container style={{ padding: "30px 0" }}>
        <h2 style={{ color: "#3c879e", fontSize: "1.71rem"}}>Dive Into Our Collection and Discover Something New With Every Click:</h2>
        <Row>
          <Col md={6}>
          <Link to="/blogs/nose" className="blog-link">
              <img src={photo1} alt="Sude" className="img-fluid" />
              <h2 className="content_header">
                What nose fillers can do for your nose?
              </h2>
              <p className="content_text">
                What nose fillers can do for your nose? Nose filler What nose
                fillers can do for your nose? Are you considering nose filler in
                Turkey? Look no further than HealTrip Global, where we offer
                top-quality...
              </p>
            </Link>
          </Col>
          <Col md={6}>
          <Link to="/blogs/hair-loss-is-a-common-problem-that-affects-millions-of-women" className="blog-link">
            <img src={photo2} alt="Sude" className="img-fluid" />
            
            <h2 className="content_header">Hair Loss in Women</h2>
            <p className="content_text">
              Hair loss is a common problem that affects millions of women
              around the world. It can cause emotional distress and have a
              negative impact on a woman's self-esteem.
            </p>
            </Link>
          </Col>
          </Row> 
          <Row style={{paddingTop:"30px"}}>
          <Col md={4}>
          <Link to="/blogs/How-To-Maintain-Good-Oral-Hygiene" className="blog-link">
            <img src={photo3} alt="Sude" className="img-fluid" />
            <h2 className="content_header">
              How To Maintain Good Oral Hygiene?
            </h2>
            <p className="content_text">
              Good oral hygiene is essential to maintain healthy teeth and gums.
              Oral hygiene refers to the practices that we use to keep our
              mouths clean and free from harmful bacteria.
            </p>
            </Link>
          </Col>
          <Col md={4}>
          <Link to="/blogs/Hair-Loss-for-Men" className="blog-link">
            <img src={photo4} alt="Sude" className="img-fluid" />
            <h2 className="content_header">Hair Loss for Men</h2>
            <p className="content_text">
              Hair loss can be a frustrating and distressing experience for men,
              affecting not only their physical appearance but also their
              self-esteem a...
            </p>
            </Link> 
          </Col>
          <Col md={4}>
            {" "}
            {}
            <Link to="/blogs/Almond-Eye-Surgery-in-Turkey" className="blog-link">
            <img src={photo5} alt="Sude" className="img-fluid" />
            <h2 className="content_header">
              Almond Eye Surgery in Turkey: Benefits, Risks, and What to Expect
            </h2>
            <p className="content_text">
              Almond eye surgery in Turkey is a highly sought-after procedure
              that can significantly enhance the shape and appearance of the
              eyes. Whether...
            </p>
            </Link> 
          </Col>
          <Row style={{paddingTop:"30px"}}>
          <Col md={6}>
          <Link to="/blogs/Everything-You-Need-to-Know-About-General-Anaesthesia" className="blog-link">
            <img src={photo6} alt="Sude" className="img-fluid" />
            <h2 className="content_header">
              Everything You Need To Know About General Anaesthesia
            </h2>
            <p className="content_text">
              General anesthesia is a medical state induced by the
              administration of drugs to a patient to achieve unconsciousness,
              loss of sensation, and...
            </p>
            </Link> 
          </Col>
          <Col md={6}>
          <Link to="/blogs/Hair-Transplant-Techniques-and-Procedures" className="blog-link">
            <img src={photo7} alt="Sude" className="img-fluid" />
            <h2 className="content_header">
            Hair Transplant Techniques and Procedures
            </h2>
            <p className="content_text">
            Hair loss can significantly impact an individual's self-esteem and confidence. Fortunately, hair transplant procedures have emerged as an ef...
            </p>
            </Link> 
          </Col>
          </Row>
          <Row style={{paddingTop:"30px"}}>
          <Col md={4}>
          <Link to="/blogs/How-Much-Does-Rhinoplasty-Cost-in-Turkey" className="blog-link">
            <img src={photo8} alt="Sude" className="img-fluid" />
            <h2 className="content_header">
            How Much Does Rhinoplasty Cost in Turkey?
            </h2>
            <p className="content_text">
            Turkey is globally renowned for its expertise in aesthetic surgery. When people think of rhinoplasty in Turkey, they often associate it with...
            </p>
            </Link> 
          </Col>
          <Col md={4}>
          <Link to="/blogs/What-is-Breast-Augmention" className="blog-link">
            <img src={photo9} alt="Sude" className="img-fluid" />
            <h2 className="content_header">
            What is Breast Augmentation and Why is it Preferred?
            </h2>
            <p className="content_text">
            What is Breast Augmentation and Why is it Preferred?Aesthetic surgery is a treatment method chosen to create differences in individuals' physical appearances. Among the areas where aesthetic i...
            </p>
            </Link> 
          </Col>
          <Col md={4}>
          <Link to="/blogs/Exploring-Gastric-Balloon-in-Turkey" className="blog-link">
            <img src={photo10} alt="Sude" className="img-fluid" />
            <h2 className="content_header">
            Exploring Gastric Balloon in Turkey: Procedure, Cost, and Availability
            </h2>
            <p className="content_text">
            When it comes to weight loss options, gastric balloons have gained popularity as a non-surgical solution, even in Turkey. In this article, w...
            </p>
            </Link> 
          </Col>
          </Row>
        </Row>
      </Container>
    </div>
  );
}
