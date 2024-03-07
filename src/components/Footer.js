import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <footer class="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="footer-col">
            <h4>company</h4>
            <ul>
              <li>
                <a href="about.html">about us</a>
              </li>
              <li>
                <a href="dentists.html">Treatments</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>get help</h4>
            <ul>
              <li>
                <a href="index.html#faq">Patient Guide</a>
              </li>
              <li>
                <a href="contact.html">contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>follow us</h4>
            <div className="social-links">
              <a href="#">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
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
