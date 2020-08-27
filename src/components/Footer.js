import React from "react";
import "./Footer.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="content">
        <div>
          <p className="tagline">
            Made with <span className="heart">♥</span> by{" "}
            <a
              className="github-profile"
              href="https://github.com/BreeMadison"
              target="_blank"
              rel="noopener noreferrer"
            >
              Breanna
            </a>
          </p>
        </div>
        <div className="external-links">
          <a href="https://github.com/BreeMadison/soundtrackify">
            <FontAwesomeIcon className="icon" icon={faGithubSquare} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/breannammadison/">
            <FontAwesomeIcon className="icon" icon={faLinkedin} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
