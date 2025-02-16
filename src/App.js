// App.jsx
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Main from "./page/Main";
import Home from "./page/Home";
import About from "./page/About";
import Courses from "./page/Courses";
import CoursesDetails from "./page/Courses-Details";
// import WallOfFrames from "./page/Wall-Of-Frame";
import Blog from "./page/Blogs";
import PrivacyPolicy from "./page/Privacy-Policy";
import Terms from "./page/Terms-Of-Service";
import Refund from "./page/Refund";
import NotFound from "./page/404";
import BlogDetailPage from "./page/Blogs-Details";
import './index.css'
// Centralized Route Configurations
const routes = [
  { path: "/", element: <Home /> },
  { path: "/about-us", element: <About /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses/:course_name", element: <CoursesDetails /> },
  { path: "/blogs/:id", element: <BlogDetailPage /> },
  // { path: "/wall-of-frames", element: <WallOfFrames /> },
  { path: "/blogs", element: <Blog /> },
  { path: "/terms-of-service", element: <Terms /> },
  { path: "/privacy-policy", element: <PrivacyPolicy /> },
  { path: "/refund-policy", element: <Refund /> },
];
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Adds smooth scrolling
    });
  }, [pathname]);

  return null;
}
function App() {
  return (
    <div >
      <Router>
        <ScrollToTop />
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Main>{route.element}</Main>
              }
            />
          ))}
          {/* Catch-All Route */}
          <Route path="*" element={<Main>{<NotFound />}</Main>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
