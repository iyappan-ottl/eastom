const tools = [
  {
    "name": "MongoDB",
    "logo": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    "course": 'fsd,aids'
  },
  {
    "name": "Express.js",
    "logo": "https://www.vectorlogo.zone/logos/expressjs/expressjs-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "React",
    "logo": "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Node.js",
    "logo": "https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Bitbucket",
    "logo": "https://www.vectorlogo.zone/logos/bitbucket/bitbucket-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Docker",
    "logo": "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    "course": 'do'
  },
  {
    "name": "Kubernetes",
    "logo": "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    "course": 'do'
  },
  {
    "name": "Jenkins",
    "logo": "https://www.vectorlogo.zone/logos/jenkins/jenkins-icon.svg",
    "course": 'do'
  },
  {
    "name": "GitLab",
    "logo": "https://www.vectorlogo.zone/logos/gitlab/gitlab-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "GitHub",
    "logo": "https://www.vectorlogo.zone/logos/github/github-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Terraform",
    "logo": "https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg",
    "course": 'aids'
  },
  {
    "name": "Ansible",
    "logo": "https://www.vectorlogo.zone/logos/ansible/ansible-icon.svg",
    "course": 'do'
  },
  {
    "name": "Prometheus",
    "logo": "https://www.vectorlogo.zone/logos/prometheusio/prometheusio-icon.svg",
    "course": 'do'
  },
  {
    "name": "Grafana",
    "logo": "https://www.vectorlogo.zone/logos/grafana/grafana-icon.svg",
    "course": 'do'
  },
  {
    "name": "Flask",
    "logo": "https://www.vectorlogo.zone/logos/palletsprojects_flask/palletsprojects_flask-icon~v2.svg",
    "course": 'fsd'
  },
  {
    "name": "Django",
    "logo": "https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Vue.js",
    "logo": "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Angular",
    "logo": "https://www.vectorlogo.zone/logos/angular/angular-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Svelte",
    "logo": "https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Nuxt.js",
    "logo": "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Next.js",
    "logo": "https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "TensorFlow",
    "logo": "https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg",
    "course": 'aids'
  },
  {
    "name": "PyTorch",
    "logo": "https://www.vectorlogo.zone/logos/pytorch/pytorch-icon.svg",
    "course": 'aids'
  },
  {
    "name": "Scikit-learn",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    "course": 'aids'
  },
  {
    "name": "Pandas",
    "logo": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/pandas/pandas-original.svg",
    "course": 'aids'
  },
  {
    "name": "NumPy",
    "logo": "https://www.vectorlogo.zone/logos/numpy/numpy-icon.svg",
    "course": 'aids'
  },
  {
    "name": "Matplotlib",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/8/84/Matplotlib_icon.svg",
    "course": 'aids'
  },
  {
    "name": "Seaborn",
    "logo": "https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/s/seaborn-1.svg",
    "course": 'aids'
  },
  {
    "name": "Apache Spark",
    "logo": "https://www.vectorlogo.zone/logos/apache_spark/apache_spark-icon.svg",
    "course": 'do,aids'
  },
  {
    "name": "Hadoop",
    "logo": "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg",
    "course": 'do,aids'
  },
  {
    "name": "Keras",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
    "course": 'aids'
  },
  {
    "name": "spaCy",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/SpaCy_logo.svg/512px-SpaCy_logo.svg.png",
    "course": 'aids'
  },
  {
    "name": "FastAPI",
    "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/fastapi-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Swagger",
    "logo": "https://static-00.iconduck.com/assets.00/swagger-icon-512x512-halz44im.png",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Postman",
    "logo": "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "JUnit",
    "logo": "https://junit.org/junit5/assets/img/junit5-logo.svg",
    "course": 'at'
  },
  {
    "name": "Selenium",
    "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/selenium.svg",
    "course": 'at'
  },
  {
    "name": "Cypress",
    "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/cypress-icon.svg",
    "course": 'at'
  },
  {
    "name": "Appium",
    "logo": "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/appium.svg",
    "course": 'at'
  },
  {
    "name": "Flutter",
    "logo": "https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg",
    "course": 'mad'
  },
  {
    "name": "React Native",
    "logo": "https://raw.githubusercontent.com/bestofjs/bestofjs/c5a32cb59913ec723d3677415ab3723b78921148/apps/bestofjs-nextjs/public/logos/react-native.svg",
    "course": 'mad'
  },
  {
    "name": "Ionic",
    "logo": "https://www.vectorlogo.zone/logos/ionicframework/ionicframework-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Xamarin",
    "logo": "https://vectorwiki.com/images/DLf1h__xamarin.svg",
    "course": 'mad'
  },
  {
    "name": "Swift",
    "logo": "https://www.vectorlogo.zone/logos/swift/swift-icon.svg",
    "course": 'mad'
  },
  {
    "name": "Kotlin",
    "logo": "https://www.vectorlogo.zone/logos/kotlinlang/kotlinlang-icon.svg",
    "course": 'mad'
  },
  {
    "name": "Java",
    "logo": "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    "course": 'mad'
  },
  {
    "name": "Python",
    "logo": "https://www.vectorlogo.zone/logos/python/python-icon.svg",
    "course": 'aids'
  },
  {
    "name": "JavaScript",
    "logo": "https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "TypeScript",
    "logo": "https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Ruby",
    "logo": "https://www.vectorlogo.zone/logos/ruby-lang/ruby-lang-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Go",
    "logo": "https://www.vectorlogo.zone/logos/golang/golang-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Rust",
    "logo": "https://www.vectorlogo.zone/logos/rust-lang/rust-lang-icon.svg",
    "course": 'do'
  },
  {
    "name": "SQL",
    "logo": "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "NoSQL",
    "logo": "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "HTML",
    "logo": "https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "CSS",
    "logo": "https://www.vectorlogo.zone/logos/w3_css/w3_css-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Bootstrap",
    "logo": "https://www.vectorlogo.zone/logos/getbootstrap/getbootstrap-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Tailwind CSS",
    "logo": "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Material UI",
    "logo": "https://mui.com/static/logo.png",
    "course": 'fsd,mad'
  },
  {
    "name": "Redux",
    "logo": "https://www.vectorlogo.zone/logos/js_redux/js_redux-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Axios",
    "logo": "https://axios-http.com/assets/logo.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Webpack",
    "logo": "https://www.vectorlogo.zone/logos/js_webpack/js_webpack-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Babel",
    "logo": "https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "ESLint",
    "logo": "https://www.vectorlogo.zone/logos/eslint/eslint-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Prettier",
    "logo": "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/prettier.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Mocha",
    "logo": "https://mochajs.org/images/mocha-logo.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Chai",
    "logo": "https://www.vectorlogo.zone/logos/chaijs/chaijs-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Jest",
    "logo": "https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Storybook",
    "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/storybook-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "GraphQL",
    "logo": "https://www.vectorlogo.zone/logos/graphql/graphql-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "Apollo Client",
    "logo": "https://www.vectorlogo.zone/logos/apollographql/apollographql-icon.svg",
    "course": 'fsd'
  },
  {
    "name": "AWS",
    "logo": "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
    "course": 'do'
  },
  {
    "name": "Azure",
    "logo": "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg",
    "course": 'do'
  },
  {
    "name": "Google Cloud",
    "logo": "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg",
    "course": 'do'
  },
  {
    "name": "Heroku",
    "logo": "https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg",
    "course": 'do'
  },
  {
    "name": "Netlify",
    "logo": "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
    "course": 'do'
  },
  {
    "name": "Vercel",
    "logo": "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
    "course": 'do'
  },
  {
    "name": "CircleCI",
    "logo": "https://www.vectorlogo.zone/logos/circleci/circleci-icon.svg",
    "course": 'do,at'
  },
  {
    "name": "Travis CI",
    "logo": "https://www.vectorlogo.zone/logos/travis-ci/travis-ci-icon.svg",
    "course": 'do'
  },
  {
    "name": "New Relic",
    "logo": "https://www.vectorlogo.zone/logos/newrelic/newrelic-icon.svg",
    "course": 'do'
  },
  {
    "name": "Datadog",
    "logo": "https://www.vectorlogo.zone/logos/datadoghq/datadoghq-icon.svg",
    "course": 'do'
  },
  {
    "name": "PagerDuty",
    "logo": "https://www.vectorlogo.zone/logos/pagerduty/pagerduty-icon.svg",
    "course": 'do'
  },
  {
    "name": "Slack",
    "logo": "https://www.vectorlogo.zone/logos/slack/slack-icon.svg",
    "course": 'fsd,mad,do,at'
  },
  {
    "name": "Twilio",
    "logo": "https://www.vectorlogo.zone/logos/twilio/twilio-icon.svg",
    "course": 'fsd,mad,do,at'
  },
  {
    "name": "Stripe",
    "logo": "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
    "course": 'fsd,mad,do,at'
  },
  {
    "name": "SendGrid",
    "logo": "https://www.vectorlogo.zone/logos/sendgrid/sendgrid-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Mailchimp",
    "logo": "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Firebase",
    "logo": "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
    "course": 'fsd,mad,do'
  },
  {
    "name": "Algolia",
    "logo": "https://www.vectorlogo.zone/logos/algolia/algolia-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Redis",
    "logo": "https://www.vectorlogo.zone/logos/redis/redis-icon.svg",
    "course": 'fsd,mad,do'
  },
  {
    "name": "Elasticsearch",
    "logo": "https://www.vectorlogo.zone/logos/elastic/elastic-icon.svg",
    "course": 'fsd,mad,aids'
  },
  {
    "name": "RabbitMQ",
    "logo": "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Kafka",
    "logo": "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Nginx",
    "logo": "https://www.vectorlogo.zone/logos/nginx/nginx-icon.svg",
    "course": 'fsd,mad,do'
  },
  {
    "name": "Apache",
    "logo": "https://www.vectorlogo.zone/logos/apache/apache-icon.svg",
    "course": 'fsd,do,at,aids'
  },
  {
    "name": "OpenShift",
    "logo": "https://www.vectorlogo.zone/logos/openshift/openshift-icon.svg",
    "course": 'fsd,do,at,aids'
  },
  {
    "name": "Apollo Server",
    "logo": "https://www.vectorlogo.zone/logos/apolloio/apolloio-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Prisma",
    "logo": "https://raw.githubusercontent.com/devicons/devicon/ca28c779441053191ff11710fe24a9e6c23690d6/icons/prisma/prisma-original.svg",
    "course": 'fsd,do,at'
  },
  {
    "name": "NestJS",
    "logo": "https://nestjs.com/img/logo-small.svg",
    "course": 'fsd,do,at'
  },
  {
    "name": "Strapi",
    "logo": "https://raw.githubusercontent.com/bestofjs/bestofjs/c5a32cb59913ec723d3677415ab3723b78921148/apps/bestofjs-nextjs/public/logos/strapi.svg",
    "course": 'fsd,at'
  },
  {
    "name": "Hasura",
    "logo": "https://hasura.io/img/logos/hasura-logo.svg",
    "course": 'fsd,mad,do'
  },
  {
    "name": "RxJS",
    "logo": "https://raw.githubusercontent.com/detain/svg-logos/b02ee1ac30c7ff4757278337c95588b01ed0954b/svg/r/rxjs-1.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "MobX",
    "logo": "https://mobx.js.org/img/mobx.png",
    "course": 'mad'
  },
  {
    "name": "Formik",
    "logo": "https://raw.githubusercontent.com/bestofjs/bestofjs/c5a32cb59913ec723d3677415ab3723b78921148/apps/bestofjs-nextjs/public/logos/formik.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Yup",
    "logo": "https://avatars.githubusercontent.com/u/339286?s=48&v=4",
    "course": 'fsd,mad'
  },
  {
    "name": "Lodash",
    "logo": "https://www.vectorlogo.zone/logos/lodash/lodash-icon.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "Moment.js",
    "logo": "https://images.seeklogo.com/logo-png/27/1/moment-js-logo-png_seeklogo-273665.png",
    "course": 'fsd,mad,at'
  },
  {
    "name": "Day.js",
    "logo": "https://user-images.githubusercontent.com/17680888/39081119-3057bbe2-456e-11e8-862c-646133ad4b43.png",
    "course": 'fsd,mad'
  },
  {
    "name": "Socket.IO",
    "logo": "https://socket.io/images/logo.svg",
    "course": 'fsd,mad,at'
  },
  {
    "name": "Three.js",
    "logo": "https://upload.vectorlogo.zone/logos/threejs/images/83129207-9005-4463-8181-65a3cc3bf8fd.svg",
    "course": 'fsd,mad'
  },
  {
    "name": "D3.js",
    "logo": "https://www.vectorlogo.zone/logos/d3js/d3js-icon.svg",
    "course": 'fsd,mad,at'
  },
  {
    "name": "Leaflet",
    "logo": "https://leafletjs.com/docs/images/logo.png",
    "course": 'do,at'
  },
  {
    "name": "Mapbox",
    "logo": "https://www.vectorlogo.zone/logos/mapbox/mapbox-icon.svg",
    "course": 'mad'
  },
  {
    "name": "Chart.js",
    "logo": "https://www.chartjs.org/img/chartjs-logo.svg",
    "course": 'fsd,mad,aids'
  },
  {
    "name": "Figma",
    "logo": "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Sketch",
    "logo": "https://www.vectorlogo.zone/logos/sketchapp/sketchapp-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Zeplin",
    "logo": "https://www.vectorlogo.zone/logos/zeplinio/zeplinio-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Adobe XD",
    "logo": "https://www.vectorlogo.zone/logos/adobe_acrobat/adobe_acrobat-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Jira",
    "logo": "https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Trello",
    "logo": "https://www.vectorlogo.zone/logos/trello/trello-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Microsoft Teams",
    "logo": "https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Zoom",
    "logo": "https://www.vectorlogo.zone/logos/zoomus/zoomus-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Google Meet",
    "logo": "https://upload.wikimedia.org/wikipedia/commons/9/9b/Google_Meet_icon_%282020%29.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Skype",
    "logo": "https://www.vectorlogo.zone/logos/skype/skype-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Zapier",
    "logo": "https://www.vectorlogo.zone/logos/zapier/zapier-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "IFTTT",
    "logo": "https://ifttt.com/favicon.ico",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Airtable",
    "logo": "https://www.vectorlogo.zone/logos/airtable/airtable-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Notion",
    "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/notion-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Monday.com",
    "logo": "https://www.vectorlogo.zone/logos/monday/monday-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Asana",
    "logo": "https://upload.vectorlogo.zone/logos/asana/images/cae029cc-73d9-4b0d-83e2-70893c439061.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Basecamp",
    "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/basecamp-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Todoist",
    "logo": "https://www.vectorlogo.zone/logos/todogroup/todogroup-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Linear",
    "logo": "https://raw.githubusercontent.com/pheralb/svgl/de7a3e31ee517eb2e10350ac5c50c4ce8106241c/static/library/linear.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "ClickUp",
    "logo": "https://clickup.com/favicon/apple-touch-icon.png",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Miro",
    "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/miro-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Framer",
    "logo": "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "CodePen",
    "logo": "https://www.vectorlogo.zone/logos/codepen/codepen-tile.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "JSFiddle",
    "logo": "https://www.vectorlogo.zone/logos/jsfiddle/jsfiddle-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Plunker",
    "logo": "https://avatars.githubusercontent.com/u/35747167?s=200&v=4",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Replit",
    "logo": "https://www.vectorlogo.zone/logos/replit/replit-icon.svg",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Glitch",
    "logo": "https://glitch.com/apple-touch-icon.png",
    "course": 'fsd,mad,do,at,aids'
  },
  {
    "name": "Contentful",
    "logo": "https://raw.githubusercontent.com/gilbarbara/logos/92bb74e98bca1ea1ad794442676ebc4e75038adc/logos/contentful.svg",
    "course": 'fsd,mad,do,at,aids'
  }
];
export default tools;
