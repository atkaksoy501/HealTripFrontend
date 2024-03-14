import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyGallery.css";
import photo1 from "../images/gallery-1.jpg";
import photo2 from "../images/gallery-2.jpg";
import photo3 from "../images/gallery-3.jpg";
import photo4 from "../images/gallery-4.jpg";
import photo5 from "../images/gallery-5.jpg";
import photo6 from "../images/gallery-6.jpg";
import photo7 from "../images/gallery-7.jpg";
import photo8 from "../images/gallery-8.jpg";

export const MyGallery = () => {
  const data = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];

  return (
    <div style={{ backgroundColor: "#3c879e", height: "100%", padding:"40px 0"}}>
        <h1 style={{textAlign:"center", color:"#fff", padding:"4px", fontFamily:"Oswald, sans-serif", fontSize:"2.5rem"}}>GALLERY</h1>
      <Carousel
        data-bs-theme="primary"
        style={{margin: "0 auto", width:"90%"}}
      >
        <Carousel.Item>
        <div className="d-flex justify-content-center">
        <img className="d-block w-25" src={data[0]} alt="First slide" style={{marginRight:"30px"}}/>
        <img className="d-block w-25" src={data[1]} alt="Second slide" style={{marginRight:"30px"}}/>
        <img className="d-block w-25" src={data[2]} alt="Third slide" />
      </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-center">
        <img className="d-block w-25" src={data[3]} alt="Second slide" style={{marginRight:"30px"}}/>
        <img className="d-block w-25" src={data[4]} alt="Second slide" style={{marginRight:"30px"}}/>
        <img className="d-block w-25" src={data[5]} alt="Second slide" />
        </div>
        </Carousel.Item>
        <Carousel.Item>
        <div className="d-flex justify-content-center">
          <img className="d-block w-25" src={data[6]} alt="Third slide" style={{marginRight:"30px"}} />
          <img className="d-block w-25" src={data[7]} alt="Third slide" style={{marginRight:"30px"}}/>
          <img className="d-block w-25" src={data[3]} alt="Third slide" />
        </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
