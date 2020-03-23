import repository from './repository'

const resource = "/deck";

export default {
    createDeck(payload) { 
        return repository.post(`${resource}/new`, payload);
    }
}