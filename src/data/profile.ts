/**
 * Your GitHub username, e.g. "octocat". It turns on the "Experiments" repo list, the "Latest on
 * GitHub" card, and the GitHub links. Empty hides all of them. scripts/snapshot-github.mjs reads it too.
 */
const GITHUB_USER: string = "devsmilegod";

/**
 * Your own domain, e.g. "mitchellgray.dev" (no https://, no slash). Set, the site moves to the root
 * of that domain and the build writes the CNAME file GitHub Pages needs. Point the domain's DNS at
 * GitHub first (see README, "Custom domain"). Empty serves the site from GitHub Pages.
 */
export const CUSTOM_DOMAIN: string = "";

/**
 * True when the repository is named <username>.github.io, which GitHub Pages serves at the root of
 * https://<username>.github.io/. False serves it from a project repository named "Portfolio".
 */
const USER_SITE: boolean = true;

/** The path the built site is served under: the root, or /Portfolio/ for a project repository */
export const BASE_PATH = CUSTOM_DOMAIN || USER_SITE ? "/" : "/Portfolio/";

/** Where the site lives, with a trailing slash. Used for the canonical URL and social-card tags. */
export const SITE_URL = CUSTOM_DOMAIN
  ? `https://${CUSTOM_DOMAIN}/`
  : GITHUB_USER
    ? `https://${GITHUB_USER.toLowerCase()}.github.io${BASE_PATH}`
    : BASE_PATH;

/** The person, as the site introduces them. Facts only, all from the résumé; nothing here is invented. */
export const PROFILE = {
  name: "Mitchell Gray",
  first: "Mitchell",
  last: "Gray",
  title: "Senior Software Engineer",
  /** The second half of the hero's label: "Senior Software Engineer · AI/ML Engineer" */
  focus: "AI/ML Engineer",
  email: "mitchell.gray.3313@gmail.com",
  /** Under public/, relative to BASE_URL */
  resume: "mitchell-gray-resume.pdf",
  resumeDownloadName: "mitchell-gray-resume.pdf",
  city: "Woodstock, Ontario, Canada",
  timeZone: "America/Toronto",
  /** Shown after the local time */
  timeZoneLabel: "ET",
  // Midnight in Ontario, not UTC, so the counter reads the same for every visitor
  careerStart: new Date("2017-02-01T00:00:00-05:00"),
  /** The hero statement, two lines in Antonio */
  headline: ["Production AI.", "Reliable software."],
  /** The hero line under the statement */
  tagline:
    "Nine years building software, from web applications and backend services to LLM agents, multi-agent workflows, and ML pipelines in production.",
  intro:
    "I have spent nine years building software: web applications and REST APIs at Architech and Tech Mahindra, backend services and then AI/ML products at BenchSci, and LLM applications, multi-agent workflows, and ML pipelines as a senior engineer at Waabi. Today I consult independently, building custom software, AI agents that automate repetitive workflows, and third-party API integrations, from requirements through deployment and support.",
  githubUser: GITHUB_USER,
  /** Public profiles. Leave a value empty to hide it everywhere on the site. */
  links: {
    github: GITHUB_USER ? `https://github.com/${GITHUB_USER}` : "",
    /** Your full LinkedIn URL, e.g. "https://www.linkedin.com/in/your-handle" */
    linkedin: "https://www.linkedin.com/in/mitchell-gray-",
  },
  /** How I think: three principles */
  principles: [
    {
      title: "Start from the workflow.",
      note: "An agent earns its place by taking real, repetitive work off people. Map the process first, then decide where AI belongs.",
    },
    {
      title: "Production is the test.",
      note: "A model is done when it runs reliably inside the APIs, databases, and frontends around it, not when the demo works.",
    },
    {
      title: "Build what people adopt.",
      note: "Software proves itself when people choose to use it. I build for the person on the other end of the screen.",
    },
  ],
  /** Closes the Experience list */
  education: {
    year: "2012 – 2016",
    title: "Bachelor's Degree, Computer Science",
    org: "Toronto Metropolitan University",
  },
} as const;

/** The public profiles, in the order the site lists them; empty ones are left out */
export const SOCIALS: readonly { label: string; href: string }[] = [
  { label: "LinkedIn", href: PROFILE.links.linkedin },
  { label: "GitHub", href: PROFILE.links.github },
].filter((s) => s.href !== "");

/** What I do: five services with the real stack behind each */
export const SERVICES: { title: string; blurb: string; stack: string[]; proof: { label: string; href: string }[] }[] = [
  {
    title: "AI agents and automation",
    blurb:
      "LLM-based agents and multi-agent workflows that take repetitive work off your team: data processing, decision support, and business automation.",
    stack: ["LLMs", "AI agents", "Multi-agent systems", "Python", "Automation"],
    proof: [
      { label: "Agents that automate client workflows", href: "#case-business-ai-agents" },
      { label: "Multi-agent workflows in production", href: "#case-multi-agent-workflows" },
    ],
  },
  {
    title: "LLM and generative AI apps",
    blurb:
      "Generative AI and retrieval-augmented generation built into real products, including multimodal features across text, image, and audio.",
    stack: ["LLMs", "RAG", "Generative AI", "Multimodal AI", "NLP"],
    proof: [
      { label: "Generative AI in existing products", href: "#case-generative-ai-integration" },
      { label: "Multimodal features: text, image, audio", href: "#case-multimodal-ai" },
    ],
  },
  {
    title: "ML pipelines and MLOps",
    blurb:
      "Machine learning owned end to end: data engineering, experimentation, evaluation, and deployment, with predictive models and NLP where they fit.",
    stack: ["Machine learning", "ML pipelines", "MLOps", "Predictive modeling", "Python"],
    proof: [
      { label: "ML pipelines from data to deployment", href: "#case-ml-pipelines" },
      { label: "NLP and predictive modeling", href: "#case-nlp-predictive-modeling" },
    ],
  },
  {
    title: "Full-stack custom software",
    blurb:
      "Web applications from the database to the browser, delivered from requirements and architecture through testing, deployment, and support.",
    stack: ["Python", "JavaScript", "React", "REST APIs", "SQL"],
    proof: [
      { label: "Custom software for clients", href: "#case-client-software" },
      { label: "Web applications and REST APIs", href: "#case-web-apps-rest-apis" },
    ],
  },
  {
    title: "Backend and API integration",
    blurb:
      "Backend services, data processing, and third-party API integrations that connect the systems a business already runs.",
    stack: ["Backend development", "API integration", "Data processing", "Python", "Software architecture"],
    proof: [{ label: "Backend services and data processing", href: "#case-backend-services" }],
  },
];
