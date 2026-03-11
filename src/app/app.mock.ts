import { ProfileCollection } from './app.collection';

export const DataCollection: ProfileCollection = {
  fullName: 'Professional Profile',
  shortName: 'Professional Profile',
  title:
    'Adrian Milano <br /> Senior Fullstack Engineer <br /> Jakarta, Indonesia',
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
    experience: 8,
    projects: 30,
    client: 20,
  },
  aboutMe:
    '<p>Senior Full-Stack Software Engineer with <strong>8+ years</strong> of experience designing and building distributed systems across fintech, SaaS, enterprise, crowdsourcing, and public-service platforms. Strong expertise in <strong>Go, Node.js/Express, TypeScript, JavaScript, and modern Angular.</strong> Proven record improving performance (<strong>−50% page load, −40% bundle size</strong>), system reliability, and developer velocity through <strong>microservices</strong>, automated testing, and CI/CD. Experienced in <strong>architectural design</strong>, API development, and end-to-end delivery of scalable web applications.</p>',
  resumeLink:
    'https://github.com/arm02/resume/blob/main/CV%20Adrian%20Milano.pdf',
  coreSkills: [
    'Full-Stack Development (Go, Node.js/Express, TypeScript, Spring Boot)',
    'Microservices Architecture',
    'Domain-Driven Design (DDD)',
    'API Design',
    'Performance Optimization',
    'Clean Architecture',
  ],
  frontendSkills: [
    'Angular',
    'React',
    'Vue',
    'Next.js',
    'Module Federation',
    'State Management (NgRx/Redux/Pinia)',
    'Web Vitals',
    'TailwindCSS',
  ],
  backendSkills: [
    'RESTful & Event-Driven Services',
    'Spring Boot',
    'Redis',
    'RabbitMQ',
    'Docker',
    'API Gateway (Kong)',
    'S3 / Presigned Uploads',
    'Cloud (GCP / AWS)',
    'JVM Tuning & Garbage Collection',
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
  ],
  experience: [
    {
      period: 'December 2025 - Present',
      location: 'Sobat Bisnis Group - Jakarta, Indonesia',
      title: 'Senior Full Stack Engineer',
      description: [
        {
          title: 'Delivery & Technical Ownership',
          items: [
            'Owned end-to-end architecture and delivery of <strong>DDD-based healthcare microservices (Spring Boot, monorepo)</strong>, including RBAC, secure service-to-service communication, and scalable domain boundaries',
            'Implemented <strong>S3 Presigned PUT uploads</strong>, offline-first capabilities, and multiple external system integrations',
            'Designed and scaled frontend architecture using <strong>Angular, NgRx, Clean Architecture</strong>, and reusable shared core modules',
            'Set up <strong>Docker-based deployments</strong> and managed JVM tuning & Garbage Collection strategies to ensure application stability and performance in production',
            'Authored and implemented a team-wide <strong>Engineering Workflow</strong> covering trunk-based development, pre-development standards, and merge request policies',
          ],
        },
        {
          title: 'Leadership & Collaboration',
          items: [
            'Led and mentored a <strong>team of 6 engineers</strong>, defining technical direction, coding standards, and delivery best practices',
            'Collaborated closely with clients and stakeholders to translate business requirements into scalable, maintainable technical solutions',
            'Conducted technical interviews and actively contributed to hiring decisions and team growth',
            'Delivered internal tech talk as speaker and implementor on <strong>Clean Code & Architecture for Scalable Systems</strong>',
            'Prepared and aligned team OKR data as part of a Lead Engineer trial, bridging engineering execution with business goals',
          ],
        },
        {
          title: 'Quality & Operational Excellence',
          items: [
            'Improved security and performance by migrating authorization checks from JWT-based validation to <strong>Redis-backed permission caching</strong>',
            'Established engineering standards and best practices to ensure long-term reliability, scalability, and maintainability of the platform',
          ],
        },
      ],
    },
    {
      period: 'June 2023 - November 2025',
      location: 'PT Pakar Digital Global (Paper.id) - Jakarta, Indonesia',
      title: 'Senior Software Engineer (Prev. Senior Frontend Engineer)',
      description: [
        {
          title: 'Delivery & Technical Ownership',
          items: [
            '<strong>Implemented and modernized core fintech modules</strong> using Clean Architecture to improve scalability and maintainability',
            '<strong>Migrated Angular v10→v16</strong>, boosting page load speed <strong>30–50%</strong> and reducing bundle size <strong>40%</strong>.',
            'Developed <strong>full-stack financial workflows</strong> (Go + Angular) including automated withdrawals, secure BIN key storage, and invoice automation.',
            'Developed <strong>financial services (Paper Card)</strong> and <strong>enterprise-grade solutions for clients including JAPFA, Plataran, Kopi Kenangan, Qoala, JnT Cargo, and CSA product features</strong>, and built internal tooling that improved operational efficiency and accounting workflow accuracy.',
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
      period: 'August 2020 - February 2022',
      location: 'PT Media Baru Internasional (MoGawe.id) - Jakarta, Indonesia',
      title: 'Tech Manager / Web Developer',
      description: [
        {
          title: 'Delivery & Technical Ownership',
          items: [
            'Guided product development across <strong>Angular, Spring Boot, and Flutter</strong> applications',
            'Owned feature <strong>planning</strong> and <strong>technical execution</strong> across web and mobile teams.',
            'Developed <strong>Angular-based web applications</strong> for internal operational tools and core product modules.',
            'Implemented system optimization strategies that improved overall performance and reliability by <strong>50%</strong>.',
          ],
        },
        {
          title: 'Leadership & Collaboration',
          items: [
            '<strong>Provided</strong> technical direction and managed engineering squads (15+ engineers).',
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
      title: 'BNSP Certification — Software Development',
      description: 'Officially certified as a Software Engineer.',
    },
    {
      title: 'Public speaker on Tech Careers, Digital Skills, and Society 5.0',
      description:
        'Featured speaker and keynote presenter at various professional development events (Klasspro.id, Secangkir Ilmu).',
    },
    {
      title: 'Founder & Mentor — Secangkir Ilmu',
      description:
        'Founder of the Educational Organization Secangkir Ilmu, a tech learning initiative.',
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
      title: 'Healthcare ERP Admin System (Akasia)',
      description: `Developed an internal admin platform for a healthcare ERP system used to manage operational workflows such as patient data management, appointment scheduling, and administrative processes. The system focuses on improving operational efficiency, centralized data management, and providing tools for healthcare staff to manage daily activities through a secure web-based interface.`,
      link: '#',
      picture: 'assets/images/akasia.png',
    },
    {
      title: 'Biomedilab Healthcare Admin System',
      description: `Developed an internal admin platform for managing healthcare laboratory operations, including medical check-up management, patient data, and operational workflows. The system supports administrative processes for healthcare services such as clinical laboratory testing, employee medical check-ups, and health consultation services.`,
      link: '#',
      picture: 'assets/images/biomedilab.png',
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
