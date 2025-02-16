import React from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from "../components/SEO";

const blogs = [
  {
    id: 1,
    title: "10 Tips to Ace Your Coding Interview",
    content: "Master the art of coding interviews with these 10 proven strategies. Practice coding daily, study common algorithms, and learn to communicate your thought process clearly during interviews.",
    author: "Iyps",
    date: "Feb 14, 2025"
  },
  {
    id: 2,
    title: "Top 5 Programming Languages to Learn in 2025",
    content: "A comprehensive guide to the most in-demand programming languages for 2025: Python, JavaScript, TypeScript, Go, and Rust. Find out why they are essential for your career.",
    author: "Easto Academy",
    date: "Feb 10, 2025"
  },
  {
    id: 3,
    title: "Building Full-Stack Apps with MERN Stack",
    content: "Learn how to build full-stack applications using the MERN stack: MongoDB, Express, React, and Node.js. This guide covers everything from setup to deployment.",
    author: "Iyps",
    date: "Feb 7, 2025"
  }
];

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === parseInt(id));
  const otherBlogs = blogs.filter((b) => b.id !== parseInt(id));

  if (!blog) {
    return <div className="text-center mt-10">Blog not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <SEO
        title={blog.title}
        description={`Read ${blog.title} by ${blog.author}.`}
      />
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Content */}
          <div className="lg:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="text-sm text-gray-500 mb-4">
              <span>By {blog.author}</span> · <span>{blog.date}</span>
            </div>
            <p className="text-gray-800 leading-relaxed mb-6">{blog.content}</p>

            <div className="mt-10">
              <Link to="/" className="text-blue-500 hover:underline">
                ← Back to Blogs
              </Link>
            </div>
          </div>

          {/* Sidebar with Ads and Other Blogs */}
          <div className="space-y-6">
            {/* Ad Space 1 */}
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg">
              <span className="text-lg font-bold">Ad Space - Sidebar (300x250)</span>
            </div>

            {/* Other Blog Suggestions */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4">Other Blogs</h2>
              <ul className="space-y-3">
                {otherBlogs.map((otherBlog) => (
                  <li key={otherBlog.id}>
                    <Link to={`/blog/${otherBlog.id}`} className="text-blue-500 hover:underline">
                      {otherBlog.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Ad Space 2 */}
            <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg">
              <span className="text-lg font-bold">Ad Space - Sidebar (300x250)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailPage;
