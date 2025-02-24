import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Marquee from "react-fast-marquee";
import { useModal } from "../page/Main";
import FAQ from "../components/FAQ";
import Mentors from '../components/Mentors';
import Testimonials from '../components/Testimonials';
import SEO from '../components/SEO';
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router";
import courses from '../json/courses';
import notFoundImage from '../assets/vector/easto-404-not-found-vector.gif';
import accessImg from "../assets/icons/access.png";
import discussionImg from "../assets/icons/discussion.png";
import schoolImg from "../assets/icons/school.png";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const CourseDetailPage = () => {
  const { openModal } = useModal();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  let params = useParams();

  useEffect(() => {
    const course = courses.find(c => c.slug === params.course_name);
    setCourse(course);
  }, [params]);

  return (
    <>{!course &&
      <div className='flex flex-col items-center'>
        <img src={notFoundImage} alt='easto not found'></img>
      </div>
    }
      {course &&
        <div className="flex flex-wrap-reverse gap-10 pb-10 mt-3 lg:mt-8 mx-5 ">
          <SEO
            title={course?.seo?.title}
            description={course?.seo?.description}
            keywords={course?.seo?.keywords}
          />
          <div id="course" className="w-full course-detail">
            <div className="hidden lg:block mb-2">
              <span>
                <Link to="/" className="font-semibold hover:underline underline-offset-2">Home</Link>
                <span> / </span>
              </span>
              <span>
                <Link to="/courses" className="font-semibold hover:underline underline-offset-2">Courses</Link>
                <span> / </span>
              </span>
              <span>
                <span className="font-bold">{course?.title}</span>
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl my-4 font-bold text-center text-green-600 md:block lg:block">{course?.title}</h1>
            {/* Hero Section */}
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
              <div className="w-full lg:w-1/3 py-2 justify-center flex px-0">
                <img src={course?.mainImg} alt="Course" className="min-w-xs rounded-md shadow-md" />
              </div>
              <div className="w-full lg:w-2/3 lg:text-5xl">
                <p className="text-justify text-lg font-semibold my-7">{course?.description}</p>
                <div className='flex flex-col items-center'>
                  <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={() => openModal({ course: course?.short_code })}>Enroll Now</button>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center w-full my-10 bg-gradient-to-r from-emerald-500 to-lime-600 border-4 border-gray-300 rounded-2xl">
                  {course?.modules && course?.modules.map((module, index) => (
                    <div key={index} className="flex w-full lg:w-1/3 text-5xl font-bold text-white flex-col gap-2 border-b lg:border-r">
                      <h1 className="text-lg text-center px-3 mt-3 mb-2">{module?.title}</h1>
                      <div className="border mx-16 lg:mx-5"></div>
                      <p className="text-sm text-center py-2 pb-4">{module?.subtitle}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col lg:block text-lg gap-6 mt-4">
                  <h1 className="text-3xl font-bold">Why Choose This Course?</h1>
                  <div className="flex flex-row gap-2"><TiTick className='text-xl text-green-600 mt-1' /><p><b>Learn by Doing:</b> Work on 3+ live projects that mimic industry challenges.</p></div>
                  <div className="flex flex-row gap-2"><TiTick className='text-xl text-green-600 mt-1' /><p><b>Job-Ready Skills:</b> {course?.job_skills}</p></div>
                  <div className="flex flex-row gap-2"><TiTick className='text-xl text-green-600 mt-1' /><p><b>Expert Mentors:</b> Learn from developers who’ve worked at CTS, TCS and Wipro.</p></div>
                  <div className="flex flex-row gap-2"><TiTick className='text-xl text-green-600 mt-1' /><p><b>Flexible Learning:</b> Choose from online, offline, or hybrid batches that suit your schedule.</p></div>
                </div>
              </div>
            </div>
            {/* Skill and tools */}
            <div className="swiper-container">
              <h1 className="text-center text-3xl font-bold pb-8 mt-6 text-gray-800">
                Learn top notch tools, frameworks and libraries
              </h1>
              <Marquee className='mb-2' speed="20">
                {
                  course?.tools && course.tools.map((partner, index) => (
                    <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                      <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                      <span className="font-bold max-md:sm text-xl">{partner.name}</span>
                    </div>
                  ))
                }
              </Marquee>
              <Marquee className='mt-4' direction="right" speed="20">
                {
                  course?.tools && course.tools.map((partner, index) => (
                    <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                      <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                      <span className="font-bold max-md:sm text-xl">{partner.name}</span>
                    </div>
                  ))
                }
              </Marquee>
            </div>
            {/* Curriculum */}
            <div className="mx-auto w-full lg:w-1/2">
              <h1 className="text-center text-3xl font-bold pb-8 mt-6 text-gray-800">
                Curriculum Breakdown
              </h1>
              {/* Tab Buttons */}
              <div className="flex space-x-2  md:justify-center overflow-x-auto border-b border-gray-300 scrollbar-hide">
                {/* Add more tabs if needed */}
                {course?.curriculum && course.curriculum.map((_, index) => (
                  <button
                    key={index}
                    className={`py-2 px-4 font-medium text-sm whitespace-nowrap ${activeTab === index ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'
                      } focus:outline-none`}
                    onClick={() => handleTabClick(index)}
                  >
                    Module {index + 1}
                  </button>
                ))}
              </div>
              {/* Tab Content */}
              <div className="flex flex-row justify-center">
                <div className="mt-2 p-4 w-full items-center bg-white rounded shadow">
                  {activeTab !== null && (
                    <div className='flex flex-col gap-2 items-center'>
                      <h2 className="text-xl font-semibold">{course.curriculum[activeTab].title}</h2>
                      {course.curriculum[activeTab].topics.map((itm, index) => (
                        <p key={index} className="text-gray-700 flex flex-row gap-2"><TiTick className="text-green-600 mt-1" /> {itm}</p>
                      ))}
                    </div>
                  )}
                  <Link to={`/blogs/${course.slug}-roadmap`} className="font-semibold flex flex-col items-center hover:underline underline-offset-2 mt-2">View Full Roadmap</Link>
                </div>
              </div>
            </div>
            {/* What you build */}
            <div className="flex flex-col mt-4">
              <h1 className="text-center text-3xl font-bold pb-8 mt-2 text-gray-800">What You’ll Build</h1>
              <div className="flex flex-wrap justify-center lg:flex-nowrap gap-5">
                {course?.projects && course.projects.map((project, index) => {
                  return (
                    <div key={index} className="flex gap-2 border-2 w-96 border-green-800 rounded-lg justify-center py-2">
                      <div className="flex flex-col items-center gap-5">
                        <img src={project.img} alt="recorded" className="object-center max-w-xs text-5xl text-green-600" />
                        <h4 className="text-xl text-center text-green-800 uppercase font-bold">{project.title}</h4>
                        <p className="text-xs text-center font-semibold">{project.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Who is for */}
            <div className="flex flex-col gap-3 mt-4">
              <h1 className="text-center text-3xl font-bold pb-8 mt-2 text-gray-800">Who Is This Course For?</h1>
              <div className="flex flex-wrap justify-center lg:flex-nowrap gap-5">
                <div className="flex gap-2 border-2 w-96 border-green-800 py-2 justify-center rounded-lg">
                  <div className="flex flex-col w-72 items-center gap-2">
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Beginners</h4>
                    <p className="text-xs text-center font-semibold">No coding background? No worries—we’ll guide you from scratch.</p>
                  </div>
                </div>
                <div className="flex gap-2 border-2 w-96 border-green-800 py-2 justify-center rounded-lg">
                  <div className="flex flex-col w-72 items-center gap-2">
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Career Changers</h4>
                    <p className="text-xs text-center font-semibold">Transition into one of the highest-paying tech roles.</p>
                  </div>
                </div>
                <div className="flex gap-2 border-2 w-96 border-green-800 py-2 justify-center rounded-lg">
                  <div className="flex flex-col w-72 items-center gap-2">
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Tech Enthusiasts</h4>
                    <p className="text-xs text-center font-semibold">Expand your skillset and become a developer everyone envies.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Review */}
            <div className="flex flex-col gap-3 py-2">
              <h1 className="text-center text-3xl font-bold mt-2 text-gray-800">Reviews</h1>
              <h1 className="text-center text-xl font-semibold pb-3 text-gray-800">Read what our students have to say</h1>
              <Testimonials header='Reviews' />
            </div>
            {/* Different */}
            <div className="flex flex-col gap-3 mt-4">
              <h1 className="text-center text-3xl font-bold pb-3 mt-2 text-gray-800">What Makes Us Different?</h1>
              <div className="flex flex-wrap justify-center lg:flex-nowrap gap-5">
                <div className="flex gap-2 border-2 w-96 justify-center border-green-800 py-4 px-4 rounded-lg">
                  <div className="flex flex-col items-center gap-2 px-2 max-w-64">
                    <img src={schoolImg} className='w-56' alt='easto school'></img>
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Interactive Live Classes</h4>
                    <p className="text-xs text-center font-semibold">Not just lectures—engage, ask, and learn.</p>
                  </div>
                </div>
                <div className="flex gap-2 border-2 w-96 justify-center border-green-800 py-4 px-4 rounded-lg">
                  <div className="flex flex-col items-center gap-2 px-2 max-w-64">
                    <img src={discussionImg} className='w-56' alt='easto discussion'></img>
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Real Mentorship</h4>
                    <p className="text-xs text-center font-semibold">Get 1:1 support whenever you need help.</p>
                  </div>
                </div>
                <div className="flex gap-2 border-2 w-96 justify-center border-green-800 py-4 px-4 rounded-lg">
                  <div className="flex flex-col items-center gap-2 px-2 max-w-64">
                    <img src={accessImg} className='w-56' alt='easto access'></img>
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Lifetime Access</h4>
                    <p className="text-xs text-center font-semibold">Revisit course materials, Placement support and Career growth assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h1 className="text-center text-3xl font-bold pb-3 mt-2 text-gray-800">Meet Your Mentor</h1>
              <Mentors mentorIds={course.mentor} />
            </div>
            <FAQ />
            <div className="flex lg:flex-nowrap flex-wrap gap-5 mx-0 lg:mx-32 my-14 mb-2">
              <div className="w-full flex-col lg:w-1/2 flex gap-2 items-center justify-center px-5">
                <img src={course?.certificate} alt="certificate" className='' />
              </div>
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <h1 className="text-4xl font-bold">Earn Industry-Recognized Certifications
                </h1>
                <p className="text-xl">Kickstart your career with certifications that matter. Our programs are designed to equip you with the skills and credentials needed to stand out in the competitive tech industry.</p>
              </div>

            </div>
            <div className="flex flex-col gap-3">
              <h1 className="text-center text-3xl font-bold pb-3 mt-2 text-gray-800">Course Fee</h1>
              <h4 className="text-center text-4xl font-bold pb-3 mt-2 text-gray-800">
                <span className="text-2xl line-through text-gray-500">₹ {course.actual_price}</span> ₹ {course?.price} <span className="text-lg text-gray-500">(Incl. GST)</span></h4>
              <div className='flex flex-col items-center'>
                <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={() => openModal({ course: course?.short_code })}>Enroll Now</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CourseDetailPage;
