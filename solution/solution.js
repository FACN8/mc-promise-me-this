const axios = require('axios');

const makePokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
const pikaUrl = makePokeUrl('pikachu');

// challenge 1
const myApiCall = (url) => {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(res => {
        resolve(res.data);
      })
      .catch(error => {
        reject(err.message);
      });
  });
};

myApiCall(pikaUrl)
  .then(console.log)
  .catch(console.log);
  
// challenge 2
const pikaPromise = myApiCall(pikaUrl)

const itemPromise = data => {
  const itemUrl = data.held_items[0].item.url
  return myApiCall(itemUrl)
}

pikaPromise
  .then(itemPromise)
  .then(console.log)
  .catch(console.log)

// challenge 3

const charUrl = makePokeUrl('charmander')
const squirtUrl = makePokeUrl('squirtle')
const bulbaUrl = makePokeUrl('bulbasaur')

const charPromise = myApiCall(charUrl)
const squirtPromise = myApiCall(squirtUrl)
const bulbaPromise = myApiCall(bulbaUrl)

const promiseArray = [charPromise, squirtPromise, bulbaPromise]

Promise.all(promiseArray).then(console.log)
