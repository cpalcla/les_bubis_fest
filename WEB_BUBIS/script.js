document.addEventListener('DOMContentLoaded', () => {
    
    // Selección de elementos
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    // Toggle del menú al hacer click
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        
        // Animación simple del botón (opcional, transforma a X)
        hamburger.classList.toggle('toggle');
    });

    // Cerrar menú al hacer click en un enlace (UX para móvil)
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('nav-active');
        });
    });

});