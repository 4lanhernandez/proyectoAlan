document.addEventListener("DOMContentLoaded", () => {
    // Los botones de información
    const emailButton = document.getElementById("email");

    // Funciones de los botones

    emailButton.addEventListener("click", () => {
        window.location.href = "mailto:alguien@example.com";
    });

    
    // Obtener los enlaces del menú desplegable
    const instagramLink = document.getElementById("instagramLink");
    const facebookLink = document.getElementById("facebookLink");
    const twitterLink = document.getElementById("twitterLink");

    // Redireccionar a las páginas del login
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


        
        const products = [
            { nombre: "Control Comando", descripcion: "Precisión Inalámbrica", precio: "$15.00", imgSrc: "img/comando1.jpeg" },
            { nombre: "Fifa 2018", descripcion: "Vive la aventura", precio: "$25.00", imgSrc: "img/cr75.jpeg" },
            { nombre: "Zelda", descripcion: "Aventura Épica", precio: "$75.00", imgSrc: "img/zelda3.png" },
            { nombre: "Super Mario", descripcion: "Plataformas Clásico", precio: "$85.00", imgSrc: "img/mario4.jpeg" },
            { nombre: "PlayStation 4", descripcion: "Consola Gráficos 4K", precio: "$275.00", imgSrc: "img/ps42.jpeg" },
            { nombre: "Nintendo 64", descripcion: "Consola Retro", precio: "$289.00", imgSrc: "img/nintendo64.jpeg" },
            { nombre: "Nintendo Switch", descripcion: "Portátil y Versátil", precio: "$375.00", imgSrc: "img/nintendoSwitch.jpeg" },
            { nombre: "Crash Bandicoot", descripcion: "Clásico de Aventura", precio: "$70.00", imgSrc: "img/crash.jpeg" },
            { nombre: "Mario Kart 8", descripcion: "Carreras Multijugador", precio: "$290.00", imgSrc: "img/mariokart8.jpeg" },
            { nombre: "GTA V", descripcion: "Mundo Abierto y Realista", precio: "$90.00", imgSrc: "img/gta5.jpeg" },
            { nombre: "PS3 SLIM", descripcion: "Con gráficos altos", precio: "$155.00", imgSrc: "img/ps3.jpeg" },
            { nombre: "Fifa07", descripcion: "Disfruta la experiencia", precio: "$100.00", imgSrc: "img/Fifa07.jpeg" }
        ];
        
        
        function showAllProducts(products) {
            const divProduct = document.getElementById("productsContainer");
            divProduct.innerHTML = ""; 
            products.forEach(product => {
                
                const divP = document.createElement("figure");
                divP.classList.add("producto");
        
                
                divP.innerHTML = `
                    <img src="${product.imgSrc}" alt="${product.nombre}" class="product-img" />
                    <figcaption>${product.nombre} - ${product.descripcion}
                        <span class="precio">${product.precio}</span>
                    </figcaption>
                `;
        
                
                divProduct.appendChild(divP);
            });
        }
        
        
        function searchProducts(products, searchTerm) {
            return products.filter(product =>
                product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
        
        
        function showSuggestions(filteredProducts) {
            const suggestionsBox = document.getElementById("suggestions");
            suggestionsBox.innerHTML = ""; 
        
            if (filteredProducts.length === 0) {
                suggestionsBox.style.display = "none"; 
                return;
            }
        
            filteredProducts.forEach(product => {
                const suggestionItem = document.createElement("div");
                suggestionItem.classList.add("suggestion-item");
                suggestionItem.innerHTML = `<strong>${product.nombre}</strong> - ${product.descripcion}`
                
               
                suggestionItem.addEventListener("click", () => {
                    showAllProducts([product]);
                    suggestionsBox.style.display = "none"; 
                    document.getElementById("searchInput").value = product.nombre; 
                });
                suggestionsBox.appendChild(suggestionItem);
            });
            suggestionsBox.style.display = "block"; 
        }
        
        
        document.getElementById("searchInput").addEventListener("input", function () {
            const searchTerm = this.value.toLowerCase();
            const filteredProducts = searchProducts(products, searchTerm);
            showSuggestions(filteredProducts);
        });
        
        
        document.getElementById("searchButton").addEventListener("click", function () {
            const searchTerm = document.getElementById("searchInput").value.toLowerCase();
            const filteredProducts = searchProducts(products, searchTerm);
            showAllProducts(filteredProducts);
            document.getElementById("suggestions").style.display = "none"; 
        });
        
        
        document.addEventListener("DOMContentLoaded", () => showAllProducts(products));

        // Dirigir hacia la página de contacto al hacer clic en el botón en index.html
const contactButton = document.getElementById("contact");

if (contactButton) {
    contactButton.addEventListener("click", () => {
        window.location.href = "contact.html";
    });
}

// Validar el envío del formulario de número de teléfono en el contact.html
const phoneForm = document.getElementById("phoneForm");

if (phoneForm) {
    phoneForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const phoneNumber = document.getElementById("phoneNumber").value;
        
        if (phoneNumber.match(/^[0-9]{8}$/)) {
            alert("Número enviado correctamente: " + phoneNumber);
        } else {
            alert("Por favor, ingrese un número válido de 8 dígitos.");
        }
    });
}

// Validar y manejar el envío del formulario de contacto
const contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = document.getElementById("name").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        
        if (name && phoneNumber.match(/[0-9]{10}/)) {
            alert("Gracias " + name + ". Su número " + phoneNumber + " ha sido enviado correctamente.");
        } else {
            alert("Por favor, ingrese un nombre válido y un número de teléfono correcto.");
        }
    });
}

const aboutButton = document.getElementById("about");

if (aboutButton) {
    // Cuando se hace clic en el botón About
    aboutButton.addEventListener("click", () => {
        // Dirigir hacia la página "about.html"
        window.location.href = "about.html";
    });
}
        


        

