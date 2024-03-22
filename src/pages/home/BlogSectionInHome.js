import React from "react";
import "./BlogSectionInHome.css";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

import photo1 from "./blogImages/blog1.jpg";
import photo2 from "./blogImages/blog2.jpg";
import photo3 from "./blogImages/blog3.jpg";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const BlogSectionInHome = () => {
  return (
    <Container style={{ padding: "30px 0" }}>
      <h1
        style={{
          textAlign: "center",
          color: "#3c879e",
          fontWeight: "1000",
          fontSize:"2.5rem",
          marginBottom:"0",
          fontFamily: "Oswald , sans-serif"
        }}
      >
        HEALTRIP BLOG
      </h1>
      <Row>
      <Link to="/blogs" className="blog-link"><h2 style={{textAlign:"right", paddingBottom:"10px"}}>View All Blogs <ArrowForwardIcon /></h2></Link>
        <Col md={4} style={{padding:"15px"}}>
          
          <Link to="/cosmetic-dentistry" className="blog-link">
            <img src={photo1} alt="Burak" className="img-fluid" />
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
        <Col md={4}  style={{padding:"15px"}}>
          <Link to="/oral-surgery" className="blog-link">
            {" "}
            {}
            <img src={photo2} alt="Burak" className="img-fluid" />
            <h2 className="content_header">Hair Loss in Women</h2>
            <p className="content_text">
              Hair loss is a common problem that affects millions of women
              around the world. It can cause emotional distress and have a
              negative impact on a woman's self-esteem.
            </p>
          </Link>
        </Col>
        <Col md={4}  style={{padding:"15px"}}>
          <Link to="/general-dentistry" className="blog-link">
            <img src={photo3} alt="Burak" className="img-fluid" />
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
      </Row>
    </Container>
  );
};
