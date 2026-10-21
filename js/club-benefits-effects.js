const benefitCards = document.querySelectorAll(
    ".club-highlights1, .club-highlights2, .club-highlights3"
);
const reduceBenefitMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if (!reduceBenefitMotion && "IntersectionObserver" in window) {
    const benefitObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            const cardIndex = Array.from(benefitCards).indexOf(entry.target);
            if (typeof entry.target.animate === "function") {
                entry.target.animate(
                    [
                        { opacity: 0, transform: "translateY(20px)" },
                        { opacity: 1, transform: "translateY(0)" }
                    ],
                    {
                        duration: 550,
                        delay: cardIndex * 130,
                        easing: "cubic-bezier(0.2, 0.7, 0.3, 1)"
                    }
                );
            }
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.2 });

    benefitCards.forEach((card) => benefitObserver.observe(card));
}
