const headerActionLinks = document.querySelectorAll(".header-actions a");

headerActionLinks.forEach((link) => {
    const visitedKey = `saviri:visited-header-action:${new URL(link.href).pathname}`;

    if (localStorage.getItem(visitedKey) === "true") {
        link.classList.add("is-visited");
    }

    link.addEventListener("click", () => {
        localStorage.setItem(visitedKey, "true");
    });
});

const footerLinks = document.querySelectorAll(
    ".footer-brand a, .footer-column a, .footer-social-links a"
);

footerLinks.forEach((link) => {
    const visitedKey = `saviri:visited-footer-link:${new URL(link.href).pathname}:${link.textContent.trim()}`;

    if (localStorage.getItem(visitedKey) === "true") {
        link.classList.add("is-visited");
    }

    link.addEventListener("click", () => {
        localStorage.setItem(visitedKey, "true");
    });
});
