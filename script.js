document.addEventListener("DOMContentLoaded", function () {
    
    // Navbar Animation al hacer Scroll
    const navbar = document.getElementById("mainNavbar");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";
            navbar.style.padding = "5px 0";
        } else {
            navbar.style.boxShadow = "0 2px 15px rgba(0,0,0,0.1)";
            navbar.style.padding = "10px 0";
        }
    });

    // Cerrar menú móvil al hacer click en un enlace
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            if(menuToggle.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

});