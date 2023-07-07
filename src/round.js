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
    // let correctAnswer = round.currentCard.correctAnswer;
    // let checkTrue = evaluateGuess(guess, correctAnswer);
    // if (checkTrue === 'incorrect!'){
    //     round.incorrectGuesses.push(round.currentCard.id)
    // }
    round.turns += 1;
    round.currentCard = round.deck[round.turns]
    return round
}

const evaluateGuess = (guess, round) => {
    const correctAnswer = round.deck[turns].correctAnswer
    console.log(correctAnswer)
    if (guess !== correctAnswer){
        return 'incorrect!'
    } else {return 'correct!'}
}

const updateMistakes = (currentCard) => {
    round.incorrectGuesses.push(currentCard.id)
}

const endRound = () => {

}



module.exports = {
    createRound,
    takeTurn,
    evaluateGuess,
    endRound}