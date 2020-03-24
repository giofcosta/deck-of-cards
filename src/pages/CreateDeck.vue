<template>
  <div>
    <app-header title="CARDS"></app-header>
    <form id="form-cards" action>
      <div class="cards-container">
        <div v-for="(card, index) in cards" :key="index">
          <label :for="`card-${index}`">CARD {{index}}</label>
          <input type="text" :id="`card-${index}`" :name="`card-${index}`" v-model="card.name" />
        </div>
      </div>

      <div class="rotation-container">
        <label for="rotationCard">Rotation Card</label>
        <input type="text" id="rotationCard" name="rotationCard" v-model="rotationCard" />
      </div>
      <button @click.prevent="addDeck">Submit</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import AppHeader from "../components/Header";

const formCards = new Array();
for (var i = 0; i < 10; i++) {
  formCards.push({ name: "" });
}

export default {
  name: "createDeck",
  components: {
    AppHeader
  },
  data() {
    return {
      cards: formCards,
      rotationCard: ""
    };
  },
  methods: {
    ...mapActions("deck", ["createDeck"]),
    addDeck() {
      this.createDeck({
        cards: this.cards,
        rotationCard: this.rotationCard
      }).then(() => {
        this.$router.push(`/deck/${this.$store.state.deck.deckID}`);
      });
    }
    // ...mapActions(["someState"])
  }
};
</script>

<style lang="scss">
#form-cards {
  padding-top: 48px;
  max-width: 1288px;
  margin: 0 auto;

  input {
    height: 40px;
    border-radius: 4px;
    box-shadow: 0 0 6px 2px rgba(136, 136, 136, 0.1);
    border: solid 1px #ced2e0;
    background-color: #ffffff;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #505050;
    padding-left: 12px;
  }

  .cards-container {
    display: flex;
    flex-wrap: wrap;

    div {
      flex: 1 0 18%; /* explanation below */
      margin: 5px;
      text-align: left;
    }

    input {
      width: calc(100% - 12px);
    }

    label {
      width: 232px;
      height: 24px;
      font-size: 12px;
      font-weight: 0;
      font-stretch: normal;
      font-style: normal;
      line-height: 2;
      letter-spacing: normal;
      color: #b1b1b1;
      display: block;
      width: 100%;
    }
  }

  .rotation-container {
    margin-top: 73px;

    input {
      width: calc(20% - 22px);
    }

    label {
      margin-left: -257px;
      width: 212px;
      height: 36px;
      font-family: Arial;
      font-size: 32px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #343434;
      padding: 24px;
      position: relative;
      top: 8px;
    }
  }

  button {
    width: 207px;
    height: 59px;
    border: none;
    border-radius: 20px;
    background-color: #1c0063;
    font-family: Arial;
    font-size: 32px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fbe500;
    margin-top: 150px;
  }
}
</style>