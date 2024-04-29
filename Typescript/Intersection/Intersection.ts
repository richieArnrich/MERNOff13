interface person1 {
  name: string;
  age;
  country;
}

interface player {
  game;
  positon;
}

type combinedObj = person1 & player;

let obj1: combinedObj = {
  name: "John",
  age: 23,

  country: "India",

  game: "Cricket",

  positon: "Batsman",
};
