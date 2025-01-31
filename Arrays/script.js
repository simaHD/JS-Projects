const sports = [];
sports.push("football");
sports.push("baseball");
sports.push("handball");
sports.push("volleyball");
sports.push("pingpong");
sports.push("teniss");
sports.push("basketball");
sports.push("running");
const stringSports = sports.join(", "); 
const text = `My favorite sports are ${stringSports}`;
const lastIndex = sports.length-1;
sports.splice(lastIndex)
const firstTwoSports = sports.slice(0, 2);
sports.splice(0, 2, firstTwoSports);
console.log(text);
console.log(sports);
console.log(firstTwoSports);