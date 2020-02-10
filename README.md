
**Author**: [@astroash](https://github.com/astroash) 

# Promise Me This

## Learning Objectives
To be able to:
- create a new Promise
- handle errors when creating a Promise
- refactor error first callbacks into promises

## Relevant Resources
- [MDN Docs - Promises]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

## Morning Challenge

Callbacks are awesome as they allow us to write asynchronous functions that wait until a response comes back before we do something with it (without blocking the rest of our code). However, our code can look messy when we need to link multiple async functions toge










ther. This is when **promises** are super useful, they're a wrapper for async callbacks. Let's have a look at how they can make our code easier to read. Below we compare 5 async functions implemented with error first callbacks and promises.

### Calling Error First Callbacks
```js
funcOne((err, resOne) => {
  if (err) recoverFromError(err)
  else funcTwo((err, resTwo) => {
    if (err) recoverFromError(err)
    else funcThree ((err, resThree) => {
      if (err) recoverFromError(err)
      else funcFour ((err, resFour) => {
        if (err) recoverFromError(err)
        else funcFive ((err, resFive) => {
          //do the thing
        })
      })
    })
  })
})
```
### Calling Promises
```js
funcOne
  .then(funcTwo)
  .then(funcThree)
  .then(funcFour)
  .then(funcFive)
  .catch((err)=> recoverFromError(err))
```

## Syntax
Let's have a look at the syntax of creating a promise compared to an error first callback:

### Error First Callbacks
```js
const readAFile = (callback) => {
  //here you do something async
  fs.readFile(`${__dirname}/public/index.html`, 'utf8', (err, data) => {
    //here you do something if it errors
    if (err) callback(err)
    //here you do something if it works
    else callback(null, data)
  }
}

//now lets call it
readAFile((err, res) => {
  if (err) console.log(err)
  else console.log(res)
})
```

### Promises
```js
const readAFile = () => {
  // here you create a new Promise
  return new Promise((resolve, reject) => {
    //here you do something async
    fs.readFile(`${__dirname}/public/index.html`, 'utf8', (err, data) => {
      //here you do something if it errors
      if (err) reject(err)
      //here you do something if it works
      else resolve(data)
    });
  });
}

//now lets call it
readAFile
  .then((res)=> console.log(res))
  .catch((err)=> console.log(err))
```
## Write a Promise
Read [MDN's docs on Promises]( https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Creating_a_Promise) to see how they are written.

## Challenge One
In `challenge.js` you will find code to make an api call using the http module. Your challenge is to refactor this code into a new Promise.

Call your function from your terminal by typing:
```bash
node challenge.js
```

## Challenge Two
Nice work on your Promise! Now let's have a go at linking Promises. Your challenge is to:
1. make an api call to the pokeApi to find out about Pikachu.
2. write a function that returns a Promise to grab information about Pikachu's first `held_item`.
3. link the two Promises together so that the second is called when the first is fulfilled.

## Challenge Three
Did you really finish that fast :dash: ? Okay, so now your challenge is to find out info on the 3 starter pokemon (Bulbasaur :leaves:, Charmander :fire: & Squirtle :sweat_drops: ) and print the return info. To do this you need to:
- Send off the 3 api calls at once
- Only print when all thee have fulfilled.

[These docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all) will be your friend :heart:
