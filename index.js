
// //palindrome number

// const isPalindrome = function(x) {
//    return x<0 ? false : x === +x.toString().split("").reverse().join("")
// }

// console.log(isPalindrome(0))

// // console.log(+10) // coverts to a number


// // loops and functions 
// // 1 
// const marks = {
//   harry: 90,
//   shubham: 9,
//   monica: 4,
//   don: 99
// }

// for(let i=0; i<Object.keys(marks).length; i++){
//   console.log("The marks of ", Object.keys(marks)[i] , " are ", marks[Object.keys(marks)[i]])
// }

// //2
// for(let key in marks){
//   console.log(key, " are ", marks[key])
// }


// //3
// let correctNum = 4;
// let i
// while(i != correctNum) {
//   i = prompt("Enter a number")
// }
// console.log('you have entered a correct number')




// Write an ES6 function that takes an array of numbers and returns an array with each number incremented by 3 using the map method.

  // Your ES6 function here
const numbers = [1, 2, 3, 4, 5]

const incrementNumbers = num => num.map((n=>n+3))



console.log(incrementNumbers(numbers))
// Output: [4, 5, 6, 7, 8]



// Write an ES6 function that takes an array of strings and returns an array with all the strings capitalised using the map method.

// Your ES6 function here

const myArray = ['apple', 'banana', 'cherry']

const capitalizeArray = (arr) => arr.map((str) => str.toUpperCase())



console.log(capitalizeArray(myArray))
// Output: ["APPLE", "BANANA", "CHERRY"]


// Write an ES6 function that takes an array of objects representing people and returns an array of their ages using the map method.

// Your ES6 function here

const people = [
  { name: 'Ankit', age: 25 },
  { name: 'Vinit', age: 24 },
  { name: 'Shashi', age: 29 },
]

const getAges = (people) => {
  return people.map((item) =>item.age)
}


const ages = getAges(people)
console.log(ages) // Output: [25, 24, 29]


// Write an ES6 function that takes an array of objects representing products and returns an array with the product names in all lower case letters using the map method.

// Your ES6 function here

const products = [
  { name: 'Lip Balm', stock: 100 },
  { name: 'PERFUME', stock: 400 },
  { name: 'Socks', stock: 200 },
]

const getProductNamesInLowerCase = (prod) => prod.map((item)=> item.name.toLowerCase())
console.log(getProductNamesInLowerCase(products))
// Output: ["lip balm", "perfume", "socks"]


// Write an ES6 function that takes an array of objects representing cities and returns an array of their names using the map method.

// Your ES6 function here

const cities = [
  { name: 'New York', population: 8538000 },
  { name: 'Los Angeles', population: 3976000 },
  { name: 'Bangalore', population: 13608000 },
]

console.log(getCityNames(cities))
// Output: ["New York", "Los Angeles", "Bangalore"]