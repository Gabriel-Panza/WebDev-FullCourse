console.log(typeof Array, typeof new Array, typeof []);

let winners = new Array("Jorge", "Jose", "John");
console.log(winners);
console.log(winners[0], winners[1], winners[2], winners[3]); // winners[3] do not exist so it prints undefined
console.log(winners.length)
winners = ["Anna","Bea","Carla","Daniela"]
console.log(winners)
console.log(winners[0], winners[1], winners[2], winners[3]); // winners[3] now exists so it prints it
console.log(winners.length)

//adding elements
winners.push("Julia");
winners[1] = "Brunna";
console.log(winners);
console.log(winners.length);
winners[9] = "Xayah"; // Be careful if adding elements using []. You may have empty elements inside your Array
console.log(winners);
console.log(winners.length);
winners[8] = "Yuna";

// Removing elements
delete winners[0];
winners.sort(); // Organize in alphabetical order
console.log(winners);
winners.splice(3,2,"Rafaela","Silvia"); // Starting at index 3, remove 2 elements. Then, add the new elements in the index 3+
console.log(winners);