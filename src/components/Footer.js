import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

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
        <BsInstagram />
        <BsTwitter />
        <BsFacebook />
      </div>
      <p> &copy; 2022 idayatsanni.com</p>
    </div>
  );
}

export default Footer;
