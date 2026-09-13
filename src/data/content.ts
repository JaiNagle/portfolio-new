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
    items: ["Python", "TypeScript", "JavaScript", "SQL", "Bash"],
  },
  {
    category: "Backend & APIs",
    items: ["FastAPI", "Django", "Flask", "REST", "PostgreSQL"],
  },
  {
    category: "Machine learning",
    items: ["PyTorch", "scikit-learn", "pandas", "NumPy", "OpenCV"],
  },
  {
    category: "Tools & practices",
    items: ["Git", "Docker", "GitHub Actions", "Linux", "Agile"],
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
      "A deep learning pipeline that upscales low quality images and video, restoring detail a simple resize would lose.",
    description:
      "Built preprocessing and inference pipelines around a super-resolution model, with an eye on throughput as well as output quality, so batch video processing doesn't fall over on limited GPU memory.",
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
