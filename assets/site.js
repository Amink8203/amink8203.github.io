"use strict";

const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  const updateThemeControl = () => {
    const isDark = document.documentElement.dataset.theme !== "light";
    themeToggle.setAttribute("aria-checked", String(isDark));
    themeToggle.title = `Switch to ${isDark ? "light" : "dark"} mode`;
    themeToggle.querySelector("[data-theme-label]").textContent = isDark ? "Dark" : "Light";
    document.querySelector('meta[name="theme-color"]').content = isDark ? "#111814" : "#f8f9f6";
  };
  updateThemeControl();
  themeToggle.hidden = false;
  themeToggle.addEventListener("click", () => {
    const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    try { localStorage.setItem("amin-theme", nextTheme); } catch { /* Switching still works without storage. */ }
    updateThemeControl();
  });
}

// Keep the complete portfolio readable when JavaScript is unavailable.
const filters = document.querySelector(".project-filters");
const projects = Array.from(document.querySelectorAll(".project"));
if (filters && projects.length) {
  filters.hidden = false;
  filters.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    const category = button.dataset.filter;
    for (const control of filters.querySelectorAll("button")) {
      control.setAttribute("aria-pressed", String(control === button));
    }
    let visibleCount = 0;
    for (const project of projects) {
      const matches = category === "all" || project.dataset.category.split(" ").includes(category);
      project.hidden = !matches;
      if (matches) visibleCount += 1;
    }
    document.getElementById("filter-status").textContent = `${visibleCount} projects shown: ${button.textContent.trim()}.`;
  });
}

for (const button of document.querySelectorAll(".copy-citation")) {
  button.addEventListener("click", async () => {
    const citation = document.getElementById(button.dataset.copy);
    const status = document.getElementById("copy-status");
    try {
      if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(citation.textContent.trim());
      button.textContent = "Copied!";
      status.textContent = "BibTeX citation copied to clipboard.";
      window.setTimeout(() => { button.textContent = "Copy BibTeX"; }, 2000);
    } catch {
      const selection = window.getSelection();
      const range = document.createRange();
      range.selectNodeContents(citation);
      selection.removeAllRanges();
      selection.addRange(range);
      button.textContent = "Citation selected";
      status.textContent = "Citation selected. Use your browser’s Copy command to copy it.";
    }
  });
}

const navigationLinks = Array.from(document.querySelectorAll('nav a[href^="#"]'));
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      for (const link of navigationLinks) {
        if (link.getAttribute("href") === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      }
    }
  }, { rootMargin: "-100px 0px -65% 0px", threshold: 0 });
  for (const section of document.querySelectorAll("main section[id]")) observer.observe(section);
}
