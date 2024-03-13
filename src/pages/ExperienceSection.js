import React, { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import "./ExperienceSection.css";

const ExperienceSection = () => {
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const section = document.querySelector(".container-experience");
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setStartAnimation(true);
      }
    });
    observer.observe(section);
    return () => observer.unobserve(section);
  }, []);

  const numberSprings = useSpring({
    from: { number: 0 },
    to: { number: startAnimation ? 8300 : 0 },
    config: { duration: 2000 },
    reset: !startAnimation,
  });

  const countrySprings = useSpring({
    from: { number: 0 },
    to: { number: startAnimation ? 24 : 0 },
    config: { duration: 1500 },
    delay: 500,
    reset: !startAnimation,
  });

  const yearSprings = useSpring({
    from: { number: 0 },
    to: { number: startAnimation ? 14 : 0 },
    config: { duration: 1000 },
    delay: 1000,
    reset: !startAnimation,
  });

  return (
    <div className="container-experience">
      <div className="container-div">
        <p className="counter">
          <animated.span>
            {yearSprings.number.to((n) => n.toFixed(0))}
          </animated.span>{" "}+
        </p>
        <p>Years of Experience</p>
      </div>

      <div className="container-div">
        <p className="counter">
          <animated.span>
            {countrySprings.number.to((n) => n.toFixed(0))}
          </animated.span>{" "}+
        </p>
        <p>Countries</p>
      </div>

      <div className="container-div" id="last-container">
        <p className="counter">
          <animated.span>
            {numberSprings.number.to((n) => n.toFixed(0))}
          </animated.span>{" "}+
        </p>
        <p>Satisfied Patients</p>
      </div>
    </div>
  );
};

export default ExperienceSection;
