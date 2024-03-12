import React, { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

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
    const data = [photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8]
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };
  return (
    <div className="burak">
      <h1 className="title">GALLERY</h1>
      <div className="carousel">
    <BsArrowLeftCircleFill onClick={prevSlide} className="arrow arrow-left" />
    {data.map((item, idx) => {
      return (
        <img
          src={item}
          alt={item}
          key={idx}
          className={slide === idx ? "slide" : "slide slide-hidden"}
        />
      );
    })}
    <BsArrowRightCircleFill
      onClick={nextSlide}
      className="arrow arrow-right"
    />
    <span className="indicators">
      {data.map((_, idx) => {
        return (
          <button
            key={idx}
            className={
              slide === idx ? "indicator" : "indicator indicator-inactive"
            }
            onClick={() => setSlide(idx)}
          ></button>
        );
      })}
    </span>
  </div></div>

  );
};
