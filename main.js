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
    sheep:
      '<path d="M14.2 9.4a2.3 2.3 0 0 0-3.5-1.5 2.4 2.4 0 0 0-4 1.3 2.4 2.4 0 0 0-2 3.9' +
      ' 2.6 2.6 0 0 0 2.2 3.6c2.4 0 4.6-.4 6-1.2"></path>' +
      '<circle cx="17.4" cy="12.6" r="3"></circle>' +
      '<path d="M15.6 10.3a2.2 2.2 0 0 0-2.3-1.1"></path>' +
      '<path d="M18.3 11.9h.01"></path>' +
      '<path d="M7.6 16.6v2.6M11.8 16.7v2.5"></path>',
    moon: '<path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5"></path>',
    sun:
      '<circle cx="12" cy="12" r="4"></circle>' +
      '<path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8' +
      'M17.3 17.3l1.8 1.8M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8"></path>'
  };

  var SOLID_ICONS = {
    github:
      '<path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.94 0-1.31.47-2.39 1.24-3.23-.13-.3-.54-1.52.11-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.92 1.23 3.23 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22 0 1.61-.01 2.9-.01 3.29 0 .32.21.7.82.58C20.57 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5z"></path>',
    linkedin:
      '<path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM2.5 9h5v12h-5V9zm7 0h4.8v1.64h.07c.67-1.2 2.3-2.47 4.73-2.47 5.06 0 6 3.15 6 7.25V21h-5v-4.92c0-1.17-.02-2.68-1.7-2.68-1.7 0-1.96 1.28-1.96 2.6V21h-5V9z"></path>',
    gitlab:
      '<path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"></path>',
    leetcode:
      '<path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>',
    itch:
      '<path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"></path>',
    youtube:
      '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"></path>',
    email:
      '<path d="M2 5.5A1.5 1.5 0 0 1 3.5 4h17A1.5 1.5 0 0 1 22 5.5v.4l-10 5.6L2 5.9v-.4z"></path>' +
      '<path d="M2 8.2V18.5A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5V8.2l-9.51 5.33a1 1 0 0 1-.98 0L2 8.2z"></path>'
  };

  // shown on the home + resume headers
  var PROFILE = {
    name: "David Chmura",
    links: [
      { id: "github", label: "GitHub", href: "https://github.com/davidchmura75-web" },
      { id: "gitlab", label: "GitLab", href: "https://gitlab.com/davidchmura75" },
      { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/david-chmura-84638a2a9/" },
      { id: "leetcode", label: "LeetCode", href: "https://leetcode.com/u/TernaryZebra348/" },
      { id: "itch", label: "itch.io", href: "https://ternary348.itch.io/" },
      { id: "youtube", label: "YouTube", href: "https://www.youtube.com/@DavidC-c3c" },
      { id: "email", label: "Email", href: "mailto:davidchmura75@gmail.com" }
    ]
  };

  var PAGES = [
    { id: "resume", href: "resume.html", label: "Resume" },
    { id: "robots", href: "robots.html", label: "Robots" },
    { id: "projects", href: "projects.html", label: "Projects" }
  ];

  // jump links added to the rail, per page
  var PAGE_SECTIONS = {
    projects: [
      { href: "#tipping-point", label: "Tipping Point", icon: "balance" },
      { href: "#sheep-herder", label: "Sheep Herder", icon: "sheep" },
      { href: "#bottle-rocket", label: "Bottle Rocket", icon: "rocket" },
      { href: "#gift-of-fire", label: "Gift of Fire", icon: "flame" }
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

    var tagline = head.dataset.tagline;

    head.innerHTML =
      '<p class="page-name">' + PROFILE.name + "</p>" +
      (tagline ? '<p class="page-tagline">' + tagline + "</p>" : "") +
      '<div class="page-links">' + links + "</div>";
  }

  function buildNav() {
    var rail = document.querySelector("[data-nav]");
    if (!rail) return;

    var current = document.body.dataset.page;
    var items;
    if (current === "home") {
      items = PAGES;
    } else {
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

  // volume controls talk to the game iframe over postMessage
  function buildGameAudio() {
    var controls = document.querySelector("[data-game-audio]");
    var frame = document.querySelector("[data-game-frame]");
    if (!controls || !frame) return;

    var button = controls.querySelector("[data-game-mute]");
    var slider = controls.querySelector("[data-game-volume]");

    function post() {
      if (!frame.contentWindow) return;
      frame.contentWindow.postMessage(
        {
          type: "game-audio",
          volume: Number(slider.value) / 100,
          muted: button.getAttribute("aria-pressed") === "true"
        },
        "*"
      );
    }

    button.addEventListener("click", function () {
      var muted = button.getAttribute("aria-pressed") !== "true";
      button.setAttribute("aria-pressed", String(muted));
      button.textContent = muted ? "Unmute" : "Mute";
      post();
    });

    slider.addEventListener("input", post);
    frame.addEventListener("load", post);
  }

  function init() {
    buildSiteHead();
    buildNav();
    buildThemeToggle();
    buildGameAudio();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
