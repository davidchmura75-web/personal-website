// Builds the two side rails and drives the theme toggle. Every page carries a
// `data-page` attribute on <body>; everything else is derived from that here so
// the nav only has to be maintained in one place.
(function () {
  var ICONS = {
    back: '<path d="M19.5 12h-15"></path><path d="m11 19-7-7 7-7"></path>',
    resume:
      '<path d="M14 3H7a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 7 21h10a1.5 1.5 0 0 0 1.5-1.5V7.5z"></path>' +
      '<path d="M14 3v4.5h4.5"></path>' +
      '<path d="M9 12.5h6M9 16h6"></path>',
    robots:
      '<rect x="4.5" y="7.5" width="15" height="12" rx="2.5"></rect>' +
      '<path d="M12 4v3.5M9 12.5h.01M15 12.5h.01M9.5 16h5"></path>' +
      '<path d="M1.5 12.5h3M19.5 12.5h3"></path>',
    projects:
      '<path d="m12 3 9 5-9 5-9-5z"></path>' +
      '<path d="m3 12.5 9 5 9-5"></path>' +
      '<path d="m3 16.5 9 5 9-5"></path>',
    balance:
      '<path d="M12 3.5v17"></path><path d="M5 7.5h14"></path>' +
      '<path d="M5 7.5 2 14a3 3 0 0 0 6 0z"></path>' +
      '<path d="M19 7.5 16 14a3 3 0 0 0 6 0z"></path>' +
      '<path d="M8.5 20.5h7"></path>',
    flame:
      '<path d="M12 3c3 3.8 5 6.2 5 9.2a5 5 0 0 1-10 0c0-1.6.6-3 1.6-4.2.3 1.1.9 1.8 1.8 2.1C10.7 7.4 11.2 5 12 3z"></path>',
    rocket:
      '<path d="M12 2.5c3 2.3 4.5 5.5 4.5 9.1L12 16l-4.5-4.4c0-3.6 1.5-6.8 4.5-9.1z"></path>' +
      '<circle cx="12" cy="9" r="1.5"></circle>' +
      '<path d="M9.2 15.2 6.5 17l.5 4 3-2"></path>' +
      '<path d="M14.8 15.2 17.5 17l-.5 4-3-2"></path>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5"></path>',
    sun:
      '<circle cx="12" cy="12" r="4"></circle>' +
      '<path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8' +
      'M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"></path>'
  };

  // Brand marks are solid rather than stroked, so they get their own markup.
  // Kept on single lines: splitting a path across concatenated strings drops the
  // spaces between commands and silently garbles the shape.
  var SOLID_ICONS = {
    github:
      '<path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.57 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"></path>',
    linkedin:
      '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.5 9h5v12h-5V9zm7 0h4.8v1.64h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.15 6 7.25V21h-5v-4.92c0-1.17-.02-2.68-1.7-2.68-1.7 0-1.96 1.28-1.96 2.6V21h-5V9z"></path>',
    email:
      '<path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.4l-10 5.6L2 5.9v-.4z"></path>' +
      '<path d="M2 8.2V18.5A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5V8.2l-9.51 5.33a1 1 0 0 1-.98 0L2 8.2z"></path>'
  };

  // The name and links at the top of the home page card. Only index.html has the
  // [data-site-head] placeholder, so this renders nowhere else.
  var PROFILE = {
    name: "John Doe",
    links: [
      { id: "github", label: "GitHub", href: "https://github.com/johndoe" },
      { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/johndoe" },
      { id: "email", label: "Email", href: "mailto:john.doe@example.com" }
    ]
  };

  // The three destinations, shown in rail order on the home page only.
  var PAGES = [
    { id: "resume", href: "resume.html", label: "Resume" },
    { id: "robots", href: "robots.html", label: "Robots" },
    { id: "projects", href: "projects.html", label: "Projects" }
  ];

  // Extra rail entries that jump to sections further down a specific page. Keyed
  // by the page's data-page value, and appended after its Back link.
  var PAGE_SECTIONS = {
    projects: [
      { href: "#tipping-point", label: "Tipping Point", icon: "balance" },
      { href: "#gift-of-fire", label: "Gift of Fire", icon: "flame" },
      { href: "#bottle-rocket", label: "Bottle Rocket", icon: "rocket" }
    ]
  };

  function svg(icon, className) {
    return (
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true"' +
      (className ? ' class="' + className + '"' : "") +
      ">" +
      icon +
      "</svg>"
    );
  }

  function solidSvg(icon) {
    return (
      '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">' + icon + "</svg>"
    );
  }

  function buildSiteHead() {
    var head = document.querySelector("[data-site-head]");
    if (!head) return;

    var links = PROFILE.links
      .map(function (link) {
        var external = link.href.indexOf("mailto:") === 0 ? "" : ' target="_blank" rel="noopener"';
        return (
          '<a href="' +
          link.href +
          '" title="' +
          link.label +
          '" aria-label="' +
          link.label +
          '"' +
          external +
          ">" +
          solidSvg(SOLID_ICONS[link.id]) +
          "</a>"
        );
      })
      .join("");

    head.innerHTML =
      '<p class="page-name">' + PROFILE.name + "</p>" +
      '<div class="page-links">' + links + "</div>";
  }

  function buildNav() {
    var rail = document.querySelector("[data-nav]");
    if (!rail) return;

    var current = document.body.dataset.page;
    var items;

    if (current === "home") {
      // The home page lists all three destinations.
      items = PAGES;
    } else {
      // Everywhere else: a single Back link to the parent named by data-back,
      // followed by any section shortcuts the page declares.
      items = [
        {
          id: "back",
          href: document.body.dataset.back || "index.html",
          label: "Back"
        }
      ].concat(PAGE_SECTIONS[current] || []);
    }

    rail.innerHTML = items
      .map(function (page) {
        return (
          '<a class="rail-item" href="' +
          page.href +
          '">' +
          svg(ICONS[page.icon || page.id]) +
          '<span class="rail-label">' +
          page.label +
          "</span></a>"
        );
      })
      .join("");
  }

  function buildThemeToggle() {
    var rail = document.querySelector("[data-theme-rail]");
    if (!rail) return;

    var root = document.documentElement;

    rail.innerHTML =
      '<button class="rail-item theme-toggle" type="button">' +
      svg(ICONS.moon, "icon-moon") +
      svg(ICONS.sun, "icon-sun") +
      '<span class="rail-label"></span></button>';

    var button = rail.querySelector("button");
    var label = rail.querySelector(".rail-label");

    function sync() {
      var isDark = root.dataset.theme === "dark";
      button.setAttribute("aria-pressed", String(isDark));
      label.textContent = isDark ? "Light Mode" : "Dark Mode";
    }

    button.addEventListener("click", function () {
      var next = root.dataset.theme === "dark" ? "light" : "dark";
      root.dataset.theme = next;
      localStorage.setItem("theme", next);
      sync();
    });

    sync();
  }

  function init() {
    buildSiteHead();
    buildNav();
    buildThemeToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
