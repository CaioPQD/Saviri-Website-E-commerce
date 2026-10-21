const siteHeader = document.querySelector(".site-header");

if (siteHeader) {
    const updateHeaderHeight = () => {
        document.documentElement.style.setProperty(
            "--site-header-height",
            `${siteHeader.getBoundingClientRect().height}px`
        );
    };

    const updateHeaderOnScroll = () => {
        siteHeader.classList.toggle("is-scrolled", window.scrollY > 0);
    };

    updateHeaderHeight();
    updateHeaderOnScroll();
    new ResizeObserver(updateHeaderHeight).observe(siteHeader);
    window.addEventListener("scroll", updateHeaderOnScroll, { passive: true });
    window.addEventListener("resize", updateHeaderHeight, { passive: true });
}
