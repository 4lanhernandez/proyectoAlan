document.addEventListener("DOMContentLoaded", () => {
    // Selección de los botones por ID
    const loginButton = document.getElementById("login");
    const searchButton = document.getElementById("search");
    const aboutButton = document.getElementById("about");
    const emailButton = document.getElementById("email");
    const contactButton = document.getElementById("contact");

    // Funcionalidades de botones
    loginButton.addEventListener("click", () => {
        window.location.href = "https://www.example.com/login";
    });

    searchButton.addEventListener("click", () => {
        window.location.href = "https://www.example.com/search";
    });

    aboutButton.addEventListener("click", () => {
        alert("Esta es la sección 'About' de nuestro proyecto.");
    });

    emailButton.addEventListener("click", () => {
        window.location.href = "mailto:alguien@example.com";
    });

    contactButton.addEventListener("click", () => {
        alert("Gracias por contactarnos. Estaremos en contacto pronto.");
    });
});