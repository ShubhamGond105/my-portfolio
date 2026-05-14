export const portfolioData = {
  name: "Shubham Gond",
  role: "Full Stack Developer & GenAI Engineer",
  email: "shubhamgond105@gmail.com",
  phone: "+91 87568 11298",
  links: {
    github: "https://github.com/ShubhamGond105",
    linkedin: "https://www.linkedin.com/in/shubham-gond-13ab41242/",
  },
  about:
    "A passionate B.Tech Information Technology student specializing in Full-Stack Development, Generative AI, and Machine Learning. I build scalable applications and production-ready AI pipelines, contributing to major open-source projects.",
  education: [
    {
      institution: "APJ Abdul Kalam Technical University",
      degree: "Bachelor of Technology in Information Technology",
      location: "Lucknow, UP",
      duration: "2022 - 2026",
      score: "CGPA: 7.3/10 | Top 10% of Batch",
    },
  ],
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "SQL"],
    ml_deep_learning: [
      "Keras",
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "NumPy",
      "Pandas",
      "DenseNet CNN",
    ],
    gen_ai: [
      "LangChain",
      "LangGraph",
      "RAG Pipelines",
      "FastAPI",
      "Groq API",
      "LLaMA-3",
      "Gemini AI",
      "Vanna AI",
      "Haystack",
    ],
    full_stack: [
      "React.js",
      "Next.js",
      "Node.js",
      "Express.js",
      "Flask",
      "Socket.io",
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
    ],
    tools: ["Git", "GitHub", "Docker", "Postman", "JWT", "REST APIs"],
  },
  experience: [
    {
      role: "Project Associate Intern",
      company: "Creature Industry",
      location: "Lucknow, Uttar Pradesh",
      duration: "March 2026 - Present",
      achievements: [
        "Designed and deployed a Product Intelligence Search Tool (Python, FastAPI, SQLite, BM25) used daily by the sales team, reducing average product lookup time by eliminating manual search across 100+ product records.",
        "Architected a production RAG pipeline (LangChain, LangGraph) powering a WhatsApp AI Sales Agent that handles automated multi-turn customer conversations; extending to Voice Call Sales Agent.",
      ],
    },
  ],
  projects: [
    {
      title: "LungAI: AI Diagnostic Platform",
      tech: "React.js, Node.js, FastAPI, MongoDB, Keras, DenseNet CNN",
      description:
        "Developed a full-stack lung cancer detection platform analyzing chest X-rays and CT scans using a DenseNet CNN with a calibrated 0.65 confidence threshold across a 3-tier decoupled microservice architecture.",
      bullets: [
        "Implemented a pre-inference heuristic validation layer rejecting 100% of non-medical inputs.",
        "Secured Doctor and Patient portals with JWT-based RBAC and HIPAA-aligned auto-delete file management.",
      ],
      videoUrl: "/my-videos/Animate_project_for_portfolio_202605141110.mp4",
      liveUrl: "https://lungai.vercel.app/", // Add your live project link here
      githubUrl: "#", // Add your github link here
    },
    {
      title: "Resume Reviewer: LLM Scoring Pipeline",
      tech: "Next.js, Flask, PostgreSQL, Prisma ORM, Vanna AI, Groq LLaMA-3",
      description:
        "Delivered a full-stack AI resume analysis system integrating Vanna AI with Groq LLaMA-3 for natural-language-to-SQL querying, automated ATS scoring, and skill gap analysis.",
      bullets: [
        "Engineered a scalable backend with Prisma ORM and Neon PostgreSQL using normalized schema.",
      ],
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Collaborative Code Reviewer",
      tech: "React 19, Node.js, Socket.io, MongoDB, Groq API, LLaMA-3.3-70B",
      description:
        "Delivered a real-time multi-user collaborative IDE with WebSocket-powered code sync supporting instant bug detection and optimization suggestions via Groq API.",
      bullets: [
        "Secured platform with JWT authentication and implemented host-controlled project room management.",
      ],
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "FlowBit: AI Analytics Platform",
      tech: "React, TypeScript, Node.js, Express.js, Gemini AI, Tailwind CSS",
      description:
        "Developed an AI resume evaluation platform integrating Google Gemini AI to generate ATS optimization feedback, skill gap reports, and structured improvement suggestions from PDF uploads.",
      bullets: [],
      videoUrl: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
      liveUrl: "#",
      githubUrl: "#",
    },
  ],
  openSource: [
    {
      repo: "deepset-ai/haystack-core-integrations",
      pr: "PR 3245",
      description:
        "Refactored Chroma async test suite using Python mixin inheritance, removing 326 lines of duplicate code; added 12 mixin classes, bumped Haystack minimum version to 2.28.0.",
    },
    {
      repo: "run-llama/llama-index",
      pr: "PR 21470",
      description:
        "Patched a CVE-class pickle deserialization vulnerability in torch.load() by adding weights_only=True with a regression unit test to prevent future regressions.",
    },
  ],
  achievements: [
    "Smart India Hackathon (SIH) 2024: Selected at National Level; shortlisted among 80,000+ participants.",
    "2nd Position: Project Presentation Competition for innovative real-world web application solution.",
    "Kalpathon 2025: Completed 24-hour national hackathon competing among 40+ teams.",
  ],
};
