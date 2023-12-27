let isActive = false;
console.log(isActive);
isActive = true;
console.log(isActive);

// !! forces a not boolean into a boolean
console.log("When it is true...");
console.log(!!3);
console.log(!!-3);
console.log(!!' ');
console.log(!!"string");
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);

console.log("When it is false...");
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);

console.log("When comparing multiple choices, the true always prevail");
console.log(!!('' || null || 0 || "texto")); // false, false, false, true will print true
console.log('' || null || 0 || "texto");