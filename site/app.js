(function () {
  const data = window.SITE_CONTENT;
  if (!data) return;

  if (data.pageTitle) document.title = data.pageTitle;

  const headlineEl = document.getElementById("intro-headline");
  if (headlineEl && data.intro && data.intro.headline) {
    headlineEl.textContent = data.intro.headline;
  }

  const summaryEl = document.getElementById("intro-summary");
  if (summaryEl && data.intro && data.intro.summary) {
    summaryEl.textContent = data.intro.summary;
  }

  // Render banner-style focus topics beside the intro
  const topicsEl = document.getElementById("intro-topics");
  if (topicsEl && data.intro && Array.isArray(data.intro.topics)) {
    topicsEl.innerHTML = "";
    data.intro.topics.forEach((topic) => {
      if (!topic) return;
      const li = document.createElement("li");
      li.className = "intro-topic-item";

      const chevron = document.createElement("span");
      chevron.className = "intro-topic-chevron";
      chevron.setAttribute("aria-hidden", "true");
      chevron.textContent = ">";

      const label = document.createElement("span");
      label.textContent = topic;

      li.appendChild(chevron);
      li.appendChild(label);
      topicsEl.appendChild(li);
    });
  }

  // Render top social links
  const socialNav = document.getElementById("social-nav");
  if (socialNav && Array.isArray(data.socials)) {
    socialNav.innerHTML = "";
    data.socials.forEach((item) => {
      if (!item || !item.label || !item.url) return;
      const link = document.createElement("a");
      link.className = "social-link";
      link.href = item.url;
      if (!item.url.startsWith("mailto:")) {
        link.target = "_blank";
        link.rel = "noopener noreferrer";
      }
      link.textContent = item.label;

      const arrow = document.createElement("span");
      arrow.className = "arrow";
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "↗";
      link.appendChild(arrow);

      socialNav.appendChild(link);
    });
  }

  // Footer
  const footerNote = document.getElementById("footer-note");
  const footerContact = document.getElementById("footer-contact");
  if (data.footer) {
    if (footerNote && data.footer.note) {
      footerNote.textContent = data.footer.note;
    }
    if (footerContact && data.footer.contactLabel && data.footer.contactUrl) {
      footerContact.textContent = data.footer.contactLabel;
      footerContact.href = data.footer.contactUrl;
    }
  }

  // Sticky header border on scroll
  const header = document.getElementById("site-header");
  if (header) {
    const onScroll = () => {
      header.classList.toggle("is-scrolled", window.scrollY > 6);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Projects filtering and rendering
  const projects = Array.isArray(data.projects) ? data.projects : [];
  const filterContainer = document.getElementById("category-filter");
  const searchInput = document.getElementById("project-search");
  const listEl = document.getElementById("project-list");
  const countEl = document.getElementById("project-count");
  const emptyEl = document.getElementById("empty-state");

  const categories = ["All"];
  projects.forEach((p) => {
    if (p && p.category && !categories.includes(p.category)) {
      categories.push(p.category);
    }
  });

  let activeCategory = "All";
  let searchQuery = "";

  function renderTabs() {
    if (!filterContainer) return;
    filterContainer.innerHTML = "";
    categories.forEach((category) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "filter-tab";
      btn.setAttribute("role", "tab");
      btn.setAttribute("aria-selected", String(category === activeCategory));
      btn.textContent = category;
      btn.addEventListener("click", () => {
        activeCategory = category;
        renderTabs();
        renderProjects();
      });
      filterContainer.appendChild(btn);
    });
  }

  function renderProjects() {
    if (!listEl) return;
    const query = searchQuery.trim().toLowerCase();

    const filtered = projects.filter((project) => {
      if (!project || !project.title) return false;
      const matchesCategory =
        activeCategory === "All" || project.category === activeCategory;
      if (!matchesCategory) return false;
      if (!query) return true;
      const haystack = [
        project.title,
        project.description || "",
        project.category || "",
        project.year || "",
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(query);
    });

    listEl.innerHTML = "";

    if (countEl) {
      const label = filtered.length === 1 ? "item" : "items";
      countEl.textContent = `${filtered.length} ${label}`;
    }

    if (emptyEl) {
      emptyEl.hidden = filtered.length > 0;
    }

    filtered.forEach((project) => {
      const li = document.createElement("li");
      li.className = "project-item";

      const main = document.createElement("div");
      main.className = "project-main";

      const titleRow = document.createElement("div");
      titleRow.className = "project-title-row";

      const titleEl = document.createElement("h3");
      titleEl.className = "project-title";

      const primaryUrl = project.url || project.repoUrl || "";
      if (primaryUrl) {
        const a = document.createElement("a");
        a.className = "project-title-link";
        a.href = primaryUrl;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.textContent = project.title;

        const arrow = document.createElement("span");
        arrow.className = "arrow";
        arrow.setAttribute("aria-hidden", "true");
        arrow.textContent = "↗";
        a.appendChild(arrow);

        titleEl.appendChild(a);
      } else {
        titleEl.textContent = project.title;
      }

      titleRow.appendChild(titleEl);
      main.appendChild(titleRow);

      if (project.description) {
        const desc = document.createElement("p");
        desc.className = "project-description";
        desc.textContent = project.description;
        main.appendChild(desc);
      }

      const meta = document.createElement("div");
      meta.className = "project-meta";

      const metaPrimary = document.createElement("span");
      metaPrimary.className = "project-meta-primary";
      const metaParts = [project.category, project.year].filter(Boolean);
      metaPrimary.textContent = metaParts.join(" / ");
      meta.appendChild(metaPrimary);

      const metaLinks = document.createElement("div");
      metaLinks.className = "project-meta-links";

      if (project.url && project.repoUrl && project.url !== project.repoUrl) {
        const visitLink = document.createElement("a");
        visitLink.className = "meta-action-link";
        visitLink.href = project.url;
        visitLink.target = "_blank";
        visitLink.rel = "noopener noreferrer";
        visitLink.textContent = "Visit";
        metaLinks.appendChild(visitLink);

        const codeLink = document.createElement("a");
        codeLink.className = "meta-action-link";
        codeLink.href = project.repoUrl;
        codeLink.target = "_blank";
        codeLink.rel = "noopener noreferrer";
        codeLink.textContent = "Code";
        metaLinks.appendChild(codeLink);
      } else if (project.url) {
        const visitLink = document.createElement("a");
        visitLink.className = "meta-action-link";
        visitLink.href = project.url;
        visitLink.target = "_blank";
        visitLink.rel = "noopener noreferrer";
        visitLink.textContent = project.url.includes("github.com") ? "Repo" : "Open";
        metaLinks.appendChild(visitLink);
      } else if (project.repoUrl) {
        const codeLink = document.createElement("a");
        codeLink.className = "meta-action-link";
        codeLink.href = project.repoUrl;
        codeLink.target = "_blank";
        codeLink.rel = "noopener noreferrer";
        codeLink.textContent = "Code";
        metaLinks.appendChild(codeLink);
      } else {
        const status = document.createElement("span");
        status.className = "meta-status";
        status.textContent = "In progress";
        metaLinks.appendChild(status);
      }

      meta.appendChild(metaLinks);

      li.appendChild(main);
      li.appendChild(meta);
      listEl.appendChild(li);
    });
  }

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchQuery = event.target.value || "";
      renderProjects();
    });
  }

  renderTabs();
  renderProjects();
})();
