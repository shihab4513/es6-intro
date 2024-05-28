const EvenLfinder = (array) => {
  const newArray = [];
  for (const i of array) {
    if (i.length % 2 == 0) {
      newArray.push(i);
    }
  }
  return newArray;
};

const friends = ["Shihab", "Raju", "Shakil", "misu", "munther", "A"];
const result = EvenLfinder(friends);
console.log(result);
