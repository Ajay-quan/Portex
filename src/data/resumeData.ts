export type ContactLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  tech: string[];
  summary: string;
  results: string[];
};

export type Service = {
  title: string;
  description: string;
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type SkillGroup = {
  title: string;
  skills: string[];
};

export const profile = {
  name: "Ajay Varada",
  location: "Atlanta, GA",
  email: "ajayvrda@gmail.com",
  phone: "+1 404-203-2656",
  headline: "AI/ML engineer, automation builder, and full-stack systems developer.",
  valueProposition:
    "I build AI-powered digital systems, automation workflows, and content experiences that help teams move faster, look sharper, and scale smarter.",
  about:
    "I am a Master's student in Computer Science at Georgia State University with a 4.0 GPA, focused on AI systems, automation engineering, cloud tooling, and full-stack product delivery. I previously worked at Micron Technology, where I built internal automation tooling, LLM-powered workflows, dashboards, CI/CD systems, and access-control aligned engineering platforms adopted by 170+ engineers.",
};

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:ajayvrda@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/ajay-varada-46534b220" },
  { label: "GitHub", href: "https://github.com/ajayvarada" },
];

export const education = [
  {
    school: "Georgia State University",
    degree: "Master of Science in Computer Science",
    detail: "CGPA: 4.0/4.0",
    dates: "Jul 2025 - Present",
    location: "Atlanta, GA",
  },
  {
    school: "Keshav Memorial Institute of Technology",
    degree: "Bachelor of Technology in Computer Science (Data Science)",
    detail: "CGPA: 3.8/4.0",
    dates: "Dec 2020 - Jul 2024",
    location: "Telangana, India",
  },
];

export const projects: Project[] = [
  {
    title: "AegisMem - LLM Agent Memory System",
    tech: ["Python", "LangChain", "Flask", "AWS Lambda", "Vector DB"],
    summary:
      "A scalable internal AI agent platform integrating LLM APIs, RAG pipelines, vector databases, and REST microservices for memory lifecycle management.",
    results: [
      "Integrated FAISS/ChromaDB-backed retrieval across heterogeneous sources",
      "Implemented automated access and data integration controls",
      "Open-sourced with structured technical documentation and research output",
    ],
  },
  {
    title: "Auto Image Annotations",
    tech: ["Python", "TensorFlow", "SSD MobileNet", "REST API", "SQL"],
    summary:
      "An internal object detection and inference pipeline with SQL-backed data flow and REST APIs for automated image annotation.",
    results: [
      "0.68 mAP with latency under 600 ms per image",
      "Reduced annotation time by 90%",
      "Saved 100+ engineering hours through workflow automation",
    ],
  },
  {
    title: "Ischemic Stroke Classification",
    tech: ["PyTorch", "TensorFlow", "ResNet101V2", "scikit-learn", "SQL"],
    summary:
      "A modular clinical image analysis pipeline trained on pathology image tiles with REST API serving and stakeholder-facing visualizations.",
    results: [
      "Trained on 30,000+ pathology image tiles",
      "Achieved 0.96 AUC and 93% accuracy",
      "Improved accuracy by 20% over baseline",
    ],
  },
];

export const services: Service[] = [
  {
    title: "AI/ML Systems",
    description:
      "LLM workflows, RAG pipelines, vector search, model evaluation, and practical AI systems built for real operations.",
  },
  {
    title: "Automation Engineering",
    description:
      "Workflow automation, scripting at scale, Slack bots, CI/CD tooling, access provisioning, and internal platform delivery.",
  },
  {
    title: "Full-Stack Web Apps",
    description:
      "React interfaces, REST APIs, Flask/Django services, and clean product experiences tied to measurable business workflows.",
  },
  {
    title: "Cloud & Data Dashboards",
    description:
      "AWS Lambda, Azure Functions, operational dashboards, data extraction pipelines, and visibility tooling for engineering teams.",
  },
  {
    title: "Computer Vision / Image Processing",
    description:
      "Clinical image analysis, segmentation pipelines, object detection, inference APIs, and performance visualization.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C#", "SQL", "JavaScript", "TypeScript"],
  },
  {
    title: "AI/ML",
    skills: ["LLM APIs", "LangChain", "NLP", "RAG Pipelines", "Vector Databases", "PyTorch", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    title: "Web Development",
    skills: ["React", "REST API Design", "Flask", "Django", "Microservices Architecture"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS Lambda", "AWS S3", "Azure Functions", "Azure DevOps", "Docker", "GitHub Actions", "CI/CD", "Linux/Unix"],
  },
  {
    title: "Testing & Automation",
    skills: ["Workflow Automation", "Slack Bot Development", "GitOps", "Terraform", "Scripting at Scale", "Code Reviews"],
  },
  {
    title: "Databases",
    skills: ["SQL", "Vector Databases", "FAISS", "ChromaDB", "Data Pipelines"],
  },
];

export const experiences: Experience[] = [
  {
    company: "Micron Technology",
    role: "Software Engineer I (Promoted from Intern)",
    dates: "Jul 2024 - Jul 2025",
    bullets: [
      "Designed and deployed internal automation tooling and LLM-powered workflows integrating Python, REST APIs, Azure Functions, document processing, and data extraction pipelines.",
      "Built tools adopted by 170+ engineers, reducing per-task overhead by 40% and saving 140+ hours/month; earned multiple Employee of the Month awards.",
      "Automated 300+ workflows including access provisioning and identity lifecycle management tasks, achieving a 35% reduction in release cycle time.",
      "Built internal dashboards, RBAC-aligned access controls, and automated policy enforcement that increased system reliability by 30%.",
      "Led 50+ code reviews, mentored 2 junior engineers, and collaborated with IT, security, and business stakeholders.",
    ],
  },
  {
    company: "Micron Technology",
    role: "Software Engineering Intern",
    dates: "Jan 2024 - Jul 2024",
    bullets: [
      "Built 100+ Python automation scripts and internal workflow tools integrated into Azure CI/CD pipelines.",
      "Debugged complex enterprise system edge cases and documented stakeholder-facing solutions.",
      "Awarded Best Intern of the Year and converted to full-time Software Engineer.",
    ],
  },
  {
    company: "DigiClinics Research and Services",
    role: "AI/ML Engineer Intern",
    dates: "Aug 2023 - Dec 2023",
    bullets: [
      "Built an end-to-end ML pipeline in Python and PyTorch for clinical image analysis.",
      "Implemented scalable data pipelines and REST API integrations achieving approximately 90% segmentation accuracy.",
      "Reduced processing time from 5 min/image to under 10 sec, deployed across 2 hospitals and 10+ institutions, and co-authored a peer-reviewed manuscript under review.",
    ],
  },
];

export const metrics = [
  { value: "170+", label: "Engineers served" },
  { value: "140+", label: "Hours saved monthly" },
  { value: "300+", label: "Workflows automated" },
  { value: "93%", label: "Stroke model accuracy" },
];
