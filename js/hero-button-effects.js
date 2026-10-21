const heroButtons = document.querySelectorAll(
    ".hero-button, .hero-button2, .hero-button4"
);

heroButtons.forEach((button) => {
    button.addEventListener("pointerenter", () => {
        button.classList.add("is-interacting");
    });

    button.addEventListener("pointerleave", () => {
        button.classList.remove("is-interacting", "is-pressed");
    });

    button.addEventListener("focus", () => {
        button.classList.add("is-interacting");
    });

    button.addEventListener("blur", () => {
        button.classList.remove("is-interacting", "is-pressed");
    });

    button.addEventListener("pointerdown", () => {
        button.classList.add("is-pressed");
    });

    button.addEventListener("pointerup", () => {
        button.classList.remove("is-pressed");
    });

    button.addEventListener("pointercancel", () => {
        button.classList.remove("is-pressed");
    });
});
