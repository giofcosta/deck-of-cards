import { repositoryFactory } from "../../repository/repositoryFactory";
const postRepository = repositoryFactory.get("deck");

const state = {
  piles: new Array() //{deckID, deck, rotationCard}
};

const getters = {
  deckDescription: state => {
    return state.deckID != 0 ? `Your deck is ${state.deckID}` : "";
  }
};

const mutations = {
  updateDeckID: (state, deckID) => {
    state.deckID = deckID;
  },
  addPile(state, pile) {
    console.log(pile);
    state.piles.push(pile);
  }
};

const actions = {
  async createDeck(context, payload) {
    let { data, status } = await postRepository.createDeck(payload);
    if (status == 200) {
      context.commit("addPile", {...payload, deckID: data.deck_id});
    }
  },

  updateDeckID: (context, deckID) => {
    if (deckID != 0) {
      context.commit("updateDeckID", deckID);
    }
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
