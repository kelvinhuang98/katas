const instructorWithLongestName = function (instructors) {
  let winner = instructors[0];
  for (let i = 1; i < instructors.length; i++) {
    let challenger = instructors[i];
    if (challenger.name.length > winner.name.length) {
      winner = challenger;
    }
  }
  return winner;
};

console.log(
  instructorWithLongestName([
    { name: "Samuel", course: "iOS" },
    { name: "Jeremiah", course: "Web" },
    { name: "Ophilia", course: "Web" },
    { name: "Donald", course: "Web" },
  ])
);

console.log(
  instructorWithLongestName([
    { name: "Matthew", course: "Web" },
    { name: "David", course: "iOS" },
    { name: "Domascus", course: "Web" },
  ])
);
