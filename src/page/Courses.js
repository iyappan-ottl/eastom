import React from 'react';
import { Link } from 'react-router-dom';
import fsdImage from '../assets/vector/easto-full-stack-developmet-vector.gif';
import mobileImage from '../assets/vector/easto-Mobile-app-development-vector.gif';
import aiDsImage from '../assets/vector/easto-ai-&-data-vector.gif';
import devOpsImage from '../assets/vector/easto-devops-vector.gif';
import testingImage from '../assets/vector/easto-automation-testing-vector.gif';
import PageTitle from '../components/PageTitle';
import SEO from '../components/SEO';

const CourseSection = ({ count }) => {
  const showCount = count ?? 5;

  const courses = [
    {
      title: 'Full Stack Development',
      image: fsdImage,
      tags: ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs'],
      description: 'A full-stack development course provides comprehensive training in both frontend and backend web development, covering programming languages, frameworks, and databases necessary to build complete web applications. Participants learn skills ranging from user interface design and client-side scripting to server-side programming and database management, enabling them to develop dynamic and interactive web solutions.',
      link: '/courses/full-stack-development'
    },
    {
      title: 'Mobile App Development',
      image: mobileImage,
      tags: ['React Native', 'Android', 'Ios'],
      description: 'A Mobile App Development Course equips learners with the skills needed to create applications for smartphones and tablets. Participants gain proficiency in programming languages such as Java, Kotlin, Swift, or JavaScript, along with frameworks like Android Studio or Xcode. The course covers UI design, database integration, testing, and deployment, preparing individuals to build and launch mobile apps effectively.',
      link: '/courses/mobile-app-development'
    },
    {
      title: 'AI & Data Science',
      image: aiDsImage,
      tags: ['Python', 'Sql', 'Maths'],
      description: 'AI is the simulation of human intelligence in machines that are programmed to think, learn, and make decisions like humans. It uses algorithms and data to perform tasks such as natural language processing, image recognition, and decision-making. AI powers applications like chatbots, autonomous vehicles, recommendation systems, and virtual assistants. Data Science is the field of analyzing and interpreting large datasets to extract insights, solve problems, and make data-driven decisions.',
      link: '/courses/ai-data-science'
    },
    {
      title: 'DevOps',
      image: devOpsImage,
      tags: ['Gitlab', 'Jenkins', 'Kubernetes'],
      description: 'A DevOps course teaches essential skills and tools for streamlining software development and IT operations. Participants learn to automate processes, implement continuous integration/continuous delivery (CI/CD), and manage infrastructure as code (IaC), fostering collaboration and efficiency. The course equips learners with knowledge in areas like containerization, monitoring enabling them to adopt DevOps practices effectively.',
      link: '/courses/devops'
    },
    {
      title: 'Automation testing',
      image: testingImage,
      tags: ['Jira', 'Selenium', 'Postman'],
      description: 'Master the fundamentals of manual and automated software testing methodologies in this comprehensive course. Learn to effectively design, execute, and analyze test cases to ensure the quality and reliability of software products, while also gaining proficiency in using industry-standard automation tools for streamlined testing processes.',
      link: '/courses/automation-testing'
    }
  ];

  return (
    <>
      {
        (showCount === 5) &&
        <>
          <SEO
            title='Explore Our Courses'
            description='Beginner friendly page for learning React Helmet.'
            name='Company name.'
            type='article' />
          <PageTitle title='Explore Our Courses' />
        </>
      }
      <div className="flex flex-col my-5">
        <div className="flex flex-wrap justify-center gap-2">
          {courses.slice(0, showCount).map((course, index) => (
            <Link key={index} to={course.link} className="lg:w-1/4 p-5 bg-white border rounded-md cursor-pointer hover:shadow-xl mb-3 lg:mb-0" style={{ textDecoration: 'none' }}>
              <div className="relative overflow-hidden">
                <span className="lazy-load-image-background lazy-load-image-loaded" style={{ color: 'transparent', display: 'inline-block' }}>
                  <img src={course.image} alt={course.title} className=" transition duration-1000 cursor-pointer object-cover" />
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
                <p className="text-2xl font-bold">{course.price}</p>
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