document.addEventListener("DOMContentLoaded", () => {
    // Los botones de información
    const aboutButton = document.getElementById("about");
    const emailButton = document.getElementById("email");
    const contactButton = document.getElementById("contact");

    // Funciones de los botones
    aboutButton.addEventListener("click", () => {
        alert("Amazing videogames es tu destino en línea para descubrir y explorar el emocionante mundo de los videojuegos.");
    });

    emailButton.addEventListener("click", () => {
        window.location.href = "mailto:alguien@example.com";
    });

    contactButton.addEventListener("click", () => {
        alert("Gracias por contactarnos. Estaremos en contacto pronto.");
    });

    // Obtener los enlaces del menú desplegable
    const instagramLink = document.getElementById("instagramLink");
    const facebookLink = document.getElementById("facebookLink");
    const twitterLink = document.getElementById("twitterLink");

    // Redireccionar a las páginas de login correspondientes
    instagramLink.addEventListener("click", () => {
        window.location.href = "https://www.instagram.com/accounts/login/";
    });

    facebookLink.addEventListener("click", () => {
        window.location.href = "https://www.facebook.com/login/";
    });

    twitterLink.addEventListener("click", () => {
        window.location.href = "https://twitter.com/login";
    });
        });

