import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";
import iyappanImg from "../assets/testimonials/easto-iyappan-mentor-founder.jpg";
import sharanImg from "../assets/testimonials/easto-sharan-kumar-mentor.jpg";
import ramImg from "../assets/testimonials/easto-ram_pragesh-mentor.jpg";

const mentors = ({ mentorIds = 'all' }) => {
  const mentors = [
    {
      title: 'Iyappan Samiraj',
      id: 1,
      position: '(Founder)',
      image: iyappanImg,
      role: 'Full Stack Developer',
      website: 'https://www.iyappan.in',
      linkedin: 'https://www.linkedin.com/in/iyappan-samiraj',
      instagram: 'https://www.instagram.com/iyappan.samiraj',
    },
    {
      title: 'Sharan Kumar',
      id: 2,
      image: sharanImg,
      role: 'Mobile App Developer',
      linkedin: 'https://www.linkedin.com/in/sharanksk1',
      instagram: 'https://www.instagram.com/sharanksk357',
    },
    {
      title: 'Ram Pragesh',
      id: 3,
      image: ramImg,
      role: 'Mobile App Developer',
      linkedin: 'https://www.linkedin.com/in/ram-pragesh-p-556556188',
    },
  ];
  return (
    <div className="flex flex-wrap justify-center sm:gap-6 gap-12">
      {mentors.filter(i => mentorIds === 'all' || mentorIds.includes(i.id)).map((mentor, index) => (
        <div key={index} className="max-w-96 p-5 bg-white border rounded-md" style={{ textDecoration: 'none' }}>
          <div className="relative overflow-hidden">
            <span className="lazy-load-image-background lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
              <img src={mentor.image} alt={mentor.title} className="transition duration-1000" />
            </span>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold">{mentor.title} <span className="text-xs text-gray-400">{mentor.position}</span></h1>
            <p className="text-gray-500">{mentor.role}</p>
            <span className="flex text-gray-700 flex-wrap text-xl gap-2 justify-center mt-2">
              {mentor.website && <a href={mentor.website} target='_blank' rel="noreferrer">
                <AiOutlineGlobal />
              </a>}
              {mentor.instagram &&
                <a href={mentor.instagram} target='_blank' rel="noreferrer">
                  <FaInstagram />
                </a>}
              {mentor.linkedin &&
                <a href={mentor.linkedin} target='_blank' rel="noreferrer">
                  <FaLinkedin />
                </a>}
            </span>
          </div>
        </div>
      ))}
    </div>
  )
};

export default mentors;
