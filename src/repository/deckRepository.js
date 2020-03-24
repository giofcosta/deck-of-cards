import repository from './repository'

const resource = "/deck";

export default {
    createDeck(payload) { 
        return repository.post(`${resource}/new`, payload);
    },
    addPile(payload) {
        return repository.get(`${resource}/${payload.deckID}/pile/cardsPile/add/?cards=${payload.cards.join()}`);
    }
}