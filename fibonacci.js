function fibs(num) {
  let resultingArray = [];
  for (let i = 0; i < num; i++) {
    if (i === 0 || i === 1) {
      resultingArray.push(i);
    } else {
      resultingArray.push(resultingArray[i - 2] + resultingArray[i - 1]);
    }
  }
  return resultingArray;
}

let array = [];
function fibsRec(num) {
  if (num < 0) {
    return "Error: You cannot require less than 1 number";
  }
  if (num === 0 || num === 1) {
    return (array[num] = num);
  }
  return (array[num] = fibsRec(num - 1) + fibsRec(num - 2));
}
fibsRec(4);
console.log(array);
