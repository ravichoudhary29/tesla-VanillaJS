document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const scrollContainer = document.querySelector(".scroll-container");

    // Make the content of the first section visible on page load
    sections[0].querySelector(".content").classList.add("content-animation");

    scrollContainer.addEventListener("scroll", () => {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            const content = section.querySelector(".content");

            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                section.classList.add("active");
                content.classList.add("content-animation");
            } else {
                section.classList.remove("active");
                content.classList.remove("content-animation");
            }
        });
    });
});
