const createCard = (num, question, answers, correctAnswer) => {
    const card = {
        id: num,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer,
    }
    return card
}

const createDeck = (cards) => {
    const deck = []
    cards.forEach(card => {
        deck.push(card)
    })
      return deck
  }

const countCards = (deck) => {
    return deck.length
}


module.exports = {
    createCard,
    createDeck,
    countCards,
}