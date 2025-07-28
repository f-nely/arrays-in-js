const series = ["Andor", "Luther", "Echo", "Loki"];

/* for (let i = 0; i < series.length; i++) {
  console.log(series[i]);
} */

/* series.forEach(function (serie, index) {
  console.log(`${serie} -> ${index}`);
}); */

/* for (let index in series) {
  console.log(index);
} */

for (let name of series) {
  console.log(name);
}
