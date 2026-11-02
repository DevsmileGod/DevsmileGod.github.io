export interface Experience {
  company: string;
  role: string;
  period: string;
  /** A line under the role, in the accent colour */
  platform?: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "Independent",
    role: "Software Engineer · AI/ML Consultant",
    period: "Aug 2026 – Present",
    platform: "Self-employed · Woodstock, Ontario",
    achievements: [
      "Design and build LLM-based agents that automate business workflows and reduce manual effort.",
      "Deliver end-to-end custom software engagements spanning requirements, architecture, development, testing, deployment, and ongoing support.",
      "Develop full-stack applications, backend services, and third-party API integrations for clients across industries.",
      "Apply generative AI and retrieval-augmented generation (RAG) research to production client solutions.",
    ],
    technologies: ["Python", "LLMs", "AI agents", "RAG", "REST APIs", "Full-stack"],
  },
  {
    company: "Waabi",
    role: "Senior Software Engineer",
    period: "Oct 2024 – Jul 2026",
    platform: "Toronto, Ontario",
    achievements: [
      "Architected and delivered AI/ML applications that brought machine learning models and intelligent automation into production systems.",
      "Built LLM-powered applications and multi-agent workflows for data processing, decision support, and business automation.",
      "Owned ML pipelines end to end: data engineering, model experimentation, evaluation, and deployment.",
      "Implemented multimodal AI features combining text, image, and audio processing.",
      "Evaluated emerging AI technologies and established best practices that improved model performance and scalability.",
      "Led technical design discussions and set engineering practices for the team.",
    ],
    technologies: ["LLMs", "Multi-agent systems", "ML pipelines", "Multimodal AI", "MLOps", "Python"],
  },
  {
    company: "BenchSci",
    role: "Senior Software Engineer, AI/ML",
    period: "Oct 2022 – Jul 2024",
    platform: "Toronto, Ontario",
    achievements: [
      "Led development of AI-powered software using Python, ML frameworks, and LLM services.",
      "Built NLP and predictive modeling features for intelligent automation and data analysis.",
      "Developed ML pipelines covering data preparation, training, evaluation, and deployment.",
      "Integrated generative AI capabilities into existing products.",
      "Reviewed technical implementations and guided engineers toward scalable designs.",
    ],
    technologies: ["Python", "NLP", "Predictive modeling", "Generative AI", "ML pipelines", "LLMs"],
  },
  {
    company: "BenchSci",
    role: "Software Engineer",
    period: "Aug 2020 – Sep 2022",
    platform: "Toronto, Ontario",
    achievements: [
      "Built and maintained backend services and web applications supporting business operations and customer-facing platforms.",
      "Developed data processing modules and integrated external services.",
      "Resolved production issues and improved reliability through ongoing maintenance.",
      "Built reusable components and automated manual internal processes.",
    ],
    technologies: ["Python", "Backend development", "Data processing", "API integration", "Automation"],
  },
  {
    company: "Tech Mahindra",
    role: "Software Engineer",
    period: "Aug 2018 – May 2020",
    platform: "Toronto, Ontario",
    achievements: [
      "Built web applications using Python, JavaScript, React, and modern backend frameworks.",
      "Designed and integrated REST APIs between frontend and backend services.",
      "Found and fixed bugs, optimized existing code, and improved application performance.",
      "Designed database structures and tuned SQL queries to support growing data volumes.",
    ],
    technologies: ["Python", "JavaScript", "React", "REST APIs", "SQL"],
  },
  {
    company: "Architech",
    role: "Software Developer",
    period: "Feb 2017 – Jun 2018",
    platform: "Toronto, Ontario",
    achievements: [
      "Developed and maintained web applications using Python, JavaScript, and React.",
      "Supported backend integration with frontend code.",
      "Debugged issues and contributed features with the development team.",
    ],
    technologies: ["Python", "JavaScript", "React"],
  },
];

/**
 * The employers in time order, for the Experience zoom: each fades in at `from` and out at the
 * next one's, as the year rolls from the first to today.
 */
export const ERAS = [
  { from: 2017, company: "Architech", line: "Web applications, software developer" },
  { from: 2018, company: "Tech Mahindra", line: "Web apps and REST APIs" },
  { from: 2020, company: "BenchSci", line: "Backend, then senior AI/ML engineer" },
  { from: 2024, company: "Waabi", line: "LLM apps and multi-agent workflows, senior engineer" },
  { from: 2026, company: "Independent", line: "Custom software and AI agents for businesses" },
] as const;
