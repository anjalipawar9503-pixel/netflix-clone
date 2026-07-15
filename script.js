const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-btn");
const cards = document.querySelectorAll(".card");

function filterCards() {
    const value = searchInput.value.trim().toLowerCase();

    cards.forEach(card => {
        const title = (card.getAttribute("data-title") || card.innerText).toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
    });
}

cards.forEach(card => {
    const title = card.querySelector(".card-overlay")?.textContent?.trim() || "";
    card.setAttribute("data-title", title.toLowerCase());
});

searchInput.addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        filterCards();
    } else {
        filterCards();
    }
});

searchButton.addEventListener("click", filterCards);