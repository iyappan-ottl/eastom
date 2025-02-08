import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import heroImg from '../assets/vector/easto-hero-section-vector.gif';
import { useModal } from "../page/Main";
const HeroSection = () => {
  const { openModal } = useModal();
  const [text, setText] = useState('');
  const fullText = "Software Development";
  const speed = 100;

  useEffect(() => {
    let i = 0;
    let isTyping = true;

    const typeWriter = () => {
      if (isTyping && i < fullText.length) {
        setText(fullText.substring(0, i + 1));
        i++;
        setTimeout(typeWriter, speed);
      } else if (i === fullText.length) {
        // Pause for a moment before erasing
        setTimeout(() => {
          isTyping = false;
          eraseText();
        }, 2000); // Adjust pause duration as needed
      }
    };

    const eraseText = () => {
      if (i >= 0) {
        setText(fullText.substring(0, i));
        i--;
        setTimeout(eraseText, speed);
      } else {
        // Reset and start typing again
        isTyping = true;
        i = 0;
        setTimeout(typeWriter, speed);
      }
    };

    typeWriter();

    // Cleanup function to stop the animation if the component unmounts
    return () => {
      isTyping = false;
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="2xl:pl-56 pl-4 lg:pb-20 pb-4 flex flex-col gap-2 justify-center items-start px-0 hero border-b-8 border-dashed">
      <div className="w-full lg:max-w-2xl flex flex-col gap-5 p-2 lg:p-10 justify-center">
        <h1 className="text-5xl lg:text-5xl text-green-600 font-bold fade-in">Unlock Your Potential in</h1>
        <h1 id="type" className="text-5xl lg:text-5xl text-green-600 font-bold mt-[-21px]">&zwnj;{text}</h1>
        <h2 className="font-semibold text-md fade-in">At Easto, we help you master the skills needed to excel in software development. Our training programs build a strong foundation and keep you ahead in the ever-evolving tech landscape.</h2>
        <div className="flex flex-wrap lg:flex-nowrap gap-4 fade-in">
          <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl max-md:test-lg rounded-md text-white max-md:px-6 px-8 py-3 border" onClick={() => openModal()}>Entroll Now</button>
          <Link to="/courses">
            <button className="bg-white rounded-md text-green-600 font-bold border max-md:test-lg lg:text-xl border-green-600 hover:bg-green-600 hover:text-white px-6 py-3">Explore Courses</button>
          </Link>
        </div>
      </div>
      <div className="lg:absolute justify-center max-sm:pt-2 max-sm:pb-2 items-center lg:pl-48 left-1/2 lg:block w-full lg:w-1/2 p-10 fade-in -z-10">
        <img src={heroImg} alt="hero" className="w-[500px]" />
      </div>
    </div>
  );
};

export default HeroSection;
