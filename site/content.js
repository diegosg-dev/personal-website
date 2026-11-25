/**
 * sgdev.es - Site Content
 *
 * Edit this file to update your intro, social links, and projects.
 * Save the file and refresh your browser to see your changes.
 */
window.SITE_CONTENT = {
  // Browser tab title
  pageTitle: "SGDev | Open-Source Projects, LLMs & Web Tools",

  // Short introduction shown at the top of the page
  intro: {
    headline: "Open-source projects, LLM benchmarks, and web tools.",
    summary:
      "Home of the SGDev YouTube channel, built by an economics student exploring AI, open-source software, and small tools for the web.",
    topics: [
      "Open-Source Projects",
      "LLMs & Benchmarks",
      "Tech & AI News",
    ],
  },

  // Social media and contact links shown in the top bar
  // Replace the placeholder URLs with your real links, or remove any you don't use.
  socials: [
    {
      label: "YouTube",
      url: "https://www.youtube.com/@DiegoSGDev",
    },
    {
      label: "GitHub",
      url: "https://github.com/diegosg-dev",
    },
    {
      label: "X",
      url: "https://x.com/DiegoSGDev",
    },
    {
      label: "Email",
      url: "mailto:hello@sgdev.es",
    },
  ],

  // Projects, repositories, websites, and tools
  // Categories you can use: "Open-Source", "LLMs", "Tools", "Websites"
  // Tip: Leave `url` empty ("") if a project is still in progress.
  projects: [
    {
      title: "LLM Benchmark Notes",
      description:
        "Reproducible prompts, test results, and scripts featured on the SGDev YouTube channel.",
      category: "LLMs",
      year: "2026",
      url: "https://github.com/diegosg-dev/llm-benchmarks",
      repoUrl: "",
    },
    {
      title: "Macro Brief AI",
      description:
        "Summarizes central bank releases and economic indicators into plain-language weekly notes.",
      category: "Open-Source",
      year: "2026",
      url: "https://sgdev.es",
      repoUrl: "https://github.com/diegosg-dev/macro-brief-ai",
    },
    {
      title: "sgdev.es",
      description:
        "This personal website and project index, hosted as a lightweight static app on my own VPS.",
      category: "Websites",
      year: "2026",
      url: "https://sgdev.es",
      repoUrl: "https://github.com/diegosg-dev/personal-website",
    },
    {
      title: "Quick Finance Calculators",
      description:
        "A small set of clean browser calculators for compounding, inflation adjustment, and discounting.",
      category: "Tools",
      year: "2026",
      url: "",
      repoUrl: "",
    },
    {
      title: "Econ & AI Starter Notebooks",
      description:
        "Reusable Python notebooks and scripts for econometrics coursework and small AI experiments.",
      category: "Open-Source",
      year: "2026",
      url: "https://github.com/diegosg-dev/econ-notebooks",
      repoUrl: "",
    },
  ],

  // Footer note
  footer: {
    note: "sgdev.es",
    contactLabel: "hello@sgdev.es",
    contactUrl: "mailto:hello@sgdev.es",
  },
};
