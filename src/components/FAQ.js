import React, { useState } from 'react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const faqs = [
    {
      question: "How do I Entroll?",
      answer: "You can sign up by clicking on the 'Entroll Now' button on the homepage."
    },
    {
      question: "What courses are available?",
      answer: "We offer a wide range of courses including web development, data science, and DevOps"
    },
    {
      question: "How do I access my courses?",
      answer: "Once signed up, you can access your courses through the dashboard."
    },
    {
      question: "Can I get a refund?",
      answer: "Refunds are subject to our terms and conditions. Please contact support for details."
    },
    {
      question: "Do you offer certificates?",
      answer: "Yes, upon completing a course, you will receive a certificate of completion."
    }
  ];

  return (
    <div className="flex lg:flex-nowrap flex-wrap gap-5 mx-0 lg:mx-32 my-5 mb-4">
      <div className="w-full lg:w-1/2 flex flex-col gap-5 p-10">
        <h1 className="text-5xl font-bold">Frequently Asked Questions</h1>
        <p className="text-xl">Find answers to common questions about learning platform, video features, and course details.</p>
        {/* <div className="flex gap-5">
          <button className="bg-white text-black px-10 py-3 border-4 border-green-600 lg:text-xl rounded-lg hover:bg-green-600 hover:text-white">Contact us</button>
        </div> */}
      </div>
      <div className="w-full lg:w-1/2 flex flex-col gap-2 px-5">
        <div className="w-full flex flex-col gap-2 py-5">
          {faqs.map((faq, index) => (
            <div key={index} className="flex flex-col mb-3">
              <button
                className="flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="lg:text-2xl text-lg font-bold text-slate-700">{faq.question}</h3>
                <svg
                  className={`w-6 h-6 ${expandedIndex === index ? 'transform rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {expandedIndex === index && (
                <p className="text-black text-lg py-4">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;