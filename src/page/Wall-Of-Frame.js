import React from "react";
import cooking from "../assets/vector/easto-cooking-vector.gif";
import PageTitle from '../components/PageTitle';
import SEO from "../components/SEO";

const WallOfFrames = () => {
  return (
    <>
      <SEO
        title='Wall Of Frames'
        description='Beginner friendly page for learning React Helmet.'
        name='Company name.'
        type='article' />
      <PageTitle title="Wall Of Frame" />
      <div className="justify-items-center">
        <h4 className="text-7xl mb-10">Coming Soon...</h4>
        <img src={cooking} alt="cooking"></img>
      </div>
    </>
  );
};

export default WallOfFrames;
