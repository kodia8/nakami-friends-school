
document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 1. LOADING SCREEN
    // =====================================

    const loadingScreen = document.getElementById("loadingScreen");

    function hideLoadingScreen() {
        if (loadingScreen) {
            loadingScreen.classList.add("hidden");
        }
    }

    window.addEventListener("load", hideLoadingScreen);

    // Safety fallback in case loading takes too long
    setTimeout(hideLoadingScreen, 3000);


    // =====================================
    // 2. MOBILE NAVIGATION
    // =====================================

    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {

        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("active");

            const isOpen = navigation.classList.contains("active");

            menuToggle.setAttribute("aria-expanded", isOpen);
            menuToggle.textContent = isOpen ? "×" : "☰";
        });

        // Close menu after selecting a link
        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "☰";
            });
        });

    }


    // =====================================
    // 3. AUTOMATIC COPYRIGHT YEAR
    // =====================================

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // =====================================
    // 4. SMOOTH SCROLLING
    // =====================================

    document.querySelectorAll('a[href^="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = link.getAttribute("href");

            if (!targetId || targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    // =====================================
    // 5. SCROLL REVEAL ANIMATIONS
    // =====================================

    const revealElements = document.querySelectorAll(
        ".grade-card, .life-card, .news-card, .event-card, " +
        ".portal-role, .contact-card, .value-card, .gallery-item"
    );

    revealElements.forEach(function (element) {
        element.classList.add("reveal");
    });

    if ("IntersectionObserver" in window) {

        const observer = new IntersectionObserver(function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }

            });

        }, {
            threshold: 0.12
        });

        revealElements.forEach(function (element) {
            observer.observe(element);
        });

    } else {

        revealElements.forEach(function (element) {
            element.classList.add("active");
        });

    }


    // =====================================
    // 6. FORM VALIDATION
    // =====================================

    function showFormMessage(elementId, message, isError) {

        const messageElement = document.getElementById(elementId);

        if (!messageElement) return;

        messageElement.textContent = message;

        messageElement.style.color = isError
            ? "#c0392b"
            : "#126b42";

    }

    function handleUnconnectedForm(formId, statusId, message) {

        const form = document.getElementById(formId);

        if (!form) return;

        form.addEventListener("submit", function (event) {

            event.preventDefault();

            if (!form.checkValidity()) {
                form.reportValidity();
                return;
            }

            showFormMessage(statusId, message, true);

        });

    }


    // =====================================
    // 7. ADMISSION APPLICATION FORM
    // =====================================

    handleUnconnectedForm(
        "applicationForm",
        "applicationStatus",
        "Your form is not connected to the school database yet. No application has been submitted. Please contact the school."
    );


    // =====================================
    // 8. APPLICATION TRACKING FORM
    // =====================================

    handleUnconnectedForm(
        "trackingForm",
        "trackingStatus",
        "Application tracking is not yet connected. Please contact the school to check your application."
    );


    // =====================================
    // 9. PARENT COMMUNICATION FORM
    // =====================================

    handleUnconnectedForm(
        "parentForm",
        "parentStatus",
        "Parent messaging is not yet connected. Your message has not been sent. Please contact the school."
    );


    // =====================================
    // 10. PREVENT EMPTY PLACEHOLDER LINKS
    // =====================================

    document.querySelectorAll('a[href="#"]').forEach(function (link) {

        link.addEventListener("click", function (event) {
            event.preventDefault();
        });

    });

});
