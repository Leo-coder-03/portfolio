import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { SiX,SiMedium } from 'react-icons/si';
import './footer.scss'; 


const Footer = () => {
  return (
    <footer className="footer">
      <div className="links">
        <div>
          <h2>Quick Links</h2>
          <ul className="links">
            <li><a href="#Home" className="hover:text-white">Home</a></li>
            <li><a href="#About" className="hover:text-white">About</a></li>
            <li><a href="#Skills" className="hover:text-white">Skills</a></li>
            <li><a href="#Portfolio" className="hover:text-white">Portfolio</a></li>
            <li><a href="#Contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div>
          <h2>Follow Me</h2>
          <div className="">
            <a href="#" className="hover:text-white"><FaGithub /></a>
            <a href="#" className="hover:text-white"><SiX /></a>
            <a href="#" className="hover:text-white"><SiMedium /></a>
            <a href="#" className="hover:text-white"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} MyWebsite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
