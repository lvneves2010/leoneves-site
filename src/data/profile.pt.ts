import type { ProfileContent } from './types'

export const profilePt: ProfileContent = {
  seo: {
    title: 'Leonardo Neves — Engenheiro de Software Sênior | Full Stack, .NET, Java, React, Infor LN',
    description:
      'Leonardo Neves é Engenheiro de Software Sênior em São Paulo com mais de 20 anos de experiência: full stack (C#/.NET, Java, React, Angular, Ionic), ERP Infor LN, DevOps e desenvolvimento assistido por IA. Baixe o currículo.',
    keywords:
      'Leonardo Neves, Engenheiro de Software, Desenvolvedor Full Stack, C#, .NET, Java, React, Angular, Ionic, Infor LN, ERP, DevOps, desenvolvimento assistido por IA, Claude Code, São Paulo, Guarulhos, remoto',
  },
  headline: 'Engenheiro de Software Sênior',
  tagline: [
    'Full Stack',
    'C#/.NET · Java',
    'React · Angular · Ionic',
    'Arquitetura de Software & Integração Enterprise',
    'Infor LN',
    'DevOps & Desenvolvimento Assistido por IA',
  ],
  location: 'Guarulhos, SP – Brasil',

  summary: [
    'Engenheiro de Software Sênior / Desenvolvedor Full Stack com mais de 20 anos de experiência em engenharia de software, desenvolvimento de aplicações, arquitetura de software e integração de sistemas em larga escala nos setores enterprise, cloud, logística, financeiro, varejo e ERP.',
    'Sólida experiência full-stack e backend com C#/.NET, Java, JavaScript/TypeScript, React, Angular, Node.js e Python, aliada a integração de APIs, modelagem de dados, DevOps, CI/CD e infraestrutura cloud. Experiência prática com plataformas enterprise como Infor LN (Baan), Infor CloudSuite, Salesforce e ServiceNow.',
    'Histórico comprovado em organizações globais como IBM, Sony, Bradesco e Jadlog. Experiente em desenvolvimento assistido por IA com Claude Code, Cursor, OpenAI, IBM Watson Assistant e soluções baseadas em NLP para acelerar entregas e elevar a qualidade do código. Fluente em português, inglês e espanhol.',
  ],

  stats: [
    { value: '20+', label: 'anos em tecnologia', icon: 'years' },
    { value: '20+', label: 'países atendidos', icon: 'countries' },
    { value: '3', label: 'continentes', icon: 'continents' },
    { value: '2M+', label: 'ativos cobertos pelo app de vulnerabilidades da IBM', icon: 'assets' },
  ],

  highlights: [
    'Liderou equipes internacionais (Brasil, Japão, EUA) na implantação das linhas PlayStation 2, Blu-ray e PlayStation 3 na Sony DADC',
    'Construiu app de gestão de vulnerabilidades que cobre mais de 2 milhões de ativos da IBM no mundo',
    'Criou recurso NLP que permite a usuários não técnicos consultar dados do ERP em linguagem natural',
    'Entregou o Autoline do Bradesco — plataforma de compra e venda de carros com milhões de usuários — do desenvolvimento à produção',
    'Prestou serviços técnicos em mais de 20 países em 3 continentes',
  ],

  experience: [
    {
      role: 'Desenvolvedor de Aplicações',
      company: 'Jadlog Logística',
      location: 'São Paulo, SP',
      period: 'Out 2025 – Atual',
      bullets: [
        'Desenvolvimento e manutenção mobile multiplataforma com Ionic, Cordova e Capacitor, com experiência de uso próxima à nativa',
        'Engenharia de frontend com React e Angular: interfaces responsivas, componentes reutilizáveis e telas dinâmicas orientadas a dados',
        'Design e integração de serviços backend com APIs .NET e Java; tuning de queries, modelagem e regras de integridade em Oracle e MongoDB',
        'Fluxos de autenticação, controle de acesso por perfil e melhorias de performance para segurança e escalabilidade',
        'Desenvolvimento assistido por IA com Claude Code e Cursor: geração de código, refatoração, troubleshooting, análise de requisitos, design técnico, testes unitários, documentação e code review',
      ],
      tags: ['Ionic', 'React', 'Angular', '.NET', 'Java', 'Oracle', 'MongoDB', 'Claude Code', 'Cursor'],
    },
    {
      role: 'Desenvolvedor Infor LN',
      company: 'Infor / Service Provider Consulting',
      location: 'São Paulo, SP',
      period: 'Nov 2024 – Fev 2026',
      bullets: [
        'Desenvolvimento, suporte e manutenção de ERP com LN Studio — módulos customizados e automação de processos de negócio',
        'Integrações RESTful com sistemas terceiros e customizações Infor CloudSuite para manufatura, logística e finanças',
        'Criou recurso NLP que converte comandos em linguagem natural em queries SQL otimizadas, facilitando o acesso a dados',
        'Regras de validação de dados, tuning de performance, pipelines de deploy e estratégias de teste',
      ],
      tags: ['Infor LN', 'LN Studio', 'CloudSuite', 'REST', 'NLP'],
    },
    {
      role: 'Desenvolvedor de Aplicações',
      company: 'IBM',
      location: 'São Paulo, SP',
      period: 'Mai 2019 – Set 2024',
      bullets: [
        'Marketing Services Center: apps internos, chatbots com Watson Assistant (intents, fluxos de diálogo, integrações de API) e sites interativos para clientes no Brasil, EUA (PSIRT) e Irlanda',
        'Time SOS: frontend do app de inventário que gerencia mais de 2M de vulnerabilidades no mundo — TypeScript/React, Jest, Travis CI',
        'Automação em Core Services: migrações para cloud com Terraform e Ansible (2023); desenvolvimento ServiceNow no CIO Squad (2024)',
      ],
      tags: ['React', 'TypeScript', 'Watson', 'Terraform', 'Ansible', 'ServiceNow'],
    },
    {
      role: 'Desenvolvedor Angular',
      company: 'Scopus TI / Banco Bradesco',
      location: 'São Paulo, SP',
      period: 'Out 2018 – Mar 2019',
      bullets: ['Desenvolveu o Autoline (portal de carros do Bradesco) — Angular + ASP.NET MVC + microsserviços Node.js'],
      tags: ['Angular', 'ASP.NET MVC', 'Node.js'],
    },
    {
      role: 'Analista Programador',
      company: '2Z Soluções',
      location: 'São Paulo, SP',
      period: 'Set 2018 – Mai 2019',
      bullets: ['Manutenção de apps ASP.NET/GeneXus para logística; módulo de faturamento com regras tributárias multiestado'],
      tags: ['ASP.NET', 'GeneXus'],
    },
    {
      role: 'Diretor / Consultor Técnico',
      company: 'Symcon Group / HSI',
      period: 'Jun 2013 – Set 2018',
      bullets: [
        'Consultoria própria: SPAs com Angular, React e Vue + PHP, Django e Node para mais de 20 empresas no Brasil, Argentina, Peru e Colômbia',
        'Symcon Brasil: abertura da empresa, vendas, importação e consultoria em automação industrial (robótica, pneumática, CLPs)',
      ],
      tags: ['Angular', 'React', 'Vue', 'Django', 'PHP'],
    },
    {
      role: 'Gerente Técnico',
      company: 'Sony DADC',
      earlier: true,
      location: 'Manaus, AM',
      period: 'Mar 2008 – Set 2010',
      bullets: [
        'Liderou os departamentos de Mastering, Controle de Qualidade, Manutenção e Engenharia de Processos',
        'Implantou as linhas de produção de discos PS2, Blu-ray e PS3 — transferência tecnológica da Sony Japão e treinamento na Sony EUA',
        'Aplicou gestão por KPI, Lean Manufacturing e Six Sigma para melhoria contínua',
      ],
      tags: ['Liderança', 'Lean', 'Six Sigma'],
    },
    {
      role: 'Gerente Industrial',
      company: 'Nordeste Digital Line / CD+',
      earlier: true,
      location: 'Fortaleza, CE',
      period: 'Jul 2006 – Jan 2008',
      bullets: [
        'Descentralizou operações da matriz em Fortaleza; implantou fabricação de DVD em Manaus e distribuição em São Paulo',
        'Liderou equipes técnicas, de produção e logística em três estados, reduzindo custos e prazos',
      ],
    },
    {
      role: 'Engenheiro de Serviços',
      company: 'Singulus Technologies AG',
      earlier: true,
      location: 'Eindhoven, NL',
      period: '1999 – 2006',
      bullets: [
        'Suporte técnico e startup de linhas de produção de mastering, eletroformação, replicação e inspeção',
        'Atuou na América Latina, Europa, América do Norte e África — tornou-se representante da empresa na América Latina',
      ],
    },
    {
      role: 'Técnico de Mastering',
      company: 'Novodisc / Videolar S/A',
      earlier: true,
      period: 'Fev 1995 – Set 1999',
      bullets: [
        'Operação e manutenção de equipamentos de pré-mastering, mastering, eletroformação e controle de qualidade',
        'Participou da startup de fábrica e do controle de processos produtivos em São Paulo e Manaus',
      ],
    },
  ],

  skills: [
    { name: 'Engenharia & Arquitetura', items: ['Desenvolvimento Full Stack', 'Arquitetura de Software', 'Integração de Sistemas em Larga Escala', 'Integração de APIs', 'Automação de Processos ERP'] },
    { name: 'Frontend', items: ['React', 'Angular', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'Bootstrap', 'Material UI'] },
    { name: 'Backend', items: ['C#/.NET', 'ASP.NET', 'Java', 'Node.js', 'Python', 'PHP', 'Django', 'Ruby', 'Go'] },
    { name: 'Mobile', items: ['Ionic', 'Cordova', 'Capacitor', 'Flutter', 'React Native'] },
    { name: 'ERP & Plataformas Enterprise', items: ['Infor LN (LN Studio)', 'Baan', 'Infor CloudSuite', 'Salesforce (Admin, Apex, LWC)', 'ServiceNow'] },
    { name: 'IA & Automação', items: ['Claude Code', 'Cursor', 'OpenAI APIs', 'IBM Watson Assistant', 'NLP', 'IA Conversacional', 'Prompt Engineering'] },
    { name: 'DevOps & Cloud', items: ['Docker', 'Kubernetes', 'Terraform', 'Ansible', 'AWS', 'GCP', 'IBM Cloud', 'CI/CD'] },
    { name: 'Bancos de Dados', items: ['Oracle', 'PostgreSQL', 'MongoDB', 'MySQL', 'SQL Server', 'DB2', 'Cloudant'] },
    { name: 'Testes & Ferramentas', items: ['Git', 'Jest', 'Enzyme'] },
    { name: 'Metodologias', items: ['Agile / Scrum', 'ITIL v3', 'PMBoK / PMP', 'Lean / Six Sigma'] },
  ],

  languages: [
    { name: 'Português', level: 'Nativo', score: 5 },
    { name: 'Inglês', level: 'Fluente C2 / Bilíngue', score: 5 },
    { name: 'Espanhol', level: 'Profissional pleno', score: 4 },
    { name: 'Alemão', level: 'Básico', score: 1 },
    { name: 'Francês', level: 'Básico', score: 1 },
    { name: 'Mandarim', level: 'Básico', score: 1 },
    { name: 'Árabe', level: 'Básico', score: 1 },
  ],

  education: [
    { degree: 'Bacharelado em Engenharia de Computação', school: 'UNIVESP – São Paulo', period: '2017 – 2022' },
    { degree: 'Técnico em Eletrônica', school: 'ETESP Horácio A. Silveira', period: '1991 – 1994' },
  ],

  certifications: [
    {
      name: 'Plataformas Enterprise & Cloud',
      items: [
        { title: 'ServiceNow: Flow Designer, ATF, Scripting, Service Portals, Admin', issuer: 'NowLearning', year: '2023–24' },
        { title: 'Terraform Associate', issuer: 'Udemy', year: '2023' },
        { title: 'IBM Cloud Professional Architect', issuer: 'IBM', year: '2023' },
        { title: 'Ansible Iniciante e Avançado', issuer: 'Udemy', year: '2023' },
        { title: 'Containers, K8s e Istio no IBM Cloud', issuer: 'IBM', year: '2019' },
        { title: 'Docker Essentials e IBM Cloud Kubernetes Service', issuer: 'IBM', year: '2019' },
        { title: 'Watson & Cloud Foundations', issuer: 'IBM', year: '2019' },
        { title: 'Watson Assistant & Studio Foundations', issuer: 'IBM', year: '2019' },
      ],
    },
    {
      name: 'Arquitetura & Desenvolvimento',
      items: [
        { title: 'Arquitetura de Software: Sistemas em Larga Escala', issuer: 'Udemy', year: '2022' },
        { title: 'Testes React com Jest e Enzyme', issuer: 'Udemy', year: '2022' },
        { title: 'Visualização de Dados com Kibana', issuer: 'Udemy', year: '2022' },
        { title: 'Python para Ciência de Dados', issuer: 'IBM', year: '2021' },
        { title: 'Blockchain Essentials', issuer: 'IBM', year: '2021' },
        { title: 'Vue JS 2 Guia Completo', issuer: 'COD3R', year: '2020' },
        { title: 'Nuxt JS', issuer: 'Academind', year: '2020' },
        { title: 'SEO 2020', issuer: 'Mirago', year: '2020' },
        { title: 'IBM Carbon Design System (React/Vue)', issuer: 'IBM', year: '2019' },
        { title: 'Enterprise Design Thinking Practitioner', issuer: 'IBM', year: '2019' },
        { title: 'ASP.NET Core 2.0 (Iniciante–Avançado)', issuer: 'MS Virtual Academy', year: '2019' },
        { title: 'Python e Django', issuer: 'MS Virtual Academy', year: '2019' },
        { title: 'ASP.NET MVC 5', issuer: 'MS Virtual Academy', year: '2018' },
        { title: 'Webmaster Front-End Completo', issuer: 'Danki Code', year: '2018' },
        { title: 'Rails 5, Angular 6, NativeScript', issuer: 'Udemy', year: '2018' },
        { title: 'C#, Ruby, JS/jQuery, PHP, Python, SQL', issuer: 'Solo Learn', year: '2018' },
        { title: 'Bancos de Dados para Desenvolvedores', issuer: 'Oracle', year: '2018' },
      ],
    },
    {
      name: 'Gestão & Metodologias',
      items: [
        { title: 'ITIL v3', issuer: 'Fundação Bradesco', year: '2018' },
        { title: 'Fundamentos de SCRUM (SFC)', issuer: 'Udemy', year: '2018' },
        { title: 'Gerenciamento de Projetos', issuer: 'Veduca / USP', year: '2018' },
        { title: 'Gestão de Equipes', issuer: 'FM2S', year: '2018' },
        { title: 'Metodologia PMBoK (PMP)', issuer: 'GSTI', year: '2013' },
      ],
    },
  ],
}
