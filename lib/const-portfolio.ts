export const NAV_PORTOLIO = [
  //{ href: "#hero", label: "Home" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#exp", label: "Experience" },
  { href: "#edu", label: "Education" },
  { href: "#testimonial", label: "Testimonial" },
  { href: "#contact", label: "Contact" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI Stock Forecasting System",
    descr:
      "An innovative platform leveraging AI to analyze and forecast stock company dynamics, enabling informed decision-making for investors.",
    techs: ["Next.js", "Tailwind CSS", "Flask", "PostgreSQL"],
    img: "/assets/projects/stocks.jpg",
  },
  {
    id: 2,
    title: "End-to-End Recruitment Portal",
    descr:
      "A comprehensive recruitment platform covering the entire hiring life cycle, including candidate management, interview scheduling, and onboarding.",
    techs: ["React", "Java", "Spring Boot", "MySQL"],
    img: "/assets/projects/recruitment.jpg",
  },
  {
    id: 3,
    title: "Energy Mobile Account",
    descr:
      "A mobile platform that provides users with comprehensive, real-time access to all their energy consumption data in one place, anytime.",
    techs: ["PostgreSQL", "PlPg/SQL", "Clickhouse", "React", "Docker"],
    img: "/assets/projects/electricity.jpg",
  },
  {
    id: 4,
    title: "Omnius",
    descr:
      "A robust billing system designed for energy networks, including automated invoicing and detailed financial reports generation.",
    techs: ["MS SQL", "SSRS"],
    img: "/assets/projects/energo.jpg",
  },
  {
    id: 5,
    title: "Federal Treasury System",
    descr:
      "A large-scale system developed for the Federal Treasury. Responsibilities included optimizing Oracle database structures and creating PL/SQL packages for data processing.",
    techs: ["Oracle", "PL/SQL", "MS SQL", "FoxPro"],
    img: "/assets/projects/treasury.jpg",
  },
  {
    id: 6,
    title: "Telecom Billing Utilities",
    descr:
      "A suite of tools and utilities for managing billing operations for a cellular company, enhancing automation and reducing processing time.",
    techs: ["Oracle", "Delphi"],
    img: "/assets/projects/telecom.jpg",
  },
];

export const SKILLS = [
  { name: "React", img: "/assets/icons/React.svg", color: "#00CCF3" },
  { name: "Next.js", img: "/assets/icons/NextJS.svg", color: "#8C8C8C" },
  { name: "Javascript", img: "/assets/icons/JavaScript.svg", color: "#FDD500" },
  { name: "Typescript", img: "/assets/icons/TypeScript.svg", color: "#007ACC" },
  { name: "Java", img: "/assets/icons/Java.svg", color: "#EF913C" },
  { name: "Spring Boot", img: "/assets/icons/Springbt.svg", color: "#5FB832" },
  { name: "PostgreSQL", img: "/assets/icons/PostgreSQL.svg", color: "#336791" },
  { name: "MS SQL", img: "/assets/icons/MSSQL.svg", color: "#B7585B" },
  { name: "Oracle", img: "/assets/icons/Oracle.svg", color: "#EB0000" },
  { name: "MySQL", img: "/assets/icons/MySQL.svg", color: "#8DAFBB" },
  { name: "SQLite", img: "/assets/icons/SQLite.svg", color: "#42A1DC" },
  { name: "MongoDB", img: "/assets/icons/MongoDB.svg", color: "#12924F" },
  { name: "Clickhouse", img: "/assets/icons/Clickhouse.svg", color: "#FFBF00" },
  { name: "Node.js", img: "/assets/icons/NodeJS.svg", color: "#81CD39" },
  { name: "Flask", img: "/assets/icons/Flask.svg", color: "#8C8C8C" },
  { name: "HTML5", img: "/assets/icons/HTML.svg", color: "#E14E1D" },
  { name: "CSS3", img: "/assets/icons/CSS.svg", color: "#0277BD" },
  { name: "Tailwind CSS", img: "/assets/icons/Tailwind.svg", color: "#26BABD" },
  { name: "Postman", img: "/assets/icons/Postman.svg", color: "#FF6C37" },
  { name: "Docker", img: "/assets/icons/Docker.svg", color: "#2396ED" },
  { name: "Github", img: "/assets/icons/Github.svg", color: "#8C8C8C" },
];

export const EXPERIENCE = [
  {
    company: "Martini.ai",
    period: ["Mar 2023", "Feb 2024"],
    positions: [
      {
        role: "Frontend Developer",
        responsibility:
          "Developed and redesigned the company website using Next.js and Tailwind CSS, creating a fully responsive interface, implementing reusable components, and optimizing asynchronous data fetching to improve performance. Configured Amplitude for precise event tracking and data accuracy, and preparing detailed reports to analyze system performance. Teamed to refactor the Python Flask backend, optimizing code structure, and implementing automated unit tests. Delivered the revamped website, attracting first paying subscribers and enhancing user engagement.",
        techs: [
          "Next.js",
          "Tailwind CSS",
          "PostgreSQL",
          "Flask",
          "Docker",
          "Github",
        ],
      },
    ],
  },
  {
    company: "Drishticon INC.",
    period: ["Sep 2021", "Mar 2022"],
    positions: [
      {
        role: "Full Stack Developer",
        responsibility:
          "Enhanced frontend performance and optimized backend processes through Redux, delivering faster load times and minimizing server requests. Developed scalable RESTful backend services using Java Spring Boot. Spearheaded Cypress test scenario creation and resolved complex troubleshooting challenges. Mentored and guided five interns, contributing expertise across two projects and conducting code reviews to foster team collaboration and growth.",
        techs: [
          "React",
          "Java",
          "Spring Boot",
          "MySQL",
          "HTML5",
          "CSS3",
          "Github",
        ],
      },
    ],
  },
  {
    company: "I-Serv",
    period: ["Mar 2018", "Dec 2000"],
    positions: [
      {
        role: "Software Developer",
        responsibility:
          "Designed and managed PostgreSQL and ClickHouse databases, automated deployments using Docker, and optimized ETL workflows with Pentaho DI for high-speed data integration. Improved billing synchronization and reporting systems with SSRS and Power BI, streamlining workflows and enhancing data accessibility. Contributed to frontend development by creating reusable React components and refactoring HTML for improved usability.",
        techs: [
          "MS SQL",
          "PostgreSQL",
          "Clickhouse",
          "React",
          "HTML5",
          "Docker",
        ],
      },
    ],
  },
  {
    company: "OTR-2000",
    period: ["Jul 2006", "Feb 2018"],
    positions: [
      {
        role: "Team Leader",
        responsibility:
          "Mentored junior architects, collaborated with cross-functional teams to resolve technical issues, and worked with product managers to estimate and implement design requirements. Maintained and optimized Oracle database structures, procedures, and functions for financial software, enhancing query performance.",
        techs: ["Oracle"],
      },
      {
        role: "Senior Software Developer",
        responsibility:
          "Created and optimized PL/SQL packages, functions, and scripts for data migration from MS SQL to Oracle. Maintained Oracle database structures, resolved technical issues through collaboration with cross-functional teams, analyzed user data to address bugs, and provided solutions to enhance user experience. Improved query performance through targeted optimizations.",
        techs: ["MS SQL", "Oracle"],
      },
      {
        role: "Software Developer",
        responsibility:
          "Developed financial software using Visual FoxPro and MS Access, analyzed user data to resolve bugs and provide solutions, and collaborated with business analysts, QA, and support teams to address technical challenges.",
        techs: ["MS SQL", "Visual FoxPro", "MS Access"],
      },
    ],
  },
  {
    company: "SMARTS Shupashkar GSM",
    period: ["Oct 2001", "Jun 2006"],
    positions: [
      {
        role: "System Software Engineer",
        responsibility:
          "Administered and enhanced billing systems based on Oracle, developed reports and system extensions, and managed voice mail, text message, call center services, and auto-informer functionalities. Developed integration interfaces for billing systems to connect with other platforms.",
        techs: ["Oracle", "MS SQL", "Delphi"],
      },
    ],
  },
];

export const EDUCATION = [
  { title: "AWS Certified Cloud Practiotioner", school: "AWS" },
  { title: "Frontend Developer", school: "RSSchool (Online)" },
  {
    title: "Master's Degree in Computer Science",
    school: "Chuvash State University",
  },
];

export const TESTIMONIAL = [
  {
    person: "Rohit Singh",
    img: "/assets/Rohit.jpg",
    role: "Co-Founder",
    company: "Martini.ai",
    review:
      "In his temporary engagement as a Frontend Developer with Martini.ai, Alex truly left a mark. His robust knowledge and application of React really made him stand out. Not only did he demonstrate strong technical skills, but he also took an active role in our sprints, showcasing his commitment to teamwork and effective communication. His proactive approach towards task scoping was quite impressive, as it allowed him to independently handle complex components with minimal supervision. While Alex's tenure with us was temporary, his impact was not. He is a dependable professional who would be a valuable asset to any team requiring frontend expertise. I strongly recommend Alex and look forward to the possibility of working with him again in the future.",
  },
];

export const LINKS = [
  {
    label: "LinkedIn",
    img: "/assets/icons/LinkedIn.svg",
    url: "https://www.linkedin.com/in/aleksandr-a-belov/",
  },
  {
    label: "Github",
    img: "/assets/icons/Github.svg",
    url: "https://github.com/aabelov2703",
  },
  {
    label: "Telegram",
    img: "/assets/icons/Telegram.svg",
    url: "https://t.me/aspirinanet",
  },
];
