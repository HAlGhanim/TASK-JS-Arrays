/**
 * isArrayLengthOdd(numbers):
 * - receives array `numbers`
 * - returns true if array has an odd number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthOdd([1, 2, 3]) -> true
 * isArrayLengthOdd([1, 2, 3, 4]) -> flase
 */
const numbers = [1,2,3,4,5,6,7]
function isArrayLengthOdd(numbers) {
  const count = numbers.length; 
  
  if (count % 2 !==0){
    return true;
  }
  else {
    return false;
  }
}
console.log(isArrayLengthOdd(numbers));
/**
 * isArrayLengthEven(numbers):
 * - receives array `numbers`
 * - returns true if array has an even number of elements
 * - returns false otherwise
 *
 * e.g.
 * isArrayLengthEven([1, 2, 3]) -> false
 * isArrayLengthEven([1, 2, 3, 4]) -> true
 */
function isArrayLengthEven(numbers) {
  const count = numbers.length; 
  
  if (count % 2 === 0){
    return true;
  }
  else {
    return false;
  }
}
console.log(isArrayLengthEven(numbers));
/**
 * addLailaToArray(instructors):
 * - receives array `instructors`
 * - returns a new array that's a copy of array `instructors` with additional string "Laila"
 *
 * e.g.
 * addLailaToArray(["Mshary", "Hasan"]) -> ["Mshary", "Hasan", "Laila"]
 */
let instructionTeam = ["Yousef", "Fatma", "Hasan"]
function addLailaToArray(instructors) {
  const instructionTeam2 = instructionTeam.slice(0, 3);
  instructionTeam2.push(instructors);
  console.log(instructionTeam2);
  return instructionTeam2;
}
addLailaToArray("Laila");
/**
 * eliminateTeam(teams):
 * - receives array `teams`
 * - removes the last element from the array and return it
 *
 * e.g.
 * eliminateTeam(["Brazil", "Germany", "Italy"]) -> "Italy"
 */
const teams = ["Brazil","Germany","Italy"];
function eliminateTeam(teams) {
  return console.log(teams.pop());
}
eliminateTeam(teams);
/**
 * secondHalfOfArrayIfItIsEven(fruits):
 * - receives array `fruits`
 * - returns a new array that's the second half of the original array if it has an even number of elements
 * - returns an empty array if it has an odd number of elements
 *
 * e.g.
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi"]) -> ["banana", "kiwi"]
 * secondHalfOfArrayIfItIsEven(["apple", "orange", "banana", "kiwi", "blueberry"]) -> []
 */
const fruits = ["Orange", "Banana", "Apple","kiwi", "Strawberry", "Grapes"];
function secondHalfOfArrayIfItIsEven(fruits) {
  if (fruits.length % 2 == 0){
    const middlePoint = Math.ceil(fruits.length/2);
    const secondHalf = fruits.splice(-middlePoint);
    console.log(secondHalf);
    return fruits;
  }
  else {
    console.log("Empty array")
    return fruits = [];
  }
}
secondHalfOfArrayIfItIsEven(fruits);
/**
 * youGottaCalmDown(shout):
 * - receives a string `shout`
 * - returns the string `shout` with at most one exclamation mark (!) at the end.
 *
 * e.g.
 * youGottaCalmDown("HI!!!!!!!!!!") -> "HI!"
 * youGottaCalmDown("Taylor Schwifting!!!!!!!!!!!") -> "Taylor Shwifting!"
 * youGottaCalmDown("Hellooooo") -> "Hellooooo"
 *
 * Hint:
 * - Use number method .indexOf()
 * - Use string method .slice()
 */
function youGottaCalmDown(shout) {
  const exclamation = "!";
  if (shout.includes(exclamation)){
    console.log(shout.slice(0, shout.indexOf("!") + 1));  
    return shout;
  }
  else {
    console.log(shout);
    return shout;
  }

}
youGottaCalmDown("AHHHH!!!!");



