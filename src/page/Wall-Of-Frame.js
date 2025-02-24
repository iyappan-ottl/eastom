import React from "react";
import cooking from "../assets/vector/easto-cooking-vector.gif";
import PageTitle from '../components/PageTitle';
import SEO from "../components/SEO";

const WallOfFrames = () => {
  return (
    <>
      <SEO
        title='Wall of Fame | Easto Academy | Celebrating Achievements'
        description='Explore Easto Academy’s Wall of Fame, celebrating top performers, outstanding students, and alumni success stories. Join us & make your mark in tech!'
        keywords='Easto Academy, Wall of Fame, student achievements, top performers, success stories, alumni recognition, best students, coding champions, tech success, software training awards, excellence in learning, career growth, coding bootcamp alumni, developer success, featured students' />
      <PageTitle title="Wall Of Frame" />
      <div className="justify-items-center">
        <h4 className="text-7xl mb-10">Coming Soon...</h4>
        <img src={cooking} alt="cooking"></img>
      </div>
    </>
  );
};

export default WallOfFrames;
