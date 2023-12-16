const route1 = [
  ["London", "New York"],
  ["New York", "Lima"],
  ["Lima", "Sao Paulo"],
];
const route2 = [
  ["B", "C"],
  ["D", "B"],
  ["C", "A"],
];
const route3 = [["A", "Z"]];

var destCity = function (paths) {
  const lastInd = paths[paths.length - 1];
  const finalDestination = lastInd[1];
  return finalDestination;
};
