const banner = document.querySelector("#animated-banner");
const track = banner?.querySelector(".banner-track");

if (banner && track) {
    const messages = [...track.querySelectorAll(".banner-message")];
    const group = document.createElement("div");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    group.className = "banner-group";

    messages.forEach((message) => {
        message.classList.remove("is-active");
        message.setAttribute("aria-hidden", "false");
        group.appendChild(message);
    });

    track.replaceChildren(group);

    if (prefersReducedMotion.matches) {
        banner.classList.add("reduced-motion");
    } else {
        const clone = group.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        clone.querySelectorAll(".banner-message").forEach((message) => {
            message.setAttribute("aria-hidden", "true");
        });
        track.appendChild(clone);

        let animation;
        const startAnimation = () => {
            animation?.cancel();

            const distance = group.getBoundingClientRect().width;
            if (!distance) return;

            animation = track.animate(
                [{ transform: "translateX(0)" }, { transform: `translateX(-${distance}px)` }],
                { duration: (distance / 35) * 1000, iterations: Infinity, easing: "linear" }
            );
        };

        requestAnimationFrame(startAnimation);
        new ResizeObserver(startAnimation).observe(group);
    }
}