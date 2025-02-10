import React from "react";
import { Link } from "react-router-dom"; // If you're using React Router
import notFound from "../assets/vector/easto-404-not-found-vector.gif";

const NotFound = () => {
  return (
    <div className="not-found flex flex-col items-center mt-4 justify-center text-center">
      <h1 className="text-4xl font-bold mb-2">404 - Page Not Found</h1>
      <p className="text-lg">Oops! The page you're looking for doesn't exist.</p>
      <img src={notFound} className="max-w-xs" alt="not found"></img>
      <Link to="/" className="text-green-600 hover:underline text-xl -mt-8 mb-4">
        Go Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
