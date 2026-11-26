export const profile = {
  name: 'Reshika Amarasinghe',
  title: 'Data Science Undergraduate · ML Engineer',
  tagline: 'I turn national-scale data into decisions, and LLMs into things you can trust.',
  summary:
    'Fourth-year Data Science undergraduate at SLIIT (CGPA 3.37 / 4.0) with a completed ML Engineering internship and real-world experience in geospatial analytics, predictive modelling and agentic AI. From national-scale data pipelines at Sri Lanka Telecom to multi-agent LLM systems with traceable RAG retrieval, I build ML solutions that work in production. Final-year research focuses on GNNs, Knowledge Graphs and LLMs for adaptive learning.',
  email: 'reshikaamarasinghe@gmail.com',
  github: 'https://github.com/reshika1219',
  linkedin: 'https://linkedin.com/in/reshika-amarasinghe',
}

export const stats = [
  { label: 'CGPA', value: 3.37, decimals: 2, suffix: ' / 4.0' },
  { label: 'Hex cells mapped', value: 14000, prefix: '~' },
  { label: 'Fibre points (FDPs)', value: 141000 },
  { label: 'Study participants', value: 471 },
]

export const experience = [
  {
    role: 'ML Engineer Intern',
    org: 'Sri Lanka Telecom PLC · The Embryo (R&D)',
    date: 'Dec 2025 – Jun 2026',
    points: [
      'Built a national-scale geospatial pipeline covering all Sri Lankan households and 141,000 fibre distribution points across ~14,000 hexagonal grid cells, engineering 17 features from 51 raw variables into ML-ready datasets.',
      'Built and validated models that predict the top 100 priority hexagons for service expansion, with customer mapping, purchase predictions and interactive visual reports for R&D decisions.',
    ],
  },
  {
    role: 'Data Annotator',
    org: 'Appen · Eco Pairwise EN (client: ByteDance)',
    date: 'Feb – May 2026',
    points: [
      'Contributed structured video annotations used to train and fine-tune large-scale AI/ML models.',
      'Applied labelling guidelines consistently to evaluate and rank video pairs, supporting model alignment and output quality.',
    ],
  },
  {
    role: 'Personal Assistant to the Managing Director',
    org: 'Tritech Services & Solutions (Pvt) Ltd',
    date: '2023',
    points: [
      'Executive-level support: calendars, correspondence, cross-functional communication and timely delivery of project documentation.',
    ],
  },
]

// summary = context, q/w/e/r = the highlights from the CV.
export const projects = [
  {
    id: 'kg',
    metric: 'GNN + knowledge graph',
    short: 'Knowledge Graphs',
    title: 'Pedagogy-Typed Knowledge Graphs',
    status: 'Ongoing',
    year: 'Final Year Research · SLIIT',
    stack: ['GNNs', 'Knowledge Graphs', 'LLMs', 'Python'],
    summary: 'Verified personalised learning path generation, where every explanation has to be checked before it is shown.',
    q: ['Adaptive Framework', 'Models learner knowledge states with Graph Neural Networks and pedagogy-typed knowledge graphs built from educational materials.'],
    w: ['Faithfulness Engine', 'Bloom-level-aware component that splits LLM explanations into claims and checks them against the graph, the verified path and the learner state.'],
    e: ['Validation Workflow', 'Detects unsupported or cognitively mismatched explanations, produces faithfulness reports and rewrites them for the learner.'],
    r: ['Trust Protocol', 'Research in progress: LLM explanations you can verify.'],
  },
  {
    id: 'agentic',
    metric: 'FAISS + BM25 retrieval',
    short: 'Agentic AI',
    title: 'Agentic AI System',
    status: 'Jun – Oct 2025',
    year: 'LLMs · NLP · Security & IR',
    stack: ['Python', 'React', 'Tailwind', 'MongoDB', 'FAISS', 'BM25', 'Docling'],
    summary: 'A multi-step problem-solving system guiding data science undergraduates and job seekers toward career readiness.',
    q: ['Dual Agents', 'Two collaborating agents (User Analysis and User Identification) pass work through a Decision Gate for controlled context flow.'],
    w: ['Traceable RAG', 'Hybrid FAISS + BM25 retrieval over a Docling-based local knowledge base, so every answer can be traced to its source.'],
    e: ['Ship the MVP', 'Python, React, Tailwind and MongoDB end to end, demoed to examiners.'],
    r: ['Explainer Video', 'Produced a Gen AI explainer video for the system.'],
  },
  {
    id: 'campus',
    metric: 'OAuth 2.0 · JWT · Flyway',
    short: 'Campus Hub',
    title: 'Smart Campus Operations Hub',
    status: '2026',
    year: 'Programming Applications & Frameworks',
    stack: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Tailwind', 'OAuth 2.0', 'JWT', 'Flyway'],
    summary: 'A production-grade web app that centralises university facility and asset management.',
    q: ['Onion API', 'Stateless REST API following Onion Architecture and layered MVC.'],
    w: ['Locked Down', 'Spring Security with Google OAuth 2.0 sign-in, JWT sessions and Flyway-versioned schemas.'],
    e: ['Bookings & Tickets', 'Resource booking with QR check-in, maintenance ticketing with automated SLA tracking and real-time notifications.'],
    r: ['Admin Analytics', 'Recharts-powered dashboards for admins.'],
  },
  {
    id: 'stats',
    metric: '471 participants',
    short: 'Viz Study',
    title: 'Data Visualisation & Comprehension Study',
    status: '2026',
    year: 'Statistical Modeling',
    stack: ['R 4.4.3', 'Tidyverse', 'OLS / Logistic', 'ARIMA', 'Bayesian'],
    summary: 'Quantifying how much visual design clarity changes what people understand from data.',
    q: ['A/B Framework', 'Designed an A/B test with 471 participants and a survey preprocessing pipeline.'],
    w: ['Model Suite', 'OLS and logistic regression plus ARIMA time series analysis.'],
    e: ['Triple-Checked', 'Paired t-tests, Wilcoxon signed-rank tests and Bayesian inference to validate the effect.'],
    r: ['10× Clarity', 'Clear visualisation improved comprehension accuracy by over 10×.'],
  },
  {
    id: 'bi',
    metric: 'Star schema · SCD Type 2',
    short: 'Airline BI',
    title: 'Airline BI & Data Warehouse',
    status: '2026',
    year: 'Data Warehousing & BI',
    stack: ['SQL Server', 'SSIS', 'SSAS', 'Excel OLAP', 'Power BI'],
    summary: 'An end-to-end analytics solution for flight profitability and operational analysis.',
    q: ['Star Schema', 'Data warehouse with ETL pipelines, SCD Type 2 and accumulating fact tables.'],
    w: ['OLAP Cubes', 'Cubes built for drill-down, slice, dice and pivot analysis.'],
    e: ['Dashboards', 'Interactive Power BI reports with drill-through.'],
    r: ['Full Pipeline', 'Source to dashboard in one coherent system.'],
  },
  {
    id: 'churn',
    metric: 'AUC > 0.99',
    short: 'Churn Model',
    title: 'Credit Card Churn Prediction',
    status: 'Jun – Oct 2025',
    year: 'Fundamentals of Data Mining',
    stack: ['Python', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Streamlit'],
    summary: 'Predicting at-risk customers from 10,000+ records to support targeted retention.',
    q: ['Model Bench', 'Pandas, Scikit-learn, XGBoost and LightGBM compared head to head.'],
    w: ['Explain It', 'Feature-importance insights for interpretable business decisions.'],
    e: ['Deployed', 'Shipped as an interactive Streamlit web app.'],
    r: ['AUC > 0.99', 'Reached AUC above 0.99 with XGBoost.'],
  },
  {
    id: 'yaka',
    metric: 'MERN · Google Maps API',
    short: 'Yakadabadu',
    title: 'Yakadabadu.lk Recycling Platform',
    status: 'Feb – Apr 2025',
    year: 'Scrap Collection & Recycling Management',
    stack: ['MongoDB', 'Express', 'React', 'Node.js', 'Google Maps API', 'Bootstrap'],
    summary: 'MERN web app; I owned the Driver & Route Management module.',
    q: ['Full CRUD', 'Complete driver management plus PDF pickup lists.'],
    w: ['Live Tracking', 'Real-time tracking through the Google Maps API.'],
    e: ['Smart Assignment', 'Scoring algorithm using distance, capacity, load and fuel efficiency to assign pickups.'],
    r: ['Efficient Routes', 'Improved operational efficiency of pickups.'],
  },
]

export const skillTiers = ['Core', 'Proficient', 'Comfortable']
// tier: 0 = core "Challenger" ... edit freely to match your own self-assessment.
export const skills = [
  { cat: 'Languages', items: [['Python', 0], ['SQL', 0], ['R', 0], ['Java', 1], ['JavaScript', 1], ['PL/SQL', 2], ['C', 2], ['C++', 2]] },
  { cat: 'ML & Data', items: [['Pandas', 0], ['NumPy', 0], ['Scikit-learn', 0], ['TensorFlow', 1], ['Matplotlib', 1], ['Seaborn', 1], ['GeoPandas', 1], ['Shapely', 1], ['Folium', 1], ['Fiona', 2], ['BeautifulSoup4', 2]] },
  { cat: 'Databases', items: [['PostgreSQL', 1], ['MySQL', 1], ['MongoDB', 1], ['SQL Server', 1]] },
  { cat: 'Big Data & BI', items: [['Apache Spark', 2], ['Hive', 2], ['Hadoop', 2], ['Power BI', 1], ['SSAS', 1], ['SSMS', 1]] },
  { cat: 'Cloud', items: [['AWS', 2], ['Azure', 2]] },
  { cat: 'Frameworks & Tools', items: [['React', 1], ['Vite', 1], ['Spring Boot', 1], ['MERN', 1], ['Streamlit', 1], ['Git/GitHub', 0], ['VS Code', 0], ['Colab', 1], ['WEKA', 2], ['Visual Studio 2022', 2], ['Android Studio', 2]] },
]

export const education = [
  { name: 'SLIIT', detail: 'BSc (Hons) in Information Technology (Data Science)', meta: 'Jun 2023 – Present · Year 4, Semester 1 · CGPA 3.37 / 4.0' },
  { name: 'Kegalu Vidyalaya', detail: 'GCE Advanced Level (Physical Science)', meta: '2022 · Combined Maths A · Physics B · Chemistry C · English A' },
]

export const honors = [
  { icon: '☁', title: 'AWS SimuLearn: Cloud Practitioner', note: '11 certificates', type: 'Certification' },
  { icon: '◐', title: 'Microsoft Learn: Azure Cloud Services', note: '8 certificates', type: 'Certification' },
  { icon: '❖', title: 'MongoDB Data Modeling Path', note: 'Certificate', type: 'Certification' },
  { icon: '⌛', title: 'IBM: Introduction to Data Analytics', note: 'In progress', type: 'Certification' },
  { icon: '🥈', title: 'Free Fire · 1st Runners-up', note: 'Renaissance Season 4, SLIIT', type: 'Esports' },
  { icon: '🎯', title: 'Call of Duty 4 · Semi-finalist', note: 'Inter-University Esports Championship 2023', type: 'Esports' },
  { icon: '∑', title: 'IXL Mathematics', note: '30,000+ problems solved, up to 5 certificates', type: 'Academic' },
  { icon: '★', title: 'School Prize Giving 2016', note: 'Excellence in Mathematics & Science', type: 'Academic' },
  { icon: '∞', title: 'Mathematics Olympiad 2017', note: 'Provincial level participant', type: 'Academic' },
  { icon: '✎', title: 'English Day 2017', note: 'Provincial level, Dictation', type: 'Academic' },
]

