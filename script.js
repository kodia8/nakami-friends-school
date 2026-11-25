
// NAKAMI FRIENDS SENIOUR SCHOOL
// Website interactive functions

document.addEventListener("DOMContentLoaded", function () {

    // MOBILE NAVIGATION
    const menuToggle = document.getElementById("menuToggle");
    const navigation = document.getElementById("navigation");

    if (menuToggle && navigation) {
        menuToggle.addEventListener("click", function () {
            navigation.classList.toggle("active");

            menuToggle.textContent =
                navigation.classList.contains("active") ? "✕" : "☰";
        });

        navigation.querySelectorAll("a").forEach(function (link) {
            link.addEventListener("click", function () {
                navigation.classList.remove("active");
                menuToggle.textContent = "☰";
            });
        });
    }

    // AUTOMATIC COPYRIGHT YEAR
    const year = document.getElementById("year");

    if (year) {
        year.textContent = new Date().getFullYear();
    }

    // ADMISSION ENQUIRY FORM
    const applicationForm = document.getElementById("applicationForm");
    const applicationMessage = document.getElementById("applicationMessage");

    if (applicationForm) {
        applicationForm.addEventListener("submit", function (event) {
            event.preventDefault();

            if (!applicationForm.checkValidity()) {
                applicationForm.reportValidity();
                return;
            }

            applicationMessage.textContent =
                "Thank you! Your enquiry has been entered. Please contact the school to complete your application.";

            applicationForm.reset();
        });
    }

    // SMOOTH SECTION NAVIGATION
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

    console.log("Nakami Friends Senior School website loaded successfully.");

});
