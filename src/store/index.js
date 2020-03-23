import Vuex from "vuex";
import Vue from "vue";
import deck from "./modules/deck";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    deck
  }
});
