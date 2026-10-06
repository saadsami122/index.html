/* =========================
   LANGUAGE SWITCHER
========================= */

const languageToggle = document.getElementById("languageToggle");

let currentLanguage = "ar";

languageToggle.addEventListener("click", () => {

    currentLanguage = currentLanguage === "ar" ? "en" : "ar";

    document.documentElement.lang = currentLanguage;

    if (currentLanguage === "ar") {
        document.documentElement.dir = "rtl";
        document.body.classList.remove("en");
        languageToggle.textContent = "EN";
    } else {
        document.documentElement.dir = "ltr";
        document.body.classList.add("en");
        languageToggle.textContent = "AR";
    }

    document.querySelectorAll("[data-ar]").forEach(element => {

        const arabicText = element.getAttribute("data-ar");
        const englishText = element.getAttribute("data-en");

        if (currentLanguage === "ar") {
            element.textContent = arabicText;
        } else {
            element.textContent = englishText;
        }

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!name || !email) {

        formMessage.style.color = "#b33a3a";

        formMessage.textContent =
            currentLanguage === "ar"
                ? "فضلاً أدخل الاسم والبريد الإلكتروني."
                : "Please enter your name and email.";

        return;
    }


    /*
        ملاحظة:

        هذا الإصدار Front-End فقط.

        عند ربط الموقع بخدمة استقبال النماذج
        مثل Formspree أو خدمة Backend خاصة بك،
        يتم إرسال البيانات هنا إلى الخادم.
    */


    formMessage.style.color = "#0c3b32";

    formMessage.textContent =
        currentLanguage === "ar"
            ? "تم استلام طلبك بنجاح. سنتواصل معك قريبًا."
            : "Your request has been received. We will contact you shortly.";

    contactForm.reset();

});


/* =========================
   NAVBAR SCROLL EFFECT
========================= */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.style.boxShadow = "0 8px 30px rgba(0,0,0,.06)";
    } else {
        navbar.style.boxShadow = "none";
    }

});


/* =========================
   REVEAL ANIMATION
========================= */

const revealElements = document.querySelectorAll(
    ".service-card, .sector, .about-grid, .contact-form, .hero-card"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

                revealObserver.unobserve(entry.target);
            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(25px)";
    element.style.transition = "opacity .7s ease, transform .7s ease";

    revealObserver.observe(element);

});


/* =========================
   SMOOTH NAVIGATION
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const target = document.querySelector(this.getAttribute("href"));

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});
