import { createCharacterCard } from "./components/card/card.js";

export const cardContainer = document.querySelector(
  '[data-js="card-container"]'
);
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

//Manual approach to generate a card
/*createCharacterCard(
  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "Rick",
  "alive",
  "-",
  "51"
);*/

fetchCharacters();

async function fetchCharacters() {
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character");

    if (response.ok) {
      const data = await response.json();
      console.log(data);

      cardContainer.innerHTML = "";

      data.results.forEach((person) => {
        createCharacterCard(
          person.image,
          person.name,
          person.status,
          person.type,
          person.episode.length
        );
      });
    } else {
      console.error("Bad Response");
    }
  } catch (error) {
    console.error("An Error occurred");
  }

  fetch();
}
