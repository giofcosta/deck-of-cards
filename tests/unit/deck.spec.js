import deck from '../../src/store/modules/deck'

describe('deck/mutations', () => {
    test('updateDeckID update deckID', () => {
        const deckID = 'xpto';
        const state = {
            deckID: ''
        }
        deck.mutations.updateDeckID(state, deckID);
        expect(state.deckID).toBe(deckID);
    })
})

describe('deck/mutations', () => {
    test('updateDeckID update deckID', () => {
        const deckID = 'xpto';
        const state = {
            deckID: ''
        }
        deck.mutations.updateDeckID(state, deckID);
        expect(state.deckID).toBe(deckID);
    })
})