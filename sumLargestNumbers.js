const sumLargestNumbers = function (data) {
  let largestNumber = data[0];
  let secondLargestNumber;
  for (let i = 1; i < data.length; i++) {
    let number = data[i];
    if (number > largestNumber) {
      secondLargestNumber = largestNumber;
      largestNumber = number;
    }
  }
  return largestNumber + secondLargestNumber;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
