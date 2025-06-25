// Menu responsivo
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// Swiper - Slide principal (Home)
var swiper = new Swiper(".home-slider", {
    spaceBetween: 20,
    effect: "fade",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 4000,
    },
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});

// ScrollReveal - seguro, rápido e sem sumir
window.addEventListener('load', () => {
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '20px',
        duration: 400,
        delay: 50,
        easing: 'ease-out',
        reset: false,
        viewFactor: 0.2
    });

    sr.reveal(`
        .heading, 
        .about .content, .about .image,
        .features .box,
        .pricing .plan, .pricing .information,
        .trainers .box,
        .review .information,
        .banner,
        .footer .box
    `, {
        interval: 50
    });
});

document.querySelector("#newsletter-form").addEventListener("submit", async function (e) {
    e.preventDefault(); // Impede o recarregamento da página

    const form = e.target;
    const status = document.querySelector("#form-status");
    const formData = new FormData(form);

    try {
        const response = await fetch("https://formsubmit.co/lhtechbusiness@gmail.com", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            status.textContent = "Enviado ✔";
            status.style.color = "#FFD700";
            form.reset();
        } else {
            status.textContent = "Erro ao enviar";
            status.style.color = "red";
        }
    } catch (error) {
        status.textContent = "Erro de conexão";
        status.style.color = "red";
    }
});