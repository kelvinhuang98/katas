const titleCase = (sentence) => {
  let titleCased = "";
  if (sentence === "") {
    return sentence;
  } else {
    let sentenceArray = sentence.split(" ");
    for (const word of sentenceArray) {
      for (let i = 0; i < word.length; i++) {
        if (i === 0) {
          titleCased += word[i].toUpperCase();
        } else {
          titleCased += word[i].toLowerCase();
        }
      }
      titleCased += " ";
    }
  }
  titleCased = titleCased.trim();
  return titleCased;
};

console.log(titleCase("this is an example")); // => "This Is An Example"
console.log(titleCase("test")); // => "Test"
console.log(titleCase("i r cool")); // => "I R Cool"
console.log(titleCase("WHAT HAPPENS HERE")); // => "What Happens Here"
console.log(titleCase("")); // => ""
console.log(titleCase("A")); // => "A"
