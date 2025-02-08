import React from "react";
import Marquee from "react-fast-marquee";
import { FaStar } from "react-icons/fa6";
import rajKrish from "../assets/testimonials/easto-rajkkrishnan-student.jpg";
import subaImg from "../assets/testimonials/easto-subashini-student.jpg";
import laskhmiImg from "../assets/testimonials/easto-lakshmi-kanth-student.jpg";
import kowsiImg from "../assets/testimonials/easto-kowsalya-student.jpg";
import narenImg from "../assets/testimonials/easto-naren-student.jpg";
import kalaiImg from "../assets/testimonials/easto-kalavani-student.jpg";
function Testimonials() {
  const testimonials = [
    {
      name: 'Rajkrishnan R',
      image: rajKrish,
      text: 'At the beginning, reaching that position seemed very difficult. However, consistent hard work and the guidance of your mentors played a crucial role!'
    },
    {
      name: 'Subhashini K',
      image: subaImg,
      text: 'I am thrilled to share my journey. Easto has introduced me to new ideas and knowledge about technology and software companies.'
    },
    {
      name: 'Lakshmikanth Gunasekaran',
      image: laskhmiImg,
      text: 'Easto helped me build a solid foundation in coding and problem-solving. The skills I gained here have opened up so many opportunities for me'
    }, {
      name: 'Kowsalya Subramani',
      image: kowsiImg,
      text: 'One of the best decisions of my career was learning from top mentors about NodeJs, SQL, MongoDB, and bootstrap.'
    },
    {
      name: 'Narenthiran S',
      image: narenImg,
      text: 'The projects were so relevant to the industry. I feel like I’m already experienced because of the tasks we completed during the course.'
    },
    {
      name: 'Kalaivani Ganasan',
      image: kalaiImg,
      text: 'The mentors are always available to help, no matter how big or small the doubt is. They truly care about each student’s growth.'
    },
  ];
  return (
    <>
      <Marquee direction="left" speed={20}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="min-h-56 flex flex-col gap-2 border items-center p-6 rounded-lg bg-green-300 mx-5 max-md:max-w-xs max-w-sm">
            <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-20 h-20 object-cover" />
            <h3 className="text-md font-bold">{testimonial.name}</h3>
            <div className="flex flex-row text-md gap-2 star-icon">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            <p className="text-xs text-center">{testimonial.text}</p>
          </div>
        ))}
      </Marquee>
    </>
  );
}

export default Testimonials;