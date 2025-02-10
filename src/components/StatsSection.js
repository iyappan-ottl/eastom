import React, { useState, useEffect } from 'react';

const StatsSection = () => {
  // Define state variables for each counter
  const [courseCount, setCourseCount] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const [companyCount, setCompanyCount] = useState(0);

  // Define target values and duration for the counters
  const courseTarget = 531;
  const studentTarget = 90;
  const companyTarget = 3.6;

  useEffect(() => {
    // Function to increment the count
    const animateCount = (target, setter, dur, tim) => {
      let start = 0;
      const step = Math.floor(target / (dur / tim)); // Divide duration into steps of 10ms
      const timer = setInterval(() => {
        if (start + step >= target) {
          clearInterval(timer);
          setter(target);
        } else {
          start += step;
          setter(start);
        }
      }, tim); // Update every 10ms
    };

    // Start animations for each counter
    animateCount(courseTarget, setCourseCount, 500, 10);
    animateCount(studentTarget, setStudentCount, 3, 1);
    animateCount(companyTarget, setCompanyCount, 1, 1);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <div className="flex flex-wrap lg:flex-nowrap items-center justify-center mx-5 bg-gradient-to-r from-emerald-500 to-lime-600 lg:mx-60 border-4 border-gray-300 rounded-2xl mt-5 lg:-mt-16">
      <div className="flex w-full lg:w-1/3 text-5xl font-bold text-white flex-col items-center justify-center p-5 gap-3 max-md:border-b lg:border-r border-gray-300">
        <span>{courseCount}</span>
        <h1 className="text-xl rounded-lg text-center px-3 py-1">Students enrolled</h1>
      </div>
      <div className="flex w-full lg:w-1/3 text-5xl font-bold text-white flex-col items-center justify-center p-5 gap-3 max-md:border-b lg:border-r border-gray-300">
        <span>{studentCount.toLocaleString()}%</span>
        <h1 className="text-xl rounded-lg text-center px-3 py-1">Of Students Placed</h1>
      </div>
      <div className="flex w-full lg:w-1/3 text-5xl font-bold text-white flex-col items-center justify-center p-5 gap-3 max-md:border-b lg:border-r border-gray-300">
        <span>{companyCount} LPA</span>
        <h1 className="text-xl rounded-lg text-center px-3 py-1">Average Salary Package</h1>
      </div>
    </div>
  );
};

export default StatsSection;