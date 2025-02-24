
import ecommerceImg from '../assets/vector/easto-e-commerce-illu.gif';
import jobPortalImg from '../assets/vector/easto-job-portal-illu.gif';
import socialMImg from '../assets/vector/easto-social-media-illu.gif';
import fsdImage from '../assets/vector/easto-full-stack-developmet-vector.gif';
import mobileImage from '../assets/vector/easto-Mobile-app-development-vector.gif';
import aiDsImage from '../assets/vector/easto-ai-&-data-vector.gif';
import devOpsImage from '../assets/vector/easto-devops-vector.gif';
import testingImage from '../assets/vector/easto-automation-testing-vector.gif';
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
import FSDCertificate from "../assets/certificate/easto-full-stack-certificate.png";
import MADCertificate from "../assets/certificate/easto-mobile-app-certificate.png";
import DevOpsCertificate from "../assets/certificate/easto-devops-certificate.png";
import AIDSCertificate from "../assets/certificate/easto-ai-ds-certificate.png";
import AutoTestCertificate from "../assets/certificate/easto-auto-testing-certificate.png";
import Tools from './tools';

const courses = [
  {
    seo: {
      title: 'MERN Full-Stack Course | Easto Academy | Learn React & Node',
      description: 'Join Easto Academy’s MERN Full-Stack course! Learn React, Node.js, Express & MongoDB with hands-on projects. Build real-world apps & boost your career!',
      keywords: 'Easto Academy, MERN Full-Stack course, React course, Node.js training, MongoDB tutorial, Express.js course, Full-Stack web development, JavaScript development, hands-on MERN training, web development course, best MERN stack course, online MERN stack course, Full-Stack developer training, learn MERN stack, backend development with Node.js, frontend development with React, puducherry, pondicherry, tamil nadu'
    },
    mainImg: fsdImage,
    title: 'Full Stack Development Course',
    actual_price: "52,550",
    price: '32,550',
    slug: 'full-stack-development',
    short_code: "fsd",
    description_old: 'Our Full Stack Development course is designed to equip you with the skills to build dynamic, scalable, and interactive web applications. Learn to master front-end and back-end technologies, databases, and deployment techniques to kickstart your career as a full-stack developer.',
    modules: [
      { title: '3 Months', subtitle: 'Duration' },
      { title: 'Offline / Online', subtitle: 'Class Mode' },
      { title: 'தமிழ்', subtitle: 'Language' }
    ],
    tags: ['MongoDB', 'ExpressJs', 'ReactJs', 'NodeJs'],
    description: 'A full-stack development course provides comprehensive training in both frontend and backend web development, covering programming languages, frameworks, and databases necessary to build complete web applications. Participants learn skills ranging from user interface design and client-side scripting to server-side programming and database management, enabling them to develop dynamic and interactive web solutions.',
    link: '/courses/full-stack-development',
    job_skills: "Master HTML, CSS, JavaScript, React, Node.js, MongoDB, and more!",
    tools: Tools.filter(itm => itm.course.includes('fsd')),
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
    ],
    certificate: FSDCertificate
  },
  {
    seo: {
      title: 'React Native Course | Easto Academy | Build Mobile Apps',
      description: 'Learn React Native at Easto Academy! Build cross-platform iOS & Android apps with hands-on training. Master mobile development & start your journey today!',
      keywords: 'Easto Academy, React Native course, mobile app development, React Native training, iOS app development, Android app development, cross-platform apps, React Native tutorial, hands-on mobile development, JavaScript for mobile, best React Native course, online React Native training, Full-Stack mobile development, mobile UI/UX design, app development bootcamp, build mobile apps with React Native, puducherry, pondicherry, tamil nadu'
    },
    mainImg: mobileImage,
    title: 'Mobile App Development Course',
    price: '32,550',
    actual_price: "52,550",
    short_code: "mad",
    slug: 'mobile-app-development',
    description_old: 'Design, develop, and launch high-performance mobile apps that run smoothly on both Android and iOS using React Native—the technology behind apps like Instagram, Airbnb, and Discord',
    modules: [
      { title: '3 Months', subtitle: 'Duration' },
      { title: 'Offline / Online', subtitle: 'Class Mode' },
      { title: 'தமிழ்', subtitle: 'Language' }
    ],
    tags: ['React Native', 'Android', 'Ios'],
    description: 'A Mobile App Development Course equips learners with the skills needed to create applications for smartphones and tablets. Participants gain proficiency in programming languages such as Java, Kotlin, Swift, or JavaScript, along with frameworks like Android Studio or Xcode. The course covers UI design, database integration, testing, and deployment, preparing individuals to build and launch mobile apps effectively.',
    link: '/courses/mobile-app-development',
    job_skills: "React Native, Redux, Firebase, APIs, and more!",
    tools: Tools.filter(itm => itm.course.includes('mad')),
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
    ],
    certificate: MADCertificate
  },
  {
    seo: {
      title: 'AI & Data Science Course | Easto Academy | Learn ML & AI',
      description: 'Join Easto Academy’s AI & Data Science course! Learn Machine Learning, Python, Deep Learning & Analytics with hands-on projects. Start your AI journey today!',
      keywords: 'Easto Academy, AI course, Data Science training, Machine Learning course, Deep Learning tutorial, Python for AI, Artificial Intelligence training, Data Analytics course, hands-on AI projects, best Data Science course, online AI training, learn AI & ML, AI-powered applications, Neural Networks training, Big Data analytics, AI programming, data-driven decision making, puducherry, pondicherry, tamil nadu'
    },
    mainImg: aiDsImage,
    title: 'AI & Data Science Course',
    price: '44,999',
    actual_price: "65,550",
    short_code: "aids",
    slug: 'ai-data-science',
    description_old: 'Learn how to extract insights, build AI models, and work with big data! Get hands-on experience with Python, Machine Learning, Deep Learning, NLP, Computer Vision, and Big Data tools like TensorFlow, PyTorch, and Apache Spark.',
    tags: ['Python', 'Sql', 'Maths'],
    description: 'AI is the simulation of human intelligence in machines that are programmed to think, learn, and make decisions like humans. It uses algorithms and data to perform tasks such as natural language processing, image recognition, and decision-making. AI powers applications like chatbots, autonomous vehicles, recommendation systems, and virtual assistants. Data Science is the field of analyzing and interpreting large datasets to extract insights, solve problems, and make data-driven decisions.',
    link: '/courses/ai-data-science',
    modules: [
      { title: '3 Months', subtitle: 'Duration' },
      { title: 'Offline / Online', subtitle: 'Class Mode' },
      { title: 'தமிழ்', subtitle: 'Language' }
    ],
    job_skills: "Python, ML, NLP, Computer Vision & AI.",
    tools: Tools.filter(itm => itm.course.includes('aids')),
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
    ],
    certificate: AIDSCertificate
  },
  {
    seo: {
      title: 'DevOps Course | Easto Academy | Learn CI/CD & Cloud Tools',
      description: "Master DevOps at Easto Academy! Learn CI/CD, Docker, Kubernetes, AWS, Terraform & GitHub Actions with hands-on projects. Accelerate your career today!",
      keywords: 'Easto Academy, DevOps course, CI/CD training, Docker course, Kubernetes tutorial, AWS DevOps, Terraform training, GitHub Actions, cloud computing, DevOps certification, hands-on DevOps projects, best DevOps course, online DevOps training, infrastructure as code, automation in DevOps, cloud deployment, site reliability engineering, DevOps tools, DevOps for beginners, Easto Academy, DevOps course, CI/CD training, Docker, Kubernetes, AWS, Terraform, GitHub Actions, best DevOps course, online DevOps training, learn DevOps & CI/CD, DevOps-powered applications, containerization, cloud-native computing, DevOps best practices, puducherry, pondicherry, tamil nadu'
    },
    mainImg: devOpsImage,
    title: 'DevOps Course',
    price: '44,999',
    actual_price: "65,550",
    short_code: "do",
    slug: 'devops',
    description_old: 'Bridge the gap between development & operations! Learn to automate, deploy, and scale applications like top tech companies using DevOps tools such as Docker, Kubernetes, AWS, Terraform, and CI/CD Pipelines',
    modules: [
      { title: '3 Months', subtitle: 'Duration' },
      { title: 'Offline / Online', subtitle: 'Class Mode' },
      { title: 'தமிழ்', subtitle: 'Language' }
    ],
    job_skills: "CI/CD & cloud deployment to monitoring & security",
    tags: ['Gitlab', 'Jenkins', 'Kubernetes'],
    description: 'A DevOps course teaches essential skills and tools for streamlining software development and IT operations. Participants learn to automate processes, implement continuous integration/continuous delivery (CI/CD), and manage infrastructure as code (IaC), fostering collaboration and efficiency. The course equips learners with knowledge in areas like containerization, monitoring enabling them to adopt DevOps practices effectively.',
    link: '/courses/devops',
    tools: Tools.filter(itm => itm.course.includes('do')),
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
    ],
    certificate: DevOpsCertificate
  },
  {
    seo: {
      title: 'Automation Testing Course | Easto Academy | Selenium & API',
      description: 'Join Easto Academy’s Automation Testing course! Learn Selenium, API Testing, Cypress, JUnit & CI/CD with hands-on projects. Boost your QA skills today!',
      keywords: 'Easto Academy, Automation testing course, Selenium, API testing, Cypress, JUnit, CI/CD, hands-on automation projects, best automation testing course, online automation testing training, learn automation testing & CI/CD, automation testing for web, mobile, and API testing, Easto Academy, automation testing course, Selenium, API testing, Cypress, JUnit, CI/CD, best automation testing course, online automation testing training, Easto Academy, Automation Testing course, Selenium training, API Testing course, Cypress tutorial, JUnit training, software testing, QA automation, CI/CD testing, best automation testing course, online QA training, test automation frameworks, hands-on testing projects, software quality assurance, end-to-end testing, automated UI testing, DevOps testing'
    },
    mainImg: testingImage,
    title: 'Automation testing Course',
    price: '32,550',
    actual_price: "52,550",
    short_code: "at",
    slug: 'automation-testing',
    description_old: 'Learn to automate testing and boost software quality! Get hands-on experience with Selenium, Appium, Cypress, JUnit, Jenkins, and more to build robust test automation frameworks for web, mobile, and API testing.',
    modules: [
      { title: '3 Months', subtitle: 'Duration' },
      { title: 'Offline / Online', subtitle: 'Class Mode' },
      { title: 'தமிழ்', subtitle: 'Language' }
    ],
    job_skills: "Selenium, Cypress, Appium, JUnit, TestNG & Postman.",
    tools: Tools.filter(itm => itm.course.includes('at')),
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
    ],
    certificate: AutoTestCertificate,
    tags: ['Jira', 'Selenium', 'Postman'],
    description: 'Master the fundamentals of manual and automated software testing methodologies in this comprehensive course. Learn to effectively design, execute, and analyze test cases to ensure the quality and reliability of software products, while also gaining proficiency in using industry-standard automation tools for streamlined testing processes.',
    link: '/courses/automation-testing'
  }
];

export default courses;
