const repeatNumbers = function (data) {
  let result = "";
  for (let i = 0; i < data.length; i++) {
    let repeat = data[i][0];
    let repeated = data[i][1];
    for (let j = 0; j < repeated; j++) {
      result += repeat;
    }
    if (i !== data.length - 1) {
      result += ", ";
    }
  }
  return result;
};

console.log(repeatNumbers([[1, 10]]));

console.log(
  repeatNumbers([
    [1, 2],
    [2, 3],
  ])
);

console.log(
  repeatNumbers([
    [10, 4],
    [34, 6],
    [92, 2],
  ])
);
