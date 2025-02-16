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

// import React from 'react';
// import SEO from "../components/SEO";
// import PageTitle from '../components/PageTitle';

// const blogs = [
//   {
//     id: 1,
//     title: "10 Tips to Ace Your Coding Interview",
//     description: "Master the art of coding interviews with these 10 proven strategies.",
//     author: "Iyps",
//     date: "Feb 14, 2025"
//   },
//   {
//     id: 2,
//     title: "Top 5 Programming Languages to Learn in 2025",
//     description: "A comprehensive guide to the most in-demand programming languages.",
//     author: "Easto Academy",
//     date: "Feb 10, 2025"
//   },
//   {
//     id: 3,
//     title: "Building Full-Stack Apps with MERN Stack",
//     description: "An introduction to building scalable applications using MongoDB, Express, React, and Node.js.",
//     author: "Iyps",
//     date: "Feb 7, 2025"
//   }
// ];

// const BlogsPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100">
//       <SEO
//         title='Blogs'
//         description='Beginner friendly page for learning React Helmet.'
//         name='Company name.'
//         type='article' /><PageTitle title="Blogs" />
//       <div className="max-w-7xl mx-auto p-4">

//         {/* Ad Banner */}
//         {/* <div className="mb-6">
//           <div className="bg-gray-300 text-center p-6 rounded-lg">
//             <span className="text-xl font-bold">Ad Space - Banner (728x90)</span>
//           </div>
//         </div> */}

//         <div className="grid grid-cols-1 flex justify-center lg:grid-cols-3 gap-8 mt-6">
//           {/* Blog List */}
//           <div className="lg:col-span-2 space-y-6">
//             {blogs.map((blog) => (
//               <div key={blog.id} className="bg-white p-6 rounded-lg shadow-md">
//                 <h2 className="text-2xl font-bold mb-2">{blog.title}</h2>
//                 <p className="text-gray-700 mb-4">{blog.description}</p>
//                 <div className="text-sm text-gray-500">
//                   <span>By {blog.author}</span> · <span>{blog.date}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Sidebar with Ads */}
//           {/* <div className="space-y-6">
//             <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg">
//               <span className="text-lg font-bold">Ad Space - Sidebar (300x250)</span>
//             </div>
//             <div className="bg-gray-300 h-64 flex items-center justify-center rounded-lg">
//               <span className="text-lg font-bold">Ad Space - Sidebar (300x250)</span>
//             </div>
//           </div> */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BlogsPage;
