import {createCharacterCard} from "./components/card/card.js";

export const cardContainer = document.querySelector('[data-js="card-container"]');
const searchBarContainer = document.querySelector(
  '[data-js="search-bar-container"]'
);
const searchBar = document.querySelector('[data-js="search-bar"]');
const navigation = document.querySelector('[data-js="navigation"]');
const prevButton = document.querySelector('[data-js="button-prev"]');
const nextButton = document.querySelector('[data-js="button-next"]');
const pagination = document.querySelector('[data-js="pagination"]');

// States
const maxPage = 1;
const page = 1;
const searchQuery = "";

createCharacterCard("https://rickandmortyapi.com/api/character/avatar/1.jpeg", "Rick", "alive", "-", "51");

const imageSrc ="https://rickandmortyapi.com/api/character/avatar/1.jpeg";
const characterName = "Rick"
const status = "alive"
const type = ""
const occurrences = 51
