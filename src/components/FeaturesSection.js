import React from "react";
import Marquee from "react-fast-marquee";
import { useModal } from "../page/Main";
import recordImg from '../assets/vector/easto-recorded-class.gif';
import onlineClassImg from '../assets/vector/easto-online-video-vector.gif';
import liveClassImg from '../assets/vector/easto-live-class-vector.gif';
import FeaturesSectionImg from '../assets/vector/easto-feature-section-vector.gif';
import { IoBook, IoEarth } from "react-icons/io5";
import { GrUserExpert, GrLineChart } from "react-icons/gr";
import { SiBookstack } from "react-icons/si";
import { WiTime9 } from "react-icons/wi";
import { MdSupportAgent } from "react-icons/md";
import { GiPodiumWinner } from "react-icons/gi";
import { Link } from 'react-router-dom';
import CourseSection from "../page/Courses";
import Tools from "../json/tools";
const images = require.context('../assets/company', true);
const imageList = images.keys().map(image => images(image));

function FeaturesSection() {
  const { openModal } = useModal();

  const features = [
    {
      icon: (
        <IoBook />
      ),
      title: 'Quality Education'
    },
    {
      icon: (
        <GrUserExpert />
      ),
      title: 'Expert Instructors'
    },
    {
      icon: (
        <SiBookstack />
      ),
      title: 'Diverse Courses'
    },
    {
      icon: (
        <WiTime9 />
      ),
      title: 'Flexible Learning'
    },
    {
      icon: (
        <MdSupportAgent />
      ),
      title: 'Supportive Community'
    },
    {
      icon: (
        <GiPodiumWinner />
      ),
      title: 'Proven Success'
    },
    {
      icon: (
        <GrLineChart />
      ),
      title: 'Career Growth'
    },
    {
      icon: (
        <IoEarth />
      ),
      title: 'Networking Opportunities'
    }
  ];

  return (
    <>
      <div className="swiper-container mt-10 -mb-6">
        <h1 className="text-center text-3xl font-bold pb-8 text-gray-800">
          Our Learners Works at
        </h1>
        <Marquee className='mb-3' direction="right" speed="20">
          {
            imageList.slice(0, 50).map((partner, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10">
                <img src={partner} alt={index} className="w-32 h-auto" />
              </div>
            ))
          }
        </Marquee>
      </div>
      <div className="flex flex-col gap-5 px-2 lg:px-24 py-16">
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <h3 className="text-4xl font-bold w-full text-black lg:w-1/2 lg:text-5xl lg:px-10">Your Path to Success Starts Here</h3>
          <p className="w-full text-md lg:w-1/2 py-2 flex font-semibold text-justify px-0 lg:px-10">
            Whether you're a beginner eager to start your journey or an experienced coder looking to refine your skills, Easto offers flexible learning options to fit your needs. Join a vibrant community of learners and professionals committed to innovation and excellence.
          </p>
        </div>
        <div className="flex flex-wrap justify-between lg:flex-nowrap gap-10 mt-4">
          <div className="flex gap-5 border-2 border-green-800 py-5 px-2 rounded-lg">
            <div className="flex flex-col items-center gap-5">
              <img src={recordImg} alt="recorded" className="max-sm:-mb-16 md:-mb-12 -mb-24 lg:-mt-24 lg:-z-10 object-center text-5xl text-green-600" />
              <h4 className="text-2xl lg:text-3xl text-center text-green-800 uppercase font-bold">Recorded Classes</h4>
              <p className="text-md text-center font-semibold">Learn anytime, anywhere with our video courses. Our courses are designed to be interactive and engaging, with features like quizzes and coding challenges.</p>
              <a href={process.env.REACT_APP_YOUTUBE_URL} target="_blank" rel="noreferrer" className="flex text-lg items-center hover:underline hover:underline-offset-4">
                Learn More
              </a>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-green-800 py-5 px-2 rounded-lg">
            <div className="flex flex-col items-center gap-5">
              <img src={onlineClassImg} alt="recorded" className="max-sm:-mb-16 md:-mb-12 -mb-24 lg:-mt-24 lg:-z-10 object-center text-5xl text-green-600" />
              <h4 className="text-2xl lg:text-3xl text-center text-green-800 uppercase font-bold">Online Classes</h4>
              <p className="text-md text-center font-semibold">Join live sessions from the comfort of your home. Interact with instructors in real-time and collaborate with peers through our online platform.</p>
              <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={() => openModal({ mode: 'online' })}>Enroll Now</button>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-green-800 py-5 px-2 rounded-lg">
            <div className="flex flex-col items-center gap-5">
              <img src={liveClassImg} alt="recorded" className="max-sm:-mb-16 md:-mb-12 -mb-24 lg:-mt-24 lg:-z-10 object-center text-5xl text-green-600" />
              <h4 className="text-2xl lg:text-3xl text-center text-green-800 uppercase font-bold">Live Classes</h4>
              <p className="text-md text-center font-semibold">Experience real-time learning with our live classes. Engage directly with instructors and fellow students for immediate feedback and support.</p>
              <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={() => openModal({ mode: 'offline' })}>Enroll Now</button>
            </div>
          </div>
        </div>
        {/* Hidden overlay and modal for future use */}
        <div className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50 hidden"></div>
        <div className="hidden rounded-lg shadow-xl border-2 border-black bg-gradient-to-r from-emerald-600 to-lime-700 overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-full lg:w-[700px] h-[450px]">
          <div className="w-full h-full p-3">
            <div className="flex justify-between text-white mb-3 px-3">
              <h3 className="text-xl font-bold">ddd</h3>
              <i className="bi bi-x-lg text-2xl font-bold cursor-pointer hover:text-red-500 hover:bg-white rounded-full px-3"></i>
            </div>
            {/* <iframe width="100%" height="350" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
          </div>
        </div>
      </div>
      <div className="swiper-container">
        <h1 className="text-center text-3xl font-bold pb-8 text-gray-800">
          Learn top notch tools, frameworks and libraries
        </h1>
        <Marquee className='mb-3' speed="20">
          {
            Tools.slice(0, 50).map((partner, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                <span className="font-bold max-md:sm text-xl">{partner.name}</span>
              </div>
            ))
          }
        </Marquee>
        <Marquee direction='right' speed="25" className='mb-3'>
          {
            Tools.slice(51, 100).map((partner, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                <span className="font-bold max-md:sm text-xl">{partner.name}</span>
              </div>
            ))
          }
        </Marquee>
        <Marquee speed="15">
          {
            Tools.slice(101, 150).map((partner, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                <span className="font-bold max-md:sm text-xl">{partner.name}</span>
              </div>
            ))
          }
        </Marquee>
      </div>
      <div className="flex flex-col gap-5 py-2 mt-10">
        <h1 className="lg:text-5xl text-4xl font-bold px-6 text-center lg:px-32">Popular Courses</h1>
        <CourseSection count='3' />
      </div>
      <div className="flex flex-wrap justify-between lg:flex-nowrap gap-5 border-green-800 border-2 mx-5 lg:mx-32 mt-10 mb-10 rounded">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 max-md:p-4 p-10">
          <h1 className="text-5xl text-green-600 font-bold">
            Maximize Your <br /> Potential in Software <br />Development
          </h1>
          <p className="text-lg font-semibold">Explore a diverse array of interactive learning courses tailored to help you achieve your goals.</p>
          <div className="flex gap-5">
            <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={openModal}>Enroll Now</button>
            <Link to="/courses">
              <button className="bg-white rounded-md text-green-600 lg:text-xl font-bold border border-green-600 hover:bg-green-600 hover:text-white px-7 py-2">Explore Courses</button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 p-5 lg:block">
          <img src={FeaturesSectionImg} alt="banner" />
        </div>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-5 mx-0 lg:mx-32 my-14 mb-2">
        <div className="w-full flex-col lg:w-1/2 flex gap-2 items-center justify-center px-5">
          <div className="flex flex-col gap-2 grid lg:grid-cols-2 sm:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCardBox key={index} feature={feature} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5 p-10">
          <h1 className="text-4xl font-bold">Recognized for Excellence in Learning Platform</h1>
          <p className="text-xl">Discover why our learning platform has been awarded for its outstanding features and quality.</p>
          <div className="flex gap-5">
            {/* <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border">Learn More</button> */}
            <Link to="/courses">
              <button className="bg-white rounded-md text-green-600 font-bold border lg:text-xl border-green-600 hover:bg-green-600 hover:text-white px-7 py-2">Explore Courses</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const FeatureCardBox = ({ feature }) => {
  return (
    <div className="flex gap-2 justify-center items-center border-2 p-3 border-green-500 rounded cursor-pointer hover:bg-green-500 hover:text-white">
      {feature.icon}
      <h3 className="text-black max-sd:text-lg lg:text-xl font-bold">{feature.title}</h3>
    </div>
  );
};

export default FeaturesSection;
