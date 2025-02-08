import React from "react";
import Marquee from "react-fast-marquee";

const scroller = () => {
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
  return (

  )
};

export default scroller;