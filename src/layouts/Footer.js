import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer class="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
              <Link to="/about-us">about us</Link>
              </li>
              <li>
              <Link to="/treatments">Treatments</Link>
              </li>
              <li>
              <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
              <Link to="/guidance">Guidance</Link>
              </li>
              <li>
              <Link to="/contact">contact</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/Menderes.Turel"> 
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/menderesturel">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/menderesturel">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://tr.linkedin.com/in/menderes-t%C3%BCrel-1a5220ab">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Office</h4>
            <ul>
              <li>
                <p style={{ color: "#e0dfdf" }}>
                  Çıplaklı Mah. Akdeniz Bulvarı No:290/A Döşemealtı/Antalya
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
