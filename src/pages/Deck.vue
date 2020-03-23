<template>
  <div>
    <button @click="addDeck">Create deck ID</button>
    {{deckDescription}}
  </div>
</template>


<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "deck",
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