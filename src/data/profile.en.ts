import type { ProfileContent } from './types'

export const profileEn: ProfileContent = {
  seo: {
    title: 'Leonardo Neves — Senior Software Engineer | Full Stack, .NET, Java, React, Infor LN',
    description:
      'Leonardo Neves is a Senior Software Engineer in São Paulo, Brazil with 20+ years of experience: full stack (C#/.NET, Java, React, Angular, Ionic), Infor LN ERP, DevOps and AI-assisted development. Download the CV.',
    keywords:
      'Leonardo Neves, Senior Software Engineer, Full Stack Developer, C#, .NET, Java, React, Angular, Ionic, Infor LN, ERP, DevOps, AI-assisted development, Claude Code, São Paulo, Brazil, remote',
  },
  headline: 'Senior Software Engineer',
  tagline: [
    'Full Stack',
    'C#/.NET · Java',
    'React · Angular · Ionic',
    'Software Architecture & Enterprise Integration',
    'Infor LN',
    'DevOps & AI-Assisted Development',
  ],
  location: 'Guarulhos, SP – Brazil',

  summary: [
    'Senior Software Engineer / Full Stack Developer with 20+ years of experience in software engineering, application development, software architecture and large-scale system integration across enterprise, cloud, logistics, banking, retail and ERP environments.',
    'Strong full-stack and backend experience with C#/.NET, Java, JavaScript/TypeScript, React, Angular, Node.js and Python, combined with API integration, database design, DevOps, CI/CD and cloud infrastructure. Hands-on with enterprise platforms including Infor LN (Baan), Infor CloudSuite, Salesforce and ServiceNow.',
    'Proven track record with global organizations including IBM, Sony, Bradesco and Jadlog. Experienced in AI-assisted software development using Claude Code, Cursor, OpenAI, IBM Watson Assistant and NLP-driven solutions to accelerate delivery and improve code quality. Fluent in Portuguese, English and Spanish.',
  ],

  stats: [
    { value: '20+', label: 'years in technology' },
    { value: '20+', label: 'countries served' },
    { value: '3', label: 'continents' },
    { value: '2M+', label: 'assets covered by IBM vulnerability app' },
  ],

  highlights: [
    'Led cross-country teams (Brazil, Japan, USA) to launch PlayStation 2, Blu-ray and PlayStation 3 disc lines at Sony DADC',
    'Built an inventory vulnerability management app covering 2M+ assets across IBM worldwide',
    'Designed an NLP-driven SQL feature enabling non-technical users to query ERP data in natural language',
    'Delivered Bradesco Autoline — a car trading platform serving millions of users — from development to production',
    'Provided technical services in 20+ countries across 3 continents',
  ],

  experience: [
    {
      role: 'Application Developer',
      company: 'Jadlog Logística',
      location: 'São Paulo, SP',
      period: 'Oct 2025 – Present',
      bullets: [
        'Cross-platform mobile development and maintenance with Ionic, Cordova & Capacitor, delivering native-like user experiences',
        'Frontend engineering with React & Angular: responsive interfaces, reusable components and dynamic data-driven views',
        'Backend service design and integration through .NET & Java APIs; Oracle & MongoDB query tuning, schema design and data integrity rules',
        'Authentication flows, role-based access control and performance improvements for security and scalability',
        'AI-assisted development with Claude Code & Cursor: code generation, refactoring, troubleshooting, requirements analysis, technical design, unit tests, documentation and code reviews',
      ],
      tags: ['Ionic', 'React', 'Angular', '.NET', 'Java', 'Oracle', 'MongoDB', 'Claude Code', 'Cursor'],
    },
    {
      role: 'Infor LN Developer',
      company: 'Infor / Service Provider Consulting',
      location: 'São Paulo, SP',
      period: 'Nov 2024 – Feb 2026',
      bullets: [
        'ERP development, support & maintenance with LN Studio — custom modules and business process automation',
        'RESTful API integrations with third-party systems and Infor CloudSuite customizations for manufacturing, logistics and finance',
        'Designed an NLP feature converting plain-language commands into optimized SQL queries, improving data accessibility',
        'Data validation rules, performance tuning, deployment pipelines and testing strategies',
      ],
      tags: ['Infor LN', 'LN Studio', 'CloudSuite', 'REST', 'NLP'],
    },
    {
      role: 'Application Developer',
      company: 'IBM',
      location: 'São Paulo, SP',
      period: 'May 2019 – Sep 2024',
      bullets: [
        'Marketing Services Center: internal apps, Watson Assistant chatbots (intents, dialog flow, API integrations) and interactive websites for clients in Brazil, USA (PSIRT) and Ireland',
        'SOS team: front end of an inventory app managing 2M+ vulnerabilities worldwide — TypeScript/React, Jest, Travis CI',
        'Core Services automation: cloud migrations with Terraform & Ansible (2023); ServiceNow development in the CIO squad (2024)',
      ],
      tags: ['React', 'TypeScript', 'Watson', 'Terraform', 'Ansible', 'ServiceNow'],
    },
    {
      role: 'Angular Developer',
      company: 'Scopus IT / Banco Bradesco',
      location: 'São Paulo, SP',
      period: 'Oct 2018 – Mar 2019',
      bullets: ['Developed Autoline (Bradesco car-trading site) — Angular + ASP.NET MVC + Node.js microservices'],
      tags: ['Angular', 'ASP.NET MVC', 'Node.js'],
    },
    {
      role: 'Programming Analyst',
      company: '2Z Soluções',
      location: 'São Paulo, SP',
      period: 'Sep 2018 – May 2019',
      bullets: ['Maintained ASP.NET/GeneXus apps for logistics; built a multi-state Brazilian tax billing module'],
      tags: ['ASP.NET', 'GeneXus'],
    },
    {
      role: 'Director / Technical Consultant',
      company: 'Symcon Group / HSI',
      period: 'Jun 2013 – Sep 2018',
      bullets: [
        'Own consulting business: SPAs with Angular, React and Vue plus PHP, Django and Node for 20+ companies in Brazil, Argentina, Peru and Colombia',
        'Symcon Brazil: company setup, sales, imports and industrial automation consulting (robotics, pneumatics, PLCs)',
      ],
      tags: ['Angular', 'React', 'Vue', 'Django', 'PHP'],
    },
    {
      role: 'Technical Manager',
      company: 'Sony DADC',
      earlier: true,
      location: 'Manaus, AM',
      period: 'Mar 2008 – Sep 2010',
      bullets: [
        'Led Mastering, QC, Maintenance and Process Engineering departments',
        'Designed and implemented PS2, Blu-ray and PS3 disc manufacturing lines — technology transfer from Sony Japan, staff training at Sony USA',
        'Applied KPI management, Lean Manufacturing and Six Sigma for continuous improvement',
      ],
      tags: ['Leadership', 'Lean', 'Six Sigma'],
    },
    {
      role: 'Industrial Manager',
      company: 'Nordeste Digital Line / CD+',
      earlier: true,
      location: 'Fortaleza, CE',
      period: 'Jul 2006 – Jan 2008',
      bullets: [
        'Decentralized operations from HQ in Fortaleza; launched DVD manufacturing in Manaus and distribution in São Paulo',
        'Led technical, production and logistics teams across three Brazilian states, reducing costs and lead times',
      ],
    },
    {
      role: 'Service Engineer',
      company: 'Singulus Technologies AG',
      earlier: true,
      location: 'Eindhoven, NL',
      period: '1999 – 2006',
      bullets: [
        'Technical support and production-line startup for mastering, electroforming, replication and inspection equipment',
        'Covered Latin America, Europe, North America and Africa — became company representative for LatAm',
      ],
    },
    {
      role: 'Mastering Technician',
      company: 'Novodisc / Videolar S/A',
      earlier: true,
      period: 'Feb 1995 – Sep 1999',
      bullets: [
        'Operation and maintenance of pre-mastering, mastering, electroforming and quality control equipment',
        'Contributed to factory startup and production process control in São Paulo and Manaus',
      ],
    },
  ],

  skills: [
    { name: 'Engineering & Architecture', items: ['Full Stack Development', 'Software Architecture', 'Large-Scale System Integration', 'API Integration', 'ERP Process Automation'] },
    { name: 'Frontend', items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'Material UI'] },
    { name: 'Backend', items: ['C#/.NET', 'ASP.NET', 'Java', 'Node.js', 'Python', 'PHP', 'Django', 'Ruby', 'Go'] },
    { name: 'Mobile', items: ['Ionic', 'Cordova', 'Capacitor', 'Flutter', 'React Native'] },
    { name: 'ERP & Enterprise Platforms', items: ['Infor LN (LN Studio)', 'Baan', 'Infor CloudSuite', 'Salesforce (Admin, Apex, LWC)', 'ServiceNow'] },
    { name: 'AI & Automation', items: ['Claude Code', 'Cursor', 'OpenAI APIs', 'IBM Watson Assistant', 'NLP', 'Conversational AI', 'Prompt Engineering'] },
    { name: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'AWS', 'GCP', 'IBM Cloud', 'CI/CD'] },
    { name: 'Databases', items: ['Oracle', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'DB2', 'Cloudant'] },
    { name: 'Testing & Tools', items: ['Git', 'Jest', 'Enzyme'] },
    { name: 'Methodologies', items: ['Agile / Scrum', 'ITIL v3', 'PMBoK / PMP', 'Lean / Six Sigma'] },
  ],

  languages: [
    { name: 'Portuguese', level: 'Native', score: 5 },
    { name: 'English', level: 'Fluent C2 / Bilingual', score: 5 },
    { name: 'Spanish', level: 'Full Professional', score: 4 },
    { name: 'German', level: 'Basic', score: 1 },
    { name: 'French', level: 'Basic', score: 1 },
    { name: 'Mandarin', level: 'Basic', score: 1 },
    { name: 'Arabic', level: 'Basic', score: 1 },
  ],

  education: [
    { degree: 'B.Sc. Computer Engineering', school: 'UNIVESP – São Paulo', period: '2017 – 2022' },
    { degree: 'Electronics Technician', school: 'ETESP Horácio A. Silveira', period: '1991 – 1994' },
  ],

  certifications: [
    {
      name: 'Enterprise Platforms & Cloud',
      items: [
        { title: 'ServiceNow: Flow Designer, ATF, Scripting, Service Portals, Admin', issuer: 'NowLearning', year: '2023–24' },
        { title: 'Terraform Associate', issuer: 'Udemy', year: '2023' },
        { title: 'IBM Cloud Professional Architect', issuer: 'IBM', year: '2023' },
        { title: 'Ansible Beginner & Advanced', issuer: 'Udemy', year: '2023' },
        { title: 'Containers, K8s & Istio on IBM Cloud', issuer: 'IBM', year: '2019' },
        { title: 'Docker Essentials & IBM Cloud Kubernetes Service', issuer: 'IBM', year: '2019' },
        { title: 'Watson & Cloud Foundations', issuer: 'IBM', year: '2019' },
        { title: 'Watson Assistant & Studio Foundations', issuer: 'IBM', year: '2019' },
      ],
    },
    {
      name: 'Architecture & Development',
      items: [
        { title: 'Software Architecture: Large Scale Systems', issuer: 'Udemy', year: '2022' },
        { title: 'React Testing with Jest & Enzyme', issuer: 'Udemy', year: '2022' },
        { title: 'Data Visualization with Kibana', issuer: 'Udemy', year: '2022' },
        { title: 'Python for Data Science', issuer: 'IBM', year: '2021' },
        { title: 'Blockchain Essentials', issuer: 'IBM', year: '2021' },
        { title: 'Vue JS 2 Complete Guide', issuer: 'COD3R', year: '2020' },
        { title: 'Nuxt JS', issuer: 'Academind', year: '2020' },
        { title: 'SEO 2020', issuer: 'Mirago', year: '2020' },
        { title: 'IBM Carbon Design System (React/Vue)', issuer: 'IBM', year: '2019' },
        { title: 'Enterprise Design Thinking Practitioner', issuer: 'IBM', year: '2019' },
        { title: 'ASP.NET Core 2.0 (Beginner–Advanced)', issuer: 'MS Virtual Academy', year: '2019' },
        { title: 'Python & Django', issuer: 'MS Virtual Academy', year: '2019' },
        { title: 'ASP.NET MVC 5', issuer: 'MS Virtual Academy', year: '2018' },
        { title: 'Complete Webmaster Front-End', issuer: 'Danki Code', year: '2018' },
        { title: 'Rails 5, Angular 6, NativeScript', issuer: 'Udemy', year: '2018' },
        { title: 'C#, Ruby, JS/jQuery, PHP, Python, SQL', issuer: 'Solo Learn', year: '2018' },
        { title: 'Databases for Developers', issuer: 'Oracle', year: '2018' },
      ],
    },
    {
      name: 'Management & Methodology',
      items: [
        { title: 'ITIL v3', issuer: 'Fundação Bradesco', year: '2018' },
        { title: 'SCRUM Fundamentals (SFC)', issuer: 'Udemy', year: '2018' },
        { title: 'Project Management', issuer: 'Veduca / USP', year: '2018' },
        { title: 'Team Management', issuer: 'FM2S', year: '2018' },
        { title: 'PMBoK Methodology (PMP)', issuer: 'GSTI', year: '2013' },
      ],
    },
  ],
}
