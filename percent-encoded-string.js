const urlEncode = function (text) {
  text = text.trim();
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let letter = text[i];
    if (letter === " ") {
      letter = "%20";
    }
    result += letter;
  }
  return result;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
