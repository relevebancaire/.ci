
// Bank statements data
const releves = [
    { nom: "1.000.000 - 3.000.000", image: "images/societeg.jpg", prix: "70.000 Fcfa" },
    { nom: "3.000.000 - 5.000.000", image: "images/societeg.jpg", prix: "100.000 Fcfa" },
    { nom: "5.000.000 - 6.000.000", image: "images/societeg.jpg", prix: "130.000 Fcfa" },
    { nom: "6.000.000 - 7.000.000", image: "images/societeg.jpg", prix: "160.000 Fcfa" },
    { nom: "7.000.000 - 8.000.000", image: "images/societeg.jpg", prix: "190.000 Fcfa" },
    { nom: "8.000.000 - 9.000.000", image: "images/societeg.jpg", prix: "220.000 Fcfa" },
    { nom: "9.000.000 - 10.000.000", image: "images/societeg.jpg", prix: "250.000 Fcfa" },
    { nom: "10.000.000 - 10.000.000+", image: "images/societeg.jpg", prix: "280.000 Fcfa" }
];

// Function to display bank statements dynamically
function afficherReleves() {
    const container = document.getElementById("relevesContainer");
    container.innerHTML = "";

    releves.forEach(releve => {
        const div = document.createElement("div");
        div.classList.add("releve");

        const img = document.createElement("img");
        img.src = releve.image;
        img.alt = releve.nom;
        img.classList.add("fade-in"); // Adds fade-in animation
        img.addEventListener("click", () => afficherPopup(releve.image)); // Click event

        div.innerHTML = `<h2>${releve.nom}</h2>`;
        div.appendChild(img);
        div.innerHTML += `<p>Prix: <span class="price">${releve.prix}</span></p>`;

        container.appendChild(div);
    });
}

// Function to display pop-up image with smooth animation
function afficherPopup(imageSrc) {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    if (!popup || !popupImage) {
        console.error("Popup or popupImage element missing!");
        return;
    }

    popup.style.display = "flex";
    popupImage.src = "";
    popupImage.classList.add("loading"); // Add loading class

    setTimeout(() => {
        popupImage.src = imageSrc;
        popupImage.classList.remove("loading"); // Remove loading class
        popup.style.opacity = "0";
        setTimeout(() => {
            popup.style.opacity = "1"; // Smooth transition
        }, 100);
    }, 300);
}

// Function to close the pop-up smoothly
function fermerPopup() {
    const popup = document.getElementById("imagePopup");
    popup.style.opacity = "0";
    setTimeout(() => {
        popup.style.display = "none";
    }, 200);
}

// Function to load pages dynamically into the main content area
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
            window.history.pushState({}, "", page); // Updates URL dynamically without reload
        })
        .catch(error => console.error("Error loading page:", error));
}

// Handle browser navigation (back/forward buttons) without losing dynamic loading
window.addEventListener("popstate", function () {
    loadPage(window.location.pathname.substring(1));
});

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });

    // Ensure default page loads when the site is first opened
    const initialPage = window.location.pathname.substring(1) || "index.html"; 
    loadPage(initialPage);

    // Display bank statements dynamically
    afficherReleves();
});
