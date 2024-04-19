import React from "react";
import "./footer.css";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer id="footer">
      <a href="#" className="footer__logo">
        Ashish Maurya
      </a>

      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/* <li>
          <a href="#services">Services</a>
        </li> */}
        <li>
          <a href="#portfolio">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a
          href="https://www.facebook.com/profile.php?id=100038579161891"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/__ashish.maurya__/" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://twitter.com/AshishM84761339" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Ashish Maurya. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
