<template>
  <div>
    <app-header title="Ordered Pile"></app-header>

    <div id="deck-panel">

    </div>
    <button @click="addDeck">Create deck ID</button>
    {{deckDescription}}
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";
import AppHeader from "../components/Header";

export default {
  name: "deck",
   components: {
    AppHeader
  },
  computed: {
    //...mapState(),
    ...mapGetters("deck", ["deckDescription"])
  },
  props: {
    deckID: String
  },
  methods: {
    ...mapActions("deck", ["updateDeckID", "createDeck"]),
    addDeck() {
      
      this.createDeck();
    },
    showDeckID() {
      //this.updateDeckID(this.deckID);
    }
  }
};
</script>

