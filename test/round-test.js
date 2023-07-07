const chai = require("chai");
const expect = chai.expect;

const {createCard, createDeck} = require('../src/card')

const {
  createRound,
  takeTurn,
  evaluateGuess,
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
    let cards = [card1, card2, card3]
    deck = createDeck(cards);
    round = createRound(deck);
});

  it("should be a function", function () {
    expect(createRound).to.be.a("function");
  });
  it("should create an object that represents a round", function () {
    expect(round).to.be.an('object');
  });
  it('should start at 0 turns', function(){
    expect(round.turns).to.equal(0)
  })
  it('should start with an empty array value assigned to incorrectValues key', function(){
    expect(round.incorrectGuesses).to.deep.equal([])
  })
  it('should hold onto the desk object inside the desk property', function(){
    expect(round.deck).to.deep.equal([
        {
          id: 1,
          question: "What is Robbie's favorite animal",
          answers: [ 'sea otter', 'pug', 'capybara' ],
          correctAnswer: 'sea otter'
        },
        {
          id: 14,
          question: 'What organ is Khalid missing?',
          answers: [ 'spleen', 'appendix', 'gallbladder' ],
          correctAnswer: 'gallbladder'
        },
        {
          id: 12,
          question: "What is Travis's favorite stress reliever?",
          answers: [
            'listening to music',
            'watching Netflix',
            'playing with bubble wrap'
          ],
          correctAnswer: 'playing with bubble wrap'
        }
      ])
  })
  it('should set the currentCard property to the first card in the deck', function(){
    expect(round.currentCard).to.deep.equal({
        id: 1,
        question: "What is Robbie's favorite animal",
        answers: [ 'sea otter', 'pug', 'capybara' ],
        correctAnswer: 'sea otter'
      })
  })
});

// takeTurn('sea otter', round); // => 'correct!'

// takeTurn('spleen', round);  // => 'incorrect!'

// round.turns;  // => 2

// round.incorrectGuesses;  // => [14]

// round.currentCard;  // => { id: 12,
//             	      //      question: 'What is Travis\'s favorite stress reliever?',
//             	      //      answers: ['listening to music', 'watching Netflix', 'playing with bubble wrap'],
//             	      //      correctAnswer: 'playing with bubble wrap'
//             	      //    }

// calculatePercentCorrect(round);  // => 50

describe("check answer", function () {
  it("should be a function", function () {
    expect(evaluateGuess).to.be.a("function");
  });
  it("should return an incorrect message if guess is incorrect.", function () {
    expect(evaluateGuess("lion", "tiger")).to.equal("incorrect!");
  });
  it("should return a correct message if guess is correct.", function () {
    expect(evaluateGuess("tiger", "tiger")).to.equal("correct!");
  });
});

describe("end round", function () {
  it("should be a function", function () {
    expect(endRound).to.be.a("function");
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
    let takeTurnExample;
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
      let cards = [card1, card2, card3]
      deck = createDeck(cards);
      round = createRound(deck);
      guess1 = "pug";
      guess2 = "sea otter";
      takeTurnExample = takeTurn(guess2, round);
      takeTurnExample2 = takeTurn(guess1, round)
  });

  it("should be a function", function () {
    expect(takeTurn).to.be.a("function");
  });
  it("should increase the value of turn in the round object each time it is passed", function () {
    expect(takeTurnExample).to.deep.equal({
        deck: [{
            id: 1,
            question: "What is Robbie's favorite animal",
            answers:["sea otter", "pug", "capybara"],
            correctAnswer: "sea otter"
        },
        {   id: 14,
            question: "What organ is Khalid missing?",
            answers: ["spleen", "appendix", "gallbladder"],
            correctAnswer: "gallbladder"
        },
        {   id: 12,
            question: "What is Travis's favorite stress reliever?",
            answers: ["listening to music", "watching Netflix", "playing with bubble wrap"],
            correctAnswer: "playing with bubble wrap"
        }],
        turns: 1,
        incorrectGuesses: [],
        currentCard: deck[1]
    });
});
});


    describe("evaluate guesses", function(){

    let card1;
    let card2;
    let card3; 
    let cards;
    let guess1;
    let guess2;
    let guess3;
    let guess4;
    let deck;
    let round;
    let takeTurnExample;
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
      cards = [card1, card2, card3]
      guess1 = "pug";
      guess2 = "sea otter";
      guess3 = "spleen";
      guess4 = "gall bladder";
      deck = createDeck(cards);
      round = createRound(deck);
      turn = takeTurn(guess1, round)
  });

        it("should check if a guess is correct and return incorrect accordingly", function(){
            expect(evaluateGuess(guess3, "appendix")).to.equal('incorrect!')
        })
        it("should check if a guess is correct and return correct accordingly", function(){
            expect(evaluateGuess(guess4, "gallbladder")).to.equal('correct!')
        })

        it("should update the incorrect guesses array", function(){
            expect(takeTurnExample.incorrectGuesses).to.deep.equal([14])
        })
    })