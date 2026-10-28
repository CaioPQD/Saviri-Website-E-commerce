const heroCarousel = document.querySelector(".section-hero");

if (heroCarousel) {
    const slides = [...heroCarousel.querySelectorAll(".hero-slide")];
    const dots = [...heroCarousel.querySelectorAll(".hero-carousel-dot")];
    const previousButton = heroCarousel.querySelector(".hero-carousel-control--previous");
    const nextButton = heroCarousel.querySelector(".hero-carousel-control--next");

    if (slides.length > 0 && slides.length === dots.length && previousButton && nextButton) {
        let activeIndex = Math.max(
            slides.findIndex((slide) => slide.classList.contains("is-active")),
            0
        );

        const showSlide = (index) => {
            activeIndex = (index + slides.length) % slides.length;

            slides.forEach((slide, slideIndex) => {
                const isActive = slideIndex === activeIndex;
                slide.classList.toggle("is-active", isActive);
                slide.setAttribute("aria-hidden", String(!isActive));
                slide.inert = !isActive;
            });

            dots.forEach((dot, dotIndex) => {
                const isActive = dotIndex === activeIndex;
                dot.classList.toggle("is-active", isActive);
                dot.setAttribute("aria-current", String(isActive));
            });
        };

        previousButton.addEventListener("click", () => {
            showSlide(activeIndex - 1);
        });

        nextButton.addEventListener("click", () => {
            showSlide(activeIndex + 1);
        });

        dots.forEach((dot, dotIndex) => {
            dot.addEventListener("click", () => {
                showSlide(dotIndex);
            });
        });
    }
}
