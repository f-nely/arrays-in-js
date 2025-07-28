/* const seasons = ["spring", "summer", "fall", "winter"];

let result = seasons.find(function (item) {
  console.log(item);
  return item == "winter";
});

console.log(result); */

const soccerPlayers = [
  {
    firstName: "Erling",
    lastName: "Haaland",
  },
  {
    firstName: "Ollie",
    lastName: "Watkins",
  },
  {
    firstName: "Willian",
    lastName: "Saliba",
  },
];

let result = soccerPlayers.find((item) => item.firstName == "Ollie");
console.log(result);
