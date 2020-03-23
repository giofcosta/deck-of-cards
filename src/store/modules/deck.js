import { repositoryFactory } from "../../repository/repositoryFactory";
const postRepository = repositoryFactory.get("deck");

const state = {
  deckID: null
};

const getters = {
  deckDescription: state => {
    return state.deckID != 0 ? `Your deck is ${state.deckID}` : "";
  }
};

const mutations = {
  updateDeckID: (state, deckID) => {
    state.deckID = deckID;
  }
};

const actions = {
  async createDeck(context, payload) {
    let { data, status } = await postRepository.createDeck(payload);
    if (status == 200) {
     await context.dispatch("addPile", { ...payload, deckID: data.deck_id });
    }
  },
  async addPile(context, payload) {
    let { data, status } = await postRepository.addPile(payload);
    if (status == 200) {
      context.commit("updateDeckID", data.deck_id);
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
