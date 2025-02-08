import React from 'react';

const PageTitle = ({ title }) => {
  return (
    <div className="h-[7vh] lg:h-[12vh] flex flex-col gap-8 relative">
      <div className="w-full z-10 h-[7vh] lg:h-[12vh] flex flex-col items-center justify-center gap-5">
        <h1 className="text-xl lg:text-3xl text-white capitalize font-bold">{title}</h1>
      </div>
      <div className="absolute maskbox z-0 w-full h-[7vh] lg:h-[12vh] bg-gradient-to-r from-lime-600 to-emerald-300 rounded"></div>
    </div>
  )
};

export default PageTitle;
