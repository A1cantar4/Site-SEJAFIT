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

window.addEventListener('load', () => {
    const sr = ScrollReveal({
        origin: 'bottom',    // Animação de baixo para cima
        distance: '50px',
        duration: 300,
        delay: 150,
        easing: 'ease-out',
        reset: false,
        viewFactor: 0.2
    });

    // Revela TODAS as sections do site (inclusive #home)
    document.querySelectorAll('section').forEach(section => {
        sr.reveal(section, { interval: 100 });
    });

    // Revela elementos adicionais fora de section
    sr.reveal(`
        .box, 
        .content, 
        .info-box, 
        .information, 
        .plan, 
        .app-text, 
        .app-image,
        .footer, 
        .footer .box,
        .footer-logo-container,
        .social-footer,
        .whatsapp-float
    `, { interval: 100 });
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