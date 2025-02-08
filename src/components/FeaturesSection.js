import React from "react";
import Marquee from "react-fast-marquee";
import { useModal } from "../page/Main";
import recordImg from '../assets/vector/easto-recorded-class.gif';
import onlineClassImg from '../assets/vector/easto-online-video-vector.gif';
import liveClassImg from '../assets/vector/easto-live-class-vector.gif';
import FeaturesSectionImg from '../assets/vector/easto-feature-section-vector.gif';
import { IoBook, IoEarth } from "react-icons/io5";
import { GrUserExpert, GrLineChart } from "react-icons/gr";
import { SiBookstack } from "react-icons/si";
import { WiTime9 } from "react-icons/wi";
import { MdSupportAgent } from "react-icons/md";
import { GiPodiumWinner } from "react-icons/gi";
import { Link } from 'react-router-dom';
import CourseSection from "../page/Courses";
const images = require.context('../assets/company', true);
const imageList = images.keys().map(image => images(image));

function FeaturesSection() {
  const { openModal } = useModal();

  const toolsAndFrameworks = [
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
      "name": "Bitbucket",
      "logo": "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg"
    },
    {
      "name": "Docker",
      "logo": "https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
    },
    {
      "name": "Kubernetes",
      "logo": "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg"
    },
    {
      "name": "Jenkins",
      "logo": "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg"
    },
    {
      "name": "GitLab",
      "logo": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg"
    },
    {
      "name": "GitHub",
      "logo": "https://www.vectorlogo.zone/logos/github/github-icon.svg"
    },
    {
      "name": "Terraform",
      "logo": "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg"
    },
    {
      "name": "Ansible",
      "logo": "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg"
    },
    {
      "name": "Prometheus",
      "logo": "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg"
    },
    {
      "name": "Grafana",
      "logo": "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg"
    },
    {
      "name": "Flask",
      "logo": "https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg"
    },
    {
      "name": "Django",
      "logo": "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg"
    },
    {
      "name": "Vue.js",
      "logo": "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
    },
    {
      "name": "Angular",
      "logo": "https://www.vectorlogo.zone/logos/angular/angular-icon.svg"
    },
    {
      "name": "Svelte",
      "logo": "https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg"
    },
    {
      "name": "Nuxt.js",
      "logo": "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg"
    },
    {
      "name": "Next.js",
      "logo": "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg"
    },
    {
      "name": "TensorFlow",
      "logo": "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg"
    },
    {
      "name": "PyTorch",
      "logo": "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg"
    },
    {
      "name": "Scikit-learn",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
    },
    {
      "name": "Pandas",
      "logo": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/pandas/pandas-original.svg"
    },
    {
      "name": "NumPy",
      "logo": "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg"
    },
    {
      "name": "Matplotlib",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg"
    },
    {
      "name": "Seaborn",
      "logo": "https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/s/seaborn-1.svg"
    },
    {
      "name": "Apache Spark",
      "logo": "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg"
    },
    {
      "name": "Hadoop",
      "logo": "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg"
    },
    {
      "name": "Keras",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg"
    },
    {
      "name": "spaCy",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/512px-SpaCy_logo.svg.png"
    },
    {
      "name": "FastAPI",
      "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/fastapi-icon.svg"
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
      "name": "JUnit",
      "logo": "https://junit.org/junit5/assets/img/junit5-logo.svg"
    },
    {
      "name": "Selenium",
      "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/selenium.svg"
    },
    {
      "name": "Cypress",
      "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/cypress-icon.svg"
    },
    {
      "name": "Appium",
      "logo": "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/appium.svg"
    },
    {
      "name": "Flutter",
      "logo": "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
    },
    {
      "name": "React Native",
      "logo": "https://raw.githubusercontent.com/bestofjs/bestofjs/c5a32cb59913ec723d3677415ab3723b78921148/apps/bestofjs-nextjs/public/logos/react-native.svg"
    },
    {
      "name": "Ionic",
      "logo": "https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg"
    },
    {
      "name": "Xamarin",
      "logo": "https://vectorwiki.com/images/DLf1h__xamarin.svg"
    },
    {
      "name": "Swift",
      "logo": "https://www.vectorlogo.zone/logos/swift/swift-icon.svg"
    },
    {
      "name": "Kotlin",
      "logo": "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg"
    },
    {
      "name": "Java",
      "logo": "https://www.vectorlogo.zone/logos/java/java-icon.svg"
    },
    {
      "name": "Python",
      "logo": "https://www.vectorlogo.zone/logos/python/python-icon.svg"
    },
    {
      "name": "JavaScript",
      "logo": "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
    },
    {
      "name": "TypeScript",
      "logo": "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg"
    },
    {
      "name": "Ruby",
      "logo": "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg"
    },
    {
      "name": "Go",
      "logo": "https://www.vectorlogo.zone/logos/golang/golang-icon.svg"
    },
    {
      "name": "Rust",
      "logo": "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg"
    },
    {
      "name": "SQL",
      "logo": "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"
    },
    {
      "name": "NoSQL",
      "logo": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg"
    },
    {
      "name": "HTML",
      "logo": "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
    },
    {
      "name": "CSS",
      "logo": "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg"
    },
    {
      "name": "Bootstrap",
      "logo": "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg"
    },
    {
      "name": "Tailwind CSS",
      "logo": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
    },
    {
      "name": "Material UI",
      "logo": "https://mui.com/static/logo.png"
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
      "name": "Prettier",
      "logo": "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/prettier.svg"
    },
    {
      "name": "Mocha",
      "logo": "https://mochajs.org/images/mocha-logo.svg"
    },
    {
      "name": "Chai",
      "logo": "https://www.vectorlogo.zone/logos/chaijs/chaijs-icon.svg"
    },
    {
      "name": "Jest",
      "logo": "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
    },
    {
      "name": "Storybook",
      "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/storybook-icon.svg"
    },
    {
      "name": "GraphQL",
      "logo": "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg"
    },
    {
      "name": "Apollo Client",
      "logo": "https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg"
    },
    {
      "name": "AWS",
      "logo": "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
    },
    {
      "name": "Azure",
      "logo": "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg"
    },
    {
      "name": "Google Cloud",
      "logo": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg"
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
      "name": "CircleCI",
      "logo": "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg"
    },
    {
      "name": "Travis CI",
      "logo": "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg"
    },
    {
      "name": "New Relic",
      "logo": "https://www.vectorlogo.zone/logos/newrelic/newrelic-icon.svg"
    },
    {
      "name": "Datadog",
      "logo": "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg"
    },
    {
      "name": "PagerDuty",
      "logo": "https://www.vectorlogo.zone/logos/pagerduty/pagerduty-icon.svg"
    },
    {
      "name": "Slack",
      "logo": "https://www.vectorlogo.zone/logos/slack/slack-icon.svg"
    },
    {
      "name": "Twilio",
      "logo": "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg"
    },
    {
      "name": "Stripe",
      "logo": "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg"
    },
    {
      "name": "SendGrid",
      "logo": "https://www.vectorlogo.zone/logos/sendgrid/sendgrid-icon.svg"
    },
    {
      "name": "Mailchimp",
      "logo": "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg"
    },
    {
      "name": "Firebase",
      "logo": "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
    },
    {
      "name": "Algolia",
      "logo": "https://www.vectorlogo.zone/logos/algolia/algolia-icon.svg"
    },
    {
      "name": "Redis",
      "logo": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg"
    },
    {
      "name": "Elasticsearch",
      "logo": "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg"
    },
    {
      "name": "RabbitMQ",
      "logo": "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg"
    },
    {
      "name": "Kafka",
      "logo": "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg"
    },
    {
      "name": "Nginx",
      "logo": "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg"
    },
    {
      "name": "Apache",
      "logo": "https://www.vectorlogo.zone/logos/apache/apache-icon.svg"
    },
    {
      "name": "OpenShift",
      "logo": "https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg"
    },
    {
      "name": "Apollo Server",
      "logo": "https://www.vectorlogo.zone/logos/apolloio/apolloio-icon.svg"
    },
    {
      "name": "Prisma",
      "logo": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/prisma/prisma-original.svg"
    },
    {
      "name": "NestJS",
      "logo": "https://nestjs.com/img/logo-small.svg"
    },
    {
      "name": "Strapi",
      "logo": "https://raw.githubusercontent.com/bestofjs/bestofjs/c5a32cb59913ec723d3677415ab3723b78921148/apps/bestofjs-nextjs/public/logos/strapi.svg"
    },
    {
      "name": "Hasura",
      "logo": "https://hasura.io/img/logos/hasura-logo.svg"
    },
    {
      "name": "RxJS",
      "logo": "https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/r/rxjs-1.svg"
    },
    {
      "name": "MobX",
      "logo": "https://mobx.js.org/img/mobx.png"
    },
    {
      "name": "Formik",
      "logo": "https://raw.githubusercontent.com/bestofjs/bestofjs/c5a32cb59913ec723d3677415ab3723b78921148/apps/bestofjs-nextjs/public/logos/formik.svg"
    },
    {
      "name": "Yup",
      "logo": "https://avatars.githubusercontent.com/u/339286?s=48&v=4"
    },
    {
      "name": "Lodash",
      "logo": "https://www.vectorlogo.zone/logos/lodash/lodash-icon.svg"
    },
    {
      "name": "Moment.js",
      "logo": "https://images.seeklogo.com/logo-png/27/1/moment-js-logo-png_seeklogo-273665.png"
    },
    {
      "name": "Day.js",
      "logo": "https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png"
    },
    {
      "name": "Socket.IO",
      "logo": "https://socket.io/images/logo.svg"
    },
    {
      "name": "Three.js",
      "logo": "https://upload.vectorlogo.zone/logos/threejs/images/83129207-9005-4463-8181-65a3cc3bf8fd.svg"
    },
    {
      "name": "D3.js",
      "logo": "https://www.vectorlogo.zone/logos/d3js/d3js-icon.svg"
    },
    {
      "name": "Leaflet",
      "logo": "https://leafletjs.com/docs/images/logo.png"
    },
    {
      "name": "Mapbox",
      "logo": "https://www.vectorlogo.zone/logos/mapbox/mapbox-icon.svg"
    },
    {
      "name": "Chart.js",
      "logo": "https://www.chartjs.org/img/chartjs-logo.svg"
    },
    {
      "name": "Figma",
      "logo": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
    },
    {
      "name": "Sketch",
      "logo": "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg"
    },
    {
      "name": "Zeplin",
      "logo": "https://www.vectorlogo.zone/logos/zeplinio/zeplinio-icon.svg"
    },
    {
      "name": "Adobe XD",
      "logo": "https://www.vectorlogo.zone/logos/adobe_acrobat/adobe_acrobat-icon.svg"
    },
    {
      "name": "Jira",
      "logo": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg"
    },
    {
      "name": "Trello",
      "logo": "https://www.vectorlogo.zone/logos/trello/trello-icon.svg"
    },
    {
      "name": "Microsoft Teams",
      "logo": "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg"
    },
    {
      "name": "Zoom",
      "logo": "https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg"
    },
    {
      "name": "Google Meet",
      "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg"
    },
    {
      "name": "Skype",
      "logo": "https://www.vectorlogo.zone/logos/skype/skype-icon.svg"
    },
    {
      "name": "Zapier",
      "logo": "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg"
    },
    {
      "name": "IFTTT",
      "logo": "https://ifttt.com/favicon.ico"
    },
    {
      "name": "Airtable",
      "logo": "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg"
    },
    {
      "name": "Notion",
      "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/notion-icon.svg"
    },
    {
      "name": "Monday.com",
      "logo": "https://www.vectorlogo.zone/logos/monday/monday-icon.svg"
    },
    {
      "name": "Asana",
      "logo": "https://upload.vectorlogo.zone/logos/asana/images/cae029cc-73d9-4b0d-83e2-70893c439061.svg"
    },
    {
      "name": "Basecamp",
      "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/basecamp-icon.svg"
    },
    {
      "name": "Todoist",
      "logo": "https://www.vectorlogo.zone/logos/todogroup/todogroup-icon.svg"
    },
    {
      "name": "Linear",
      "logo": "https://raw.githubusercontent.com/pheralb/svgl/de7a3e31ee517eb2e10350ac5c50c4ce8106241c/static/library/linear.svg"
    },
    {
      "name": "ClickUp",
      "logo": "https://clickup.com/favicon/apple-touch-icon.png"
    },
    {
      "name": "Miro",
      "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/miro-icon.svg"
    },
    {
      "name": "Framer",
      "logo": "https://www.vectorlogo.zone/logos/framer/framer-icon.svg"
    },
    {
      "name": "CodePen",
      "logo": "https://www.vectorlogo.zone/logos/codepen/codepen-tile.svg"
    },
    {
      "name": "JSFiddle",
      "logo": "https://www.vectorlogo.zone/logos/jsfiddle/jsfiddle-icon.svg"
    },
    {
      "name": "Plunker",
      "logo": "https://avatars.githubusercontent.com/u/35747167?s=200&v=4"
    },
    {
      "name": "Replit",
      "logo": "https://www.vectorlogo.zone/logos/replit/replit-icon.svg"
    },
    {
      "name": "Glitch",
      "logo": "https://glitch.com/apple-touch-icon.png"
    },
    {
      "name": "Contentful",
      "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/contentful.svg"
    }
  ];
  const features = [
    {
      icon: (
        <IoBook />
      ),
      title: 'Quality Education'
    },
    {
      icon: (
        <GrUserExpert />
      ),
      title: 'Expert Instructors'
    },
    {
      icon: (
        <SiBookstack />
      ),
      title: 'Diverse Courses'
    },
    {
      icon: (
        <WiTime9 />
      ),
      title: 'Flexible Learning'
    },
    {
      icon: (
        <MdSupportAgent />
      ),
      title: 'Supportive Community'
    },
    {
      icon: (
        <GiPodiumWinner />
      ),
      title: 'Proven Success'
    },
    {
      icon: (
        <GrLineChart />
      ),
      title: 'Career Growth'
    },
    {
      icon: (
        <IoEarth />
      ),
      title: 'Networking Opportunities'
    }
  ];

  return (
    <>
      <div className="swiper-container mt-10 -mb-6">
        <h1 className="text-center text-3xl font-bold pb-8 text-gray-800">
          Our Learners Works at
        </h1>
        <Marquee className='mb-3' direction="right" speed="20">
          {
            imageList.slice(0, 50).map((partner, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10">
                <img src={partner} alt={index} className="w-32 h-auto" />
              </div>
            ))
          }
        </Marquee>
      </div>
      <div className="flex flex-col gap-5 px-2 lg:px-24 py-16">
        <div className="flex flex-wrap lg:flex-nowrap gap-5">
          <h3 className="text-4xl font-bold w-full text-black lg:w-1/2 lg:text-5xl lg:px-10">Your Path to Success Starts Here</h3>
          <p className="w-full text-md lg:w-1/2 py-2 flex font-semibold text-justify px-0 lg:px-10">
            Whether you're a beginner eager to start your journey or an experienced coder looking to refine your skills, Easto offers flexible learning options to fit your needs. Join a vibrant community of learners and professionals committed to innovation and excellence.
          </p>
        </div>
        <div className="flex flex-wrap justify-between lg:flex-nowrap gap-10 mt-4">
          <div className="flex gap-5 border-2 border-green-800 py-5 px-2 rounded-lg">
            <div className="flex flex-col items-center gap-5">
              <img src={recordImg} alt="recorded" className="max-sm:-mb-16 md:-mb-12 -mb-24 lg:-mt-24 lg:-z-10 object-center text-5xl text-green-600" />
              <h4 className="text-2xl lg:text-3xl text-center text-green-800 uppercase font-bold">Recorded Classes</h4>
              <p className="text-md text-center font-semibold">Learn anytime, anywhere with our video courses. Our courses are designed to be interactive and engaging, with features like quizzes and coding challenges.</p>
              <button className="flex text-lg items-center hover:underline hover:underline-offset-4">
                Learn More
              </button>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-green-800 py-5 px-2 rounded-lg">
            <div className="flex flex-col items-center gap-5">
              <img src={onlineClassImg} alt="recorded" className="max-sm:-mb-16 md:-mb-12 -mb-24 lg:-mt-24 lg:-z-10 object-center text-5xl text-green-600" />
              <h4 className="text-2xl lg:text-3xl text-center text-green-800 uppercase font-bold">Online Classes</h4>
              <p className="text-md text-center font-semibold">Join live sessions from the comfort of your home. Interact with instructors in real-time and collaborate with peers through our online platform.</p>
              <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={() => openModal({ mode: 'online' })}>Entroll Now</button>
            </div>
          </div>
          <div className="flex gap-5 border-2 border-green-800 py-5 px-2 rounded-lg">
            <div className="flex flex-col items-center gap-5">
              <img src={liveClassImg} alt="recorded" className="max-sm:-mb-16 md:-mb-12 -mb-24 lg:-mt-24 lg:-z-10 object-center text-5xl text-green-600" />
              <h4 className="text-2xl lg:text-3xl text-center text-green-800 uppercase font-bold">Live Classes</h4>
              <p className="text-md text-center font-semibold">Experience real-time learning with our live classes. Engage directly with instructors and fellow students for immediate feedback and support.</p>
              <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={() => openModal({ mode: 'offline' })}>Entroll Now</button>
            </div>
          </div>
        </div>
        {/* Hidden overlay and modal for future use */}
        <div className="fixed top-0 left-0 z-30 w-full h-full bg-black opacity-50 hidden"></div>
        <div className="hidden rounded-lg shadow-xl border-2 border-black bg-gradient-to-r from-emerald-600 to-lime-700 overflow-y-auto overflow-x-hidden fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30 w-full lg:w-[700px] h-[450px]">
          <div className="w-full h-full p-3">
            <div className="flex justify-between text-white mb-3 px-3">
              <h3 className="text-xl font-bold">ddd</h3>
              <i className="bi bi-x-lg text-2xl font-bold cursor-pointer hover:text-red-500 hover:bg-white rounded-full px-3"></i>
            </div>
            {/* <iframe width="100%" height="350" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
          </div>
        </div>
      </div>
      <div className="swiper-container">
        <h1 className="text-center text-3xl font-bold pb-8 text-gray-800">
          Learn top notch tools, frameworks and libraries
        </h1>
        <Marquee className='mb-3' speed="20">
          {
            toolsAndFrameworks.slice(0, 50).map((partner, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                <span className="font-bold max-md:sm text-xl">{partner.name}</span>
              </div>
            ))
          }
        </Marquee>
        <Marquee direction='right' speed="25" className='mb-3'>
          {
            toolsAndFrameworks.slice(51, 100).map((partner, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                <span className="font-bold max-md:sm text-xl">{partner.name}</span>
              </div>
            ))
          }
        </Marquee>
        <Marquee speed="15">
          {
            toolsAndFrameworks.slice(101, 150).map((partner, index) => (
              <div key={index} className="flex flex-row items-center justify-center gap-2 pr-10 max-md:pr-4">
                <img src={partner.logo} alt={partner.name} className="w-20 max-md:w-8 h-auto" />
                <span className="font-bold max-md:sm text-xl">{partner.name}</span>
              </div>
            ))
          }
        </Marquee>
      </div>
      <div className="flex flex-col gap-5 py-2 mt-10">
        <h1 className="lg:text-5xl text-4xl font-bold px-6 text-center lg:px-32">Popular Courses</h1>
        <CourseSection count='3' />
      </div>
      <div className="flex flex-wrap justify-between lg:flex-nowrap gap-5 border-green-800 border-2 mx-5 lg:mx-32 mt-10 mb-10 rounded">
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-5 max-md:p-4 p-10">
          <h1 className="text-5xl text-green-600 font-bold">
            Maximize Your <br /> Potential in Software <br />Development
          </h1>
          <p className="text-lg font-semibold">Explore a diverse array of interactive learning courses tailored to help you achieve your goals.</p>
          <div className="flex gap-5">
            <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border" onClick={openModal}>Entroll Now</button>
            <Link to="/courses">
              <button className="bg-white rounded-md text-green-600 lg:text-xl font-bold border border-green-600 hover:bg-green-600 hover:text-white px-7 py-2">Explore Courses</button>
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2 p-5 lg:block">
          <img src={FeaturesSectionImg} alt="banner" />
        </div>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap gap-5 mx-0 lg:mx-32 my-14 mb-2">
        <div className="w-full flex-col lg:w-1/2 flex gap-2 items-center justify-center px-5">
          <div className="flex flex-col gap-2 grid lg:grid-cols-2 sm:grid-cols-2">
            {features.map((feature, index) => (
              <FeatureCardBox key={index} feature={feature} />
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex flex-col gap-5 p-10">
          <h1 className="text-4xl font-bold">Recognized for Excellence in Learning Platform</h1>
          <p className="text-xl">Discover why our learning platform has been awarded for its outstanding features and quality.</p>
          <div className="flex gap-5">
            {/* <button className="bg-green-600 hover:bg-green-700 font-bold lg:text-xl rounded-md text-white px-8 py-2 border">Learn More</button> */}
            <Link to="/courses">
              <button className="bg-white rounded-md text-green-600 font-bold border lg:text-xl border-green-600 hover:bg-green-600 hover:text-white px-7 py-2">Explore Courses</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const FeatureCardBox = ({ feature }) => {
  return (
    <div className="flex gap-2 justify-center items-center border-2 p-3 border-green-500 rounded cursor-pointer hover:bg-green-500 hover:text-white">
      {feature.icon}
      <h3 className="text-black max-sd:text-lg lg:text-xl font-bold">{feature.title}</h3>
    </div>
  );
};

export default FeaturesSection;
