// --- CARTE DEL MEMORY ---
let symbols = ["🍎", "🍎", "⭐", "⭐", "🍀", "🍀", "🔥", "🔥"];

// Mischia le carte
symbols.sort(() => 0.5 - Math.random());

// Contenitore del gioco
let game = document.getElementById("game");

// Variabili di controllo
let firstCard = null;
let secondCard = null;
let block = false;

// Crea le carte
symbols.forEach(symbol => {
    let card = document.createElement("div");
    card.className = "card hidden";
    card.textContent = symbol;

    card.addEventListener("click", () => {
        if (block || !card.classList.contains("hidden")) return;

        card.classList.remove("hidden");

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            block = true;

            // Controlla se coincidono
            setTimeout(() => {
                if (firstCard.textContent !== secondCard.textContent) {
                    firstCard.classList.add("hidden");
                    secondCard.classList.add("hidden");
                }
                firstCard = null;
                secondCard = null;
                block = false;
            }, 800);
        }
    });

    game.appendChild(card);
});
