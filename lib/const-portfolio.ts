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
    snippets: [
      {
        header: "Next.js + Tailwind CSS",
        code: 'export default function NewsTabPanel({ news, pKey, companyName }) {\nreturn (\n  <Tab.Panel className="flex flex-col gap-6">\n    {news && news?.length > 0 ? (\n      <NewsComponent\n        id="news"\n        pKey={pKey}\n        news={news}\n        name={getTitle(companyName, "")}\n      />\n    ) : (\n      <NoData\n        title="No data to show."\n        message="Check back as coverage improves."\n      />\n    )}\n  </Tab.Panel>\n);\n}',
      },
      {
        header: "Flask: testing",
        code: "def test_json_portfolio_creation():\n    helper = PortfolioHelper()\n    helper._check_for_nonexistent_keys = lambda x, y: y\n    owner_id = '555f0962-486b-48ab-8f9e-708a92863efb'\n    portfolio_json = {'owner_id': owner_id, 'name': 'New Portfolio'}\n    entries = [entry_1, entry_2]\n    result = helper.create_portfolio_from_json(\n        PortfolioCreationRequest.from_dict(portfolio_json),\n        json.dumps({'entries': entries}, default=str),\n    )\n    get_result = helper.get_portfolio(result.portfolio.id)\n    assert result.status == 'created'\n    assert result.portfolio == get_result",
      },
      {
        header: "PostgreSQL table",
        code: "CREATE TABLE public.mr_portfolio_inbox(\n   id SERIAL PRIMARY KEY,\n   portfolio_id uuid NOT NULL,\n   n_entries int NOT NULL,\n   entries_str text NOT NULL,\n   failed boolean DEFAULT FALSE\n);",
      },
    ],
  },
  {
    id: 2,
    title: "End-to-End Recruitment Portal",
    descr:
      "A comprehensive recruitment platform covering the entire hiring life cycle, including candidate management, interview scheduling, and onboarding.",
    techs: ["React", "Java", "Spring Boot", "MySQL"],
    img: "/assets/projects/recruitment.jpg",
    snippets: [
      {
        header: "React + Redux",
        code: "const getCandidate = (note) => {\n  const page = note.description ? 3 : 0;\n  dispatch(setShowBasic(page === 0 ? true : false));\n  dispatch(setShowComments(page === 3 ? true : false));\n  getCandidateAsIs(headers, note.entityId)\n    .then((res) => {\n      if (res.data) {\n        dispatch(setCandidate(res.data));\n        if (res.data.professionalInfo)\n          dispatch(setProfessionalInfo(res.data.professionalInfo));\n      }\n      dispatch(setShowCandidate(true));\n      closeDrawer();\n    })\n};",
      },
      {
        header: "Spring Boot Service",
        code: "@Service\npublic class SubjectService {\n    @Autowired\n    private SubjectRepo subjectRepo;\n\n    public List<Subject> getAllSubjects() {\n        return subjectRepo.findAll();\n    }\n\n    public Subject getSubjectById(Long id) {\n        return subjectRepo.findById(id)\n                .orElseThrow(() -> new ResourceNotFoundException('Subject with ID:' + id + ' not found'));\n    }\n\n    public Subject createSubject(Subject subject) {\n        return subjectRepo.save(subject);\n    }\n\n    public Subject updateSubject(Long id, Subject subjectDetails) {\n        Subject subject = subjectRepo.findById(id)\n                .orElseThrow(() -> new ResourceNotFoundException('Subject with ID:' + id + ' not found'));\n        subject.setName(subjectDetails.getName());\n        return subjectRepo.save(subject);\n    }\n\n    public void deleteSubject(Long id) {\n        Subject subject = subjectRepo.findById(id)\n                .orElseThrow(() -> new ResourceNotFoundException('Subject with ID:' + id + ' not found'));\n        subjectRepo.delete(subject);\n    }\n}",
      },
      {
        header: "MySQL",
        code: "UPDATE activity_tracking t\nINNER JOIN (\n	SELECT ah.updated_date,\n		ah.tracking_id,\n		ah.tracking_status,\n		ah.id,\n    ah.comment\n	FROM activity_history ah\n	WHERE ah.updated_date <= (\n		SELECT MIN(updated_date)\n		FROM activity_history ahm\n		WHERE ahm.tracking_id = ah.tracking_id)\n) h\nSET t.comment = h.comment,\n	t.id = h.id,\n	t.tracking_status = h.tracking_status,\n	t.updated_date = h.updated_date\nWHERE t.tracking_id  = h.tracking_id;",
      },
    ],
  },
  {
    id: 3,
    title: "Energy Mobile Account",
    descr:
      "A mobile platform that provides users with comprehensive, real-time access to all their energy consumption data in one place, anytime.",
    techs: ["PostgreSQL", "PlPg/SQL", "Clickhouse", "React", "Docker"],
    img: "/assets/projects/electricity.jpg",
    snippets: [
      {
        header: "Bash: Clickhouse service script",
        code: "#!/usr/bin/env sh\nc_sql=\"\n  SELECT distinct 'alter table ' || database || '.' ||  table || ' drop partition ' || partition as cmd\n  FROM system.parts\n  WHERE active and database = 'default'\n    AND toString(max_time) != '0000-00-00 00:00:00'\n    AND max_time < (today() - 120);\"\ndocker exec -i mlk_ch_db clickhouse-client --query='$c_sql'  | while read -r line\ndo\n  echo ${line} | docker exec -i mlk_ch_db clickhouse-client\ndone",
      },
      {
        header: "PostgreSQL",
        code: "WITH cte AS (\n  SELECT DISTINCT c_type\n  FROM dbo.ed_seals es\n  WHERE c_type IS NOT NULL\n    AND c_type NOT LIKE '%;%'\n)\nINSERT INTO dbo.es_seal_types (c_name)SELECT c_type\nFROM cte cd\nWHERE NOT EXISTS\n(SELECT 1 FROM dbo.es_seal_types st WHERE st.c_name = cd.c_type)",
      },
      {
        header: "Clickhouse",
        code: "-- high-lvl stats\nSELECT r.f_div,\n  SUM(r.dev) AS devices,\n  SUM(r.ev) AS events,\n  SUM(r.ins) AS instants,\n  SUM(r.rea) AS readings\nFROM (\n  SELECT\n    SUBSTRING(reverse(trim(both '()' from `partition` )), 1, 1) AS f_div,\n    IF(TABLE='devices', rows, 0) AS dev,\n    IF(TABLE='events', rows, 0) AS ev,\n    IF(TABLE='instants', rows, 0) AS ins,\n    IF(TABLE='readings', rows, 0) AS rea\n  FROM `system`.parts\n  WHERE TABLE IN ('devices','events','instants','readings')\n    AND active\n) AS r\nGROUP BY r.f_div\nORDER BY r.f_div",
      },
      {
        header: "Docker Compose",
        code: 'services:\n  postgres:\n    image: postgres:10\n    container_name: postgres_db\n    env_file:\n      - .env\n    ports:\n      - "5432:5432"\n    volumes:\n      - postgres_data:/var/lib/postgresql/data\n    networks:\n      - db_network\n  cron_service:\n    image: alpine:latest\n    container_name: cron_service\n    command: ["sh", "-c", "crond -f"]\n    volumes:\n      - ./cronjobs:/etc/cron.d\n      - ./scripts:/scripts\n    networks:\n      - db_network\n    depends_on:\n      - postgres',
      },
    ],
  },
  {
    id: 4,
    title: "Omnius",
    descr:
      "A robust billing system designed for energy networks, including automated invoicing and detailed financial reports generation.",
    techs: ["MS SQL", "SSRS"],
    img: "/assets/projects/energo.jpg",
    snippets: [
      {
        header: "MS SQL",
        code: "DECLARE @SealsMode INT\nSELECT TOP 1 @SealsMode = c.N_Seals_Mode\nFROM [MobileService].dbo.CS_Configs c\nWHERE c.B_Default = 1\n\nIF (OBJECT_ID('tempdb..#SealsPrev') IS NOT NULL) DROP TABLE #SealsPrev\nCREATE TABLE #SealsPrev(DocDetails_ID INT, LINK INT, F_Division INT)\nINSERT INTO #SealsPrev\nSELECT DISTINCT dc.LINK, S.LINK, S.F_Division\nFROM #DocDetails dc\n	-- prev operation\n	OUTER APPLY (\n		SELECT TOP 1 dc_sub.LINK, dc_sub.F_Division\n		FROM dbo.ED_Device_Checks dc_sub\n			INNER JOIN dbo.ED_Seals s_sub\n				ON s_sub.F_Division = dc_sub.F_Division\n				AND s_sub.F_Device_Checks = dc_sub.LINK\n		WHERE dc_sub.F_Division = dc.F_Division\n			AND dc_sub.F_Devices = dc.F_Devices\n			AND dc_sub.D_Date < dc.D_Date\n		ORDER BY dc_sub.D_Date DESC\n	) AS tPrev\n	INNER JOIN dbo.ED_Seals S\n		ON S.F_Division = tPrev.F_Division\n		AND S.F_Device_Checks = tPrev.LINK\nWHERE @SealsMode = 1 AND dc.F_Parent_Devices IS NULL AND dc.D_Replace_Date IS NULL",
      },
    ],
  },
  {
    id: 5,
    title: "Federal Treasury System",
    descr:
      "A large-scale system developed for the Federal Treasury. Responsibilities included optimizing Oracle database structures and creating PL/SQL packages for data processing.",
    techs: ["Oracle", "PL/SQL", "MS SQL", "FoxPro"],
    img: "/assets/projects/treasury.jpg",
    snippets: [
      {
        header: "Oracle",
        code: "SELECT x.abo_guid\n  FROM (\n  SELECT r.doc_guid, r.business_status,\n         r2.doc_guid AS abo_guid,\n         ROW_NUMBER () OVER (PARTITION BY b.bc_reg_number ORDER BY b.change_number DESC) rn\n    FROM xxt_bc_reason_headers b,\n         xxt_bs_doc_registry r,\n         xxt_rp_headers p,\n         xxt_bs_doc_registry r2\n   WHERE b.bc_reason_header_id = r.source_id\n     AND r.source_table = 'XXT_BC_REASON_HEADERS'\n     AND r.business_status IN ('003')\n     AND b.pa = p.segment1\n     AND b.su_code = p.segment4\n     AND p.header_id = xxt_bs_operation_pub.get_gvar_value ('P_ACT_KEY')\n     AND b.bc_header_id = r2.source_id\n     AND r2.source_table = 'XXT_BC_HEADERS'\n     AMND EXISTS (\n	   SELECT 1\n         FROM xxt_bc_lines bl\n        WHERE bl.bc_header_id = b.bc_header_id\n         AND bl.year >= to_char(p.report_date,'YYYY')\n         AND bl.amount <> 0)\n  ) x\n  WHERE x.rn = 1",
      },
    ],
  },
  {
    id: 6,
    title: "Telecom Billing Utilities",
    descr:
      "A suite of tools and utilities for managing billing operations for a cellular company, enhancing automation and reducing processing time.",
    techs: ["Oracle", "Delphi", "MS SQL"],
    img: "/assets/projects/telecom.jpg",
    snippets: [
      {
        header: "Oracle",
        code: "DECLARE\n  v_phone_number VARCHAR2(15) := 'MSISDN Number'; -- Replace with number\nBEGIN\n  FOR rec IN (\n    SELECT c.name, o.order_date, o.total_amount\n      FROM customers c\n      JOIN orders o ON c.customer_id = o.customer_id\n      WHERE c.phone_number = v_phone_number)\n  LOOP\n    DBMS_OUTPUT.PUT_LINE('Customer: ' || rec.name || ', Order Date: ' || rec.order_date || ', Total: ' || rec.total_amount);\n  END LOOP;\nEND;\n/",
      },
      {
        header: "Delphi",
        code: "procedure TForm1.btnCheckBalanceClick(Sender: TObject);\nvar\n  PhoneNumber: string;\nbegin\n  PhoneNumber := edtPhoneNumber.Text;\n  if PhoneNumber = '' then Exit;\n\n  ADOQuery1.Close;\n  ADOQuery1.SQL.Text := 'SELECT Balance FROM Customers WHERE PhoneNumber = :PhoneNumber';\n  ADOQuery1.Parameters.ParamByName('PhoneNumber').Value := PhoneNumber;\n\n  ADOQuery1.Open;\n  if not ADOQuery1.Eof then\n    ShowMessage('Balance: ' + ADOQuery1.FieldByName('Balance').AsString)\n  else\n    ShowMessage('Phone number not found.');\nend;",
      },
    ],
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
