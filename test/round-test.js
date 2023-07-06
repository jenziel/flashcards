const chai = require('chai');
const expect = chai.expect;

const {createCard} = require('../src/card')
const {createDeck, countCards, takeTurn, evaluateGuess, endRound } = require('../src/round');

describe('make a new deck', function(){
    it('should be a function', function(){
        expect(createDeck).to.be.a('function');
    })
    it('should take in card objects and push those into a deck array', function() {
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const cards = [card1, card2]
        expect(createDeck(cards)).to.deep.equal([
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
            }
        ])
    })
})

describe('count cards', function(){
    it('should track how many cards are in the deck', function(){
        const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
        const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
        const deck = createDeck([card1, card2])
        expect(countCards(deck)).to.equal(2)
    })
})

describe('take turn', function(){
    it('should be a function', function() {
        expect(takeTurn).to.be.a('function');
    });
});

describe('check answer', function(){
    it('should be a function', function(){
        expect(evaluateGuess).to.be.a('function')
    });
    it('should return an incorrect message if guess is incorrect.', function(){
        expect(evaluateGuess('lion', 'tiger')).to.equal('incorrect!')
    })
    it('should return a correct message if guess is correct.', function(){
        expect(evaluateGuess('tiger', 'tiger')).to.equal('correct!')
    })
})

describe('round', function(){
    it('should be a function', function(){
        expect(endRound).to.be.a('function')
    });
})