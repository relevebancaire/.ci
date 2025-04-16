const releves = [
    { nom: "Relevé bancaire standard", image: "images/societeg.jpg", prix: "10€" },
    { nom: "Relevé bancaire détaillé", image: "images/detaille.png", prix: "20€" },
    { nom: "Relevé bancaire premium", image: "images/premium.png", prix: "30€" },
    { nom: "Relevé bancaire VIP", image: "images/vip.png", prix: "50€" },
    { nom: "Relevé bancaire entreprise", image: "images/entreprise.png", prix: "40€" },
    { nom: "Relevé bancaire privé", image: "images/prive.png", prix: "35€" },
    { nom: "Relevé bancaire express", image: "images/express.png", prix: "15€" },
    { nom: "Relevé bancaire luxe", image: "images/luxe.png", prix: "60€" }
];

function afficherReleves() {
    const container = document.getElementById("relevesContainer");
    container.innerHTML = "";

    releves.forEach(releve => {
        const div = document.createElement("div");
        div.classList.add("releve");

        const img = document.createElement("img");
        img.src = releve.image;
        img.alt = releve.nom;
        img.addEventListener("click", () => afficherPopup(releve.image)); // Click event

        div.innerHTML = `<h2>${releve.nom}</h2>`;
        div.appendChild(img);
        div.innerHTML += `<p>Prix: <span class="price">${releve.prix}</span></p>`;

        container.appendChild(div);
    });
}

// Function to handle pop-up image display (FORCED TO WORK)
function afficherPopup(imageSrc) {
    const popup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    if (!popup || !popupImage) {
        console.error("Popup or popupImage element missing!");
        return;
    }

    popup.style.display = "flex";
    popupImage.src = imageSrc;
}

// Function to close the pop-up
function fermerPopup() {
    document.getElementById("imagePopup").style.display = "none";
}

document.addEventListener("DOMContentLoaded", afficherReleves);
