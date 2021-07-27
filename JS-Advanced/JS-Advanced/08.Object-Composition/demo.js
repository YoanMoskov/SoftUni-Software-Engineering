//Object composition - objects hoding objects within them
//-combining simple objects or data types into more complex ones
let student = {
  firstName: 'Maria',
  lastName: 'Green',
  age: 22,
  location: { lat: 42.698, lng: 23.322 },
};
console.log(student);
console.log(student.location.lat);

//-combine variables into object
let name = 'Sofiq';
let population = 1325744;
let country = 'Bulgaria';
let town = {
  name,
  population,
  country,
};
town.location = { lat: 42.698, lng: 23.322 };
console.log(town);

//Destructing

let names = ['Pesho', 'Ivan', 'Mariq'];
let [firstName, secondName, ...others] = names;

console.log(firstName);
console.log(secondName);
console.log(others);

let student = {
  firstName: 'Maria',
  lastName: 'Green',
  age: 22,
  location: { lat: 42.698, lng: 23.322 },
};
let { age } = student;
console.log(age);

//-getting nested prop
let student = {
  firstName: 'Maria',
  lastName: 'Green',
  age: 22,
  location: {
    lat: 42.698,
    lng: 23.322,
  },
};
let {
  location: { lat },
} = student;
console.log(lat);

//-getting element from nested array
let matrix = [
  [1, 2, 3],
  [2, 3, 4],
  [4, 5, 6],
];
let [firstRow] = matrix;
let [[firstElement, secondElement], secondRow] = matrix;
console.log(firstRow);
console.log(firstElement);
console.log(secondElement);
console.log(secondRow);

//-deconstructing array in object or the opposite
let student = {
  firstName: 'Maria',
  lastName: 'Green',
  age: 22,
  location: {
    lat: 42.698,
    lng: 23.322,
  },
  matrix: [
    [1, 2, 3],
    [2, 3, 4],
    [4, 5, 6],
  ],
};
let {
  matrix: [[firstElement, secondElement, thirdElement]],
} = student;
console.log(thirdElement);

//Forms of Object Composition

//Aggregation

let dataArray = [
  { id: 'a', score: 1 },
  { id: 'b', score: 2 },
  { id: 'c', score: 5 },
  { id: 'a', score: 3 },
  { id: 'c', score: 2 },
];

let res1 = dataArray.reduce((acc, curr, index, array) => {
  let same = acc.find((e) => e.id === curr.id);

  if (!same) {
    acc.push(curr);
  } else {
    same.score += curr.score;
  }
  return acc;
}, []);
console.log(res1);
//[ { id: 'a', score: 4 }, { id: 'b', score: 2 }, { id: 'c', score: 7 } ]

//Concatenation

const objs = [
    {name: 'Peter',age:35 }, 
       { age: 22 },
       {name: "Steven"}, 
       {height:180}
];
const concatenate = (a, o) => ({...a, ...o});
const c = objs.reduce(concatenate, {});
console.log(c);// { name: 'Steven', age: 22, height: 180 }
 