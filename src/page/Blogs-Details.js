import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import Roadmap from '../blogs/roadmap';
import InterviewQuestion from '../blogs/interview-questions';
import { useNavigate } from "react-router-dom"; // If you're using React Router

const BlogsDetails = () => {
  let params = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState('');

  useEffect(() => {
    const keywords = ['roadmap', 'interview-questions'];
    if (keywords.find(itm => params?.id.toLowerCase().includes(itm))) {
      setId(params.id);
    } else {
      navigate('/');
    }
  }, [params]);

  return (
    <>
      {id.includes('roadmap') && <Roadmap params={id} />}
      {id.includes('interview-questions') && <InterviewQuestion params={id} />}
    </>
  );
};

export default BlogsDetails;
