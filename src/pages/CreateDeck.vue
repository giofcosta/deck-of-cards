<template>
  <div>
    <div id="app-header">CARDS</div>
    <form action>
      <div v-for="(card, index) in cards" :key="index">
        <label :for="`card-${index}`">CARD {{index}}</label>
        <input type="text" :id="`card-${index}`" :name="`card-${index}`" v-model="card.name" />
      </div>
      <div>
        <label for="rotationCard">Rotation Card</label>
        <input type="text" id="rotationCard" name="rotationCard" v-model="rotationCard" />
      </div>
      <button @click.prevent="addDeck">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

const formCards = new Array();
for (var i = 0; i < 10; i++) {
  formCards.push({ name: "" });
}

export default {
  name: "createDeck",
  data() {
    return {
      cards: formCards,
      rotationCard: ""
    };
  },
  computed: {
    ...mapGetters("deck", ["deckDescription"])
  },
  methods: {
    ...mapActions("deck", ["createDeck"]),
    addDeck() {
      this.createDeck({cards: this.cards, rotationCard: this.rotationCard});
    }
    // ...mapActions(["someState"])
  }
};
</script>

<style scoped>
</style>