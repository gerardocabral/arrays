

// a.forEach(function(element){
//   console.log(element);
// });


var a = [0.1,0.01,0.001];
var max = a[0];

function highNum() {
  a.forEach(function(element){
  if (element < max) {
    max = element;
    }
  });
  return max
};


// function highestNum() {
//   a.sort(function(element1, element2) {
//     return element1-element2;
//   });
//   console.log([a.length-1]);
// }

var array =[1,2,3];

var sum = array.reduce(add, 0);

function add(a, b) {
    return a + b;
}

console.log(Math.floor(sum/array.length));

//find index of the highest number
var a = [1, 4, 2];
var max = a[0];
function highNumIndex() {
  a.forEach(function(element){
  if (element > max) {
    max = element;
    }
  });
  return a.lastIndexOf(max)
};

//sorting names
var siblings = ["Bob", "Jenn", "Gerardo"];
var parents = ["Adam", "Kaitlin", "Paul", "Alan"];

siblings.sort(function(element1, element2){
  return (element1 > element2)*1 +(element1 < element2)* -1;
});

parents.sort(function(element1, element2){
  return (element1 < element2)*1 +(element1 > element2)* -1;
});

var family = siblings.concat(parents);

family.sort(function(element1, element2){
  return (element1 > element2)*1 +(element1 < element2)* -1;
});

family.sort(function(element1, element2){
  return (element1 < element2)*1 +(element1 > element2)* -1;
});

//finding a name in an array the hard way
function findName(name) {
  family.forEach(function(name){
    if (name === family[0]) {
      alert("This name is in your list.");
      break;
    } else {
      alert("This name is not in your list");
    }
  });
};

function findName(name) {
  return name.includes("Jenn");
}

family.filter(findName);

//even number filter
var evenElements = [1, 2, 3, 4];

  function evenNum(num) {
      return num%2 === 0;
  }

  evenElements.filter(evenNum);

//odd number filter
var oddElements = [1, 2, 3, 4];

function oddNum(num) {
    return num%2 != 0;
}

oddElements.filter(oddNum);


var array = [5,6];
var returnArray = [];

function mapArray(array, func) {
  array.forEach(function(ar) {
    returnArray.push(func(ar));
  });
};

mapArray([5,6], function(x) { return 2*x; })
returnArray;

//advanced arrays

var ar = [5, 6, 7];
var newArray = [];

function filterArray(ar, fun) {
  ar.forEach(function(a) {
    if (fun(a) === true) {
      newArray.push(a);
    }
  });
};


filterArray([5,6,7], function(x) { return x>=6; })
newArray;
