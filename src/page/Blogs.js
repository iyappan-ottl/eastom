import React from 'react';
import SEO from "../components/SEO";
import PageTitle from '../components/PageTitle';
import { Link } from 'react-router-dom';

const blogs = [
  {
    "title": "React Native Roadmap",
    id: 'mobile-app-development-roadmap',
    "description": "A Comprehensive Guide to Mastering React Native Development",
  }, {
    "title": "MERN Stack Roadmap",
    id: 'full-stack-development-roadmap',
    "description": "A Comprehensive Guide to Mastering Full-Stack Development with MongoDB, Express.js, React.js, and Node.js",
  }, {
    "title": "Selenium Automation Testing Roadmap",
    "description": "A Comprehensive Guide to Mastering Selenium Automation Testing",
    id: 'automation-testing-roadmap',
  }, {
    "title": "DevOps Roadmap",
    id: "devops-roadmap",
    "description": "A Comprehensive Guide to Mastering DevOps Practices and Tools",
  }, {
    "title": "AI & Data Science Roadmap",
    id: 'ai-data-science-roadmap',
    "description": "A Comprehensive Guide to Mastering AI and Data Science Concepts and Tools",
  }, {
    "title": "100+ Javascript Interview questions and answers",
    id: 'javascript-interview-questions',
    "description": 'Level easy, medium and hard'
  }, {
    "title": "100+ HTML Interview questions and answers",
    id: 'html-interview-questions',
    "description": 'Level easy, medium and hard'
  }, {
    "title": "100+ CSS Interview questions and answers",
    id: 'css-interview-questions',
    "description": 'Level easy, medium and hard'
  }, , {
    "title": "100+ ReactJs Interview questions and answers",
    id: 'reactjs-interview-questions',
    "description": 'Level easy, medium and hard'
  }
];

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <SEO
        title='Blogs | Easto Academy | Tech Insights & Learning Guides'
        description='Read Easto Academy’s blogs for the latest in Full-Stack, AI, DevOps, Cloud, Automation Testing & more. Stay updated with expert insights & tutorials!'
        keywords='Easto Academy, tech blogs, software development blogs, coding tutorials, Full-Stack development, AI insights, DevOps best practices, cloud computing, automation testing, web development tips, programming guides, software engineering blogs, coding best practices, developer resources, tech news, latest in programming, online learning blogs' />
      <PageTitle title="Blogs" />
      <div className="max-w-7xl mx-auto p-4">

        {/* Ad Banner */}
        {/* <div className="mb-6">
          <div className="bg-gray-300 text-center p-6 rounded-lg">
            <span className="text-xl font-bold">Ad Space - Banner (728x90)</span>
          </div>
        </div> */}

        <div className="grid grid-cols-1 flex justify-center lg:grid-cols-3 gap-8 mt-6">
          {/* Blog List */}
          <div className="lg:col-span-2 space-y-6">
            {blogs.map((blog, index) => (

              <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
                <Link key={index} to={blog.id}>
                  <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
                  <p className="text-gray-700 mb-4">{blog.description}</p>
                  {/* <div className="text-sm text-gray-500">
                  <span>By {blog.author}</span> · <span>{blog.date}</span>
                </div> */}

                </Link>
              </div>
            ))}
          </div>

          {/* Sidebar with Ads */}
          {/* <div className="space-y-6">
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg">
              <span className="text-lg font-bold">Ad Space - Sidebar (300x250)</span>
            </div>
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg">
              <span className="text-lg font-bold">Ad Space - Sidebar (300x250)</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
