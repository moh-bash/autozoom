var cars = [
    {
        name: "BMW",
        country: "Made in Germany",
        year: "2023",
        model: "X5",
        img: "./img/bmw/bmw-car-png-2085.png"

    },
    {
        name: "Toyota",
        country: "Made in Japan",
        year: "2022",
        model: "XM5",
        img: "./img/bmw/bmw-car-png-2099.png"
    },
    {
        name: "Kia",
        country: "Korea",
        year: "2021",
        model: "S5255",
        img: "./img/bmw/bmw-car-png-2103.png"
    },
    {
        name: "Kia",
        country: "Korea",
        year: "2021",
        model: "S5255",
        img: "./img/bmw/bmw-car-png-2094.png"
    },
];

const cardsContainer = document.getElementById("cardsContainer");
const carDetails = document.getElementById("carDetails");

function createCards() {
    cardsContainer.innerHTML = "";
    cars.forEach((car, index) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
          <div style="width:200px;" class="card " onclick="removeCard(event, ${index})"><i class="fa-solid fa-trash"></i></div>
          <h3>${car.name}</h3>
          <p>${car.country}</p>`
            ;
        card.addEventListener("click", () => selectCard(index));
        cardsContainer.appendChild(card);
    });
}

function selectCard(index) {
    document.querySelectorAll(".card").forEach(card => card.classList.remove("selected"));
    const selectedCard = cardsContainer.children[index];
    selectedCard.classList.add("selected");
    carDetails.style.display = "block";
    carDetails.innerHTML = `
        <h3>${cars[index].name}</h3>
        <p><strong>Year:</strong> ${cars[index].year}</p>
        <p><strong>Color:</strong> ${cars[index].color}</p>
        <p><strong>Model:</strong> ${cars[index].model}</p>
        <img style="width:200px;" src="${cars[index].img}" alt="">
`
        ;
}

function removeCard(event, index) {
    event.stopPropagation();
    cars.splice(index, 1);
    createCards();
    carDetails.style.display = "none";
}

function searchCards() {
    const term = document.getElementById("searchInput").value.trim().toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
        const carName = cars[i].name.toLowerCase();
        if (carName.includes(term)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
    carDetails.style.display = "none";
}

createCards();