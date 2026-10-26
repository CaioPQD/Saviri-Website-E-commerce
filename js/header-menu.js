const menuHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");

if (menuHeader && menuToggle) {
    const closeMenu = () => {
        menuHeader.classList.remove("is-menu-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = menuHeader.classList.toggle("is-menu-open");
        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });

    menuHeader.querySelectorAll(".header-actions a, .main-navigation a").forEach((link) => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuHeader.classList.contains("is-menu-open")) {
            closeMenu();
            menuToggle.focus();
        }
    });
}
