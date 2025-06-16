import { ProfileCollection } from './app.collection';

export const DataCollection: ProfileCollection = {
  fullName: 'Adrian Milano',
  shortName: 'Adrian',
  title:
    'Adrian Milano <br /> Senior Software Engineer <br /> Jakarta, Indonesia',
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
    '<p>Experienced software engineer with 7+ years in full-stack development, specializing in modern web technologies and scalable system architecture. Passionate about clean code principles, continuous learning, and delivering high-quality solutions.</p>',
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
  ],
  experience: [
    {
      period: 'June 2023 - Present',
      location: 'Paper.id (PT Pakar Digital Global)',
      title: 'Senior Software Engineer',
      description: [
        'Architected and refactored financial service features using Clean Architecture principles, improving code maintainability and system performance.',
        'Implemented comprehensive monitoring solutions with New Relic, creating custom dashboards for proactive issue tracking and user behavior analysis.',
        'Led research initiatives on Micro Frontend technologies (Single-SPA, FrintJS, Angular Elements) to drive frontend modularization strategy.',
        'Spearheaded UI/UX redesign initiatives using SCSS and implemented lazy loading strategies, resulting in significantly improved load times.',
        'Orchestrated Angular framework migration from v10 to v16, including legacy code cleanup and Web Vitals optimization for enhanced user experience.',
        'Established robust CI/CD pipelines with automated linting and code review processes, enforcing quality standards through pull request validation.',
        'Achieved 90% unit test coverage for new components while mentoring team members on test-driven development practices.',
        'Conducted technical workshops on modern development practices (Commitlint, Conventional Commits, Commitizen) and Clean Architecture principles.',
      ],
    },
    {
      period: 'February 2022 - June 2023',
      location: 'SALT.ID (PT Ako Media Asia)',
      title: 'Senior Frontend Developer',
      description: [
        'Successfully migrated testing infrastructure from Karma/Jasmine to Jest, achieving 97% test coverage across critical application modules.',
        'Implemented automated code quality assurance using SonarQube pipelines with enforced coverage thresholds and compliance validation.',
        'Collaborated closely with project stakeholders to provide technical guidance and strategic direction for product development initiatives.',
        'Maintained high code quality standards through systematic peer reviews and mentorship of development best practices.',
        'Contributed to technical decision-making processes, establishing coding standards and evaluating emerging technologies like KeystoneJS for adoption.',
      ],
    },
    {
      period: 'August 2020 - February 2022',
      location: 'MoGawe.id (PT Media Baru Internasional)',
      title: 'Tech Manager',
      description: [
        'Led cross-functional engineering teams including Angular frontend, Java Spring Boot backend, and Flutter mobile developers.',
        'Drove technology innovation through research and implementation of cutting-edge development practices and tools.',
        'Managed cloud infrastructure and server operations using Google Cloud Platform, ensuring scalable and reliable system architecture.',
        'Collaborated directly with executive leadership to align technical strategy with business objectives and growth initiatives.',
        'Designed and delivered enterprise-grade solutions for clients across healthcare, financial services, and education sectors.',
        'Implemented system optimization strategies that improved overall performance and reliability by 50%.',
      ],
    },
    {
      period: 'July 2018 - August 2020',
      location: 'PT INTI MULTI SOLUSI',
      title: 'Fullstack Engineer',
      description: [
        'Collaborated with major government agencies including Ministry of Communication and Informatics, Ministry of Investment, and Ministry of Social Affairs.',
        'Developed comprehensive web and mobile applications using Laravel, CodeIgniter, Android Native, and Node.js technologies.',
        'Delivered custom IT solutions primarily focused on government sector requirements and compliance standards.',
        'Contributed to system architecture and implementation for small to medium-sized enterprise clients.',
        'Worked collaboratively with design teams to create detailed system specifications and technical documentation.',
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
      description: 'Instructor for AR/VR Development using Unity at Secangkir Ilmu educational platform.',
    },
    {
      title: '2021 | Tutors Web Developer',
      description: 'Web Development Instructor at Secangkir Ilmu educational initiative.',
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
