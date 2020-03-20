import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home";
import CreateDeck from "../pages/CreateDeck";
import Deck from "../pages/Deck";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/deck/new",
    name: "newdeck",
    component: CreateDeck
  },
  {
    props: true,
    path: "/deck/:deckID",
    name: "deck",
    component: Deck
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
