{
    const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]
/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/
// get control of DOM element to place the names of the planets    
const planetsEl = document.getElementById("planets");
// use forEach loop to iterate over the array and write each planet name to the DOM using .innerHTML
planets.forEach(function(planet){ 
    planetsEl.innerHTML += `
        <p>${planet}</p>
    `
});


/*
    Use the map method to create a new array where the 
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


let capPlanets = planets.map(function(planet){
    // split each planet name into an array of characters
    let planetNameArray = planet.split("");
    // single out the first character and make it uppercase
    planetNameArray[0] = planetNameArray[0].toUpperCase();
    // join the array back into a string and return the planet name with a capital first letter
    return planetNameArray.join("");    
})

    console.log("Capitalized Planet Names: ", capPlanets)

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

let filteredPlanets = planets.filter(function(planet){
    return planet.includes("e");
})

console.log("planets with an e: ", filteredPlanets)


// Use the reduce method to create a sentence from the words in the following array
const words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"]

let sentence = words.reduce(function(a, b){
    return a + " " + b;
})

    console.log("A sentence out of those words is: ", sentence)

}