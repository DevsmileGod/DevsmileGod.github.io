import {
  Bot,
  Briefcase,
  Database,
  Gamepad2,
  GitBranch,
  Layers,
  Mail,
  Scissors,
  Server,
  Sparkles,
  Split,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type ProjectCategory = "AI" | "ML" | "Backend" | "Data" | "MLOps" | "Full-stack" | "Desktop" | "Game";

export interface Project {
  slug: string; // URL friendly identifier
  title: string;
  cardTitle?: string; // The shorter title the Work card shows; falls back to title
  description: string;
  category?: ProjectCategory;
  /** Problem, approach and outcome: left out where there is nothing specific and true to say */
  problem?: string;
  solution?: string;
  outcome?: string;
  tags: string[];
  featured?: boolean;
  icon: LucideIcon;
  /** Own-time, open-source work: its repository */
  repo?: string;
  /** A line under the headline, such as the employer */
  origin?: string;
}

// Professional work from the résumé, and open-source projects from GitHub. The résumé quotes no
// figures, so none appear here.
export const projects: Project[] = [
  // Independent consulting
  {
    slug: "business-ai-agents",
    title: "LLM Agents That Automate Business Workflows",
    cardTitle: "AI Agents for Business",
    description:
      "LLM-based agents, designed and built for clients, that take repetitive business workflows off people.",
    category: "AI",
    problem: "Businesses lose hours to repetitive, manual workflows",
    solution: "Design and build LLM-based agents that carry out those workflows, applying generative AI and RAG",
    outcome: "Less manual effort, delivered from requirements through deployment and ongoing support",
    tags: ["LLMs", "AI agents", "RAG", "Python"],
    icon: Bot,
    featured: true,
    origin: "Independent consulting",
  },
  {
    slug: "client-software",
    title: "Custom Software and Third-Party API Integrations",
    cardTitle: "Custom Software",
    description:
      "End-to-end custom software for clients across industries: full-stack applications, backend services, and API integrations.",
    category: "Full-stack",
    solution:
      "Own each engagement end to end: requirements, architecture, development, testing, deployment, and ongoing support",
    tags: ["Full-stack", "REST APIs", "API integration", "Solution architecture"],
    icon: Briefcase,
    featured: true,
    origin: "Independent consulting",
  },

  // Waabi
  {
    slug: "multi-agent-workflows",
    title: "LLM Applications and Multi-Agent Workflows",
    cardTitle: "Multi-Agent Workflows",
    description:
      "LLM-powered applications and multi-agent workflows for data processing, decision support, and business automation.",
    category: "AI",
    solution: "Built LLM-powered applications and multi-agent workflows, and brought them into production systems",
    outcome: "Machine learning and intelligent automation running in production",
    tags: ["LLMs", "Multi-agent systems", "Automation", "Python"],
    icon: Workflow,
    featured: true,
    origin: "Waabi",
  },
  {
    slug: "multimodal-ai",
    title: "Multimodal AI: Text, Image, and Audio",
    cardTitle: "Multimodal AI",
    description: "Multimodal AI features that combine text, image, and audio processing.",
    category: "AI",
    solution: "Implemented features that process text, image, and audio together",
    tags: ["Multimodal AI", "Generative AI", "Python"],
    icon: Layers,
    featured: true,
    origin: "Waabi",
  },
  {
    slug: "ml-pipelines",
    title: "ML Pipelines, End to End",
    cardTitle: "ML Pipelines",
    description:
      "Machine learning pipelines owned from data engineering through experimentation, evaluation, and deployment.",
    category: "MLOps",
    solution: "Owned the pipelines end to end, evaluated emerging AI technologies, and set best practices for the team",
    outcome: "Better model performance and scalability",
    tags: ["ML pipelines", "MLOps", "Data engineering", "Model evaluation"],
    icon: GitBranch,
    featured: true,
    origin: "Waabi",
  },

  // BenchSci
  {
    slug: "nlp-predictive-modeling",
    title: "NLP and Predictive Modeling",
    cardTitle: "NLP and Predictive Models",
    description: "NLP and predictive modeling features for intelligent automation and data analysis.",
    category: "ML",
    solution:
      "Built NLP and predictive modeling features with Python and ML frameworks, on pipelines covering data preparation, training, evaluation, and deployment",
    tags: ["NLP", "Predictive modeling", "Machine learning", "Python"],
    icon: Split,
    featured: true,
    origin: "BenchSci",
  },
  {
    slug: "generative-ai-integration",
    title: "Generative AI in Existing Products",
    cardTitle: "Generative AI Integration",
    description: "Generative AI and LLM services built into products customers already used.",
    category: "AI",
    solution:
      "Integrated generative AI capabilities into existing products, and guided engineers toward scalable designs",
    tags: ["Generative AI", "LLMs", "Python"],
    icon: Sparkles,
    origin: "BenchSci",
  },
  {
    slug: "backend-services",
    title: "Backend Services and Data Processing",
    cardTitle: "Backend Services",
    description:
      "Backend services and web applications behind business operations and customer-facing platforms, with data processing and external integrations.",
    category: "Backend",
    solution:
      "Built backend services and data processing modules, integrated external services, and automated manual internal processes",
    outcome: "More reliable production systems through ongoing maintenance",
    tags: ["Backend development", "Data processing", "API integration", "Python"],
    icon: Server,
    origin: "BenchSci",
  },

  // Tech Mahindra and Architech
  {
    slug: "web-apps-rest-apis",
    title: "Web Applications, REST APIs, and SQL",
    cardTitle: "Web Apps and REST APIs",
    description:
      "Web applications in Python, JavaScript, and React, with REST APIs between frontend and backend and SQL databases behind them.",
    category: "Full-stack",
    solution:
      "Built the applications and their REST APIs, designed database structures, and tuned SQL queries for growing data volumes",
    outcome: "Better application performance, and databases that kept up with growing data",
    tags: ["Python", "JavaScript", "React", "REST APIs", "SQL"],
    icon: Database,
    origin: "Tech Mahindra · Architech",
  },

  // Open source, on GitHub
  {
    slug: "pixel-asset-extractor",
    title: "Pixel Asset Extractor",
    description: "A Python desktop app that cuts clean, transparent PNG sprites out of large pixel-art sheets.",
    category: "Desktop",
    tags: ["Python", "PySide6", "OpenCV"],
    icon: Scissors,
    repo: "https://github.com/DevsmileGod/pixel_asset_extractor",
    origin: "Open source",
  },
  {
    slug: "auto-gmessage",
    title: "Auto_GMessage",
    description:
      "A Python desktop app for Gmail outreach: it sends a unique first message to each recipient, then watches the inbox and replies to anyone who answers.",
    category: "Desktop",
    tags: ["Python", "Gmail", "Automation"],
    icon: Mail,
    repo: "https://github.com/DevsmileGod/Auto_GMessage",
    origin: "Open source",
  },
  {
    slug: "hell-farmers",
    title: "Hell Farmers",
    description: "A 2D browser game in a single HTML file, with boss fights and sound.",
    category: "Game",
    tags: ["JavaScript", "HTML", "Game"],
    icon: Gamepad2,
    repo: "https://github.com/DevsmileGod/2D-full-game",
    origin: "Open source",
  },
];

/** What the Work section shows, by slug, newest work first */
export const WORK = {
  independent: ["business-ai-agents", "client-software"],
  waabi: ["multi-agent-workflows", "multimodal-ai", "ml-pipelines"],
  benchsci: ["nlp-predictive-modeling", "generative-ai-integration", "backend-services"],
  early: ["web-apps-rest-apis"],
  openSource: ["pixel-asset-extractor", "auto-gmessage", "hell-farmers"],
} as const;

/** Every project the Work section shows, in order */
export const WORK_ORDER: readonly string[] = [
  ...WORK.independent,
  ...WORK.waabi,
  ...WORK.benchsci,
  ...WORK.early,
  ...WORK.openSource,
];

export const projectBySlug = (slug: string) => {
  const found = projects.find((p) => p.slug === slug);
  if (!found) throw new Error(`Unknown project: ${slug}`);
  return found;
};
