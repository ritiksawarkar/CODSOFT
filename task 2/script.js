document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navbar = document.querySelector(".navbar");
    const navLinks = document.querySelectorAll(".navbar a");

    // Toggle menu icon between ☰ (hamburger) and ✖ (close)
    menuToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
        menuToggle.innerHTML = navbar.classList.contains("active") ? "&#10006;" : "&#9776;";
    });

    // Scroll to section function
    function scrollToSection(id) {
        const element = document.getElementById(id);
        if (element) {
            window.scrollTo({
                top: element.offsetTop - document.querySelector(".header").offsetHeight,
                behavior: "smooth"
            });
        }
    }

    // Ensure all navigation links work properly
    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const targetId = this.getAttribute("href").substring(1); // Get section ID (remove `#`)
            scrollToSection(targetId);

            // Close the menu on mobile when a link is clicked
            if (navbar.classList.contains("active")) {
                navbar.classList.remove("active");
                menuToggle.innerHTML = "&#9776;";
            }
        });
    });
});
