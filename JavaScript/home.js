// =================================
// MENU HAMBURGUER – MOBILE ONLY
// =================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link, .nav-btn');

function isMobile() {
    return window.innerWidth <= 768;
}

// Abrir/Fechar menu ao clicar no botão
hamburger.addEventListener('click', () => {
    if (isMobile()) {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    }
});

// Fecha o menu ao clicar em qualquer link (mobile)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (isMobile()) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});

// Fecha o menu ao clicar fora dele (mobile)
document.addEventListener('click', (e) => {
    if (isMobile() && !hamburger.contains(e.target) && !navMenu.contains(e.target)) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Opcional: fecha o menu se a tela for redimensionada para desktop
window.addEventListener('resize', () => {
    if (!isMobile()) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

