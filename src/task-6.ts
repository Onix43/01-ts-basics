function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const fristAnswer = getFirstElement([1, 2, 3]); // 1
const secondAnswer = getFirstElement(["a", "b", "c"]); // "a"
const thirdAnswer = getFirstElement([true, false, true]); // true

console.log(fristAnswer);
console.log(secondAnswer);
console.log(thirdAnswer);
