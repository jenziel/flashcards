const createDeck = (cards) => {
    const deck = []
    cards.forEach(card => {
        deck.push(card)
    })
      return deck
  }

function countCards(deck){
    return deck.length
}

function takeTurn() {

}

const evaluateGuess = (guess, correctAnswer) => {
    if (guess !== correctAnswer){
        return 'incorrect!'
    } else {return 'correct!'}
}
function endRound() {

}



module.exports = {
    createDeck,
    countCards,
    takeTurn,
    evaluateGuess,
    endRound}