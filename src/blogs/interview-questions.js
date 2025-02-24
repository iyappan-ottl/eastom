import React, { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css"; // Import Prism.js theme
import Prism from "prismjs";
import InterviewQuestions from "../json/interview-questions";
import { useNavigate, Link } from 'react-router-dom';

const InterviewQuestionSet = ({ params }) => {

  const [mcqSet, setMcqSet] = useState({});
  const navigate = useNavigate();

  // useEffect(() => {

  // }, [params]);

  useEffect(() => {
    const Mcqs = InterviewQuestions.find(c => c.slug === params.toLowerCase());
    if (!Mcqs) {
      navigate('/');
    }
    setMcqSet(Mcqs);
    Prism.highlightAll(); // Highlight static content initially

    // Create a MutationObserver to detect when new content is added
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length > 0) {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              // Find all <code> elements within the added node
              const codeElements = node.querySelectorAll("pre code");
              codeElements.forEach((codeElement) => {
                Prism.highlightElement(codeElement); // Highlight each <code> element
              });
            }
          });
        }
      });
    });

    // Observe changes in the DOM, but limit the scope to the container
    const container = document.querySelector(".max-w-4xl");
    if (container) {
      observer.observe(container, { childList: true, subtree: true });
    }

    // Cleanup the observer on unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-indigo-100 font-sans">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        {mcqSet?.mcqs?.length > 0 &&
          mcqSet?.mcqs?.map((mcqs, i) => {
            return (
              <div id={mcqs.fragment} className="px-6 py-8" key={i}>
                <h2 className="text-3xl font-bold text-left text-gray-800 mb-4">
                  {mcqs?.title}
                </h2>
                <div className="space-y-6">
                  {mcqs?.mcq.map((q, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-50 rounded-xl shadow-md transform transition duration-300 hover:scale-105"
                    >
                      <h3
                        className="text-xl font-semibold text-gray-700 mb-2"
                        dangerouslySetInnerHTML={{
                          __html: `Q${index + 1}: ${q.question}`,
                        }}
                      />
                      <div
                        className="prose prose-sm sm:prose lg:prose-lg text-gray-600"
                        dangerouslySetInnerHTML={{ __html: q.answer }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default InterviewQuestionSet;
