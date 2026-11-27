
document.addEventListener("DOMContentLoaded", function () {

    // Mobile navigation
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");
            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.innerHTML = isOpen ? "✕" : "☰";
        });

        // Close menu after clicking a navigation link
        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.innerHTML = "☰";
            });
        });
    }

    // Automatic copyright year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener("click", function (event) {
            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

});
