import React from "react";
//import { FontAwesomeIcon } from "@fortawesome/fontawesome-free";
//import { faLinkedin, faGithub } from "@fortawesome/fontawesome-free";
import "./footer.css";

export function Footer() {
  const handleClickLinkedIn = () => {
    window.open("https://www.linkedin.com/in/juan-agustin-savoy-9b1103202/");
  };
  const handleClickGitHub = () => {
    window.open("https://github.com/agustinsavoy1");
  };

  return (
    <div className="footerContainer">
      <div className="footer">
        <a
          href="mailto:agustinsavoy.json@gmail.com?body=Juan Agustin Savoy"
          className="footerName"
        >
          @agustinsavoy.json
        </a>
        <p onClick={handleClickLinkedIn} className="footerLink">
          {/* <FontAwesomeIcon icon={faLinkedin} size="2x" /> */}
        </p>
        <p onClick={handleClickGitHub} className="footerGit">
          {/* <FontAwesomeIcon icon={faGithub} size="2x" /> */}
        </p>
      </div>
    </div>
  );
}
