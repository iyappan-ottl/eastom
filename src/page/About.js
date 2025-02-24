import React from 'react';
import aboutUsImg from '../assets/vector/easto-about-us-illu.gif';
import { useModal } from "../page/Main";
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';

const AboutUs = () => {
  const { openModal } = useModal();
  return (
    <>
      <SEO
        title='About Us | Easto Academy | Empowering Future Developers'
        description='Easto Academy is committed to empowering developers with hands-on training in Full-Stack, AI, DevOps, Cloud & Automation Testing. Learn & grow with us!'
        keywords='Easto Academy, About Easto, software training institute, coding bootcamp, learn programming, Full-Stack training, AI courses, DevOps training, cloud computing courses, automation testing, web development, career in tech, hands-on coding, software development training, best coding academy, professional IT training, tech education, online coding classes' />
      <PageTitle title="About Us" />
      <div className="bg-gray-50 py-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            {/* <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            About Us
          </h2> */}
            <p className="max-w-2xl text-xl text-gray-600 lg:mx-auto">
              Welcome to <span className="text-green-600 font-semibold">{process.env.REACT_APP_NAME}</span>, where <span className="font-bold">innovation meets inspiration</span>, and <span className="font-bold">dreams take flight</span>.
            </p>
          </div>

          <div className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              {/* Image Section */}
              <div className="relative rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-500">
                <img
                  src={aboutUsImg}
                  alt="About Us"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content Section */}
              <div className="space-y-8">
                <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
                <p className="text-gray-600">
                  Every great journey begins with a spark. <span className="font-semibold">{process.env.REACT_APP_NAME}</span> was born out of a passion for technology and a belief that <span className="font-semibold">education should be accessible, practical, and transformative</span>.
                </p>

                <h3 className="text-3xl font-bold text-gray-900">What Makes Us Unique?</h3>
                <ul className="list-disc list-inside text-gray-600 space-y-4">
                  <li><strong>Industry-Driven Curriculum:</strong> Designed in collaboration with top tech companies.</li>
                  <li><strong>Learn by Doing:</strong> Real-world projects and hands-on experience.</li>
                  <li><strong>Expert Mentors:</strong> Learn from seasoned professionals.</li>
                  <li><strong>Flexible Learning Options:</strong> Online or in-person classes.</li>
                  <li><strong>Career Transformation:</strong> Job placement support and career guidance.</li>
                </ul>

                <h3 className="text-3xl font-bold text-gray-900">Our Impact</h3>
                <div className="grid grid-cols-2 gap-4 text-gray-600">
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-green-600">150+</p>
                    <p>Alumni</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-green-600">90%</p>
                    <p>Job Placement Rate</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    <p className="text-2xl font-bold text-green-600">30+</p>
                    <p>Real-World Projects</p>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                <p className="text-gray-600">
                  We envision a world where <span className="font-semibold">anyone, anywhere</span> can access quality tech education and <span className="font-semibold">transform their lives</span>.
                </p>

                <div className="mt-8">
                  <button onClick={() => openModal()} className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition duration-300 text-lg font-semibold"
                  >
                    Join the Revolution
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
};

export default AboutUs;