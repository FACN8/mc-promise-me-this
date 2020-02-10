const axios = require('axios');

const makePokeUrl = pokemon => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
const pikaUrl = makePokeUrl('pikachu');

const myApiCall = (url, callback) => {
  axios
    .get(url)
    .then(res => {
      callback(null, res.data);
    })
    .catch(error => {
      callback(err.message);
    });
};

myApiCall(pikaUrl, (err, res) => {
  if (err) console.log(res);
  else console.log(res);
});

//Now let's make it a Promise

// const myPromiseApi =

//And call it here...
