import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fsdImage from '../assets/vector/easto-full-stack-developmet-vector.gif';
import Marquee from "react-fast-marquee";
import { useModal } from "../page/Main";
import FAQ from "../components/FAQ";
import Mentors from '../components/Mentors';
import Testimonials from '../components/Testimonials';
import ecommerceImg from '../assets/vector/easto-e-commerce-illu.gif';
import jobPortalImg from '../assets/vector/easto-job-portal-illu.gif';
import socialMImg from '../assets/vector/easto-social-media-illu.gif';
import accessImg from "../assets/icons/access.png";
import discussionImg from "../assets/icons/discussion.png";
import schoolImg from "../assets/icons/school.png";
import mobileImage from '../assets/vector/easto-Mobile-app-development-vector.gif';
import aiDsImage from '../assets/vector/easto-ai-&-data-vector.gif';
import devOpsImage from '../assets/vector/easto-devops-vector.gif';
import testingImage from '../assets/vector/easto-automation-testing-vector.gif';
import notFoundImage from '../assets/vector/easto-404-not-found-vector.gif';
import rideAppImage from '../assets/vector/easto-ride-book-illu.gif';
import chatAppImage from '../assets/vector/easto-chat-app-illu.gif';
import analysisImage from '../assets/vector/easto-analysis-illu.gif';
import chatbotImage from '../assets/vector/easto-chat-bot-illu.gif';
import compVisionImage from '../assets/vector/easto-computer-vision-illu.gif';
import automationImage from '../assets/vector/easto-automate-process-illu.gif';
import cloudImage from '../assets/vector/easto-cloud-illu.gif';
import securityImage from '../assets/vector/easto-security-illu.gif';
import mobileTestingImage from '../assets/vector/easto-mobile-app-testing-illu.gif';
import postmanImage from '../assets/vector/easto-postman-testing.gif';
import websiteTestingImage from '../assets/vector/easto-website-testing-illu.gif';
import SEO from '../components/SEO';
import { TiTick } from "react-icons/ti";
import { useParams } from "react-router"
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons

const CourseDetailPage = () => {
  const { openModal } = useModal();
  const [course, setCourse] = useState(null);
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  let params = useParams();

  useEffect(() => {
    const courseList = [
      {
        mainImg: fsdImage,
        title: 'Full Stack Development Course',
        price: '34,999',
        slug: 'full-stack-development',
        short_code: "fsd",
        description: 'Our Full Stack Development course is designed to equip you with the skills to build dynamic, scalable, and interactive web applications. Learn to master front-end and back-end technologies, databases, and deployment techniques to kickstart your career as a full-stack developer.',
        modules: [
          { title: '3 Months', subtitle: 'Duration' },
          { title: 'Offline / Online', subtitle: 'Class Mode' },
          { title: 'தமிழ் / English', subtitle: 'Language' }
        ],
        job_skills: "Master HTML, CSS, JavaScript, React, Node.js, MongoDB, and more!",
        tools: [
          {
            "name": "MongoDB",
            "logo": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          },
          {
            "name": "Express.js",
            "logo": "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
          },
          {
            "name": "React",
            "logo": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          },
          {
            "name": "Node.js",
            "logo": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          },
          {
            "name": "Redux",
            "logo": "https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg"
          },
          {
            "name": "Axios",
            "logo": "https://axios-http.com/assets/logo.svg"
          },
          {
            "name": "Material UI",
            "logo": "https://mui.com/static/logo.png"
          },
          {
            "name": "Tailwind CSS",
            "logo": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          },
          {
            "name": "Webpack",
            "logo": "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg"
          },
          {
            "name": "Babel",
            "logo": "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
          },
          {
            "name": "ESLint",
            "logo": "https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
          },
          {
            "name": "Jest",
            "logo": "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
          },
          {
            "name": "Socket.IO",
            "logo": "https://socket.io/images/logo.svg"
          },
          {
            "name": "Swagger",
            "logo": "https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png"
          },
          {
            "name": "Postman",
            "logo": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          },
          {
            "name": "GitHub",
            "logo": "https://www.vectorlogo.zone/logos/github/github-icon.svg"
          },
          {
            "name": "GitLab",
            "logo": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
          },
          {
            "name": "Heroku",
            "logo": "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
          },
          {
            "name": "Netlify",
            "logo": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
          },
          {
            "name": "Vercel",
            "logo": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
          },
          {
            "name": "Redis",
            "logo": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
          },
          {
            "name": "Figma",
            "logo": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          },
          {
            "name": "Jira",
            "logo": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg"
          },
          {
            "name": "Slack",
            "logo": "https://www.vectorlogo.zone/logos/slack/slack-icon.svg"
          }
        ],
        projects: [
          {
            title: 'E-Commerce Website',
            img: ecommerceImg,
            description: 'A scalable platform with cart, payment gateway, and user authentication.'
          }, {
            title: 'Social Media App',
            img: socialMImg,
            description: 'Real-time chat, likes, and comments—just like Instagram!'
          }, {
            title: 'Job Portal',
            img: jobPortalImg,
            description: 'End-to-end application with job search, user profiles, and admin controls.'
          }
        ],
        mentor: '1',
        curriculum: [
          {
            title: 'Introduction to Web Development',
            topics: [
              'Basics of HTML, CSS, and JavaScript',
              'Responsive design with Bootstrap and Flexbox'
            ]
          }, {
            title: 'Front-End Wizardry',
            topics: [
              'Build responsive websites with HTML5, CSS3, and Bootstrap',
              'Make them interactive with JavaScript and master ReactJS for dynamic components.'
            ]
          }, {
            title: 'Back-End Superpower',
            topics: [
              'Learn server-side programming with Node.js and Express.js.',
              'Build secure APIs and handle authentication like a pro.'
            ]
          }, {
            title: 'Database Management',
            topics: [
              'Introduction to MongoDB and PostgreSQL',
              'Master both NoSQL (MongoDB) and SQL (PostgreSQL) databases.',
              'Create schemas, perform complex queries, and optimize your data flow.'
            ]
          }, {
            title: 'Full-Stack Integration',
            topics: [
              'Combine front-end and back-end for seamless applications.',
              'Deploy your projects to AWS, Heroku, or Vercel like a pro.'
            ]
          }, {
            title: 'Capstone Project',
            topics: [
              'Build and deploy a full-stack application from scratch',
              'Real - world use cases with team collaboration'
            ]
          }
        ]
      },
      {
        mainImg: mobileImage,
        title: 'Mobile App Development Course',
        price: '39,999',
        short_code: "mad",
        slug: 'mobile-app-development',
        description: 'Design, develop, and launch high-performance mobile apps that run smoothly on both Android and iOS using React Native—the technology behind apps like Instagram, Airbnb, and Discord',
        modules: [
          { title: '3 Months', subtitle: 'Duration' },
          { title: 'Offline / Online', subtitle: 'Class Mode' },
          { title: 'தமிழ் / English', subtitle: 'Language' }
        ],
        job_skills: "React Native, Redux, Firebase, APIs, and more!",
        tools: [
          {
            "name": "MongoDB",
            "logo": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          },
          {
            "name": "Express.js",
            "logo": "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
          },
          {
            "name": "React",
            "logo": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          },
          {
            "name": "Node.js",
            "logo": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          },
          {
            "name": "Redux",
            "logo": "https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg"
          },
          {
            "name": "Axios",
            "logo": "https://axios-http.com/assets/logo.svg"
          },
          {
            "name": "Material UI",
            "logo": "https://mui.com/static/logo.png"
          },
          {
            "name": "Tailwind CSS",
            "logo": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          },
          {
            "name": "Webpack",
            "logo": "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg"
          },
          {
            "name": "Babel",
            "logo": "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
          },
          {
            "name": "ESLint",
            "logo": "https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
          },
          {
            "name": "Jest",
            "logo": "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
          },
          {
            "name": "Socket.IO",
            "logo": "https://socket.io/images/logo.svg"
          },
          {
            "name": "Swagger",
            "logo": "https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png"
          },
          {
            "name": "Postman",
            "logo": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          },
          {
            "name": "GitHub",
            "logo": "https://www.vectorlogo.zone/logos/github/github-icon.svg"
          },
          {
            "name": "GitLab",
            "logo": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
          },
          {
            "name": "Heroku",
            "logo": "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
          },
          {
            "name": "Netlify",
            "logo": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
          },
          {
            "name": "Vercel",
            "logo": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
          },
          {
            "name": "Redis",
            "logo": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
          },
          {
            "name": "Figma",
            "logo": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          },
          {
            "name": "Jira",
            "logo": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg"
          },
          {
            "name": "Slack",
            "logo": "https://www.vectorlogo.zone/logos/slack/slack-icon.svg"
          }
        ],
        projects: [
          {
            title: 'E-Commerce App ',
            img: ecommerceImg,
            description: 'A scalable platform with cart, payment gateway, and user authentication.'
          }, {
            title: 'Chat & Social Media App',
            img: chatAppImage,
            description: 'Real-time messaging with notifications'
          }, {
            title: 'Ride-Booking App',
            img: rideAppImage,
            description: 'GPS tracking, ride requests, and payments'
          }],
        mentor: '1,2',
        curriculum: [
          {
            title: 'Introduction to Mobile App Development',
            topics: [
              'Understanding mobile architectures (Android & iOS)',
              'Setting up React Native development environment',
              'Writing your first React Native app'
            ]
          }, {
            title: 'React Native Fundamentals',
            topics: [
              'Components, Props, and State',
              'Navigation (React Navigation)',
              'UI styling with Flexbox & NativeBase'
            ]
          }, {
            title: 'Advanced Mobile Development',
            topics: [
              'Redux for state management',
              'API integration (REST or GraphQL)',
              'Authentication with Firebase & OAuth'
            ]
          }, {
            title: 'Native Features & Performance Optimization',
            topics: [
              'Accessing Camera, GPS, and Sensors',
              'Push Notifications & Background Services',
              'Optimizing app performance & animations'
            ]
          }, {
            title: 'Deployment & Publishing',
            topics: [
              'Debugging & testing React Native apps',
              'App Store & Play Store submission'
            ]
          }, {
            title: 'Capstone Project',
            topics: [
              'Build and deploy a fully functional React Native app',
              'Work on a real-world industry projects'
            ]
          }
        ]
      },
      {
        mainImg: devOpsImage,
        title: 'DevOps Course',
        price: '44,999',
        short_code: "do",
        slug: 'devops',
        description: 'Bridge the gap between development & operations! Learn to automate, deploy, and scale applications like top tech companies using DevOps tools such as Docker, Kubernetes, AWS, Terraform, and CI/CD Pipelines',
        modules: [
          { title: '3 Months', subtitle: 'Duration' },
          { title: 'Offline / Online', subtitle: 'Class Mode' },
          { title: 'தமிழ் / English', subtitle: 'Language' }
        ],
        job_skills: "CI/CD & cloud deployment to monitoring & security",
        tools: [
          {
            "name": "MongoDB",
            "logo": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          },
          {
            "name": "Express.js",
            "logo": "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
          },
          {
            "name": "React",
            "logo": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          },
          {
            "name": "Node.js",
            "logo": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          },
          {
            "name": "Redux",
            "logo": "https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg"
          },
          {
            "name": "Axios",
            "logo": "https://axios-http.com/assets/logo.svg"
          },
          {
            "name": "Material UI",
            "logo": "https://mui.com/static/logo.png"
          },
          {
            "name": "Tailwind CSS",
            "logo": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          },
          {
            "name": "Webpack",
            "logo": "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg"
          },
          {
            "name": "Babel",
            "logo": "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
          },
          {
            "name": "ESLint",
            "logo": "https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
          },
          {
            "name": "Jest",
            "logo": "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
          },
          {
            "name": "Socket.IO",
            "logo": "https://socket.io/images/logo.svg"
          },
          {
            "name": "Swagger",
            "logo": "https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png"
          },
          {
            "name": "Postman",
            "logo": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          },
          {
            "name": "GitHub",
            "logo": "https://www.vectorlogo.zone/logos/github/github-icon.svg"
          },
          {
            "name": "GitLab",
            "logo": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
          },
          {
            "name": "Heroku",
            "logo": "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
          },
          {
            "name": "Netlify",
            "logo": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
          },
          {
            "name": "Vercel",
            "logo": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
          },
          {
            "name": "Redis",
            "logo": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
          },
          {
            "name": "Figma",
            "logo": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          },
          {
            "name": "Jira",
            "logo": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg"
          },
          {
            "name": "Slack",
            "logo": "https://www.vectorlogo.zone/logos/slack/slack-icon.svg"
          }
        ],
        projects: [
          {
            title: 'Automated CI/CD Pipeline',
            img: automationImage,
            description: 'Code to production in minutes!'
          }, {
            title: 'Cloud-Based Kubernetes Cluster',
            img: cloudImage,
            description: 'Scalable apps on AWS & GCP.'
          }, {
            title: 'Secure Infrastructure',
            img: securityImage,
            description: 'Implement logging, monitoring & security best practices'
          }],
        mentor: '3',
        curriculum: [
          {
            title: 'Introduction to DevOps',
            topics: [
              'DevOps Principles & Practices',
              'Software Development Lifecycle (SDLC)',
              'Agile, Scrum, & Kanban Workflows'
            ]
          }, {
            title: 'Linux & Shell Scripting',
            topics: [
              'Linux Commands for DevOps',
              'Bash Scripting & Automation',
              'User Management & Permissions'
            ]
          }, {
            title: 'Version Control & CI/CD',
            topics: [
              'Git & GitHub Best Practices',
              'Jenkins & GitHub Actions for CI / CD',
              'Automating Builds & Deployments'
            ]
          }, {
            title: 'Containerization & Orchestration',
            topics: [
              'Docker – Creating, managing, and optimizing containers',
              'Kubernetes – Deploying & scaling containerized applications',
              'Helm Charts & Service Mesh for Advanced Kubernetes'
            ]
          }, {
            title: 'Cloud Infrastructure & Automation',
            topics: [
              'AWS & GCP – Compute, Storage, Networking Essentials',
              'Terraform & Infrastructure as Code (IaC)',
              'Ansible for Server Automation'
            ]
          }, {
            title: 'Logging, Monitoring & Security',
            topics: [
              'Prometheus & Grafana for Performance Monitoring',
              'ELK Stack for Log Management',
              'Security Best Practices for DevOps'
            ]
          }, {
            title: 'Capstone Project',
            topics: [
              'Build & deploy a complete DevOps pipeline for a real-world project'
            ]
          }
        ]
      },
      {
        mainImg: testingImage,
        title: 'Automation testing Course',
        price: '34,999',
        short_code: "at",
        slug: 'automation-testing',
        description: 'Learn to automate testing and boost software quality! Get hands-on experience with Selenium, Appium, Cypress, JUnit, Jenkins, and more to build robust test automation frameworks for web, mobile, and API testing.',
        modules: [
          { title: '3 Months', subtitle: 'Duration' },
          { title: 'Offline / Online', subtitle: 'Class Mode' },
          { title: 'தமிழ் / English', subtitle: 'Language' }
        ],
        job_skills: "Selenium, Cypress, Appium, JUnit, TestNG & Postman.",
        tools: [
          {
            "name": "MongoDB",
            "logo": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          },
          {
            "name": "Express.js",
            "logo": "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
          },
          {
            "name": "React",
            "logo": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          },
          {
            "name": "Node.js",
            "logo": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          },
          {
            "name": "Redux",
            "logo": "https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg"
          },
          {
            "name": "Axios",
            "logo": "https://axios-http.com/assets/logo.svg"
          },
          {
            "name": "Material UI",
            "logo": "https://mui.com/static/logo.png"
          },
          {
            "name": "Tailwind CSS",
            "logo": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          },
          {
            "name": "Webpack",
            "logo": "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg"
          },
          {
            "name": "Babel",
            "logo": "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
          },
          {
            "name": "ESLint",
            "logo": "https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
          },
          {
            "name": "Jest",
            "logo": "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
          },
          {
            "name": "Socket.IO",
            "logo": "https://socket.io/images/logo.svg"
          },
          {
            "name": "Swagger",
            "logo": "https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png"
          },
          {
            "name": "Postman",
            "logo": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          },
          {
            "name": "GitHub",
            "logo": "https://www.vectorlogo.zone/logos/github/github-icon.svg"
          },
          {
            "name": "GitLab",
            "logo": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
          },
          {
            "name": "Heroku",
            "logo": "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
          },
          {
            "name": "Netlify",
            "logo": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
          },
          {
            "name": "Vercel",
            "logo": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
          },
          {
            "name": "Redis",
            "logo": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
          },
          {
            "name": "Figma",
            "logo": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          },
          {
            "name": "Jira",
            "logo": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg"
          },
          {
            "name": "Slack",
            "logo": "https://www.vectorlogo.zone/logos/slack/slack-icon.svg"
          }
        ],
        projects: [
          {
            title: 'Automated Web Testing Suite',
            img: websiteTestingImage,
            description: 'Selenium framework for end-to-end testing'
          }, {
            title: 'Mobile App Testing Framework',
            img: mobileTestingImage,
            description: 'Test Android & iOS apps with Appium.'
          }, {
            title: 'API Automation Suite',
            img: postmanImage,
            description: 'Automate REST API testing using Postman & RestAssured.'
          }
        ],
        mentor: '2',
        curriculum: [
          {
            title: 'Introduction to Automation Testing',
            topics: [
              'Manual vs. Automation Testing',
              'SDLC & STLC(Software Testing Life Cycle)',
              'Agile & DevOps Testing Practices'
            ]
          }, {
            title: 'Core Programming for Test Automation',
            topics: [
              'Java, Python, or JavaScript Basics for Testers',
              'Object-Oriented Programming (OOP) Concepts',
              'Writing Test Scripts'
            ]
          }, {
            title: 'Selenium & Appium',
            topics: [
              'Selenium WebDriver & Locators',
              'Handling Dynamic Elements, Frames & Windows',
              'Implementing Page Object Model(POM) '
            ]
          }, {
            title: 'API Testing with Postman & RestAssured',
            topics: [
              'Understanding RESTful APIs',
              'Automating API Testing with Postman',
              'Validating API Responses using RestAssured'
            ]
          }, {
            title: 'Mobile App Testing with Appium',
            topics: [
              'Appium Setup for Android & iOS',
              'UI Testing with Appium Inspector',
              'Handling Gestures & Mobile Interactions'
            ]
          }, {
            title: 'CI/CD & Test Automation Frameworks',
            topics: [
              'Jenkins for Continuous Testing & CI/CD',
              'JUnit & TestNG for Test Execution & Reporting',
              'Integrating Selenium & Appium with CI / CD Pipelines'
            ]
          }, {
            title: 'Capstone Project',
            topics: [
              'Build a complete automation testing framework for a live project'
            ]
          }
        ]
      },
      {
        mainImg: aiDsImage,
        title: 'AI & Data Science Course',
        price: '44,999',
        short_code: "aids",
        slug: 'ai-data-science',
        description: 'Learn how to extract insights, build AI models, and work with big data! Get hands-on experience with Python, Machine Learning, Deep Learning, NLP, Computer Vision, and Big Data tools like TensorFlow, PyTorch, and Apache Spark.',
        modules: [
          { title: '3 Months', subtitle: 'Duration' },
          { title: 'Offline / Online', subtitle: 'Class Mode' },
          { title: 'தமிழ் / English', subtitle: 'Language' }
        ],
        job_skills: "Python, ML, NLP, Computer Vision & AI.",
        tools: [
          {
            "name": "MongoDB",
            "logo": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
          },
          {
            "name": "Express.js",
            "logo": "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg"
          },
          {
            "name": "React",
            "logo": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
          },
          {
            "name": "Node.js",
            "logo": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
          },
          {
            "name": "Redux",
            "logo": "https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg"
          },
          {
            "name": "Axios",
            "logo": "https://axios-http.com/assets/logo.svg"
          },
          {
            "name": "Material UI",
            "logo": "https://mui.com/static/logo.png"
          },
          {
            "name": "Tailwind CSS",
            "logo": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
          },
          {
            "name": "Webpack",
            "logo": "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg"
          },
          {
            "name": "Babel",
            "logo": "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
          },
          {
            "name": "ESLint",
            "logo": "https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg"
          },
          {
            "name": "Jest",
            "logo": "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
          },
          {
            "name": "Socket.IO",
            "logo": "https://socket.io/images/logo.svg"
          },
          {
            "name": "Swagger",
            "logo": "https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png"
          },
          {
            "name": "Postman",
            "logo": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
          },
          {
            "name": "GitHub",
            "logo": "https://www.vectorlogo.zone/logos/github/github-icon.svg"
          },
          {
            "name": "GitLab",
            "logo": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
          },
          {
            "name": "Heroku",
            "logo": "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg"
          },
          {
            "name": "Netlify",
            "logo": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg"
          },
          {
            "name": "Vercel",
            "logo": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg"
          },
          {
            "name": "Redis",
            "logo": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
          },
          {
            "name": "Figma",
            "logo": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
          },
          {
            "name": "Jira",
            "logo": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg"
          },
          {
            "name": "Slack",
            "logo": "https://www.vectorlogo.zone/logos/slack/slack-icon.svg"
          }
        ],
        projects: [
          {
            title: 'Predictive Analytics Model',
            img: analysisImage,
            description: 'Forecast trends using real-world datasets.'
          }, {
            title: 'Chatbot & NLP Models',
            img: chatbotImage,
            description: 'Build AI-driven text & speech-based applications.'
          }, {
            title: 'Computer Vision Project',
            img: compVisionImage,
            description: 'Object detection & image classification.'
          }],
        mentor: '1',
        curriculum: [
          {
            title: 'Introduction to AI & Data Science',
            topics: [
              'What is AI & Machine Learning?',
              'Understanding Data Science & Big Data',
              'Tools & Technologies Overview(Python, NumPy, Pandas, Matplotlib) ']
          }, {
            title: 'Data Analysis & Visualization',
            topics: [
              'Data Cleaning & Preprocessing',
              'Exploratory Data Analysis(EDA) with Python',
              'Data Visualization using Matplotlib & Seaborn'
            ]
          }, {
            title: 'Machine Learning Fundamentals',
            topics: [
              'Supervised vs. Unsupervised Learning',
              'Regression, Classification & Clustering Models',
              'Feature Engineering & Model Optimization'
            ]
          }, {
            title: 'Deep Learning & Neural Networks',
            topics: [
              'Introduction to Neural Networks & Backpropagation',
              'Building Deep Learning Models with TensorFlow & PyTorch',
              'CNNs for Image Recognition & Object Detection'
            ]
          }, {
            title: 'Natural Language Processing (NLP)',
            topics: [
              'Text Processing & Sentiment Analysis',
              'Building Chatbots & Text Summarization Models',
              'Transformers & Large Language Models(BERT, GPT) '
            ]
          }, {
            title: 'Big Data & Cloud AI',
            topics: [
              'Working with Apache Spark & Hadoop',
              'Deploying ML Models on AWS, GCP, or Azure',
              'MLOps: Automating Machine Learning Pipelines'
            ]
          }, {
            title: 'Capstone Project',
            topics: [
              'Develop & deploy a full-fledged AI/ML project using real-world datasets'
            ]
          }
        ]
      }
    ];
    const course = courseList.find(c => c.slug === params.course_name);
    setCourse(course);
  }, [params]);

  return (
    <>{!course &&
      <div className='flex flex-col items-center'>
        <img src={notFoundImage} alt='easto not found'></img>
      </div>
    }
      {course &&
        <div className="flex flex-wrap-reverse gap-10 pb-10 mt-3 lg:mt-8 mx-5 ">
          <SEO
            title={course?.title}
            description='Beginner friendly page for learning React Helmet.'
            name='Company name.'
            type='article' />
          <div id="course" className="w-full course-detail">
            <div className="hidden lg:block mb-2">
              <span>
                <Link to="/" className="font-semibold hover:underline underline-offset-2">Home</Link>
                <span> / </span>
              </span>
              <span>
                <Link to="/courses" className="font-semibold hover:underline underline-offset-2">Courses</Link>
                <span> / </span>
              </span>
              <span>
                <span className="font-bold">{course?.title}</span>
              </span>
            </div>
            <h1 className="text-2xl lg:text-4xl my-4 font-bold text-center text-green-600 md:block lg:block">{course?.title}</h1>
            {/* Hero Section */}
            <div className="flex flex-wrap lg:flex-nowrap gap-4">
              <div className="w-full lg:w-1/3 py-2 justify-center flex px-0">
                <img src={course?.mainImg} alt="Course" className="min-w-xs rounded-md shadow-md" />
              </div>
              <div className="w-full lg:w-2/3 lg:text-5xl">
                <p className="text-justify text-lg font-semibold my-7">{course?.description}</p>
                <div className='flex flex-col items-center'>
                  <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={() => openModal({ course: course?.short_code })}>Entroll Now</button>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap items-center w-full my-10 bg-gradient-to-r from-emerald-500 to-lime-600 border-4 border-gray-300 rounded-2xl">
                  {course?.modules && course?.modules.map((module, index) => (
                    <div key={index} className="flex w-full lg:w-1/3 text-5xl font-bold text-white flex-col gap-2 border-b lg:border-r">
                      <h1 className="text-lg text-center px-3 mt-3 mb-2">{module?.title}</h1>
                      <div className="border mx-16 lg:mx-5"></div>
                      <p className="text-sm text-center py-2 pb-4">{module?.subtitle}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-col lg:block text-lg gap-6 mt-4">
                  <h1 className="text-3xl font-bold">Why Choose This Course?</h1>
                  <div className="flex flex-row gap-2"><TiTick className='text-xl text-green-600 mt-1' /><p><b>Learn by Doing:</b> Work on 3+ live projects that mimic industry challenges.</p></div>
                  <div className="flex flex-row gap-2"><TiTick className='text-xl text-green-600 mt-1' /><p><b>Job-Ready Skills:</b> {course?.job_skills}</p></div>
                  <div className="flex flex-row gap-2"><TiTick className='text-xl text-green-600 mt-1' /><p><b>Expert Mentors:</b> Learn from developers who’ve worked at CTS, TCS and Wipro.</p></div>
                  <div className="flex flex-row gap-2"><TiTick className='text-xl text-green-600 mt-1' /><p><b>Flexible Learning:</b> Choose from online, offline, or hybrid batches that suit your schedule.</p></div>
                </div>
              </div>
            </div>
            {/* Skill and tools */}
            <div className="swiper-container">
              <h1 className="text-center text-3xl font-bold pb-8 mt-6 text-gray-800">
                Learn top notch tools, frameworks and libraries
              </h1>
              <Marquee className='mb-2' speed="20">
                {
                  course?.tools && course.tools.map((partner, index) => (
                    <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                      <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                      <span className="font-bold max-md:sm text-xl">{partner.name}</span>
                    </div>
                  ))
                }
              </Marquee>
              <Marquee className='mt-4' direction="right" speed="20">
                {
                  course?.tools && course.tools.map((partner, index) => (
                    <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                      <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                      <span className="font-bold max-md:sm text-xl">{partner.name}</span>
                    </div>
                  ))
                }
              </Marquee>
            </div>
            {/* Curriculum */}
            <div className="mx-auto w-full lg:w-1/2">
              <h1 className="text-center text-3xl font-bold pb-8 mt-6 text-gray-800">
                Curriculum Breakdown
              </h1>
              {/* Tab Buttons */}
              <div className="flex space-x-2  md:justify-center overflow-x-auto border-b border-gray-300 scrollbar-hide">
                {/* Add more tabs if needed */}
                {course?.curriculum && course.curriculum.map((_, index) => (
                  <button
                    key={index}
                    className={`py-2 px-4 font-medium text-sm whitespace-nowrap ${activeTab === index ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-600'
                      } focus:outline-none`}
                    onClick={() => handleTabClick(index)}
                  >
                    Module {index + 1}
                  </button>
                ))}
              </div>
              {/* Tab Content */}
              <div className="flex flex-row justify-center">
                <div className="mt-2 p-4 w-full items-center bg-white rounded shadow">
                  {activeTab !== null && (
                    <div className='flex flex-col gap-2 items-center'>
                      <h2 className="text-xl font-semibold">{course.curriculum[activeTab].title}</h2>
                      {course.curriculum[activeTab].topics.map((itm, index) => (
                        <p key={index} className="text-gray-700 flex flex-row gap-2"><TiTick className="text-green-600 mt-1" /> {itm}</p>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* What you build */}
            <div className="flex flex-col mt-4">
              <h1 className="text-center text-3xl font-bold pb-8 mt-2 text-gray-800">What You’ll Build</h1>
              <div className="flex flex-wrap justify-center lg:flex-nowrap gap-5">
                {course?.projects && course.projects.map((project, index) => {
                  return (
                    <div key={index} className="flex gap-2 border-2 w-96 border-green-800 rounded-lg justify-center py-2">
                      <div className="flex flex-col items-center gap-5">
                        <img src={project.img} alt="recorded" className="object-center max-w-xs text-5xl text-green-600" />
                        <h4 className="text-xl text-center text-green-800 uppercase font-bold">{project.title}</h4>
                        <p className="text-xs text-center font-semibold">{project.description}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            {/* Who is for */}
            <div className="flex flex-col gap-3 mt-4">
              <h1 className="text-center text-3xl font-bold pb-8 mt-2 text-gray-800">Who Is This Course For?</h1>
              <div className="flex flex-wrap justify-center lg:flex-nowrap gap-5">
                <div className="flex gap-2 border-2 w-96 border-green-800 py-2 justify-center rounded-lg">
                  <div className="flex flex-col w-72 items-center gap-2">
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Beginners</h4>
                    <p className="text-xs text-center font-semibold">No coding background? No worries—we’ll guide you from scratch.</p>
                  </div>
                </div>
                <div className="flex gap-2 border-2 w-96 border-green-800 py-2 justify-center rounded-lg">
                  <div className="flex flex-col w-72 items-center gap-2">
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Career Changers</h4>
                    <p className="text-xs text-center font-semibold">Transition into one of the highest-paying tech roles.</p>
                  </div>
                </div>
                <div className="flex gap-2 border-2 w-96 border-green-800 py-2 justify-center rounded-lg">
                  <div className="flex flex-col w-72 items-center gap-2">
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Tech Enthusiasts</h4>
                    <p className="text-xs text-center font-semibold">Expand your skillset and become a developer everyone envies.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Review */}
            <div className="flex flex-col gap-3 py-2">
              <h1 className="text-center text-3xl font-bold mt-2 text-gray-800">Reviews</h1>
              <h1 className="text-center text-xl font-semibold pb-3 text-gray-800">Read what our students have to say</h1>
              <Testimonials header='Reviews' />
            </div>
            {/* Different */}
            <div className="flex flex-col gap-3 mt-4">
              <h1 className="text-center text-3xl font-bold pb-3 mt-2 text-gray-800">What Makes Us Different?</h1>
              <div className="flex flex-wrap justify-center lg:flex-nowrap gap-5">
                <div className="flex gap-2 border-2 w-96 justify-center border-green-800 py-4 px-4 rounded-lg">
                  <div className="flex flex-col items-center gap-2 px-2 max-w-64">
                    <img src={schoolImg} className='w-56' alt='easto school'></img>
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Interactive Live Classes</h4>
                    <p className="text-xs text-center font-semibold">Not just lectures—engage, ask, and learn.</p>
                  </div>
                </div>
                <div className="flex gap-2 border-2 w-96 justify-center border-green-800 py-4 px-4 rounded-lg">
                  <div className="flex flex-col items-center gap-2 px-2 max-w-64">
                    <img src={discussionImg} className='w-56' alt='easto discussion'></img>
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Real Mentorship</h4>
                    <p className="text-xs text-center font-semibold">Get 1:1 support whenever you need help.</p>
                  </div>
                </div>
                <div className="flex gap-2 border-2 w-96 justify-center border-green-800 py-4 px-4 rounded-lg">
                  <div className="flex flex-col items-center gap-2 px-2 max-w-64">
                    <img src={accessImg} className='w-56' alt='easto access'></img>
                    <h4 className="text-xl text-center text-green-800 uppercase font-bold">Lifetime Access</h4>
                    <p className="text-xs text-center font-semibold">Revisit course materials, Placement support and Career growth assistance</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 mt-4">
              <h1 className="text-center text-3xl font-bold pb-3 mt-2 text-gray-800">Meet Your Mentor</h1>
              <Mentors mentorIds={course.mentor} />
            </div>
            <FAQ />
            <div className="flex flex-col gap-3">
              <h1 className="text-center text-3xl font-bold pb-3 mt-2 text-gray-800">Course Fee</h1>
              <h4 className="text-center text-4xl font-bold pb-3 mt-2 text-gray-800">₹ {course?.price} <span className="text-lg text-gray-500">(Incl. GST)</span></h4>
              <div className='flex flex-col items-center'>
                <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={() => openModal({ course: course?.short_code })}>Entroll Now</button>
              </div>
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default CourseDetailPage;
