import React, { useState, useEffect } from "react";
import "./DepartmentsSection.css";
import DepartmentService from "../../services/departmentService";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";

import photo1 from "./images/aesthtetic.jpg";
import photo2 from "./images/hair.jpg";
import photo3 from "./images/dental.jpg";
import photo4 from "./images/metabolic.jpg";
import photo5 from "./images/eye.jpg";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export const DepartmentsSection = () => {
  const images = [photo1, photo2, photo3, photo4, photo5];

  const [departments, setDepartments] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const departmentService = new DepartmentService();
    departmentService.getDepartments().then((result) => setDepartments(result.data));

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const customPrevIcon = <BsChevronLeft size={30} color="#fff" />;
  const customNextIcon = <BsChevronRight size={30} color="#fff" />;

  const chunkArray = (arr, size) => {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  };

  return (
    <div
      style={{
        backgroundColor: "#3c879e",
        height: "100%",
        padding: "30px 0",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#fff",
          padding: "4px",
          fontFamily: "Oswald, sans-serif",
          fontSize: "2.5rem",
          marginBottom: "20px",
        }}
      >
        DEPARTMENTS
      </h1>
      <Carousel
        style={{ margin: "0 auto", width: "90%", maxWidth: "1200px" }}
        prevIcon={customPrevIcon}
        nextIcon={customNextIcon}
      >
        {windowWidth > 900
          ? chunkArray(departments, 3).map((chunk, slideIndex) => (
              <Carousel.Item key={slideIndex}>
                <div className="d-flex justify-content-center">
                  {chunk.map((department, index) => (
                    <Link to="/treatments" style={{ margin: "0 15px" }} key={index}>
                      <div
                        style={{
                          position: "relative",
                          textAlign: "center",
                        }}
                      >
                        <img
                          className="d-block"
                          src={images[(slideIndex * 3 + index) % images.length]}
                          style={{
                            width: "320px",
                            height: "auto",
                            transition: "transform 0.5s ease",
                            filter: "brightness(60%)",
                          }}
                          alt=""
                        />
                        <div
                          style={{
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            color: "#295d6d",
                            padding: "5px",
                            borderRadius: "5px",
                            textAlign: "center",
                            width: "auto",
                          }}
                        >
                          <h2
                            style={{
                              fontWeight: "600",
                              fontFamily: "Oswald, sans-serif",
                              fontSize: "2rem",
                              color: "#fff",
                              display: "flex",
                            }}
                            className="department-names"
                          >
                            {department.departmentName}
                          </h2>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </Carousel.Item>
            ))
          : departments.map((department, index) => (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  <Link to="/treatments" style={{ margin: "0 15px" }} key={index}>
                    <div
                      style={{
                        position: "relative",
                        textAlign: "center",
                      }}
                    >
                      <img
                        className="d-block"
                        src={images[index % images.length]}
                        style={{
                          width: "320px",
                          height: "auto",
                          transition: "transform 0.5s ease",
                          filter: "brightness(60%)",
                        }}
                        alt=""
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%, -50%)",
                          color: "#295d6d",
                          padding: "5px",
                          borderRadius: "5px",
                          textAlign: "center",
                          width: "auto",
                        }}
                      >
                        <h2
                          style={{
                            fontWeight: "600",
                            fontFamily: "Oswald, sans-serif",
                            fontSize: "2rem",
                            color: "#fff",
                            display: "flex",
                          }}
                          className="department-names"
                        >
                          {department.departmentName}
                        </h2>
                      </div>
                    </div>
                  </Link>
                </div>
              </Carousel.Item>
            ))}
      </Carousel>
    </div>
  );
};
