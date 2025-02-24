import React, { useState, useEffect, useRef } from 'react';
import { FaHouse, FaBookOpen, FaCircleInfo, FaBlog } from "react-icons/fa6";
// import { AiFillSafetyCertificate } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import eastoLogo from "../assets/logo/easto-logo-gr-txt-wh-bg-blr.png";
import { useModal } from "../page/Main";
const Header = () => {
  const { openModal } = useModal();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Helper function to check if the current path matches the link
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="lg:sticky z-30 top-0 flex flex-row items-center justify-between px-2 lg:px-16 py-1 lg:py-2 border-b border-gray-500 shadow lg:shadow-none max-md:bg-white lg:backdrop-blur-md">
      <Link to="/" className="flex items-center gap-1">
        {/* <img src={eastoIcon} alt="easto logo" className="lg:max-w-32 max-w-32 max-h-12" /> */}
        <img src={eastoLogo} alt="easto logo" className="lg:max-w-32 max-w-32 max-h-12" />
      </Link>
      <div className="flex-wrap text-md lg:flex-nowrap gap-12 hidden lg:flex">
        <Link to="/" className={`hover:underline hover:text-green-600 hover:underline-offset-8 font-semibold text-gray-700 mb-2 lg:mb-0 ${isActiveLink('/') ? 'text-green-600 underline' : ''}`}>Home</Link>
        <Link to="/courses" className={`hover:underline underline-offset-8 font-semibold text-gray-700 hover:text-green-600 mb-2 lg:mb-0 ${isActiveLink('/courses') ? 'text-green-600 underline' : ''}`}>Courses</Link>
        <Link to="/about-us" className={`hover:underline underline-offset-8 font-semibold text-gray-700 hover:text-green-600 mb-2 lg:mb-0 ${isActiveLink('/about-us') ? 'text-green-600 underline' : ''}`}>About Us</Link>
        <Link to="/blogs" className={`hover:underline underline-offset-8 font-semibold text-gray-700 hover:text-green-600 mb-2 lg:mb-0 ${isActiveLink('/blogs') ? 'text-green-600 underline' : ''}`}>Blogs</Link>
        {/* <Link to="/wall-of-frames" className={`hover:underline underline-offset-8 font-semibold text-gray-700 hover:text-green-600 mb-2 lg:mb-0 ${isActiveLink('/wall-of-frames') ? 'text-green-600 underline' : ''}`}>Wall Of Frame</Link> */}
      </div>
      <div className="lg:hidden max-md:bg-white">
        <button onClick={toggleMobileMenu} className="absolute top-7 right-5 -mt-2 text-2xl text-gray-700">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em">
            <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
          </svg>
        </button>
        <nav
          className={`fixed border border-gray-300 bottom-0 left-0 w-full h-72 z-50 bg-white shadow-lg transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
          ref={mobileMenuRef}
        >
          <div className="flex justify-between items-center p-5">
            <Link to="/" className="flex items-center gap-3">
              {/* <img src={eastoIcon} alt="easto logo" className="h-10 mb-4 lg:mb-0" /> */}
              <img src={eastoLogo} alt="easto logo" className="h-10 mb-4 lg:mb-0" />
            </Link>
            <button onClick={toggleMobileMenu} className="text-2xl text-gray-700 -mt-4">
              {/* <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="1em" width="1em">
                <path d="M64 384h384v-42.666H64V384zm0-106.666h384v-42.667H64v42.667zM64 128v42.665h384V128H64z"></path>
              </svg> */}
              &times;
            </button>
          </div>
          <div className="flex flex-col bg-white h-full px-5">
            <Link to="/" className={`text-gray-700 hover:text-black mb-4 flex items-center gap-2 ${isActiveLink('/') ? 'text-green-600' : ''}`}>
              <FaHouse /> Home
            </Link>
            <Link to="/courses" onClick={toggleMobileMenu} className={`text-gray-700 hover:text-black mb-4 flex items-center gap-2 ${isActiveLink('/courses') ? 'text-green-600' : ''}`}>
              <FaBookOpen /> Courses
            </Link>
            <Link to="/about-us" onClick={toggleMobileMenu} className={`text-gray-700 hover:text-black mb-4 flex items-center gap-2 ${isActiveLink('/about-us') ? 'text-green-600' : ''}`}>
              <FaCircleInfo /> About Us
            </Link>
            <Link to="/blogs" onClick={toggleMobileMenu} className={`text-gray-700 hover:text-black mb-4 flex items-center gap-2 ${isActiveLink('/blogs') ? 'text-green-600' : ''}`}>
              <FaBlog /> Blogs
            </Link>
          </div>
        </nav>
      </div>
      <div className="flex gap-5 items-center">
        <button onClick={() => openModal()} className="bg-green-600 text-md hover:bg-green-700 font-bold rounded-md text-white px-6 py-2 border hidden lg:block">Enroll Now</button>
      </div>
    </div>
  );
};

export default Header;
