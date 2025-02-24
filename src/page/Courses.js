import React from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';
import courses from '../json/courses';

const CourseSection = ({ count }) => {
  const showCount = count ?? 5;

  return (
    <>
      {
        (showCount === 5) &&
        <>
          <SEO
            title='Explore Our Courses | Full-Stack, AWS & More - Easto Academy'
            keywords='software development courses, Full-Stack Development course, MERN Stack training, Node.js course, AWS training, Python programming course, hands-on coding classes, web development course, learn Full-Stack development, online coding courses, best programming courses, cloud computing training, JavaScript and React training, backend development course, frontend development course, software engineering bootcamp, best Full-Stack Development course with hands-on projects, learn MERN Stack development online, affordable software development training with certification, web development courses for beginners and professionals, Puducherry, Pondicherry, tamilnadu, south india'
            description='Discover software development courses at Easto! Learn Full-Stack, AWS, Devops, AI &  more with hands-on training. Gain real-world skills and start today! 🚀'
          />
          <PageTitle title='Explore Our Courses' />
        </>
      }
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center gap-2">
          {courses.slice(0, showCount).map((course, index) => (
            <Link key={index} to={course.link} className="lg:w-1/4 p-5 bg-white border rounded-md cursor-pointer hover:shadow-xl mb-3 lg:mb-0" style={{ textDecoration: 'none' }}>
              <div className="relative overflow-hidden">
                <span className="lazy-load-image-background lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                  <img src={course.mainImg} alt={course.title} className=" transition duration-1000 cursor-pointer object-cover" />
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-green-900 opacity-0 hover:opacity-30"></div>
              </div>
              <div>
                {course.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="mr-2 items-center rounded-md px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10 bg-gray-100 inline-flex">
                    {tag}
                  </span>
                ))}
                <h1 className="text-2xl font-bold">{course.title}</h1>
                <p className="text-gray-500 text-sm hidden lg:block">{course.description}</p>
                {/* <p className="text-2xl font-bold">{course.price}</p> */}
                <p className="hover:underline cursor-pointer underline-offset-4 font-semibold">
                  Learn more
                  <i className="bi bi-caret-right-fill"></i>
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CourseSection;