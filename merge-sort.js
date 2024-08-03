function merge(leftArr, rightArr) {
  let li = 0;
  let ri = 0;
  let resultArr = [];
  while (li < leftArr.length && ri < rightArr.length) {
    if (leftArr[li] < rightArr[ri]) {
      resultArr.push(leftArr[li]);
      li++; //move forward after checking
    } else {
      resultArr.push(rightArr[ri]);
      ri++;
    }
  }
  return resultArr.concat(rightArr.slice(ri)).concat(leftArr.slice(li));
}
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  const middleIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, middleIndex);
  const rightArr = arr.slice(middleIndex);
  return merge(mergeSort(leftArr), mergeSort(rightArr));
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
