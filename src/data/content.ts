export interface Project {
  title: string;
  description: string;
  href?: string;
  status: "Work" | "Live" | "Research" | "Clinical";
  tags: string[];
  active: boolean;
  featured?: boolean;
  contribution?: string;
}

export interface EngineeringNote {
  id: string;
  project: string;
  title: string;
  discipline: string;
  preview: string;
  problem: string;
  decision: string;
  result: string;
  lesson: string;
  href: string;
}

export interface TimelineItem {
  date: string;
  detail: string;
  href?: string;
}

export interface Publication {
  title: string;
  description: string;
  href: string;
  venue: string;
  year: string;
}

export interface Award {
  place: string;
  event: string;
  note?: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface NowProject {
  name: string;
  href: string;
  description: string;
  status: string;
}

export interface SkillCategory {
  label: string;
  items: string[];
}

export interface CapabilitySignal {
  area: string;
  tools: string[];
}

export const heroContent = {
  name: "Jacy",
  title: "Software engineer. Product builder. Professional bug negotiator.",
  description:
    "I design, ship, and operate software, from backend systems to developer tools and apps people use. AI is in the toolbox, not the entire personality.",
  primaryCta: { label: "Explore my work", href: "#projects" },
  secondaryCta: { label: "Open profile.py", href: "#about" },
};

export const aboutContent = {
  realName: "Jason",
  age: 20,
  summary:
    "I like owning the whole journey: building the product, shipping it, and fixing what breaks in the real world.",
  capabilityMap: [
    {
      area: "Backend + infrastructure",
      tools: ["Python", "Django", "PostgreSQL", "Redis", "Docker", "AWS"],
    },
    {
      area: "Full-stack products",
      tools: ["Next.js", "React", "Flutter", "TypeScript", "Supabase"],
    },
    {
      area: "Applied AI + research",
      tools: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV"],
    },
  ] as CapabilitySignal[],
  hobbies: [
    "Coding",
    "Reading",
    "Sports",
    "F1",
    "Gaming",
    "Listening to music",
  ],
  blogUrl: "https://jacyjason.substack.com/",
  blogTitle: "Read my mildly unhinged build logs",
};

export const projects: Project[] = [
  {
    title: "AskLexy",
    description:
      "AI-powered learning, career preparation, and hiring products. I build features and backend systems, including Jobpipe, a private pipeline that keeps job opportunities organized and up to date.",
    contribution: "Product engineering · Backend APIs · Private job-data pipeline",
    href: "https://asklexy.me",
    status: "Work",
    tags: ["Backend", "AI", "Product"],
    active: true,
    featured: true,
  },
  {
    title: "Gamilife",
    description:
      "A gamified productivity app built around focused work, habits, and progress. As co-founder and CTO, I work across product decisions, engineering, and deployments.",
    contribution: "Co-founder & CTO · Full-stack product · Deployment ownership",
    href: "https://gamilife.com",
    status: "Live",
    tags: ["Product", "Web", "App"],
    active: true,
    featured: true,
  },
   {
    title: "Settle",
    description:
      "Valorant-specific browser trainer for practicing movement and gunplay, and a personal playground for testing AI-assisted development.",
    href: "https://settle.jzxx.dev",
    status: "Live",
    tags: ["Web", "Simulation"],
    active: true,
  },
  {
    title: "TL;DR this PR",
    description:
      "Chrome extension for OSS maintainers: PR summaries, risk signals, and rule-guided AI analysis to flag changes worth a closer review.",
    href: "https://chromewebstore.google.com/detail/tldr-this-pr/mpgekicmpbnkcpjpjadjhiblcbpdlknl",
    status: "Live",
    tags: ["DevTools", "AI"],
    active: false,
  },
  {
    title: "Apex F1 Live",
    description:
      "Formula 1 telemetry dashboard for live race data, historical sessions, driver comparisons, and interactive performance charts.",
    href: "https://github.com/jzxx26/f1-data",
    status: "Work",
    tags: ["Web", "Data"],
    active: false,
  },
  {
    title: "Bodhimaram",
    description:
      "Custom WordPress platform helping a playschool manage admissions, parents, and communication workflows.",
    href: "https://bodhimaram.in/",
    status: "Live",
    tags: ["Web"],
    active: false,
  },
  {
    title: "Road Network Extraction",
    description:
      "Hybrid CNN + U-Net model extracting road graphs from satellite imagery for rapid mapping.",
    href: "https://github.com/jzxx26/satellite-road-extraction",
    status: "Research",
    tags: ["AI", "Research"],
    active: false,
  },
  {
    title: "solarVert",
    description:
      "Energy monitoring dashboard for solar panel operators to track uptime, detect faults, and analyze output in real time.",
    href: "https://github.com/jzxx26/solarVert",
    status: "Live",
    tags: ["App", "Web"],
    active: false,
  },
  {
    title: "Cancer Pain Prediction",
    description:
      "Predicts pain spikes for cancer patients and suggests interventions before they escalate.",
    href: "https://github.com/jzxx26/cancer_pain_prediction",
    status: "Clinical",
    tags: ["AI", "Research", "Clinical"],
    active: false,
  },
];

export const engineeringNotes: EngineeringNote[] = [
  {
    id: "asklexy",
    project: "AskLexy / Job discovery",
    title: "When caching wasn't enough",
    discipline: "Backend · Data lifecycle · Performance",
    preview:
      "Keeping job listings fresh without sacrificing application history made storage and filter responsiveness a balancing act.",
    problem:
      "Outdated listings needed to disappear from recommendations, but users' application histories had to remain available for tracking and analysis. Keeping too much listing data around also carried a performance and storage cost.",
    decision:
      "Application records were maintained separately from listing data. Caching helped with repeated work, but changing filters still felt slow. I revisited the processing path and focused on computing and retrieving only the data relevant to each request.",
    result:
      "Filtering became more responsive in use while the recommendation experience stayed useful. I haven't published a controlled performance benchmark.",
    lesson: "The best cache is sometimes the computation you no longer have to do.",
    href: "https://asklexy.me",
  },
  {
    id: "settle",
    project: "Settle / Valorant practice",
    title: "Building a trainer and testing AI at the same time",
    discipline: "Game mechanics · Vanilla JavaScript · AI tooling",
    preview:
      "I wanted practice grounded in Valorant's movement and gunplay, and a safe place to push AI coding tools beyond throwaway demos.",
    problem:
      "Consistent movement, weapon behavior, and timing matter for meaningful practice. Getting them to work together in a browser with vanilla JavaScript isn't just a matter of drawing targets.",
    decision:
      "I used AI to research game mechanics and build the initial training environment, then iterated on requirements, prompts, and generated implementations. Settle doubles as a low-stakes way to evaluate different coding models before relying on them for other work.",
    result:
      "I use the trainer alongside regular practice. Over three weeks I climbed from Iron to Bronze 2; that doesn't establish causation, but it was encouraging personal feedback.",
    lesson: "A useful personal tool can also be a laboratory for learning how to work with AI.",
    href: "https://settle.jzxx.dev",
  },
  {
    id: "tldr",
    project: "TL;DR this PR / OSS tooling",
    title: "Why reviewing AI-ish code needs more than AI",
    discipline: "Developer tools · Review heuristics · LLM analysis",
    preview:
      "Open-source maintainers need a fast first pass on incoming PRs, without mistaking an AI guess for an authorship verdict.",
    problem:
      "Classifying whether a PR was AI-written proved unreliable. More importantly, how the code was produced wasn't a reliable proxy for whether a contribution was useful or safe to merge.",
    decision:
      "I combined explicit review heuristics and diff signals with AI-assisted summaries and explanations. The extension flags questionable patterns with reasons so maintainers can decide what deserves closer inspection.",
    result:
      "The browser extension provides summaries, risk cues, and review findings directly on GitHub. Its output is triage assistance, not proof of authorship or a substitute for code review.",
    lesson: "Show evidence and uncertainty. Don't let a classifier pretend to know what it can't.",
    href: "https://chromewebstore.google.com/detail/tldr-this-pr/mpgekicmpbnkcpjpjadjhiblcbpdlknl",
  },
];

export const timeline: TimelineItem[] = [
  {
    date: "August 2017",
    detail:
      "Started experimenting with C and Python. Quickly discovered that building things with code was addictive.",
  },
  {
    date: "May 2019",
    detail:
      "Launched my first personal website with HTML, CSS, and JavaScript.",
  },
  {
    date: "March 2020",
    detail:
      "Explored machine learning with TensorFlow, PyTorch, and scikit-learn.",
  },
  {
    date: "May 2021",
    detail: "Interned at Bodhimaram on full-stack development.",
  },
  {
    date: "November 2023",
    detail: "Began research on liquid neural networks.",
  },
  {
    date: "February 2024",
    detail: "Placed 3rd in a hackathon building a hybrid CNN + U-Net model.",
  },
  {
    date: "August 2024",
    detail: "Built solarVert, a solar panel management app for a hackathon.",
  },
  {
    date: "September 2024",
    detail:
      "Won 2nd place in a human pose estimation hackathon and earned an internship.",
  },
  {
    date: "September 2024",
    detail:
      "Won 3rd place for a cancer pain estimation and prediction platform.",
  },
  {
    date: "March 2025",
    detail: "Placed top 5 in a national-level hackathon hosted at Google.",
  },
  {
    date: "April 2025",
    detail:
      "Started building LifeXP (now Gamilife), a gamified way to track life experiences.",
  },
  {
    date: "May 2025",
    detail: "Developer at AskLexy",
    href: "https://asklexy.me",
  },
  {
    date: "December 2025",
    detail:
      "Published IEEE paper: ENDCL — Attention-Enhanced CNN-BiLSTM model for automated cardiovascular disease detection.",
    href: "https://ieeexplore.ieee.org/abstract/document/11376121",
  },
];

export const publications: Publication[] = [
  {
    title: "ENDCL: Attention-Enhanced CNN-BiLSTM",
    description:
      "Automated cardiovascular disease detection model combining CNN, BiLSTM, and attention mechanisms. Peer-reviewed and published at IEEE.",
    href: "https://ieeexplore.ieee.org/abstract/document/11376121",
    venue: "IEEE",
    year: "Dec 2025",
  },
];

export const awards: Award[] = [
  { place: "2nd", event: "Human Pose Estimation", note: "+ internship offer" },
  { place: "3rd", event: "Satellite Road Extraction (CNN + U-Net)" },
  { place: "3rd", event: "Cancer Pain Prediction Platform" },
  { place: "Top 5", event: "National Hackathon @ Google" },
];

export const contactContent = {
  message:
    "Need a teammate, an engineer who loves storytelling, or someone to jam on product ideas with? I'm just an email away.",
  email: "mailto:jazjasonlee@gmail.com",
  socials: [
    { label: "GitHub", href: "https://github.com/jzxx26" },
    { label: "Instagram", href: "https://www.instagram.com/jazjason20/" },
    { label: "Email", href: "mailto:jazjasonlee@gmail.com" },
    { label: "Discord", href: "jzxx26" },
  ] as SocialLink[],
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/jzxx26" },
  { label: "Instagram", href: "https://www.instagram.com/jazjason20/" },
  { label: "Email", href: "mailto:jazjasonlee@gmail.com" },
  { label: "Discord", href: "jzxx26" },
];

export const nowContent = {
  lastUpdated: "October 2026",
  building: [
    {
      name: "AskLexy",
      href: "https://asklexy.me",
      description:
        "Building AI-powered learning and hiring products, backend features, and supporting job-data tooling.",
      status: "Active",
    },
    {
      name: "Gamilife",
      href: "https://gamilife.com",
      description:
        "Gamified productivity platform. Iterating on progression mechanics and habit tracking.",
      status: "Active",
    },
  ] as NowProject[],
  reading: [
    "The Pragmatic Programmer — Hunt & Thomas",
    "Designing Data-Intensive Applications — Martin Kleppmann",
  ],
  obsessed: [
    "Agentic AI workflows and how far you can push tool-use",
    "Building products that feel alive without overengineering them",
    "Tiny physical interfaces — buttons, knobs, haptics",
  ],
};
