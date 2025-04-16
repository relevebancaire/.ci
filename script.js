const releves = [
    { nom: "Relevé bancaire standard", image: "images/standard.png", prix: "10€" },
    { nom: "Relevé bancaire détaillé", image: "images/detaille.png", prix: "20€" },
    { nom: "Relevé bancaire premium", image: "images/premium.png", prix: "30€" }
];

function afficherReleves() {
    const container = document.getElementById("relevesContainer");
    container.innerHTML = "";

    releves.forEach(releve => {
        const div = document.createElement("div");
        div.classList.add("releve");

        div.innerHTML = `
            <h2>${releve.nom}</h2>
            <img src="${releve.image}" alt="Exemple ${releve.nom}" width="100%">
            <p>Prix: <span class="price">${releve.prix}</span></p>
        `;
        container.appendChild(div);
    });
}

document.addEventListener("DOMContentLoaded", afficherReleves);
