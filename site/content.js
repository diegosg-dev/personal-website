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
      title: "VPSAgent",
      description:
        "Let your existing AI agent deploy and manage isolated Docker apps on an Ubuntu VPS with human approvals and zero root Docker socket access.",
      category: "Open-Source",
      year: "2026",
      url: "https://vpsagent.sgdev.es",
      repoUrl: "https://github.com/VPSAgent/vpsagent",
    },
  ],

  // Footer note
  footer: {
    note: "sgdev.es",
    contactLabel: "hello@sgdev.es",
    contactUrl: "mailto:hello@sgdev.es",
  },
};
