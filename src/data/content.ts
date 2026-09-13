export const profile = {
  name: "Jai Nagle",
  role: "Software Engineer",
  location: "Ireland",
  status: "Open to new roles",
  email: "jainagle36@gmail.com",
  github: "https://github.com/JaiNagle",
  linkedin: "https://www.linkedin.com/in/jainagle/",
  intro:
    "I build Python systems and machine learning products — from APIs that hold up under load to models that ship, not just notebooks that demo well.",
};

export const about = {
  paragraphs: [
    "I work at the intersection of backend engineering and applied machine learning: designing APIs, shaping data pipelines, and training models that need to run in production, not just in a notebook.",
    "Most of what I build starts in Python and ends up load-tested on RedHat Linux — I care as much about how a system behaves under pressure as I do about the accuracy of the model inside it.",
    "Outside of client work, I contribute to open-source tooling and keep a running list of papers and systems worth stealing ideas from.",
  ],
  details: [
    { label: "Location", value: "Ireland" },
    { label: "Focus", value: "Python · ML · APIs" },
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
    category: "Python",
    items: ["Python", "FastAPI", "Django", "Flask", "Pytest"],
  },
  {
    category: "Machine learning",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "Computer vision", "NLP"],
  },
  {
    category: "APIs & data",
    items: ["REST", "GraphQL", "PostgreSQL", "Redis", "Docker"],
  },
  {
    category: "Systems",
    items: ["RedHat Linux", "Shell scripting", "Kubernetes", "CI/CD"],
  },
];

export type Project = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  stack: string[];
  features: string[];
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "super-resolution",
    title: "Image & Video Super-Resolution",
    summary:
      "A deep-learning pipeline that upscales low-quality images and video, restoring detail a naive resize would lose.",
    description:
      "Custom preprocessing and inference pipelines built around modern super-resolution architectures, tuned for throughput as much as image quality — batch video processing without the usual GPU memory blowups.",
    stack: ["Python", "PyTorch", "Computer vision", "Deep learning"],
    features: [
      "Real-time image upscaling",
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
