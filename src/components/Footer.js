import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer text-center text-white">
      <div className="socialMedia">
        <div className=" align-items-center justify-content-center">
          <h3>Work Inquiry</h3>
          <p>Let's work together and i'll help you with all my best</p>
          <a href="mailto:idayatsanni@gmail.com" className="btn btn-light">
            Let's talk here
          </a>
        </div>
        <a
          href="https://www.instagram.com/idayat_codes/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/IdayatSanni"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/idayat-sanni-a46b16102/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin />
        </a>
      </div>
      <p> &copy; 2022 idayatsanni.com</p>
    </div>
  );
}

export default Footer;
