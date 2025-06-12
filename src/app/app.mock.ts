import { ProfileCollection } from './app.collection';

export const DataCollection: ProfileCollection = {
  fullName: 'Adrian Milano',
  shortName: 'Adrian',
  title:
    'I’m Adrian Milano <br /> Senior Software Engineer <br /> based in Jakarta.',
  social: {
    github: 'https://github.com/arm02',
    gitlab: 'https://gitlab.com/arm02',
    linkedin: 'https://www.linkedin.com/in/adrian-m-ab602a13b',
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
    '<p>IT professional with 7 years of experience in both frontend and backend development, combining creativity with strong technical expertise. Highly adaptable and collaborative, with a deep passion for continuous learning in the ever-evolving technology landscape.</p>',
  resumeLink:
    'https://github.com/arm02/resume/blob/main/CV%20Adrian%20Milano.pdf',
  coreSkills: [
    'Angular',
    'Next JS',
    'React JS',
    'Vue JS',
    'Karma/Jasmine',
    'Jest',
    'New Relic',
    'Kong',
    'Sentry',
    'Express JS',
    'Golang',
    'Java Spring Boot',
    'Laravel',
    'PHP',
    'CSS/SCSS/SASS',
    'RabbitMQ',
    'Redis',
  ],
  workflows: [
    'Clean Architecture Code',
    'Test Driven Development',
    'Trunk Development',
    'System Monitoring Application',
    'Micro Frontend Architecture',
    'Micro Service Architecture',
    'CI/CD, Jenskin',
    'Code with SonarQube',
    'Agile & Scrum Method',
    'Cross Browser Testing & Debugging',
    'Cross Functional Teams',
    'Systems Development Life Cycle',
  ],
  education: [
    {
      period: '2018 - 2023',
      location: 'State University Of Jakarta',
      title: 'Bachelor Of Education',
      value: '3.69',
    },
  ],
  experience: [
    {
      period: 'June 2023 - Present',
      location: 'Paper.id (PT Pakar Digital Global)',
      title: 'Senior Software Enginner',
      description: [
        'Refactored and optimized the Financial Service Feature codebase using Clean Architecture and Clean Code principles to improve readability, performance, and maintainability.',
        'Integrated New Relic Monitoring and created a custom error dashboard for tracking system issues and user activity efficiently.',
        'Researched Micro Frontend technologies (Single-SPA, FrintJS, Angular Elements) and contributed to frontend modularization discussions.',
        'Led UI redesign efforts using SCSS and implemented Lazy Load for better modularization and faster load times.',
        'Contributed to improving Web Vitals on paper.id, and played a key role in the Angular upgrade (v10 to v16) including cleanup of legacy code and removal of unnecessary console.log statements.',
        'Implemented linter and code review pipelines in paperangularapp, ensuring code quality and blocking non-compliant pull requests.',
        'Developed unit tests for new components by 90% and provided examples to encourage test-driven development across the team.',
        'Delivered internal sessions on 3C (Commitlint, Conventional Commit, Commitizen) and served as a speaker on Clean Code & Clean Architecture best practices.',
      ],
    },
    {
      period: 'February 2022 - June 2023',
      location: 'SALT.ID (PT Ako Media Asia)',
      title: 'Senior Frontend Developer',
      description: [
        'Migrated unit testing framework from Karma/Jasmine to Jest, achieving up to 97% test coverage across key modules.',
        'Set up SonarQube pipelines for code quality analysis, enforcing minimum coverage thresholds and standard-compliant linting rules through blocking mechanisms.',
        'Actively collaborated with Project Managers to guide project direction and support team planning and coordination.',
        'Conducted regular code reviews, providing constructive feedback and ensuring adherence to coding standards.',
        'Engaged in cross-team discussions with fellow senior engineers to define and enforce best practices in linting, test coverage limits, and the adoption of new technologies such as KeystoneJS.',
      ],
    },
    {
      period: 'August 2020 - February 2022',
      location: 'MoGawe.id (PT Media Baru Internasional)',
      title: 'Tech Manager',
      description: [
        'Lead a cross-functional team of frontend developers (Angular), backend developers (Java Spring Boot), and mobile developers (Flutter).',
        'Conduct research and implement the latest technological advancements to drive innovation.',
        'Oversee server infrastructure and cloud management using Google Cloud Console.',
        'Coordinate directly with the CEO to ensure alignment between technology initiatives and overall company goals.',
        'Developed robust system designs for clients in the healthcare, finance, and education industries.',
        'Implemented best practices in system design and integration, improving system performance and reliability by 50%.',
      ],
    },
    {
      period: 'July 2018 - August 2020',
      location: 'PT INTI MULTI SOLUSI',
      title: 'Fullstack Engineer',
      description: [
        'Successfully worked with key government agencies, including: Ministry of Communication and Informatics, Ministry of Investment, Ministry of Social Affairs',
        'Developed various web and mobile applications using Laravel, CodeIgniter, Android Native, and Node.js.',
        'Delivered IT solutions for a range of clients, with a primary focus on government institutions.',
        'Assisted in the design and implementation of systems for small to mid-sized business clients.',
        'Collaborated with junior and senior designers to develop system specifications and documentation.',
      ],
    },
  ],
  award: [
    {
      title: '2022 | How To Start Professional Career',
      description:
        'As a speaker `How To Start Professional Career as Web Developer` At Klasspro.id.',
    },
    {
      title: '2022 | Student-centered learning systems',
      description:
        'CTO & Co-Founder of Elingway, leading the development of student-centered learning systems.',
    },
    {
      title: '2021 | Menghadapi Era Society 5.0',
      description:
        'As a speaker `Menghadapi Era Society 5.0 dengan Skill Digital` At Secangkir Ilmu.',
    },
    {
      title: '2021 | Secangkir Ilmu',
      description: 'Founder of the Educational Organization Secangkir Ilmu.',
    },
    {
      title: '2021 | Tutors AR/VR',
      description: 'Tutors AR/VR Using Unity At Secangkir Ilmu.',
    },
    {
      title: '2021 | Tutors Web Developer',
      description: 'Tutors Web Developer At Secangkir Ilmu.',
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
