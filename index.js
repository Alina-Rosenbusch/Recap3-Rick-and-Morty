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
const maxPage = 42;
let page = 1;
let searchQuery = "";

//Manual approach to generate a card
/*createCharacterCard(
  "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  "Rick",
  "alive",
  "-",
  "51"
);*/

//fetching Data
async function fetchCharacters() {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}&name=${searchQuery}`);

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
    console.error("An Error occurred",error);
  }
}
fetchCharacters();

//Button prevPage
prevButton.addEventListener("click",()=> { 
  if(page === 1){return;} 
  else{ 
    page--;fetchCharacters();pagination.textContent=`${page} / ${maxPage}`}
  })     

//Button nextPage
nextButton.addEventListener("click",()=> { 
  if(page === 42) {return;} 
  else{ 
    page++;fetchCharacters();pagination.textContent=`${page} / ${maxPage}`}
  })

//searchbar 
searchBar.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  searchQuery = data.query;

  fetchCharacters();
})