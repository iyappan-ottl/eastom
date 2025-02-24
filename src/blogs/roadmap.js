import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import roadMaps from '../json/roadmaps';
import SEO from '../components/SEO';

// Reusable Collapsible Section Component
const CollapsibleSection = ({ title, color, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full text-left bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow flex justify-between items-center`}
      >
        <h2 className={`text-3xl font-semibold text-${color}-800`}>{title}</h2>
        <span className={`text-2xl text-${color}-600`}>
          {isOpen ? '-' : '+'}
        </span>
      </button>
      {isOpen && <div className="mt-0.5 bg-white rounded-lg shadow-md p-6">{children}</div>}
    </section>
  );
};

// Main Component
const Roadmap = ({ params }) => {
  const [roadMap, setRoadMap] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const findRoadMap = roadMaps.find(c => c.slug === params);
    if (!findRoadMap) {
      navigate('/');
    }
    setRoadMap(findRoadMap);
  }, [params]);

  return (
    <>
      <SEO
        title={roadMap?.seo?.title}
        description={roadMap?.seo?.description}
        keywords={roadMap?.seo?.keywords}
      />
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 font-sans">
        {/* Hero Section */}
        <header className="relative py-8 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
          <div className="absolute inset-0 bg-opacity-50"></div>
          <div className="relative z-10">
            <h1 className="text-5xl font-bold mb-4">{roadMap?.title}</h1>
            <p className="text-xl px-2 max-w-2xl mx-auto">
              {roadMap?.description}
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-4">
          {roadMap?.sections && roadMap?.sections.map((section, index) => (
            <CollapsibleSection key={index} title={section.title} color={section.color}>
              {section.content.map((content, idx) =>
                typeof content === "string" ? (
                  <ul key={idx} className="list-disc pl-6 space-y-2 text-gray-700">
                    <li>{content}</li>
                  </ul>
                ) : (
                  <div key={idx}>
                    <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">
                      {content.subtitle}
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      {content.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </CollapsibleSection>
          ))}
          {roadMap?.slug && <Link to={`/courses/${roadMap?.slug.replace('-roadmap', '')}`} className="font-semibold flex flex-col items-center hover:underline underline-offset-2 mt-4">View Course Details</Link>}
        </main>
      </div>
    </>
  );
};

export default Roadmap;
