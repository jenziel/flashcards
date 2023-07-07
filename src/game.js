const data = require("./data");
const prototypeQuestions = data.prototypeData;
const { createCard, countCards, createDeck } = require("./card");
const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require("./round");

const util = require("./util");

function printMessage(deck) {
  console.log(`Welcome to FlashCards! You are playing with ${countCards(
    deck
  )} cards.
  -----------------------------------------------------------------------`);
}

function printQuestion(round) {
  util.main(round);
}

function start() {
  console.log("hello");
  let cards = prototypeQuestions.map((card) => {
    createCard(card.id, card.question, card.answers, card.correctAnswer);
  });
  return cards;
}
module.exports = { printMessage, printQuestion, start };
