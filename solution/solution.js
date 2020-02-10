const axios = require('axios');

const makePokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
const pikaUrl = makePokeUrl('pikachu');

// challenge 1
const myPromiseApi = (url) => {
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

myPromiseApi(pikaUrl)
  .then(console.log)
  .catch(console.log);
  
// challenge 2
const pikaPromise = myPromiseApi(pikaUrl)

const itemPromise = data => {
  const itemUrl = data.held_items[0].item.url
  return myPromiseApi(itemUrl)
}

pikaPromise
  .then(itemPromise)
  .then(console.log)
  .catch(console.log)

// challenge 3

const charUrl = makePokeUrl('charmander')
const squirtUrl = makePokeUrl('squirtle')
const bulbaUrl = makePokeUrl('bulbasaur')

const charPromise = myPromiseApi(charUrl)
const squirtPromise = myPromiseApi(squirtUrl)
const bulbaPromise = myPromiseApi(bulbaUrl)

const promiseArray = [charPromise, squirtPromise, bulbaPromise]

Promise.all(promiseArray).then(console.log)
