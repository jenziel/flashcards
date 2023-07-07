const chai = require("chai");
const expect = chai.expect;

const { createCard, createDeck, countCards } = require("../src/card");

const {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
} = require("../src/round");

describe("create round", function () {
  let card1;
  let card2;
  let card3;
  let deck;
  let round;
  beforeEach(() => {
    card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = createCard(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    card3 = createCard(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    let cards = [card1, card2, card3];
    deck = createDeck(cards);
    round = createRound(deck);
  });

  it("should be a function", function () {
    expect(createRound).to.be.a("function");
  });
  it("should create an object that represents a round", function () {
    expect(round).to.be.an("object");
  });
  it("should start at 0 turns", function () {
    expect(round.turns).to.equal(0);
  });
  it("should start with an empty array value assigned to incorrectValues key", function () {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });
  it("should hold onto the desk object inside the desk property", function () {
    expect(round.deck).to.deep.equal([
      {
        id: 1,
        question: "What is Robbie's favorite animal",
        answers: ["sea otter", "pug", "capybara"],
        correctAnswer: "sea otter",
      },
      {
        id: 14,
        question: "What organ is Khalid missing?",
        answers: ["spleen", "appendix", "gallbladder"],
        correctAnswer: "gallbladder",
      },
      {
        id: 12,
        question: "What is Travis's favorite stress reliever?",
        answers: [
          "listening to music",
          "watching Netflix",
          "playing with bubble wrap",
        ],
        correctAnswer: "playing with bubble wrap",
      },
    ]);
  });
  it("should set the currentCard property to the first card in the deck", function () {
    expect(round.currentCard).to.deep.equal({
      id: 1,
      question: "What is Robbie's favorite animal",
      answers: ["sea otter", "pug", "capybara"],
      correctAnswer: "sea otter",
    });
  });
});

describe("take turn", function () {
  let card1;
  let card2;
  let card3;
  let guess1;
  let guess2;
  let deck;
  let round;
  beforeEach(() => {
    card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = createCard(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    card3 = createCard(
      12,
      "What is Travis's favorite stress reliever?",
      ["listening to music", "watching Netflix", "playing with bubble wrap"],
      "playing with bubble wrap"
    );
    let cards = [card1, card2, card3];
    deck = createDeck(cards);
    round = createRound(deck);
    guess1 = "pug";
    guess2 = "sea otter";
  });

  it("should be a function", function () {
    console.log("takeTurn test:", round);
    expect(takeTurn).to.be.a("function");
  });

  it("should increase the value of turn in the round object each time it is passed", function () {
    takeTurn(guess2, round);
    takeTurn("spleen", round);
    expect(round.turns).to.deep.equal(2);
  });

  it("should update the current card to be the next card in the deck", function () {
    takeTurn(guess2, round);
    takeTurn("spleen", round);
    expect(round.currentCard).to.deep.equal({
      id: 12,
      question: "What is Travis's favorite stress reliever?",
      answers: [
        "listening to music",
        "watching Netflix",
        "playing with bubble wrap",
      ],
      correctAnswer: "playing with bubble wrap",
    });
  });

  it("should update the incorrect guesses array if necessary.", function () {
    takeTurn("pug", round);
    expect(round.incorrectGuesses).to.deep.equal([1]);
  });
  it("should return an incorrect message if guess is incorrect.", function () {
    expect(takeTurn("pug", round)).to.equal("incorrect!");
  });
  it("should return a correct message if guess is correct.", function () {
    expect(takeTurn("sea otter", round)).to.equal("correct!");
  });
});

describe("end of game", function () {
  let card1;
  let card2;
  let deck;
  let round;
  beforeEach(() => {
    card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    card2 = createCard(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );

    let cards = [card1, card2];
    deck = createDeck(cards);
    round = createRound(deck);
  });
  it("should have a calculatePercentCorrect function", function () {
    expect(calculatePercentCorrect).to.be.a("function");
  });
  it("should return the percentage of correct guesses for that round", function () {
    takeTurn("pug", round);
    takeTurn("gallbladder", round);
    expect(calculatePercentCorrect(round)).to.deep.equal(50);
  });
  it("should have an endRound function", function () {
    expect(endRound).to.be.a("function");
  });
  it("should print a message describing the percent correct for that round.", function () {
    takeTurn("pug", round);
    takeTurn("gallbladder", round);
    expect(endRound(round)).to.equal(
      "** Round over! ** You answered 50% of the questions correctly!"
    );
  });
});
