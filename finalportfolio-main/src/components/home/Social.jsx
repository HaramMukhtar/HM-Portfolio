import React from "react";
import { FiInstagram, FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/jani._543?igsh=eDN0NGt2MXRhc3l6"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiInstagram />
      </a>
      <a
        href="https://github.com/RiziRajput"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/rizwan-majeed-dev/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
