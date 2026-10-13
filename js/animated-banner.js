const banner = document.querySelector("#animated-banner");
        const messages = [...banner.querySelectorAll(".banner-message")];
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
        let activeMessage = 0;

        function showMessage(index) {
            messages[activeMessage].classList.remove("is-active");
            messages[activeMessage].setAttribute("aria-hidden", "true");
            activeMessage = index;
            messages[activeMessage].classList.add("is-active");
            messages[activeMessage].setAttribute("aria-hidden", "false");
        }

        if (prefersReducedMotion.matches) {
            banner.classList.add("reduced-motion");
        } else {
            window.setInterval(() => {
                showMessage((activeMessage + 1) % messages.length);
            }, 3200);
        }