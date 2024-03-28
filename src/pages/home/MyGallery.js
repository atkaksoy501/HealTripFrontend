import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./MyGallery.css";
import photo1 from "./galleryImages/gallery-1.jpg";
import photo2 from "./galleryImages/gallery-2.jpg";
import photo3 from "./galleryImages/gallery-3.jpg";
import photo4 from "./galleryImages/gallery-4.jpg";
import photo5 from "./galleryImages/gallery-5.jpg";
import photo6 from "./galleryImages/gallery-6.jpg";
import photo7 from "./galleryImages/gallery-7.jpg";
import photo8 from "./galleryImages/gallery-8.jpg";

export const MyGallery = () => {
  const images = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8];
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ backgroundColor: "#3c879e", height: "100%", padding: "40px 0" }}>
      <h1 style={{ textAlign: "center", color: "#fff", padding: "4px", fontFamily: "Oswald, sans-serif", fontSize: "2.5rem" }}>GALLERY</h1>
      <Carousel data-bs-theme="primary" style={{ margin: "0 auto", width: "90%" }}>
        {windowWidth > 900 ? (
          [...Array(Math.ceil(images.length / 3))].map((_, slideIndex) => (
            <Carousel.Item key={slideIndex}>
              <div className="d-flex justify-content-center">
                {images.slice(slideIndex * 3, (slideIndex + 1) * 3).map((image, index) => (
                  <img className="d-block w-25" src={image} alt={`Slide ${slideIndex * 3 + index + 1}`} style={{ marginRight: "30px" }} key={index} />
                ))}
              </div>
            </Carousel.Item>
          ))
        ) : (
          images.map((image, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex justify-content-center">
                <img className="d-block" src={image} alt={`Slide ${index + 1}`} />
              </div>
            </Carousel.Item>
          ))
        )}
      </Carousel>
    </div>
  );
};
