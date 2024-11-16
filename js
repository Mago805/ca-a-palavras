const cards = document.querySelectorAll('.card');
let flippedCards = [];
let matchedCards = 0;
let lockBoard = false;

function flipCard() {
    if (lockBoard) return;
    if (flippedCards.length === 2) return;

    this.classList.add('flipped');
    flippedCards.push(this);

    if (flippedCards.length === 2) {
        checkMatch();
    }
}

function checkMatch() {
    lockBoard = true;

    const [firstCard, secondCard] = flippedCards;

    if (firstCard.dataset.card === secondCard.dataset.card) {
        matchedCards++;
        resetBoard();
        if (matchedCards === cards.length / 2) {
            alert('Parabéns! Você encontrou todas as correspondências!');
        }
    } else {
        setTimeout(() => {
            firstCard.classList.remove('flipped');
            secondCard.classList.remove('flipped');
            resetBoard();
        }, 1000);
    }
}

function resetBoard() {
    flippedCards = [];
    lockBoard = false;
}

cards.forEach(card => card.addEventListener('click', flipCard));

(function shuffle() {
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 20);
        card.style.order = randomPos;
    });
})();
