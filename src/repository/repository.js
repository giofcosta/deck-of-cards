import axios from "axios";

const baseDomain = "https://deckofcardsapi.com";
const baseURL = `${baseDomain}/api`;


export default axios.create({
    baseURL
});