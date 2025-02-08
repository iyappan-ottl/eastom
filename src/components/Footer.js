import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaLocationDot, FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import eastoWhiteLogo from '../assets/logo/easto-logo-bg-blur.png';
import eastoWhiteIcon from '../assets/logo/easto-logo-cl-bg-blr.png';
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col gap-5 pt-6 pb-6 justify-between bg-gradient-to-r from-emerald-600 to-lime-500">
      <div className="flex flex-wrap lg:flex-nowrap text-white gap-3 justify-start mx-5 lg:mx-32">
        <div className="w-full lg:w-2/3 flex flex-col gap-2 px-2 lg:items-start items-center lg:mb-0 mb-4">
          <Link to="/" className="flex flex-row gap-1 lg:mb-0 -mb-6" >
            <img src={eastoWhiteIcon} alt="logo" className="lg:w-20 lg:h-20 w-12 h-12" />
            <img src={eastoWhiteLogo} alt="logo" className="lg:max-w-40 max-w-24 mb-4 lg:mb-0" />
          </Link>
          <div className="flex flex-col gap-2 mt-4">
            <div className="flex flex-row gap-2"><FaLocationDot className="text-xl" /> {process.env.REACT_APP_ADDRESS}</div>
            <div className="flex flex-row gap-2"><FaPhone className="text-xl" /> +91 {process.env.REACT_APP_CONTACT_PHONE_NUMBER}</div>
            <div className="flex flex-row gap-2"><IoIosMail className="mt-1 text-xl" />{process.env.REACT_APP_CONTACT_EMAIL}</div>
          </div>
        </div>
        <div className="w-1/3">
          <ul className="flex text-xm lg:text-md flex-col gap-3 border-r-2">
            <li className="font-bold">Main Pages</li>
            <Link to="/courses" >Courses</Link>
            <Link to="/about-us" >About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms Of Service</Link>
          </ul>
        </div>
        <div className="lg:w-1/3 w-auto">
          <ul className="flex text-xm lg:text-md flex-col gap-4 lg:border-r-2">
            <li className="font-bold">Courses</li>
            <Link to="/courses/full-stack-development" rel="noreferrer">Full Stack Development</Link>
            <Link to="/courses/mobile-app-development" rel="noreferrer">Mobile App Development</Link>
            <Link to="/courses/devops">DevOps</Link>
            <Link to="/courses/ai-data-science" >AI & Data Science</Link>
            <Link to="/courses/automation-testing" >Automation Testing</Link>
          </ul>
        </div>
        <div className="w-full text-xm lg:text-md lg:w-1/4 items-center flex flex-col">
          <h3 className="font-bold">Follow Us On</h3>
          <ul className="flex flex-row lg:flex-col gap-4 mt-3">
            <Link to="/" className="flex gap-2 items-center">
              <FaFacebook />
              <span className="hidden lg:block">Facebook</span>
            </Link>
            <Link to="/" className="flex gap-2 items-center">
              <FaInstagram />
              <span className="hidden lg:block">Instagram</span>
            </Link>
            <Link to="/" className="flex gap-2 items-center">
              <FaYoutube />
              <span className="hidden lg:block">YouTube</span>
            </Link>
            {/* <Link to="/" className="flex gap-2 items-center">
              <FaXTwitter />
              <span className="hidden lg:block">Twitter</span>
            </Link> */}
            <Link to="/" className="flex gap-2 items-center">
              <FaLinkedin />
              <span className="hidden lg:block">LinkedIn</span>
            </Link>
          </ul>
        </div>
      </div>
      <p className="text-center text-white -mb-5">Copyright © 2023 - 2025. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;