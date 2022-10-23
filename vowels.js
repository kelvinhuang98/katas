const numberOfVowels = function (data) {
  let number = 0;
  for (let i = 0; i < data.length; i++) {
    let letters = data[i];
    if (
      letters === "a" ||
      letters === "e" ||
      letters === "i" ||
      letters === "o" ||
      letters === "u"
    ) {
      number += 1;
    }
  }
  return number;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));
