import deckRepository from './deckRepository'

const repositories = {
    deck: deckRepository
}

export const repositoryFactory = {
    get: name => repositories[name]
}