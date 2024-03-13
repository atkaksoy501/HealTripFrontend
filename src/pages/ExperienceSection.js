import React from "react";
import { useSpring, animated } from "react-spring";
import "./ExperienceSection.css";


const ExperienceSection = () => {
  const numberSprings = useSpring({
    from: { number: 0 },
    to: { number: 8300 },
    config: { duration: 2000 },
  });

  const countrySprings = useSpring({
    from: { number: 0 },
    to: { number: 24 },
    config: { duration: 1500 },
    delay: 500,
  });

  const yearSprings = useSpring({
    from: { number: 0 },
    to: { number: 14 },
    config: { duration: 1000 },
    delay: 1000,
  });

  return (
    <div className="container-experience">
      <div className="container-div">
        <p className="counter">
          <animated.span style={yearSprings}>
            {yearSprings.number.to((n) => n.toFixed(0))}
          </animated.span>{" "}+
        </p>
        <p>Years of Experience</p>
      </div>

      <div className="container-div">
        <p className="counter">
          <animated.span style={countrySprings}>
            {countrySprings.number.to((n) => n.toFixed(0))}
          </animated.span>{" "}+
        </p>
        <p>Countries+</p>
      </div>

      <div className="container-div">
        <p className="counter">
          <animated.span style={numberSprings}>
            {numberSprings.number.to((n) => n.toFixed(0))}
          </animated.span>{" "}+
        </p>
        <p>Satisfied Patients</p>
      </div>
    </div>
  );
};

export default ExperienceSection;
