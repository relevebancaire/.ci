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

document.addEventListener("DOMContentLoaded", afficherReleves);
