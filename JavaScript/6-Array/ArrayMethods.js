const pilots = ["Vettel", "Alonso", "Verstappen", "Massa"];
console.log(pilots);

pilots.pop();             // remove the last element
pilots.push("Hamilton");  // add element to the final of the array
pilots.shift();           // remove the first element
pilots.unshift("Bottas"); // add to the beggining
console.log(pilots);

pilots.splice(0, 2, "Vettel", "Massa"); // remove and add elements starting at index 0
console.log(pilots);

const bestPilots = pilots.slice(2);     // Create a new array starting at index 2 from pilots
console.log("Best Pilots: ", bestPilots);
const worstPilots = pilots.slice(0,2);  // Create a new array starting at index 0 and stopping before index 2 from pilots
console.log("Worst Pilots: ", worstPilots);