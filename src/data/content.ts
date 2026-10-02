export const profile = {
  name: "Jai Nagle",
  role: "Software Engineer",
  location: "Ireland",
  status: "Open to new roles",
  email: "jainagle36@gmail.com",
  github: "https://github.com/JaiNagle",
  linkedin: "https://www.linkedin.com/in/jainagle/",
  intro:
    "I'm a software engineer who likes building backend systems that hold up in production, with a growing interest in applying machine learning to real problems.",
};

export const about = {
  paragraphs: [
    "I'm a software engineer currently finishing an M.Sc. in Computer Science at Trinity College Dublin. Before that I spent a few years shipping production code across machine vision, cloud infrastructure, and full-stack development.",
    "At Pragati Switchgears I built Python-based machine vision models for automated quality inspection on production lines, along with the desktop GUI operators used to act on what the model found. Before that, at Kellanova, I provisioned and maintained AWS infrastructure and worked with the data analytics team to cut cloud costs by auditing and rightsizing what we were running.",
    "I'm Red Hat certified (RHCSA) and still spend most of my time in Python, whether that's an API, a training pipeline, or the Linux box it all runs on.",
  ],
  details: [
    { label: "Location", value: "Ireland" },
    { label: "Focus", value: "Python · ML · Systems" },
    { label: "Status", value: "Open to work" },
  ],
};

export type EducationEntry = {
  institution: string;
  degree: string;
  dates: string;
  location: string;
  detail?: string;
};

export const education: EducationEntry[] = [
  {
    institution: "Trinity College Dublin",
    degree: "M.Sc. Computer Science",
    dates: "Sep 2026",
    location: "Dublin, Ireland",
  },
  {
    institution:
      "Mukesh Patel School of Technology Management and Engineering",
    degree: "B.Tech, Computer Engineering",
    dates: "Jun 2022",
    location: "Mumbai, India",
  },
];

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C#", "C++", "Go", "JavaScript", "SQL"],
  },
  {
    category: "Frameworks & libraries",
    items: [
      "FastAPI",
      "ASP.NET MVC",
      "React Native",
      "Selenium",
      "Keras",
      "OpenCV",
      "scikit-learn",
    ],
  },
  {
    category: "Cloud & infrastructure",
    items: ["AWS", "GCP", "Docker", "Kubernetes", "Linux (RHEL)", "Prometheus", "Grafana"],
  },
  {
    category: "Databases",
    items: ["PostgreSQL", "PostGIS", "CockroachDB", "MS-SQL", "Redis"],
  },
  {
    category: "Tools",
    items: ["Git", "Claude Code", "Cursor", "Postman", "Jupyter Notebooks"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Pragati Switchgears",
    role: "Software Engineer",
    dates: "Nov 2024 – Sep 2025",
    bullets: [
      "Built machine vision inspection models in Python for automated component quality control, cutting manual inspection time by 60% across production lines",
      "Trained and validated models on 5,000+ labelled component images, reaching 95% defect-detection accuracy with under 100ms inference per part",
      "Developed desktop GUIs for real-time defect detection and operator feedback, owning the full stack from image processing to the interface used by 5+ operators per shift",
    ],
  },
  {
    company: "Kellanova (formerly Kellogg Company)",
    role: "Associate Technical Analyst, Infrastructure Compute Team",
    dates: "Jul 2022 – Sep 2024",
    bullets: [
      "Provisioned and managed 20+ Linux servers on AWS (EC2, EBS, CloudFormation), handling configuration and access over SSH while sustaining 99.9% availability",
      "Partnered with the Global Data Analytics team to cut AWS spend by 10%, auditing redundant infrastructure and decommissioning 20+ unused servers",
      "Built an internal Python and Excel self-assessment tool for the company's YODA development program, adopted by 100+ employees across the organization",
    ],
  },
  {
    company: "PMaps",
    role: "Software Developer, Intern",
    dates: "Jun 2021 – Jun 2022",
    bullets: [
      "Built 3+ customer-facing interfaces for a core platform rewrite using ASP.NET MVC, REST APIs, and MS-SQL",
      "Extended the invoicing app in C# with three new features for the finance team, reducing manual invoice handling time by 50%",
      "Replaced manual regression testing with a Selenium and Java suite of 150+ automated test cases, cutting the regression cycle from two days to three hours",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  status?: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "msc-dissertation",
    title: "Multi-Scale Contrastive Learning",
    summary:
      "MSc dissertation on a multi-scale extension to SimCLR, using ablation analysis to pin down where the few-shot classification gains actually come from.",
    description:
      "Designed and evaluated a multi-scale extension to SimCLR for few-shot image classification. Ablation analysis traces a 54.21% vs 48.69% accuracy gain on CIFAR-FS to evaluation-time feature concatenation, not the training objective itself.",
    stack: [
      "Python",
      "Self-Supervised Learning",
      "Contrastive Learning",
      "Few-Shot Learning",
    ],
    features: [
      "Multi-scale extension to SimCLR for few-shot classification",
      "+5.5% accuracy gain on CIFAR-FS over the SimCLR baseline",
      "Ablation analysis isolating the true source of the gain",
      "Gain traced to evaluation-time feature concatenation, not the training objective",
    ],
    github: "https://github.com/JaiNagle/msc-dissertation",
    demo: undefined,
  },
  {
    slug: "clearway",
    title: "ClearWay",
    summary:
      "A road capacity booking platform built to explore distributed systems concepts in a real, multi-service setting.",
    description:
      "Designed and built with a team of five, applying distributed transactions, consensus, and event-driven messaging to keep booking state consistent across services under load.",
    stack: [
      "Go",
      "Distributed Systems",
      "Sagas",
      "Event-Driven Architecture",
      "Consensus",
      "Load Balancing",
    ],
    features: [
      "Distributed transactions via the Saga pattern",
      "Consensus and leader election",
      "Event-driven messaging between services",
      "Load balancing across services",
    ],
    github: undefined,
    demo: undefined,
  },
  {
    slug: "saferoute",
    title: "SafeRoute",
    summary:
      "A safety-focused routing app that helps pedestrians and public transit users choose safer routes, built with a team of ten.",
    description:
      "Backend route computation in FastAPI paired with PostGIS for geospatial queries, so routes account for real safety data instead of just distance. My focus was the routing service and the geospatial query layer.",
    stack: [
      "Python",
      "FastAPI",
      "PostgreSQL",
      "PostGIS",
      "React Native",
      "Claude Code",
    ],
    features: [
      "Geospatial routing queries via PostGIS",
      "FastAPI backend for route computation",
      "Safety-focused pedestrian and transit routing",
      "Built in a ten-person team",
    ],
    github: undefined,
    demo: undefined,
  },
  {
    slug: "super-resolution",
    title: "Image & Video Super-Resolution",
    summary:
      "A deep learning pipeline that upscales low quality images and video, restoring detail a simple resize would lose.",
    description:
      "Trained a CNN-based super-resolution model in Keras and OpenCV, then built the inference pipeline around it with an eye on throughput as well as output quality, so batch video processing doesn't fall over on limited GPU memory.",
    stack: ["Python", "Keras", "OpenCV", "Deep Learning"],
    features: [
      "CNN-based image and video upscaling",
      "Batch video processing",
      "Multiple enhancement algorithms",
      "Quality-preserving inference",
    ],
    github: undefined,
    demo: undefined,
  },
];

export const contactMethods = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    label: "GitHub",
    value: "github.com/JaiNagle",
    href: profile.github,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/jainagle",
    href: profile.linkedin,
  },
];
