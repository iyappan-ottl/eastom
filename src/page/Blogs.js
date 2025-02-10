import React from "react";
import cooking from "../assets/vector/easto-cooking-vector.gif";
import PageTitle from '../components/PageTitle';
import SEO from "../components/SEO";

const Blogs = () => {
  return (
    <>
      <SEO
        title='Blogs'
        description='Beginner friendly page for learning React Helmet.'
        name='Company name.'
        type='article' />
      <PageTitle title="Blogs" />
      <div className="justify-items-center">
        <h4 className="text-7xl mb-4">Coming Soon...</h4>
        <img src={cooking} alt="cooking"></img>
      </div>
    </>
  );
};

export default Blogs;
