

let pokeDiv = document.getElementById('pokemon')

var poke = Math.floor(Math.random()* 1050) + 1
var url = "https://pokeapi.co/api/v2/pokemon/"
var req = url.concat(poke,"/")

console.log(req)

fetch(req)
.then(res => res.json())
.then(pokemon => {
    pokeDiv.innerHTML += `<p> ${pokemon.name} </p>`
})
