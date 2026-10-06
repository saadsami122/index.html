:root {
    --green: #0c3b32;
    --green-dark: #062a24;
    --green-light: #174f43;
    --gold: #b99a5b;
    --cream: #f4f1e9;
    --white: #ffffff;
    --black: #111615;
    --gray: #6f7774;
    --line: #d9ddd8;

    --container: 1180px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--cream);
    color: var(--black);
    font-family: "IBM Plex Sans Arabic", sans-serif;
    line-height: 1.7;
}

body.en {
    font-family: "Inter", sans-serif;
    direction: ltr;
}

a {
    text-decoration: none;
    color: inherit;
}

button,
input,
textarea,
select {
    font: inherit;
}

.container {
    width: min(90%, var(--container));
    margin: auto;
}


/* =========================
   NAVIGATION
========================= */

.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
    background: rgba(244, 241, 233, 0.92);
    backdrop-filter: blur(15px);
    border-bottom: 1px solid rgba(0,0,0,.06);
}

.nav-inner {
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: "Inter", sans-serif;
    font-weight: 700;
    letter-spacing: 2px;
}

.logo-mark {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    color: var(--cream);
    background: var(--green);
    font-size: 20px;
}

.logo-text {
    font-size: 18px;
}

.nav-links {
    display: flex;
    gap: 32px;
}

.nav-links a {
    font-size: 14px;
    transition: .25s ease;
}

.nav-links a:hover {
    color: var(--gold);
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
}

.lang-btn {
    background: transparent;
    border: 1px solid var(--green);
    color: var(--green);
    padding: 8px 12px;
    cursor: pointer;
    font-family: "Inter";
}

.nav-cta {
    background: var(--green);
    color: white;
    padding: 10px 18px;
    font-size: 13px;
    transition: .25s ease;
}

.nav-cta:hover {
    background: var(--green-dark);
}


/* =========================
   HERO
========================= */

.hero {
    min-height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    overflow: hidden;
    padding-top: 80px;
    background:
        radial-gradient(circle at 80% 30%, rgba(185,154,91,.12), transparent 25%),
        var(--cream);
}

.hero-pattern {
    position: absolute;
    width: 500px;
    height: 500px;
    right: -200px;
    top: 120px;
    border: 1px solid rgba(12,59,50,.12);
    transform: rotate(45deg);
}

.hero-grid {
    display: grid;
    grid-template-columns: 1.15fr .85fr;
    gap: 100px;
    align-items: center;
}

.hero-content {
    position: relative;
    z-index: 2;
}

.eyebrow {
    display: inline-block;
    color: var(--gold);
    font-size: 12px;
    letter-spacing: 1.5px;
    font-family: "Inter", sans-serif;
    margin-bottom: 24px;
}

.hero h1 {
    font-size: clamp(48px, 6vw, 82px);
    line-height: 1.08;
    font-weight: 600;
    letter-spacing: -2px;
    max-width: 800px;
}

.hero h1 span,
.services-intro span,
.investors-section h2 span,
.contact-section h2 span,
.vision-section h2 span {
    color: var(--green);
}

.hero-description {
    color: var(--gray);
    max-width: 630px;
    font-size: 18px;
    margin-top: 30px;
}

.hero-buttons {
    display: flex;
    gap: 14px;
    margin-top: 38px;
}

.btn {
    padding: 15px 25px;
    font-size: 14px;
    transition: .25s ease;
}

.btn-primary {
    background: var(--green);
    color: white;
}

.btn-primary:hover {
    background: var(--green-dark);
    transform: translateY(-2px);
}

.btn-secondary {
    border: 1px solid var(--green);
    color: var(--green);
}

.btn-secondary:hover {
    background: var(--green);
    color: white;
}


/* HERO CARD */

.hero-card {
    background: var(--green);
    color: white;
    min-height: 470px;
    padding: 28px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 30px 30px 0 rgba(185,154,91,.18);
}

.card-top,
.card-bottom {
    display: flex;
    justify-content: space-between;
    font-family: "Inter";
    font-size: 11px;
    letter-spacing: 1px;
    opacity: .7;
}

.card-center {
    text-align: center;
}

.card-center h3 {
    font-family: "Inter";
    font-size: 28px;
    margin-top: 30px;
}

.card-center p {
    opacity: .65;
    margin-top: 6px;
}

.compass {
    width: 180px;
    height: 180px;
    border: 1px solid rgba(255,255,255,.3);
    border-radius: 50%;
    margin: auto;
    position: relative;
}

.compass::before,
.compass::after {
    content: "";
    position: absolute;
    background: rgba(255,255,255,.15);
}

.compass::before {
    width: 1px;
    height: 100%;
    left: 50%;
}

.compass::after {
    height: 1px;
    width: 100%;
    top: 50%;
}

.compass-line {
    position: absolute;
    width: 1px;
    height: 90px;
    background: var(--gold);
    left: 50%;
    top: 45px;
    transform: rotate(40deg);
}

.compass-dot {
    width: 8px;
    height: 8px;
    background: var(--gold);
    position: absolute;
    border-radius: 50%;
    top: 50%;
    left: 50%;
}


/* =========================
   SECTIONS
========================= */

.section {
    padding: 130px 0;
}

.section-heading {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 70px;
}

.section-number {
    color: var(--gold);
    font-family: "Inter";
    font-size: 13px;
}

.section-label {
    font-size: 14px;
    letter-spacing: 1px;
}


/* =========================
   ABOUT
========================= */

.about-section {
    background: white;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
}

.about-grid h2 {
    font-size: clamp(42px, 5vw, 68px);
    line-height: 1.1;
    font-weight: 500;
}

.about-grid h2 em {
    color: var(--green);
    font-style: normal;
}

.about-text {
    color: var(--gray);
}

.about-text p {
    margin-bottom: 24px;
}

.about-values {
    margin-top: 45px;
    border-top: 1px solid var(--line);
}

.about-values div {
    display: flex;
    align-items: center;
    gap: 30px;
    padding: 17px 0;
    border-bottom: 1px solid var(--line);
}

.about-values strong {
    color: var(--gold);
    font-family: "Inter";
    font-size: 12px;
}

.about-values span {
    color: var(--black);
}


/* =========================
   SERVICES
========================= */

.services-section {
    background: var(--cream);
}

.services-intro {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    margin-bottom: 60px;
}

.services-intro h2 {
    font-size: clamp(42px, 5vw, 65px);
    line-height: 1.1;
    font-weight: 500;
}

.services-intro p {
    max-width: 380px;
    color: var(--gray);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1px;
    background: var(--line);
    border: 1px solid var(--line);
}

.service-card {
    background: var(--cream);
    padding: 38px;
    min-height: 300px;
    position: relative;
    transition: .3s ease;
}

.service-card:hover {
    background: var(--green);
    color: white;
    transform: translateY(-5px);
}

.service-card > span {
    color: var(--gold);
    font-family: "Inter";
    font-size: 12px;
}

.service-card h3 {
    font-family: "Inter";
    font-size: 24px;
    margin-top: 50px;
}

.service-card p {
    color: var(--gray);
    font-size: 14px;
    margin-top: 15px;
}

.service-card:hover p {
    color: rgba(255,255,255,.65);
}

.arrow {
    position: absolute;
    bottom: 30px;
    right: 30px;
    color: var(--gold);
    font-size: 22px;
}


/* =========================
   VISION
========================= */

.vision-section {
    background: var(--green);
    color: white;
    padding: 130px 0;
}

.vision-grid {
    display: grid;
    grid-template-columns: 1.2fr .8fr;
    gap: 100px;
    align-items: center;
}

.vision-section h2 {
    font-size: clamp(44px, 6vw, 78px);
    line-height: 1.05;
    font-weight: 500;
}

.vision-section h2 span {
    color: var(--gold);
}

.vision-section p {
    color: rgba(255,255,255,.7);
    margin-bottom: 25px;
}


/* =========================
   SECTORS
========================= */

.sectors-section {
    background: white;
}

.sectors-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

.sector {
    padding: 28px 10px;
    border-bottom: 1px solid var(--line);
    color: var(--gold);
    font-family: "Inter";
    font-size: 12px;
}

.sector span {
    color: var(--black);
    font-family: "Inter";
    font-size: 22px;
    margin-left: 35px;
}


/* =========================
   INVESTORS
========================= */

.investors-section {
    background: var(--green-dark);
    color: white;
    padding: 130px 0;
}

.investor-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 100px;
    align-items: center;
}

.investors-section h2 {
    font-size: clamp(45px, 5vw, 70px);
    line-height: 1.1;
    font-weight: 500;
}

.investors-section p {
    color: rgba(255,255,255,.65);
    max-width: 480px;
}

.text-link {
    display: inline-flex;
    gap: 15px;
    color: var(--gold);
    margin-top: 35px;
}


/* =========================
   NETWORK
========================= */

.network-section {
    background: var(--cream);
    padding: 120px 0;
}

.network-content {
    text-align: center;
}

.network-content > p {
    color: var(--gray);
}

.network-names {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 60px;
    margin: 55px 0 30px;
}

.network-names span {
    font-family: "Inter";
    font-size: 22px;
    font-weight: 600;
}

.network-content small {
    color: #999;
    font-size: 11px;
}


/* =========================
   CONTACT
========================= */

.contact-section {
    background: white;
    padding: 130px 0;
}

.contact-grid {
    display: grid;
    grid-template-columns: .8fr 1.2fr;
    gap: 100px;
}

.contact-intro h2 {
    font-size: clamp(42px, 5vw, 65px);
    line-height: 1.1;
    font-weight: 500;
}

.contact-intro p {
    color: var(--gray);
    margin-top: 25px;
    max-width: 430px;
}

.contact-form {
    background: var(--cream);
    padding: 45px;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
}

.form-group {
    margin-bottom: 25px;
}

.form-group label {
    display: block;
    font-size: 12px;
    margin-bottom: 8px;
}

input,
textarea,
select {
    width: 100%;
    border: 1px solid var(--line);
    background: white;
    padding: 14px;
    outline: none;
    transition: .2s;
}

input:focus,
textarea:focus,
select:focus {
    border-color: var(--green);
}

textarea {
    resize: vertical;
}

.submit-btn {
    width: 100%;
    background: var(--green);
    color: white;
    border: none;
    padding: 17px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    transition: .25s;
}

.submit-btn:hover {
    background: var(--green-dark);
}

.form-message {
    margin-top: 15px;
    font-size: 13px;
}


/* =========================
   FOOTER
========================= */

.footer {
    background: #071f1a;
    color: white;
    padding: 70px 0 25px;
}

.footer-top {
    display: flex;
    justify-content: space-between;
    gap: 50px;
    padding-bottom: 70px;
}

.footer-brand p {
    max-width: 350px;
    color: rgba(255,255,255,.5);
    margin-top: 20px;
    font-family: "Inter";
    font-size: 13px;
}

.footer-links {
    display: flex;
    gap: 100px;
}

.footer-links div {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer-links span {
    color: var(--gold);
    font-family: "Inter";
    font-size: 11px;
    margin-bottom: 8px;
}

.footer-links a {
    color: rgba(255,255,255,.65);
    font-size: 13px;
}

.footer-bottom {
    border-top: 1px solid rgba(255,255,255,.1);
    padding-top: 22px;
    display: flex;
    justify-content: space-between;
    color: rgba(255,255,255,.35);
    font-family: "Inter";
    font-size: 11px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 900px) {

    .nav-links {
        display: none;
    }

    .nav-cta {
        display: none;
    }

    .hero-grid,
    .about-grid,
    .vision-grid,
    .investor-grid,
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 60px;
    }

    .hero {
        padding: 130px 0 80px;
    }

    .hero-card {
        min-height: 380px;
    }

    .services-intro {
        flex-direction: column;
    }

    .services-grid {
        grid-template-columns: 1fr;
    }

    .contact-form {
        padding: 25px;
    }

    .footer-top {
        flex-direction: column;
    }
}


@media (max-width: 600px) {

    .hero h1 {
        font-size: 48px;
    }

    .hero-buttons {
        flex-direction: column;
    }

    .btn {
        text-align: center;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 0;
    }

    .sectors-grid {
        grid-template-columns: 1fr;
    }

    .network-names {
        flex-direction: column;
        gap: 20px;
    }

    .footer-links {
        gap: 40px;
    }

    .footer-bottom {
        flex-direction: column;
        gap: 10px;
    }
}
