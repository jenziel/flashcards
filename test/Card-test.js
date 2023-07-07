const chai = require("chai");
const expect = chai.expect;

const { createCard, createDeck, countCards } = require("../src/card");

describe("card", function () {
  it("should be a function", function () {
    expect(createCard).to.be.a("function");
  });

  it("should create a card and its properties", function () {
    const card = createCard(
      1,
      "What allows you to define a set of related information using key-value pairs?",
      ["object", "array", "function"],
      "object"
    );

    expect(card.id).to.equal(1);
    expect(card.question).to.equal(
      "What allows you to define a set of related information using key-value pairs?"
    );
    expect(card.answers).to.deep.equal(["object", "array", "function"]);
    expect(card.correctAnswer).to.equal("object");
  });
});

describe("make a new deck", function () {
  it("should be a function", function () {
    expect(createDeck).to.be.a("function");
  });
  it("should take in card objects and push those into a deck array", function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = createCard(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const cards = [card1, card2];
    expect(createDeck(cards)).to.deep.equal([
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
    ]);
  });
});

describe("count cards", function () {
  it("should return the number of cards in the deck", function () {
    const card1 = createCard(
      1,
      "What is Robbie's favorite animal",
      ["sea otter", "pug", "capybara"],
      "sea otter"
    );
    const card2 = createCard(
      14,
      "What organ is Khalid missing?",
      ["spleen", "appendix", "gallbladder"],
      "gallbladder"
    );
    const deck = createDeck([card1, card2]);
    expect(countCards(deck)).to.equal(2);
  });
});
