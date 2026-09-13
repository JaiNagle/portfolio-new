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
    "I work mostly in Python, building APIs and backend services, and I spend time on RedHat Linux keeping systems running and understanding how they fail.",
    "I've also worked on machine learning projects, including an image and video super-resolution pipeline, which pushed me to get comfortable with the full path from a trained model to something that actually runs reliably.",
    "I'm still early in my career and learning fast. Right now that means picking up more of the tooling around modern software teams: CI/CD, containerized deployments, and writing code that other people can read and maintain.",
  ],
  details: [
    { label: "Location", value: "Ireland" },
    { label: "Focus", value: "Python · Backend · ML" },
    { label: "Platform", value: "RedHat Linux" },
    { label: "Status", value: "Open to work" },
  ],
};

export type SkillCategory = {
  category: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["Python", "Java", "C#", "C++", "SQL", "JavaScript"],
  },
  {
    category: "Backend & cloud",
    items: ["FastAPI", "ASP.NET MVC", "REST APIs", "PostgreSQL", "AWS"],
  },
  {
    category: "Machine learning",
    items: ["Keras", "OpenCV", "scikit-learn", "Computer vision"],
  },
  {
    category: "Tools & practices",
    items: ["Git", "Docker", "Kubernetes", "Linux (RHEL)", "Selenium"],
  },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  dates: string;
  location: string;
  bullets: string[];
};

export const experience: ExperienceEntry[] = [
  {
    company: "Pragati Switchgears",
    role: "Software Engineer",
    dates: "Nov 2024 – Sep 2025",
    location: "Vasai, India",
    bullets: [
      "Designed and trained Python-based machine vision models for automated component quality control on MSME production lines, replacing manual visual inspection",
      "Built end-to-end WPF desktop applications for real-time defect detection, integrating image processing pipelines with an operator-facing feedback interface, owning the system from model to UI",
    ],
  },
  {
    company: "Kellanova (formerly Kellogg Company)",
    role: "Associate Technical Analyst, Infrastructure Compute Team",
    dates: "Jul 2022 – Sep 2024",
    location: "Mumbai, India",
    bullets: [
      "Provisioned, configured, and maintained Linux servers on AWS (EC2, EBS, CloudFormation), managing infrastructure-as-code deployments and secure SSH-based access",
      "Partnered with the Global Data Analytics team on cloud cost optimization: audited infrastructure for redundancy, decommissioned unused servers, and restructured archive storage",
      "Built and deployed an internal Python and Excel self-assessment tool for the company's YODA development program, adopted organization-wide",
    ],
  },
  {
    company: "PMaps",
    role: "Intern, Software Development",
    dates: "Jun 2021 – Jun 2022",
    location: "Thane, India",
    bullets: [
      "Developed employer-facing interfaces for a core platform rewrite using ASP.NET MVC, REST APIs, and MS-SQL, and shipped three new features in C# for the finance team's invoicing application",
      "Designed and implemented a Selenium and Java test automation suite that replaced manual regression testing, removing a recurring bottleneck from the QA release cycle",
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
      "MSc dissertation researching whether contrastive learning across multiple backbone depths improves few-shot image classification.",
    description:
      "Proposes Multi-Scale Contrastive Learning (MSCL), which applies the NT-Xent loss simultaneously at three ResNet-12 depths instead of only the final layer. The improvement doesn't come from training on multiple scales by itself, it comes from actually using those concatenated multi-scale features downstream at evaluation time.",
    stack: [
      "Python",
      "Self-Supervised Learning",
      "Contrastive Learning",
      "Few-Shot Learning",
    ],
    features: [
      "NT-Xent loss applied across three ResNet-12 depths",
      "Evaluated on CIFAR-FS and miniImageNet",
      "54.21% vs 48.69% SimCLR baseline on CIFAR-FS 1-shot",
      "Statistically significant gains from multi-scale features at evaluation",
    ],
    status: "In progress",
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
    stack: ["Python", "FastAPI", "PostgreSQL", "PostGIS", "React Native"],
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
