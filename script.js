// ============================
// MOBILE MENU
// ============================

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("open");
});


// Close menu after clicking navigation

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {
        navMenu.classList.remove("open");
    });

});


// ============================
// DARK MODE
// ============================

const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    const isDark =
        document.body.classList.contains("dark");

    themeToggle.textContent =
        isDark ? "☾" : "☼";

    localStorage.setItem(
        "theme",
        isDark ? "dark" : "light"
    );

});


// ============================
// ACTIVE NAVIGATION
// ============================

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === `#${current}`
        ) {
            link.classList.add("active");
        }

    });

});


// ============================
// SCROLL REVEAL
// ============================

const revealElements =
    document.querySelectorAll(
        ".section-heading, .skill-card, .project-card, .stat-card, .education-card, .contact-item"
    );

revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(element => {
    revealObserver.observe(element);
});


// ============================
// CURRENT YEAR
// ============================

const year =
    new Date().getFullYear();

const footerText =
    document.querySelector("footer p:last-child");

if (footerText) {
    footerText.textContent =
        `© ${year} Imelia Destriani. All rights reserved.`;
}