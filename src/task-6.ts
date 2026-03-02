function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

const fristAnswer = getFirstElement<number>([1, 2, 3]); // 1
const secondAnswer = getFirstElement<string>(["a", "b", "c"]); // "a"
const thirdAnswer = getFirstElement<boolean>([true, false, true]); // true

console.log(fristAnswer);
console.log(secondAnswer);
console.log(thirdAnswer);
