import { Project, SkillCategory, Education, Certification, Paper } from './types';

export const personalInfo = {
  name: "Abel Nathanael Hutapea",
  headline: "Final Year Data Science Undergraduate",
  bio: "I'm a fourth-year Data Science student passionate about machine learning, deep learning, and big data. I enjoy building practical analytics products, conducting research, and translating complex data into meaningful insights.",
  availability: "Available for full-time internships: Feb 2027 onwards.",
  email: "abelnathan8@gmail.com",
  github: "https://github.com/fakebaconpancakes",
  linkedin: "https://www.linkedin.com/in/abel-nathanael-hutapea/",
  profileImage: "/me.png"
};

export const education: Education = {
  institution: "Xiamen University Malaysia",
  degree: "Bachelor of Engineering in Data Science (Honours)",
  duration: "September 2023 - September 2027 (Expected)",
  description: "GPA: 3.87/4.00 | Dean's List. Building a strong foundation across applied machine learning, deep learning, big data analytics, data mining, statistics, and databases.",
  coursework: [
    "Applied Machine Learning",
    "Deep Learning",
    "Big Data Analytics",
    "Data Mining",
    "Python & TensorFlow",
    "R Programming",
    "Database",
    "Time Series",
    "Bayesian Statistics"
  ]
};

export const skillsData: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "R", "SQL", "JavaScript", "HTML/CSS"]
  },
  {
    title: "ML & Data Libraries",
    skills: ["PyTorch", "Pandas", "NumPy", "Scikit-Learn", "Matplotlib", "Seaborn"]
  },
  {
    title: "Analytics Platforms",
    skills: ["DuckDB", "MotherDuck", "Streamlit", "Tableau", "SAP Analytics Cloud", "IBM Watson Studio"]
  },
  {
    title: "Developer Tools",
    skills: ["Docker", "n8n", "Jupyter Notebooks", "WandB", "Git"]
  }
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "Lightweight Ante-Hoc Skeleton-Based Action Recognition",
    description: "Engineered a four-stream human activity recognition pipeline with Spatial GCNs and Temporal Transformers in PyTorch, classifying 120 action categories on NTU-RGB+D. Built an explainable diagnostic tool that maps attention across 25 skeletal joints and 100 frames.",
    image: "/sar.png",
    tags: ["Python", "PyTorch", "Docker", "WandB"],
    githubUrl: "https://github.com/fakebaconpancakes"
  },
  {
    id: "2",
    title: "Instacart E-Commerce Analytics",
    description: "Built a cloud-connected Streamlit dashboard querying a 32M+ row dataset through DuckDB and MotherDuck. Developed modular SQL for customer segmentation, product affinity, and fulfillment planning, identifying the 10 AM–4 PM peak demand window.",
    image: "https://images.unsplash.com/photo-1648091855459-5f41adebbc77?auto=format&fit=crop&w=1200&q=80",
    tags: ["SQL", "Python", "DuckDB", "Streamlit"],
    githubUrl: "https://github.com/fakebaconpancakes/instacart-sql-analysis",
    demoUrl: "https://mbxnc26c75dneuj8yrcuog.streamlit.app/"
  },
  {
    id: "3",
    title: "Marketing A/B Testing & Funnel Analysis",
    description: "Built an interactive dashboard for a 30-day marketing A/B test, diagnosing funnel drop-offs with SciPy non-parametric tests and 10,000-iteration bootstrapping. Added a dynamic profit simulator to optimize campaign CPA.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    tags: ["Python", "Streamlit", "SciPy", "Plotly"],
    githubUrl: "https://github.com/fakebaconpancakes/ab_testing-experimentation",
    demoUrl: "https://abtesting-advertising-experimentation.streamlit.app/"
  },
  {
    id: "4",
    title: "Downhole Digital Twin: Real-Time Edge AI for Drilling Telemetry",
    description: "Built an interactive digital twin for the Volve field that streams drilling telemetry, detects anomalies with Isolation Forest, explains predictions with SHAP, and supports what-if simulations for safer equipment decisions.",
    image: "/oil.png",
    tags: ["Python", "FastAPI", "React", "scikit-learn", "SHAP"],
    githubUrl: "https://github.com/fakebaconpancakes/Volve_Equipment_Failure_Prediction",
    demoUrl: "https://volve-equipment-failure-prediction.vercel.app/"
  }
];

export const timelineData = [
  {
    id: "1",
    date: "Mar 2026 - Present",
    title: "Deep Learning Research Project",
    organization: "Independent Research",
    description: "Engineering a lightweight ante-hoc skeleton-based action recognition pipeline with PyTorch, Spatial GCNs, Temporal Transformers, Docker, and WandB.",
    type: "experience",
    side: "right"
  },
  {
    id: "2",
    date: "Oct 2025 - Present",
    title: "Head of Design Department",
    organization: "XMUM Artificial Intelligence Club (MINDS)",
    description: "Directing the club's brand identity and media collateral, including materials for the inaugural hackathon and corporate workshops with Huawei and Celcom.",
    type: "experience",
    side: "left"
  },
  {
    id: "3",
    date: "Nov 2025 - Jan 2026",
    title: "Undergraduate Research Assistant",
    organization: "Xiamen University Malaysia",
    description: "Co-authored a Q1 review paper synthesizing 26 peer-reviewed studies, executed 150 controlled data collection sessions across three propagation environments, and analyzed multi-environment datasets for grant-funded deep learning research.",
    type: "experience",
    side: "right"
  },
  {
    id: "4",
    date: "Sep 2024 - Nov 2025",
    title: "Head of Public Relations Department",
    organization: "XMUM Artificial Intelligence Club (MINDS)",
    description: "Led public outreach campaigns for corporate workshops with Huawei and Gamuda, reaching more than 200 attendees and increasing video content engagement by over 140%.",
    type: "experience",
    side: "left"
  },
  {
    id: "5",
    date: "Sep 2023 - Sep 2027",
    title: "Bachelor of Engineering in Data Science (Honours)",
    organization: "Xiamen University Malaysia",
    description: "Maintaining a 3.87/4.00 GPA while building expertise in applied machine learning, deep learning, big data analytics, data mining, time series, Bayesian statistics, and database systems.",
    type: "education",
    side: "right"
  }
];

export const papersData: Paper[] = [
  {
    id: "1",
    title: "WiFi-Based Human Activity Recognition and Fall Detection with Taxonomy, Benchmarks, and Future Directions",
    authors: "Abel Nathanael Hutapea et al.",
    venue: "Artificial Intelligence and Applications",
    date: "2026",
    abstract: "A review of 26 peer-reviewed studies on WiFi-based human activity recognition and fall detection, identifying deployment gaps, data architectures, and future research directions.",
    link: "https://ojs.bonviewpress.com/index.php/AIA/article/view/7517"
  }
];

export const certificationsData: Certification[] = [
  {
    id: "1",
    title: "Enterprise Data Science in Practice",
    issuer: "Credly",
    type: "Professional Badge",
    link: "https://www.credly.com/badges/bf66711f-f0d1-4c80-9109-2c4dd5b36ffa/linked_in_profile"
  },
  {
    id: "2",
    title: "Data Literacy",
    issuer: "Credly",
    type: "Professional Badge",
    link: "https://www.credly.com/badges/32c2cf71-6987-4522-8194-c9ccf7c62221/linked_in_profile"
  },
  {
    id: "3",
    title: "Exploring SAP Analytics Cloud - Course Completion",
    issuer: "SAP",
    type: "Course Completion",
    link: "https://badger.learning.sap.com/verify/xusov-kicyp-dodyp-tafip-mesar"
  },
  {
    id: "4",
    title: "Deloitte Australia - Data Analytics Job Simulation",
    issuer: "Deloitte Australia",
    type: "Job Simulation"
  },
  {
    id: "5",
    title: "UMHackathon 2025 Participation",
    issuer: "UMHackathon",
    type: "Economic Empowerment Through AI Domain"
  },
  {
    id: "6",
    title: "Dean's List Award",
    issuer: "Xiamen University Malaysia",
    type: "Academic Honour"
  },
  {
    id: "7",
    title: "XMUM Merit Scholarship",
    issuer: "Xiamen University Malaysia",
    type: "Academic Honour"
  }
];
