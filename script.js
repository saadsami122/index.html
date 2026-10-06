:root {

    --green: #0b332b;
    --green-dark: #051f1a;
    --green-light: #16483d;

    --gold: #b99a5b;

    --cream: #f3f0e8;
    --white: #ffffff;

    --black: #101514;
    --gray: #707875;

    --line: #d8dcd7;

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

    font-family:
        "IBM Plex Sans Arabic",
        sans-serif;

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
   NAVBAR
========================= */

.navbar {

    position: fixed;

    top: 0;
    left: 0;

    width: 100%;

    z-index: 1000;

    background:
        rgba(243, 240, 232, .9);

    backdrop-filter: blur(18px);

    border-bottom:
        1px solid rgba(0, 0, 0, .06);

    transition: .3s;
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

    font-family: "Inter";

    font-weight: 700;

    letter-spacing: 2px;
}

.logo-mark {

    width: 38px;
    height: 38px;

    display: grid;

    place-items: center;

    background: var(--green);

    color: white;

    font-size: 19px;
}

.logo-text {
    font-size: 18px;
}

.nav-links {

    display: flex;

    gap: 32px;
}

.nav-links a {

    font-size: 13px;

    transition: .25s;
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
}

.nav-cta {

    background: var(--green);

    color: white;

    padding: 10px 18px;

    font-size: 13px;
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

    color: white;

    background: var(--green);
}

.hero-image {

    position: absolute;

    inset: 0;

    background-image:
        url("https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=2200&q=85");

    background-size: cover;

    background-position: center;

    transform: scale(1.03);
}

.hero-overlay {

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(3, 25, 21, .94),
            rgba(3, 25, 21, .72),
            rgba(3, 25, 21, .35)
        );
}

.hero-content {

    position: relative;

    z-index: 2;

    padding-top: 90px;

    max-width: 900px;
}

.eyebrow {

    display: inline-block;

    color: var(--gold);

    font-family: "Inter";

    font-size: 11px;

    letter-spacing: 2px;

    margin-bottom: 25px;
}

.hero h1 {

    font-size:
        clamp(50px, 7vw, 88px);

    line-height: 1.04;

    font-weight: 500;

    letter-spacing: -3px;

    max-width: 1000px;
}

.hero h1 span {

    display: block;

    color: #d0b477;
}

.hero p {

    max-width: 670px;

    color:
        rgba(255, 255, 255, .72);

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

    font-size: 13px;

    transition: .25s;
}

.btn-primary {

    background: white;

    color: var(--green);
}

.btn-primary:hover {

    transform: translateY(-3px);

    background: var(--gold);

    color: white;
}

.btn-secondary {

    border:
        1px solid rgba(255, 255, 255, .5);

    color: white;
}

.btn-secondary:hover {

    background: white;

    color: var(--green);
}

.hero-location {

    display: flex;

    gap: 35px;

    margin-top: 70px;

    font-family: "Inter";

    font-size: 10px;

    letter-spacing: 2px;

    color:
        rgba(255, 255, 255, .45);
}


/* =========================
   SECTIONS
========================= */

.section {

    padding: 130px 0;
}

.section-heading {

    display: flex;

    gap: 20px;

    align-items: center;

    margin-bottom: 70px;
}

.section-heading.light {
    color: white;
}

.section-number {

    color: var(--gold);

    font-family: "Inter";

    font-size: 12px;
}

.section-label {

    font-family: "Inter";

    font-size: 12px;

    letter-spacing: 1.5px;
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

.about-title h2 {

    font-size:
        clamp(42px, 5vw, 68px);

    line-height: 1.08;

    font-weight: 500;
}

.about-title em {

    color: var(--green);

    font-style: normal;
}

.about-text {

    color: var(--gray);

    font-size: 16px;
}

.about-text p {

    margin-bottom: 24px;
}

.about-stats {

    border-top: 1px solid var(--line);

    margin-top: 45px;
}

.about-stats div {

    display: flex;

    gap: 30px;

    padding: 18px 0;

    border-bottom:
        1px solid var(--line);
}

.about-stats strong {

    color: var(--gold);

    font-family: "Inter";

    font-size: 12px;
}

.about-stats span {

    color: var(--black);

    font-family: "Inter";

    font-size: 13px;
}


/* =========================
   IMAGE BREAK
========================= */

.image-break {

    height: 600px;

    position: relative;

    display: flex;

    align-items: center;

    overflow: hidden;

    background-image:
        url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2200&q=85");

    background-size: cover;

    background-position: center;
}

.image-break::after {

    content: "";

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(4, 28, 23, .88),
            rgba(4, 28, 23, .2)
        );
}

.image-break-content {

    position: relative;

    z-index: 2;

    width: min(90%, var(--container));

    margin: auto;

    color: white;
}

.image-break-content span {

    color: var(--gold);

    font-family: "Inter";

    font-size: 11px;

    letter-spacing: 2px;
}

.image-break-content h2 {

    font-family: "Inter";

    font-size:
        clamp(48px, 7vw, 90px);

    line-height: .98;

    font-weight: 500;

    margin-top: 25px;
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

    gap: 70px;

    margin-bottom: 60px;
}

.services-intro h2 {

    font-size:
        clamp(42px, 5vw, 68px);

    line-height: 1.05;

    font-weight: 500;

    max-width: 750px;
}

.services-intro h2 span {

    color: var(--green);
}

.services-intro p {

    max-width: 400px;

    color: var(--gray);
}

.services-grid {

    display: grid;

    grid-template-columns:
        repeat(3, 1fr);

    gap: 1px;

    background: var(--line);

    border:
        1px solid var(--line);
}

.service-card {

    position: relative;

    min-height: 320px;

    padding: 38px;

    background: var(--cream);

    transition: .3s;
}

.service-card:hover {

    background: var(--green);

    color: white;

    transform: translateY(-5px);
}

.service-card > span {

    color: var(--gold);

    font-family: "Inter";

    font-size: 11px;
}

.service-card h3 {

    font-family: "Inter";

    font-size: 23px;

    margin-top: 50px;
}

.service-card p {

    color: var(--gray);

    font-size: 13px;

    margin-top: 15px;

    max-width: 300px;
}

.service-card:hover p {

    color:
        rgba(255, 255, 255, .65);
}

.arrow {

    position: absolute;

    right: 30px;

    bottom: 30px;

    color: var(--gold);

    font-size: 22px;
}


/* =========================
   MARKETS
========================= */

.markets-section {

    padding: 130px 0;

    background:
        linear-gradient(
            120deg,
            rgba(3, 27, 22, .96),
            rgba(10, 55, 46, .9)
        ),
        url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2200&q=85");

    background-size: cover;

    background-position: center;

    color: white;
}

.markets-grid {

    display: grid;

    grid-template-columns:
        1fr 1fr;

    gap: 100px;

    align-items: center;
}

.markets-title h2 {

    font-size:
        clamp(44px, 5vw, 70px);

    line-height: 1.06;

    font-weight: 500;
}

.markets-title h2 span {

    display: block;

    color: var(--gold);
}

.markets-text p {

    color:
        rgba(255, 255, 255, .65);

    max-width: 480px;
}

.market-list {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    margin-top: 40px;

    border-top:
        1px solid rgba(255,255,255,.15);
}

.market-list span {

    padding: 18px 0;

    border-bottom:
        1px solid rgba(255,255,255,.15);

    font-family: "Inter";

    color:
        rgba(255,255,255,.8);
}


/* =========================
   APPROACH
========================= */

.approach-section {

    background: white;
}

.approach-grid {

    display: grid;

    grid-template-columns:
        repeat(4, 1fr);

    border:
        1px solid var(--line);
}

.approach-card {

    min-height: 310px;

    padding: 35px;

    border-left:
        1px solid var(--line);
}

.approach-card:first-child {
    border-left: none;
}

.approach-card span {

    color: var(--gold);

    font-family: "Inter";

    font-size: 11px;
}

.approach-card h3 {

    font-family: "Inter";

    font-size: 27px;

    margin-top: 60px;
}

.approach-card p {

    color: var(--gray);

    font-family: "Inter";

    font-size: 13px;

    margin-top: 15px;
}


/* =========================
   NETWORK
========================= */

.network-section {

    padding: 120px 0;

    background: var(--cream);

    text-align: center;
}

.network-content h2 {

    font-family: "Inter";

    font-size:
        clamp(42px, 5vw, 68px);

    line-height: 1.05;

    font-weight: 500;
}

.network-content h2 span {

    color: var(--green);
}

.network-names {

    display: flex;

    justify-content: center;

    flex-wrap: wrap;

    gap: 70px;

    margin: 60px 0 30px;
}

.network-names span {

    font-family: "Inter";

    font-size: 22px;

    font-weight: 600;
}

.network-content small {

    color: #999;

    font-size: 10px;
}


/* =========================
   CONTACT
========================= */

.contact-section {

    padding: 130px 0;

    background: white;
}

.contact-grid {

    display: grid;

    grid-template-columns:
        .8fr 1.2fr;

    gap: 100px;
}

.contact-intro h2 {

    font-size:
        clamp(42px, 5vw, 65px);

    line-height: 1.05;

    font-weight: 500;
}

.contact-intro h2 span {

    display: block;

    color: var(--green);
}

.contact-intro p {

    max-width: 430px;

    color: var(--gray);

    margin-top: 25px;
}

.contact-form {

    padding: 45px;

    background: var(--cream);
}

.form-row {

    display: grid;

    grid-template-columns:
        repeat(2, 1fr);

    gap: 20px;
}

.form-group {

    margin-bottom: 24px;
}

.form-group label {

    display: block;

    font-size: 11px;

    margin-bottom: 8px;
}

input,
textarea,
select {

    width: 100%;

    border:
        1px solid var(--line);

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

    padding: 17px;

    border: none;

    cursor: pointer;

    display: flex;

    justify-content: space-between;

    background: var(--green);

    color: white;

    transition: .25s;
}

.submit-btn:hover {

    background: var(--green-dark);
}

.form-message {

    margin-top: 15px;

    font-size: 12px;
}


/* =========================
   FOOTER
========================= */

.footer {

    padding: 70px 0 25px;

    background: #061f1a;

    color: white;
}

.footer-top {

    display: flex;

    justify-content: space-between;

    gap: 50px;

    padding-bottom: 70px;
}

.footer-brand p {

    max-width: 350px;

    margin-top: 20px;

    color:
        rgba(255,255,255,.45);

    font-family: "Inter";

    font-size: 12px;
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

    font-size: 10px;

    margin-bottom: 7px;
}

.footer-links a {

    color:
        rgba(255,255,255,.65);

    font-size: 12px;
}

.footer-bottom {

    padding-top: 22px;

    border-top:
        1px solid rgba(255,255,255,.1);

    display: flex;

    justify-content: space-between;

    color:
        rgba(255,255,255,.3);

    font-family: "Inter";

    font-size: 10px;
}


/* =========================
   RESPONSIVE
========================= */

@media (max-width: 950px) {

    .nav-links {
        display: none;
    }

    .nav-cta {
        display: none;
    }

    .hero-content {
        padding-top: 130px;
    }

    .about-grid,
    .markets-grid,
    .contact-grid {

        grid-template-columns: 1fr;

        gap: 60px;
    }

    .services-intro {

        flex-direction: column;

        gap: 30px;
    }

    .services-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }

    .approach-grid {

        grid-template-columns:
            repeat(2, 1fr);
    }

    .approach-card {

        border-left: none;

        border-bottom:
            1px solid var(--line);
    }

    .image-break {
        height: 500px;
    }

    .footer-top {

        flex-direction: column;
    }
}


@media (max-width: 600px) {

    .hero h1 {

        font-size: 48px;

        letter-spacing: -1.5px;
    }

    .hero-buttons {

        flex-direction: column;
    }

    .btn {

        text-align: center;
    }

    .hero-location {

        gap: 15px;

        flex-wrap: wrap;
    }

    .services-grid {

        grid-template-columns: 1fr;
    }

    .approach-grid {

        grid-template-columns: 1fr;
    }

    .form-row {

        grid-template-columns: 1fr;
    }

    .contact-form {

        padding: 25px;
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
