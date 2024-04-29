interface person1 {
  name: string;
  age;
  country;
}

interface player {
  game;
  positon;
}

type combineData = person1 & player; // union between two interfaces person1 and player

const obj2: combineData = {
  name: "Sachin",
  age: 25,
  country: "India",
  game: "Cricket",
  positon: "Batsman",
};
