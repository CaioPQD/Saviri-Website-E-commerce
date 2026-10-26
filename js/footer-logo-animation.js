const footerLogo = document.querySelector(".footer-logo > img");
const reduceFooterLogoMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

if (footerLogo && typeof footerLogo.animate === "function") {
    let logoRotation;

    const updateLogoRotation = () => {
        logoRotation?.cancel();
        logoRotation = undefined;

        if (reduceFooterLogoMotion.matches) return;

        logoRotation = footerLogo.animate(
            [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
            { duration: 8000, iterations: Infinity, easing: "linear" }
        );
    };

    updateLogoRotation();
    reduceFooterLogoMotion.addEventListener("change", updateLogoRotation);
}
