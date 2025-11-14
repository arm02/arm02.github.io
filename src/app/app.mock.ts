import { ProfileCollection } from './app.collection';

export const DataCollection: ProfileCollection = {
  fullName: 'Professional Profile',
  shortName: 'Professional Profile',
  title:
    'Adrian Milano <br /> Senior Software Engineer <br /> Jakarta, Indonesia',
  social: {
    github: 'https://github.com/arm02',
    gitlab: 'https://gitlab.com/arm02',
    linkedin: 'https://www.linkedin.com/in/arm02',
  },
  contact: {
    whatsapps: 'https://wa.me/628112175175',
    phone: '08112175175',
  },
  count: {
    experience: 7,
    projects: 30,
    client: 20,
  },
  aboutMe:
    '<p>Senior Full-Stack Software Engineer with <strong>7+ years</strong> of experience designing and building distributed systems across fintech, SaaS, enterprise, crowdsourcing, and public-service platforms. Strong expertise in <strong>Go, Node.js/Express, TypeScript, JavaScript, and modern Angular.</strong> Proven record improving performance (<strong>−50% page load, −40% bundle size</strong>), system reliability, and developer velocity through <strong>microservices</strong>, automated testing, and CI/CD. Experienced in <strong>architectural design</strong>, API development, and end-to-end delivery of scalable web applications.</p>',
  resumeLink:
    'https://github.com/arm02/resume/blob/main/CV%20Adrian%20Milano.pdf',
  coreSkills: [
    'Full-Stack Development (Go, Node.js/Express, TypeScript)',
    'Microservices Architecture',
    'API Design',
    'Performance Optimization',
    'Clean Architecture',
  ],
  frontendSkills: [
    'Angular',
    'React',
    'Vue',
    'Next.js',
    'HTML & CSS',
    'Module Federation',
    'State Management (NgRx/Redux/Pinia/RxJS/Signal,Hooks)',
    'Web Vitals',
    'TailwindCSS',
  ],
  backendSkills: [
    'RESTful & Event-Driven Services',
    'Redis',
    'RabbitMQ',
    'Docker',
    'API Gateway (Kong)',
    'Cloud (GCP / AWS)',
  ],
  qualitySkills: [
    'Jest',
    'SonarQube',
    'Automated Testing Pipelines',
    'Trunk-Based Development',
    'CI/CD (GitHub Actions, GitLab, Jenkins)',
  ],
  monitoringSkills: [
    'New Relic',
    'Sentry',
    'Real User Monitoring (RUM)',
    'Performance Dashboards',
  ],
  databaseSkills: [
    'MySQL',
    'PostgreSQL',
    'MongoDB',
    'ArangoDB',
    'Firebase (Realtime & Firestore)',
  ],
  workflows: [
    'Clean Architecture & Code',
    'Test-Driven Development',
    'Trunk-Based Development',
    'Application Monitoring',
    'Micro Frontend Architecture',
    'Microservice Architecture',
    'CI/CD & Jenkins',
    'Code Quality with SonarQube',
    'Agile & Scrum Methodologies',
    'Cross-Browser Testing & Debugging',
    'Cross-Functional Team Collaboration',
    'Software Development Life Cycle',
  ],
  education: [
    {
      period: '2018 - 2023',
      location: 'State University Of Jakarta',
      title: 'Bachelor Of Education',
      value: '3.69',
    },
    {
      period: '2015 - 2018',
      location: 'SMKN 10 Jakarta',
      title: 'Bachelor of Engineering',
      value: '3.5',
    },
  ],
  experience: [
    {
      period: 'June 2023 - October 2025',
      location: 'PT Pakar Digital Global (Paper.id) - Jakarta, Indonesia',
      title: 'Senior Software Engineer',
      description: [
        {
          title: 'Delivery & Technical Ownership',
          items: [
            '<strong>Implemented and modernized core fintech modules</strong> using Clean Architecture to improve scalability and maintainability',
            '<strong>Migrated Angular v10→v16</strong>, boosting page load speed <strong>30–50%</strong> and reducing bundle size <strong>40%</strong>.',
            'Developed <strong>full-stack financial workflows</strong> (Go + Angular) including automated withdrawals, secure BIN key storage, and invoice automation.',
            'Developed <strong>financial services (Paper Card)</strong> and <strong>enterprise-gradesolutions for clients including JAPFA, Plataran, Kopi Kenangan, Qoala, JnT Cargo, and CSA product features</strong>, and built internal tooling that improved operational efficiency and accounting workflow accuracy.',
            'Optimized frontend performance with <strong>lazy loading</strong> and <strong>modular design practices</strong>.',
          ],
        },
        {
          title: 'Leadership & Collaboration',
          items: [
            'Mentored <strong>3–4 engineers</strong> in frontend practices, testing strategy, and modular design',
            'Improved FE–BE alignment by driving shared <strong>API contract</strong> guidelines with backend & product teams',
          ],
        },
        {
          title: 'Quality & Operational Excellence',
          items: [
            'Improved test coverage to <strong>90%+</strong> and established <strong>CI/CD pipelines</strong> (linting, pull request validation, automation quality check), enabling weekly production releases.',
            'Implemented <strong>New Relic monitoring</strong> for faster issue diagnosis and reliability tracking',
            '<strong>Designed Micro Frontend strategy</strong> to support scalable and independent product development',
          ],
        },
      ],
    },
    {
      period: 'February 2022 - June 2023',
      location: 'PT Ako Media Asia (SALT.ID) - Jakarta, Indonesia',
      title: 'Senior Frontend Developer',
      description: [
        {
          title: 'Delivery & Technical Ownership',
          items: [
            '<strong>Developed Angular-based customer and partner platforms</strong> serving enterprise clients such as <strong>Telkomsel (CROX & TSurvey)</strong>.',
            'Architected <strong>modular component structure</strong> and <strong>caching flows</strong> that improved <strong>performance & availability</strong>.',
            'Migrated testing infrastructure from Karma/Jasmine to Jest, achieving <strong>98%+</strong> test coverage.',
          ],
        },
        {
          title: 'Leadership & Collaboration',
          items: [
            'Led <strong>~10 engineers</strong> in cross-functional development squads, coordinating between FE, BE, QA, and Product.',
            'Supported roadmap delivery by <strong>reviewing technical design</strong> decisions aligned with business goals.',
          ],
        },
        {
          title: 'Quality & Operational Excellence',
          items: [
            'Improved <strong>development workflow effectiveness</strong> through build and tooling optimizations.',
            'Enhanced release reliability by <strong>strengthening</strong> testing and <string>error prevention practices</string>.',
            '<strong>Reduced SonarQube</strong> code smells, bugs, and security vulnerabilities by <strong>40–50%</strong> through close team collaboration and targeted refactoring efforts, resulting in higher code quality and system reliability.',
          ],
        },
      ],
    },
    {
      period: 'January 2021 - February 2022',
      location: 'PT Media Baru Internasional (MoGawe.id) - Jakarta, Indonesia',
      title: 'Tech Manager',
      description: [
        {
          title: 'Delivery & Technical Ownership',
          items: [
            'Guided product development across <strong>Angular, Spring Boot, and Flutter</strong> applications',
            'Owned feature <strong>planning</strong> and <strong>technical execution</strong> across web and mobile teams.',
          ],
        },
        {
          title: 'Leadership & Collaboration',
          items: [
            '<strong>Provided</strong> technical direction and supported decision-making for engineering squads.',
            'Worked with stakeholders & leadership to <strong>align roadmap</strong> with business needs.',
          ],
        },
        {
          title: 'Quality & Operational Excellence',
          items: [
            '<strong>Introduced</strong> quality checks & improved testing practices to enhance release reliability.',
          ],
        },
      ],
    },
    {
      period: 'August 2020 - January 2021',
      location: 'PT Media Baru Internasional (MoGawe.id) - Jakarta, Indonesia',
      title: 'Web Developer',
      description: [
        {
          title: 'Delivery & Technical Ownership',
          items: [
            'Developed <strong>Angular-based web applications</strong> for internal operational tools and core product modules.',
            'Improved UI workflows to increase <strong>user productivity</strong> and <strong>streamline delivery operations</strong>.',
            'Implemented system optimization strategies that improved overall performance and reliability by <strong>50%</strong>.',
          ],
        },
        {
          title: 'Leadership & Collaboration',
          items: [
            '<strong>Coordinated</strong> closely with backend and product teams to accelerate feature shipping.',
          ],
        },
      ],
    },
    {
      period: 'July 2018 - August 2020',
      location: 'CV INTI MULTI SOLUSI - Jakarta, Indonesia',
      title: 'Fullstack Engineer',
      description: [
        {
          title: 'Delivery & Technical Ownership',
          items: [
            'Developed secure government web platforms using <strong>Laravel, Node.js, Android Native, PHP</strong>.',
            '<strong>Implemented</strong> backend features and database design aligned with compliance requirements.',
          ],
        },
        {
          title: 'Leadership & Collaboration',
          items: [
            'Coordinated with government stakeholders to ensure <strong>accurate</strong> requirement delivery.',
            '<strong>Collaborated</strong> with UI/UX teams for usability improvements in public-facing systems.',
          ],
        },
        {
          title: 'Quality & Operational Excellence',
          items: [
            'Improved platform <strong>scalability</strong> and <strong>maintainability</strong> through standardized development practices.',
          ],
        },
      ],
    },
  ],
  award: [
    {
      title: '2022 | How To Start Professional Career',
      description:
        'Delivered keynote presentation "How To Start Professional Career as Web Developer" at Klasspro.id professional development event.',
    },
    {
      title: '2022 | Student-centered learning systems',
      description:
        'CTO & Co-Founder of Elingway, leading the development of student-centered learning systems.',
    },
    {
      title: '2021 | Menghadapi Era Society 5.0',
      description:
        'Featured speaker on "Navigating Society 5.0 with Digital Skills" at Secangkir Ilmu educational initiative.',
    },
    {
      title: '2021 | Secangkir Ilmu',
      description: 'Founder of the Educational Organization Secangkir Ilmu.',
    },
    {
      title: '2021 | Tutors AR/VR',
      description:
        'Instructor for AR/VR Development using Unity at Secangkir Ilmu educational platform.',
    },
    {
      title: '2021 | Tutors Web Developer',
      description:
        'Web Development Instructor at Secangkir Ilmu educational initiative.',
    },
    {
      title: '2018 | BNSP Software Engineer',
      description: 'Officially certified as a Software Engineer.',
    },
    {
      title: '2017 | Robotic Hackathon',
      description: 'Competed in a hardware and robotics hackathon.',
    },
  ],
  latestWork: [
    {
      title: 'Sognatore UI',
      description: `A modern Angular component library built with standalone components,
      designed for productivity, consistent design, and seamless integration.
      Create beautiful, accessible, and performant user interfaces with ease.`,
      link: 'https://sognatore.my.id',
      picture: 'assets/images/sognatore-ui.png',
    },
    {
      title: 'Paper.id',
      description: `Paper.id is a billing and payment platform between businesses
      that can be used by SMEs up to large corporations. With
      Paper.id, transactions between buyers and suppliers become
      easier. Suppliers can receive payments faster through various
      available payment methods and automatically reconcile them all
      in one platform. Meanwhile, buyers are free to choose from
      various payment methods.`,
      link: 'https://www.paper.id',
      picture: 'assets/images/paper.png',
    },
    {
      title: 'Investortrust.id',
      description: `Investortrust.id is an independent data and economic news portal
          that focuses on business, finance, direct investment, and
          portfolio investment, especially in the capital market.`,
      link: 'https://www.investortrust.id/',
      picture: 'assets/images/investortrust.png',
    },
    {
      title: 'CMS Investortrust.id',
      description: `Content Management System for manage content in Investortrust.id
        is an independent data and economic news portal that focuses on
        business, finance, direct investment, and portfolio investment,
        especially in the capital market.`,
      link: 'https://www.cms.investortrust.id/',
      picture: 'assets/images/cms-investortrust.png',
    },
    {
      title: 'CROX',
      description: `CROX is a website for conducting tests or evaluations on the
          services and usability of digital products online. Joining as a
          CROX Tester will provide you with numerous benefits. So,
          register yourself now and enjoy the advantages.`,
      link: 'https://crox.id',
      picture: 'assets/images/crox.png',
    },
    {
      title: 'MoGawe.id',
      description: `MoGawe.id is an Indonesian crowdsourcing platform offering
      micro-jobs through a mobile app. It allows users—called MoGawers—to earn
      daily income by completing simple offline tasks such as product photo-taking,
      stock checking, and surveys. Operated by PT Media Baru Internasional,
      MoGawe is accessible across 180+ cities in Indonesia and is targeted
      toward individuals seeking flexible work, such as students, homemakers, or freelancers.`,
      link: 'https://mogawe.id/',
      picture: 'assets/images/mogawe.png',
    },
    {
      title: 'MoGawe Business',
      description: `MoGawe Bisnis is a web-based application designed for
        businesspeople to simplify and manage various types of work in
        their business. The application is connected to an Android
        mobile application that offers the opportunity to earn income of
        at least IDR 200,000 per day by completing simple tasks.`,
      link: 'https://bisnis.mogawe.id/',
      picture: 'assets/images/mogawe-bisnis.png',
    },
    {
      title: 'Adeya Mobile Apps',
      description: `Adeya in Greek is Licensing, Adeya SFR SOR stands for Radio
        Frequency Spectrum Service Data Assistant and Radio Operator
        Certification. This Mobile Application is devoted to Radio
        Station Licensing Service (ISR) and REOR Certification. With
        Adeya, it is hoped that SDPPI and ISR holders will get closer to
        licensing services for the use of radio frequency spectrum, data
        services and REOR certification services. It also supports the
        ease and speed of access to information. This application is
        also an alternative choice for service media platforms other
        than service counters, contact center 159, web elicensing and
        SiDia`,
      link: 'https://play.google.com/store/apps/details?id=com.kominfo.sfrsorapp&hl=en_US',
      picture: 'assets/images/adeya.png',
    },
    {
      title: 'Data Validation Of Frequency Radio (ISR QR CODE)',
      description: `A project of the Indonesian Ministry of Communication and
        Information Technology in making radio station registration
        applications and permits as well as validating radio station
        licenses, using Laravel.`,
      link: 'https://isrcode.postel.go.id/public/login',
      picture: 'assets/images/isrcode.png',
    },
    {
      title: 'Website Certification (REOR)',
      description: `The project of the Ministry of Communication and Information
        Technology of the Republic of Indonesia in making certification
        and training print, using PHP YII.`,
      link: 'https://reor.postel.go.id/',
      picture: 'assets/images/reor.png',
    },
    {
      title: 'COMPUTER ASSISTED TEST (CAT)',
      description: `A project of the Indonesian Ministry of Communication and
        Information Technology in making Computer Assisted Test, using
        Laravel.`,
      link: 'https://cat.postel.go.id/',
      picture: 'assets/images/cat.png',
    },
    {
      title: 'QUEUE SYSTEM',
      description: `Investment Coordinating Board project in creating an online
          consultation queue system, using Laravel.`,
      link: 'https://antrian.bkpm.go.id/registrasi/',
      picture: 'assets/images/bkpm.png',
    },
  ],
};
