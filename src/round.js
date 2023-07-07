const createRound = (deck) => {
    const round = {
        deck: deck,
        turns: 0,
        incorrectGuesses: [],
        currentCard: deck[0],
        }
    return round
}

const takeTurn = (guess, round) => {
    let index = round.turns 
    let correctAnswer = round.deck[index].correctAnswer
    if (guess !== correctAnswer){
        round.incorrectGuesses.push(round.deck[index].id)
    }
    round.turns += 1;
    round.currentCard = round.deck[round.turns]
    if (guess !== correctAnswer){
        return 'incorrect!'
    } else return 'correct!'
}


const endRound = () => {

}



module.exports = {
    createRound,
    takeTurn,
    endRound}