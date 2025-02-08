import React, { useState, useEffect } from 'react';

const FloatingButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling effect
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Show the button when scrolled more than 100px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-10 right-10 z-20 md:flex flex-col gap-2">
        <div
          onClick={scrollToTop}
          className="bg-green-600 max-md:h-[30px] max-md:w-[30px] w-[40px] h-[40px] transform hover:scale-110 transition duration-1000 rounded-full flex flex-col gap-1 text-white justify-center items-center shadow-testShadow overflow-x-hidden group cursor-pointer relative"
        >
          <div className="flex justify-center items-center">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-2xl -translate-x-12 group-hover:translate-x-3 transition-transform duration-200"
              height="1em"
              width="1em"

            >
              <path d="M8 256C8 119 119 8 256 8s248 111 248 248-111 248-248 248S8 393 8 256zm292 116V256h70.9c10.7 0 16.1-13 8.5-20.5L264.5 121.2c-4.7-4.7-12.2-4.7-16.9 0l-115 114.3c-7.6 7.6-2.2 20.5 8.5 20.5H212v116c0 6.6 5.4 12 12 12h64c6.6 0 12-5.4 12-12z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 512 512"
              className="text-2xl -translate-x-3 group-hover:translate-x-12 transition-transform duration-200"
              height="1em"
              width="1em"

            >
              <path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"></path>
            </svg>
          </div>
        </div>
      </div>
    )
  );
};

export default FloatingButton;