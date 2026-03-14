import { ProfileCollection } from './app.collection';

export const DataCollectionEn: ProfileCollection = {
  fullName: 'Professional Profile',
  shortName: 'Professional Profile',
  title:
    'Adrian Milano <br /> <span class="arm-title-sub">Senior Full Stack Engineer <br /> Jakarta, Indonesia</span>',
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
    '<p>Senior Full-Stack Software Engineer with <strong>8+ years</strong> of experience designing and building distributed systems across fintech, SaaS, healthcare, enterprise, crowdsourcing, and public-service platforms. Strong expertise in <strong>Go, Node.js/Express, Spring Boot, TypeScript, JavaScript, and modern Angular.</strong> Proven record improving performance (<strong>−50% page load, −40% bundle size</strong>), system reliability, and developer velocity through <strong>microservices, Domain-Driven Design (DDD)</strong>, automated testing, and CI/CD. Experienced in <strong>end-to-end architectural design</strong>, API development, <strong>team leadership</strong>, and scalable delivery across complex domains.</p>',
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
    'State Management (NgRx/RxJS/Redux/Pinia)',
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
    'Storage S3 / Presigned Uploads',
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
      techStack: ['Angular', 'TypeScript'],
    },
    {
      title: 'Healthcare ERP Admin System (Akasia)',
      description: `Developed an internal admin platform for a healthcare ERP system used to manage operational workflows such as patient data management, appointment scheduling, and administrative processes. The system focuses on improving operational efficiency, centralized data management, and providing tools for healthcare staff to manage daily activities through a secure web-based interface.`,
      link: '#',
      picture: 'assets/images/akasia.png',
      techStack: ['Java Spring Boot', 'Angular', 'Docker', 'Redis', 'PostgreSQL', 'Microservices', 'Clean Architecture'],
    },
    {
      title: 'Biomedilab Healthcare Admin System',
      description: `Developed an internal admin platform for managing healthcare laboratory operations, including medical check-up management, patient data, and operational workflows. The system supports administrative processes for healthcare services such as clinical laboratory testing, employee medical check-ups, and health consultation services.`,
      link: '#',
      picture: 'assets/images/biomedilab.png',
      techStack: ['Java Spring Boot', 'Angular', 'Docker', 'Redis', 'PostgreSQL', 'Microservices', 'Clean Architecture'],
    },
    {
      title: 'Aestha Art Gallery Website',
      description: `Developed a responsive company profile website for an art gallery based in Bali. The platform showcases collections of modern paintings, custom artwork, and portrait commissions while providing information about the gallery, portfolio, and contact services for potential customers worldwide.`,
      link: 'https://aestha-art-gallery.vercel.app/',
      picture: 'assets/images/aestha.png',
      techStack: ['NextJS', 'Redis', 'Clean Architecture'],
    },
    {
      title: 'Little Cookies – Bakery E-Commerce Website',
      description: `Developed a modern website for a homemade bakery brand that showcases premium cookies, brownies, and gift hampers. The platform allows customers to explore product catalogs, view pricing, and place orders through integrated contact channels.`,
      link: 'https://www.littlecookies.store/',
      picture: 'assets/images/little-cookies.png',
      techStack: ['NextJS', 'Redis', 'Clean Architecture'],
    },
    {
      title: 'Team Sembilan Delapan – Agency Company Profile Website',
      description: `Developed a company profile website for a strategic communication and event management agency. The platform showcases the agency’s services such as event organizing, social media management, branding, and public relations while highlighting portfolios and client collaborations.`,
      link: 'https://www.teamsembilandelapan.com/',
      picture: 'assets/images/tsd.png',
      techStack: ['NextJS', 'Redis', 'Clean Architecture'],
    },
    {
      title: 'Personal Financial Management Web Application',
      description: `Developed a web-based financial management application that helps users track income, expenses, and financial summaries through a simple dashboard. The platform provides an overview of financial activities, enabling users to better manage their personal budgeting and spending.`,
      link: 'https://financial.adrianmilano.my.id/',
      picture: 'assets/images/financial.png',
      techStack: ['Golang', 'Angular', 'MySQL', 'Redis', 'Docker', 'ChartJS', 'Clean Architecture'],
    },
    {
      title: 'Elingway – Online Language Learning Platform Website',
      description: `Developed a website for an online language learning platform that provides services such as English learning programs and standardized language tests including TOEFL ITP, TOEFL iBT, TOEIC, and IELTS. The platform helps users access language learning resources and certification services through a centralized digital platform.`,
      link: 'https://www.elingway.id/',
      picture: 'assets/images/elingway.png',
      techStack: ['VueJS', 'Laravel', 'MySQL'],
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
      techStack: ['Angular', 'Golang', 'ArangoDB', 'MySQL'],
    },
    {
      title: 'Investortrust.id',
      description: `Investortrust.id is an independent data and economic news portal
          that focuses on business, finance, direct investment, and
          portfolio investment, especially in the capital market.`,
      link: 'https://www.investortrust.id/',
      picture: 'assets/images/investortrust.png',
      techStack: ['NextJS', 'Express JS', 'MySQL', 'Docker'],
    },
    {
      title: 'CMS Investortrust.id',
      description: `Content Management System for manage content in Investortrust.id
        is an independent data and economic news portal that focuses on
        business, finance, direct investment, and portfolio investment,
        especially in the capital market.`,
      link: 'https://www.cms.investortrust.id/',
      picture: 'assets/images/cms-investortrust-new.png',
      techStack: ['Angular', 'Express JS', 'MySQL', 'Docker'],
    },
    {
      title: 'CROX',
      description: `CROX is a website for conducting tests or evaluations on the
          services and usability of digital products online. Joining as a
          CROX Tester will provide you with numerous benefits. So,
          register yourself now and enjoy the advantages.`,
      link: 'https://crox.id',
      picture: 'assets/images/crox.png',
      techStack: ['Angular'],
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
      techStack: ['Angular', 'Spring Boot', 'MySQL'],
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
      techStack: ['Angular', 'Spring Boot', 'PostgreSQL'],
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
      techStack: ['Kotlin', 'Express JS', 'MySQL'],
    },
    {
      title: 'Data Validation Of Frequency Radio (ISR QR CODE)',
      description: `A project of the Indonesian Ministry of Communication and
        Information Technology in making radio station registration
        applications and permits as well as validating radio station
        licenses, using Laravel.`,
      link: 'https://isrcode.postel.go.id/public/login',
      picture: 'assets/images/isrcode.png',
      techStack: ['Laravel', 'MySQL'],
    },
    {
      title: 'Website Certification (REOR)',
      description: `The project of the Ministry of Communication and Information
        Technology of the Republic of Indonesia in making certification
        and training print, using PHP YII.`,
      link: 'https://reor.postel.go.id/',
      picture: 'assets/images/reor.png',
      techStack: ['Code Igniter', 'PHP', 'MySQL'],
    },
    {
      title: 'COMPUTER ASSISTED TEST (CAT)',
      description: `A project of the Indonesian Ministry of Communication and
        Information Technology in making Computer Assisted Test, using
        Laravel.`,
      link: 'https://cat.postel.go.id/',
      picture: 'assets/images/cat.png',
      techStack: ['Laravel', 'PHP', 'MySQL'],
    },
    {
      title: 'QUEUE SYSTEM',
      description: `Investment Coordinating Board project in creating an online
          consultation queue system, using Laravel.`,
      link: 'https://antrian.bkpm.go.id/registrasi/',
      picture: 'assets/images/bkpm.png',
      techStack: ['Laravel', 'MySQL'],
    },
  ],
};

export const DataCollectionId: ProfileCollection = {
  fullName: 'Profil Profesional',
  shortName: 'Profil Profesional',
  title:
    'Adrian Milano <br /> <span class="arm-title-sub">Senior Full Stack Engineer <br /> Jakarta, Indonesia</span>',
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
    '<p>Senior Full-Stack Software Engineer dengan pengalaman <strong>8+ tahun</strong> dalam merancang dan membangun sistem terdistribusi di sektor fintech, SaaS, kesehatan, enterprise, crowdsourcing, dan platform layanan publik. Memiliki keahlian mendalam di <strong>Go, Node.js/Express, Spring Boot, TypeScript, JavaScript, dan Angular modern.</strong> Terbukti berhasil meningkatkan performa (<strong>−50% kecepatan muat halaman, −40% ukuran bundle</strong>), keandalan sistem, dan kecepatan pengembangan melalui <strong>microservices, Domain-Driven Design (DDD)</strong>, pengujian otomatis, dan CI/CD. Berpengalaman dalam <strong>perancangan arsitektur end-to-end</strong>, pengembangan API, <strong>kepemimpinan tim</strong>, dan pengiriman solusi yang skalabel di domain yang kompleks.</p>',
  resumeLink:
    'https://github.com/arm02/resume/blob/main/CV%20Adrian%20Milano.pdf',
  coreSkills: [
    'Pengembangan Full-Stack (Go, Node.js/Express, TypeScript, Spring Boot)',
    'Arsitektur Microservices',
    'Domain-Driven Design (DDD)',
    'Desain API',
    'Optimasi Performa',
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
    'Tuning JVM & Garbage Collection',
  ],
  qualitySkills: [
    'Jest',
    'SonarQube',
    'Pipa Pengujian Otomatis',
    'Trunk-Based Development',
    'CI/CD (GitHub Actions, GitLab, Jenkins)',
  ],
  monitoringSkills: [
    'New Relic',
    'Sentry',
    'Real User Monitoring (RUM)',
    'Dashboard Performa',
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
    'Pemantauan Aplikasi',
    'Arsitektur Micro Frontend',
    'Arsitektur Microservice',
    'CI/CD & Jenkins',
    'Kualitas Kode dengan SonarQube',
    'Metodologi Agile & Scrum',
    'Pengujian & Debugging Antar-Browser',
    'Kolaborasi Tim Lintas Fungsional',
    'Siklus Hidup Pengembangan Perangkat Lunak',
  ],
  education: [
    {
      period: '2018 - 2023',
      location: 'Universitas Negeri Jakarta',
      title: 'Sarjana Pendidikan',
      value: '3.69',
    },
  ],
  experience: [
    {
      period: 'Desember 2025 - Sekarang',
      location: 'Sobat Bisnis Group - Jakarta, Indonesia',
      title: 'Senior Full Stack Engineer',
      description: [
        {
          title: 'Pengiriman & Kepemimpinan Teknis',
          items: [
            'Memegang tanggung jawab penuh atas arsitektur dan pengiriman <strong>microservices kesehatan berbasis DDD (Spring Boot, monorepo)</strong>, termasuk RBAC, komunikasi antar-layanan yang aman, dan batasan domain yang skalabel',
            'Mengimplementasikan <strong>S3 Presigned PUT uploads</strong>, kemampuan offline-first, dan integrasi dengan berbagai sistem eksternal',
            'Merancang dan menskalakan arsitektur frontend menggunakan <strong>Angular, NgRx, Clean Architecture</strong>, dan modul inti bersama yang dapat digunakan kembali',
            'Menyiapkan <strong>deployment berbasis Docker</strong> dan mengelola strategi tuning JVM & Garbage Collection untuk memastikan stabilitas dan performa aplikasi di lingkungan produksi',
            'Menyusun dan mengimplementasikan <strong>Alur Kerja Rekayasa (Engineering Workflow)</strong> di tingkat tim yang mencakup trunk-based development, standar pra-pengembangan, dan kebijakan merge request',
          ],
        },
        {
          title: 'Kepemimpinan & Kolaborasi',
          items: [
            'Memimpin dan membimbing <strong>tim berjumlah 6 engineer</strong>, menetapkan arah teknis, standar penulisan kode, dan praktik terbaik pengiriman solusi',
            'Berkolaborasi erat dengan klien dan pemangku kepentingan untuk menerjemahkan kebutuhan bisnis menjadi solusi teknis yang skalabel dan mudah dipelihara',
            'Melakukan wawancara teknis dan berkontribusi aktif dalam keputusan perekrutan serta pertumbuhan tim',
            'Memberikan sesi berbagi ilmu internal (tech talk) sebagai pembicara dan pelaksana topik <strong>Clean Code & Arsitektur untuk Sistem Berbasis Skala</strong>',
            'Menyiapkan dan menyelaraskan data OKR tim sebagai bagian dari uji coba Lead Engineer, menghubungkan eksekusi rekayasa dengan tujuan bisnis',
          ],
        },
        {
          title: 'Kualitas & Keunggulan Operasional',
          items: [
            'Meningkatkan keamanan dan performa dengan memigrasikan pemeriksaan otorisasi dari validasi berbasis JWT ke <strong>cache izin berbasis Redis</strong>',
            'Menetapkan standar rekayasa dan praktik terbaik untuk memastikan keandalan, skalabilitas, dan kemudahan pemeliharaan jangka panjang pada platform',
          ],
        },
      ],
    },
    {
      period: 'Juni 2023 - November 2025',
      location: 'PT Pakar Digital Global (Paper.id) - Jakarta, Indonesia',
      title: 'Senior Software Engineer (Sebelumnya Senior Frontend Engineer)',
      description: [
        {
          title: 'Pengiriman & Kepemimpinan Teknis',
          items: [
            '<strong>Mengimplementasikan dan memodernisasi modul inti fintech</strong> menggunakan Clean Architecture untuk meningkatkan skalabilitas dan kemudahan pemeliharaan',
            '<strong>Memigrasikan Angular v10→v16</strong>, meningkatkan kecepatan muat halaman sebesar <strong>30–50%</strong> dan mengurangi ukuran bundle sebesar <strong>40%</strong>.',
            'Mengembangkan <strong>alur kerja finansial full-stack</strong> (Go + Angular) termasuk penarikan dana otomatis, penyimpanan kunci BIN yang aman, dan otomatisasi faktur.',
            'Mengembangkan <strong>layanan keuangan (Paper Card)</strong> dan <strong>solusi kelas enterprise untuk klien termasuk JAPFA, Plataran, Kopi Kenangan, Qoala, JnT Cargo, serta fitur produk CSA</strong>, dan membangun alat internal yang meningkatkan efisiensi operasional dan akurasi alur kerja akuntansi.',
            'Mengoptimalkan performa frontend dengan <strong>lazy loading</strong> dan <strong>praktik desain modular</strong>.',
          ],
        },
        {
          title: 'Kepemimpinan & Kolaborasi',
          items: [
            'Membimbing <strong>3–4 engineer</strong> dalam praktik frontend, strategi pengujian, dan desain modular',
            'Meningkatkan keselarasan FE–BE dengan mendorong pedoman <strong>kontrak API</strong> bersama antara tim backend & produk',
          ],
        },
        {
          title: 'Kualitas & Keunggulan Operasional',
          items: [
            'Meningkatkan cakupan pengujian hingga <strong>90%+</strong> dan membangun <strong>pipa CI/CD</strong> (linting, validasi pull request, pengecekan kualitas otomatis), memungkinkan rilis produksi mingguan.',
            'Mengimplementasikan <strong>pemantauan New Relic</strong> untuk diagnosis masalah yang lebih cepat dan pelacakan keandalan',
            '<strong>Merancang strategi Micro Frontend</strong> untuk mendukung pengembangan produk yang skalabel dan independen',
          ],
        },
      ],
    },
    {
      period: 'Februari 2022 - Juni 2023',
      location: 'PT Ako Media Asia (SALT.ID) - Jakarta, Indonesia',
      title: 'Senior Frontend Developer',
      description: [
        {
          title: 'Pengiriman & Kepemimpinan Teknis',
          items: [
            '<strong>Mengembangkan platform pelanggan dan mitra berbasis Angular</strong> yang melayani klien enterprise seperti <strong>Telkomsel (CROX & TSurvey)</strong>.',
            'Merancang arsitektur <strong>struktur komponen modular</strong> dan <strong>alur caching</strong> yang meningkatkan <strong>performa & ketersediaan</strong>.',
            'Memigrasikan infrastruktur pengujian dari Karma/Jasmine ke Jest, mencapai cakupan pengujian <strong>98%+</strong>.',
          ],
        },
        {
          title: 'Kepemimpinan & Kolaborasi',
          items: [
            'Memimpin <strong>~10 engineer</strong> dalam skuad pengembangan lintas fungsional, mengoordinasikan antara FE, BE, QA, dan Produk.',
            'Mendukung pengiriman peta jalan produk (roadmap) dengan <strong>meninjau keputusan desain teknis</strong> yang selaras dengan tujuan bisnis.',
          ],
        },
        {
          title: 'Kualitas & Keunggulan Operasional',
          items: [
            'Meningkatkan <strong>efektivitas alur kerja pengembangan</strong> melalui optimasi build dan alat pengembangan.',
            'Meningkatkan keandalan rilis dengan <strong>memperkuat</strong> praktik pengujian dan <string>pencegahan kesalahan</string>.',
            '<strong>Mengurangi SonarQube</strong> code smells, bug, dan celah keamanan sebesar <strong>40–50%</strong> melalui kolaborasi tim yang erat dan upaya refactoring terarah, menghasilkan kualitas kode dan keandalan sistem yang lebih tinggi.',
          ],
        },
      ],
    },
    {
      period: 'Agustus 2020 - Februari 2022',
      location: 'PT Media Baru Internasional (MoGawe.id) - Jakarta, Indonesia',
      title: 'Tech Manager / Web Developer',
      description: [
        {
          title: 'Pengiriman & Kepemimpinan Teknis',
          items: [
            'Mengarahkan pengembangan produk pada aplikasi <strong>Angular, Spring Boot, dan Flutter</strong>',
            'Bertanggung jawab atas <strong>perencanaan</strong> fitur dan <strong>eksekusi teknis</strong> di seluruh tim web dan mobile.',
            'Mengembangkan <strong>aplikasi web berbasis Angular</strong> untuk alat operasional internal dan modul produk inti.',
            'Mengimplementasikan strategi optimasi sistem yang meningkatkan performa keseluruhan dan keandalan sebesar <strong>50%</strong>.',
          ],
        },
        {
          title: 'Kepemimpinan & Kolaborasi',
          items: [
            '<strong>Memberikan</strong> arah teknis dan mengelola skuad rekayasa (15+ engineer).',
            'Bekerja sama dengan pemangku kepentingan & pimpinan untuk <strong>menyelaraskan roadmap</strong> dengan kebutuhan bisnis.',
          ],
        },
        {
          title: 'Kualitas & Keunggulan Operasional',
          items: [
            '<strong>Memperkenalkan</strong> pemeriksaan kualitas & meningkatkan praktik pengujian untuk meningkatkan keandalan rilis.',
          ],
        },
      ],
    },
    {
      period: 'Juli 2018 - Agustus 2020',
      location: 'CV INTI MULTI SOLUSI - Jakarta, Indonesia',
      title: 'Fullstack Engineer',
      description: [
        {
          title: 'Pengiriman & Kepemimpinan Teknis',
          items: [
            'Mengembangkan platform web pemerintah yang aman menggunakan <strong>Laravel, Node.js, Android Native, PHP</strong>.',
            '<strong>Mengimplementasikan</strong> fitur backend dan desain database yang selaras dengan persyaratan kepatuhan.',
          ],
        },
        {
          title: 'Kepemimpinan & Kolaborasi',
          items: [
            'Berkoordinasi dengan pemangku kepentingan pemerintah untuk memastikan pengiriman kebutuhan yang <strong>akurat</strong>.',
            '<strong>Berkolaborasi</strong> dengan tim UI/UX untuk peningkatan kegunaan (usability) pada sistem layanan publik.',
          ],
        },
        {
          title: 'Kualitas & Keunggulan Operasional',
          items: [
            'Meningkatkan <strong>skalabilitas</strong> dan <strong>kemudahan pemeliharaan</strong> platform melalui praktik pengembangan yang terstandarisasi.',
          ],
        },
      ],
    },
  ],
  award: [
    {
      title: 'Sertifikasi BNSP — Pengembangan Perangkat Lunak',
      description: 'Secara resmi bersertifikat sebagai Software Engineer.',
    },
    {
      title: 'Pembicara Publik tentang Karir Teknologi, Keterampilan Digital, dan Society 5.0',
      description:
        'Pembicara tamu dan presenter utama di berbagai acara pengembangan profesional (Klasspro.id, Secangkir Ilmu).',
    },
    {
      title: 'Pendiri & Mentor — Secangkir Ilmu',
      description:
        'Pendiri Organisasi Pendidikan Secangkir Ilmu, sebuah inisiatif pembelajaran teknologi.',
    },
  ],
  latestWork: [
    {
      title: 'Sognatore UI',
      description: `Pustaka komponen Angular modern yang dibangun dengan standalone components, dirancang untuk produktivitas, desain yang konsisten, dan integrasi yang mulus. Ciptakan antarmuka pengguna yang indah, aksesibel, dan berperforma tinggi dengan mudah.`,
      link: 'https://sognatore.my.id',
      picture: 'assets/images/sognatore-ui.png',
      techStack: ['Angular', 'TypeScript'],
    },
    {
      title: 'Healthcare ERP Admin System (Akasia)',
      description: `Mengembangkan platform admin internal untuk sistem ERP kesehatan yang digunakan untuk mengelola alur kerja operasional seperti manajemen data pasien, penjadwalan janji temu, dan proses administratif. Sistem ini berfokus pada peningkatan efisiensi operasional, manajemen data terpusat, dan menyediakan alat bagi staf kesehatan untuk mengelola aktivitas harian melalui antarmuka berbasis web yang aman.`,
      link: '#',
      picture: 'assets/images/akasia.png',
      techStack: ['Java Spring Boot', 'Angular', 'Docker', 'Redis', 'PostgreSQL', 'Microservices', 'Clean Architecture'],
    },
    {
      title: 'Biomedilab Healthcare Admin System',
      description: `Mengembangkan platform admin internal untuk mengelola operasional laboratorium kesehatan, termasuk manajemen medical check-up, data pasien, dan alur kerja operasional. Sistem ini mendukung proses administratif untuk layanan kesehatan seperti pengujian laboratorium klinis, pemeriksaan kesehatan karyawan, dan layanan konsultasi kesehatan.`,
      link: '#',
      picture: 'assets/images/biomedilab.png',
      techStack: ['Java Spring Boot', 'Angular', 'Docker', 'Redis', 'PostgreSQL', 'Microservices', 'Clean Architecture'],
    },
    {
      title: 'Aestha Art Gallery Website',
      description: `Mengembangkan situs profil perusahaan yang responsif untuk galeri seni yang berbasis di Bali. Platform ini menampilkan koleksi lukisan modern, karya seni kustom, dan pesanan potret sembari memberikan informasi tentang galeri, portofolio, dan layanan kontak untuk calon pelanggan di seluruh dunia.`,
      link: 'https://aestha-art-gallery.vercel.app/',
      picture: 'assets/images/aestha.png',
      techStack: ['NextJS', 'Redis', 'Clean Architecture'],
    },
    {
      title: 'Little Cookies – Bakery E-Commerce Website',
      description: `Mengembangkan situs web modern untuk merek toko roti rumahan yang menampilkan kue kering premium, brownies, dan hamper hadiah. Platform ini memungkinkan pelanggan untuk menjelajahi katalog produk, melihat harga, dan melakukan pemesanan melalui saluran kontak yang terintegrasi.`,
      link: 'https://www.littlecookies.store/',
      picture: 'assets/images/little-cookies.png',
      techStack: ['NextJS', 'Redis', 'Clean Architecture'],
    },
    {
      title: 'Team Sembilan Delapan – Agency Company Profile Website',
      description: `Mengembangkan situs profil perusahaan untuk agensi komunikasi strategis dan manajemen acara. Platform ini menampilkan layanan agensi seperti penyelenggaraan acara, manajemen media sosial, branding, dan hubungan masyarakat sembari menyoroti portofolio dan kolaborasi klien.`,
      link: 'https://www.teamsembilandelapan.com/',
      picture: 'assets/images/tsd.png',
      techStack: ['NextJS', 'Redis', 'Clean Architecture'],
    },
    {
      title: 'Personal Financial Management Web Application',
      description: `Mengembangkan aplikasi manajemen keuangan berbasis web yang membantu pengguna melacak pendapatan, pengeluaran, dan ringkasan keuangan melalui dasbor sederhana. Platform ini memberikan gambaran umum aktivitas keuangan, memungkinkan pengguna untuk mengelola anggaran dan pengeluaran pribadi dengan lebih baik.`,
      link: 'https://financial.adrianmilano.my.id/',
      picture: 'assets/images/financial.png',
      techStack: ['Golang', 'Angular', 'MySQL', 'Redis', 'Docker', 'ChartJS', 'Clean Architecture'],
    },
    {
      title: 'Elingway – Online Language Learning Platform Website',
      description: `Mengembangkan situs web untuk platform pembelajaran bahasa daring yang menyediakan layanan seperti program pembelajaran bahasa Inggris dan tes bahasa standar termasuk TOEFL ITP, TOEFL iBT, TOEIC, dan IELTS. Platform ini membantu pengguna mengakses sumber daya pembelajaran bahasa dan layanan sertifikasi melalui platform digital terpusat.`,
      link: 'https://www.elingway.id/',
      picture: 'assets/images/elingway.png',
      techStack: ['VueJS', 'Laravel', 'MySQL'],
    },
    {
      title: 'Paper.id',
      description: `Paper.id adalah platform penagihan dan pembayaran antar bisnis yang dapat digunakan oleh UMKM hingga korporasi besar. Dengan Paper.id, transaksi antara pembeli dan pemasok menjadi lebih mudah. Pemasok dapat menerima pembayaran lebih cepat melalui berbagai metode pembayaran yang tersedia dan merekonsiliasi semuanya secara otomatis dalam satu platform. Sementara itu, pembeli bebas memilih dari berbagai metode pembayaran.`,
      link: 'https://www.paper.id',
      picture: 'assets/images/paper.png',
      techStack: ['Angular', 'Golang', 'ArangoDB', 'MySQL'],
    },
    {
      title: 'Investortrust.id',
      description: `Investortrust.id adalah portal data dan berita ekonomi independen yang berfokus pada bisnis, keuangan, investasi langsung, dan investasi portofolio, terutama di pasar modal.`,
      link: 'https://www.investortrust.id/',
      picture: 'assets/images/investortrust.png',
      techStack: ['NextJS', 'Express JS', 'MySQL', 'Docker'],
    },
    {
      title: 'CMS Investortrust.id',
      description: `Content Management System untuk mengelola konten di Investortrust.id, portal data dan berita ekonomi independen yang berfokus pada bisnis, keuangan, investasi langsung, dan investasi portofolio, terutama di pasar modal.`,
      link: 'https://www.cms.investortrust.id/',
      picture: 'assets/images/cms-investortrust-new.png',
      techStack: ['Angular', 'Express JS', 'MySQL', 'Docker'],
    },
    {
      title: 'CROX',
      description: `CROX adalah situs web untuk melakukan pengujian atau evaluasi terhadap layanan dan kegunaan produk digital secara daring. Bergabung sebagai Tester CROX akan memberikan Anda banyak manfaat. Jadi, daftarkan diri Anda sekarang dan nikmati keuntungannya.`,
      link: 'https://crox.id',
      picture: 'assets/images/crox.png',
      techStack: ['Angular'],
    },
    {
      title: 'MoGawe.id',
      description: `MoGawe.id adalah platform crowdsourcing Indonesia yang menawarkan pekerjaan mikro melalui aplikasi seluler. Platform ini memungkinkan pengguna — yang disebut MoGawers — untuk mendapatkan penghasilan harian dengan menyelesaikan tugas tugas luring sederhana seperti pengambilan foto produk, pengecekan stok, dan survei. Dioperasikan oleh PT Media Baru Internasional, MoGawe dapat diakses di 180+ kota di Indonesia dan ditujukan bagi individu yang mencari pekerjaan fleksibel, seperti mahasiswa, ibu rumah tangga, atau pekerja lepas.`,
      link: 'https://mogawe.id/',
      picture: 'assets/images/mogawe.png',
      techStack: ['Angular', 'Spring Boot', 'MySQL'],
    },
    {
      title: 'MoGawe Business',
      description: `MoGawe Bisnis adalah aplikasi berbasis web yang dirancang bagi para pebisnis untuk menyederhanakan dan mengelola berbagai jenis pekerjaan dalam bisnis mereka. Aplikasi ini terhubung dengan aplikasi seluler Android yang menawarkan kesempatan untuk mendapatkan penghasilan setidaknya Rp 200.000 per hari dengan menyelesaikan tugas tugas sederhana.`,
      link: 'https://bisnis.mogawe.id/',
      picture: 'assets/images/mogawe-bisnis.png',
      techStack: ['Angular', 'Spring Boot', 'PostgreSQL'],
    },
    {
      title: 'Adeya Mobile Apps',
      description: `Adeya dalam bahasa Yunani berarti Perizinan, Adeya SFR SOR singkatan dari Radio Frequency Spectrum Service Data Assistant dan Radio Operator Certification. Aplikasi Seluler ini dikhususkan untuk Layanan Perizinan Stasiun Radio (ISR) dan Sertifikasi REOR. Dengan Adeya, diharapkan pemegang SDPPI dan ISR akan lebih dekat dengan layanan perizinan penggunaan spektrum frekuensi radio, layanan data, dan layanan sertifikasi REOR. Ini juga mendukung kemudahan dan kecepatan akses informasi. Aplikasi ini juga merupakan pilihan alternatif untuk platform media layanan selain loket layanan, contact center 159, web elicensing, dan SiDia.`,
      link: 'https://play.google.com/store/apps/details?id=com.kominfo.sfrsorapp&hl=en_US',
      picture: 'assets/images/adeya.png',
      techStack: ['Kotlin', 'Express JS', 'MySQL'],
    },
    {
      title: 'Data Validation Of Frequency Radio (ISR QR CODE)',
      description: `Proyek Kementerian Komunikasi dan Informatika Republik Indonesia dalam pembuatan aplikasi pendaftaran dan izin stasiun radio serta validasi lisensi stasiun radio, menggunakan Laravel.`,
      link: 'https://isrcode.postel.go.id/public/login',
      picture: 'assets/images/isrcode.png',
      techStack: ['Laravel', 'MySQL'],
    },
    {
      title: 'Website Certification (REOR)',
      description: `Proyek Kementerian Komunikasi dan Informatika Republik Indonesia dalam pembuatan cetak sertifikasi dan pelatihan, menggunakan PHP YII.`,
      link: 'https://reor.postel.go.id/',
      picture: 'assets/images/reor.png',
      techStack: ['Code Igniter', 'PHP', 'MySQL'],
    },
    {
      title: 'COMPUTER ASSISTED TEST (CAT)',
      description: `Proyek Kementerian Komunikasi dan Informatika Republik Indonesia dalam pembuatan Computer Assisted Test, menggunakan Laravel.`,
      link: 'https://cat.postel.go.id/',
      picture: 'assets/images/cat.png',
      techStack: ['Laravel', 'PHP', 'MySQL'],
    },
    {
      title: 'QUEUE SYSTEM',
      description: `Proyek Badan Koordinasi Penanaman Modal dalam pembuatan sistem antrean konsultasi daring, menggunakan Laravel.`,
      link: 'https://antrian.bkpm.go.id/registrasi/',
      picture: 'assets/images/bkpm.png',
      techStack: ['Laravel', 'MySQL'],
    },
  ],
};
