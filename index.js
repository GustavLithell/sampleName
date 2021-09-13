

// variable 

// primitive variable types

// structural data types



const volvo = {
  engine: {
    producer: "some chinese company",
    developmentYear: 2202,
    horsePower: {
      max: 300,
      min: 250
    }
  }
}

const facebookUser = {
  username: "Gustav Lithell",
  dob: "07091992",
  articleForMainPage: [
    {title: "whatever",
    postedByFriend: "Sam",
    datePublished: "09077774"},

    {title: "whatever",
    postedByFriend: "Sam",
    datePublished: "09077774"},

    {title: "whatever",
    postedByFriend: "Sam",
    datePublished: "09077774"},

    {title: "whatever",
    postedByFriend: "Sam",
    datePublished: "09077774"},
  ]
}

















// -------------------------------------------------------
// THE FOR LOOP 
// -------------------------------------------------------


//  for( let i = 0 ; i < 60; i++) {
//   // this is where we write code we want to repeat or run mulitple times
//  console.log(i)
//  }
 



// const favoriteNumber = 55
// const favoriteNumbers = [55, 66, 35, 77]
// const dogParts = ["legs", "head", "boop snoot", "tail"]

// const drawers = ["socks", "boxers", "pants"]

 
 // -------------------------------------------------------
 // EXERCISES FOR LOOPING
 // -------------------------------------------------------

// -------------------------------------------------------
// 1) Create a for loop that takes items from an array and console logs a sentence using each item in the array.
//    For example: const cuteAnimals = ["piggies", "puppies", "kitties", "birdies"]
//    Example output:
//    "piggies are cute" "puppies are cute" "kitties are cute" "birdies are cute" 
// -------------------------------------------------------







// -------------------------------------------------------
// ANSWER:
// -------------------------------------------------------
// const cuteAnimals = ["piggies", "puppies", "kitties", "birdies"]


// for (i = 0; i < cuteAnimals.length; i++) {
//   console.log( cuteAnimals[i] + " are cute")
// }



// -------------------------------------------------------
// 2) Now rewrite the loop so the console logs print in the reverse order
//    Example output:
//    "birdies are cute" "kitties are cute" "puppies are cute" "piggies are cute" 
// -------------------------------------------------------








// -------------------------------------------------------
// ANSWER:
// -------------------------------------------------------
// const cuteAnimals = ["piggies", "puppies", "kitties", "birdies"]


// for (i = cuteAnimals.length - 1 ; i >= 0; i--) {
//   console.log( cuteAnimals[i] + " are cute")
// }

 
 // -------------------------------------------------------
 // 3) Using a for loop console log all even numbers up to and including n. Don’t include 0.
 // Example output: 
 // 2 4 6 8 10 12 14 16 18 20 22 OR each item on a new line
 // -------------------------------------------------------
 
 
 
 
 
 
 
 
 // -------------------------------------------------------
 // ANSWER:
 // -------------------------------------------------------
 // let n = 22
 
 // for(let i=2; i <= n; i += 2){
 //     console.log(i)
 // }



// -------------------------------------------------------
// 4) Get the sum of two arrays… actually the sum of all their elements.
// Example output: 
// 276 + 351 = 627

// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351
// -------------------------------------------------------








// -------------------------------------------------------
// ANSWER:
// -------------------------------------------------------
// let arr_1_sum = 0
// let arr_2_sum = 0
// for(let i= 0; i < arr_1.length; i++ ) {
//     arr_1_sum = arr_1_sum + arr_1[i]
//     arr_2_sum = arr_2_sum + arr_2[i]
// }

// let finalVal = arr_1_sum + arr_2_sum
// console.log(finalVal)



// -------------------------------------------------------
// 5) Create a times table which multiplies all values of x and y. Each should range from 1 to 10.
// Hint: start with making one loop that console logs the numbers 1 through 10.  Then think about
// how you can use this to create a multiplication table
// -------------------------------------------------------










// -------------------------------------------------------
// ANSWER:
// -------------------------------------------------------
// for(let x = 1; x <= 10; x++) {
//     for(let y = 1; y <= 10; y++) {
//         console.log("x:" + x + " y:" + y + " sum:" +  x*y)
//     }
// }




















// -------------------------------------------------------
// OBJECT DESTRUCTURING
// -------------------------------------------------------

// let hero = {
//   name: undefined,
//   realName: 'Bruce Wayne'
// };

//  const { name, realName } = hero;



// -------------------------------------------------------
// Destructuring with default value applied
// e.g.
// const { identifier = defaultValue } = expression;
// -------------------------------------------------------
// const { name = "superHero"} = hero
// console.log(name);     // => 'superHero',
// console.log(realName); // => 'Bruce Wayne'



// -------------------------------------------------------
// Destructuring with aliasIdentifier 
// const { identifier: aliasIdentifier } = expression;
// -------------------------------------------------------

// const { realName: secretName} = hero;
// console.log(secretName)



// -------------------------------------------------------
// Destructuring nested objects
// const { nestedObjectProp: { identifier } } = expression;
// this is esentially saying: 
// const identifier = expression.nestedObjectProp.identifier;
// -------------------------------------------------------

// const hero = {
//   name: 'Batman',
//   realName: 'Bruce Wayne',
//   address: {
//     city: 'Gotham'
//   }
// };

// const { address: { city }, name } = hero;


// console.log(city); // => 'Gotham'
// console.log(name)




// -------------------------------------------------------
// Destructuring the rest of an object
// const { identifier, ...rest } = expression;
// We can use the ...rest syntax to target the remainder of an object and store is 
// as a new object instead
// -------------------------------------------------------

// const { name, ...realHero } = hero;
// console.log(realHero); // => { realName: 'Bruce Wayne',
          //      address: {
          //        city: 'Gotham'
          //      }}


// -------------------------------------------------------
// Default Params 
// we can use the assignment opertor to set default params in the parameters of a function
// we are create.  E.g:
// -------------------------------------------------------
// function multiply(a, b = 1) {
//   return a * b
// }

// multiply(5, 2)          // 10
// multiply(5)             // 5
// multiply(5, undefined)  // 5



// -------------------------------------------------------
// ON KEY DOWN EFFECT
// -------------------------------------------------------

const body = document.querySelector('body')

body.addEventListener('keydown', (e) => {
    console.log(`Key "${e.key}" pressed`);
});










// -------------------------------------------------------
// FUNCTION DECLARATION
// -------------------------------------------------------

// function declaration() {
//   console.log('alert worked')
// }

// declaration()

// -------------------------------------------------------
// FUNCTION EXPRESSION
// -------------------------------------------------------
// in a function expression we can omit the function name to have anonymous functions i.e:
// (function () {
//   console.log("we didn't name this function")
// })()


// in the below example the function is also un named but the unnamed function is stored in a variable

// const timeRightNow = 10

// const speak = function(time, name, feeling) {
//   let goodDay = `good ${time} to you ${name}, are you doing ${feeling}?`
//   console.log(goodDay)
// }

// speak(timeRightNow, 'everyone', "bad")
// speak('day', 'Preben') // will return "undefined" where and if last argument is ommitted




// -------------------------------------------------------
// ARROW FUNCTION
// -------------------------------------------------------

// const shout = () => 'AHHHHHHHH';

// console.log(shout())


// -------------------------------------------------------
// FUNCTION CHALLENGES
// -------------------------------------------------------

// -------------------------------------------------------
//  CHALLENGE: CALCULATE THE AREA OF A CIRCLE OF ANY RADUIS IN A FUNCTION
//  HINT: 3.14*R**2
// -------------------------------------------------------







// -------------------------------------------------------
// ANSWER
// -------------------------------------------------------
// function getArea(r) {
//   return 3.14*r**2
// }

// console.log(getArea(3))


// -------------------------------------------------------
//  CHALLENGE: USE THE PREVIOUS CHALLENGE, TO CREATE A NEW FUNCTION
//  WHICH WILL TO PRINT A SENTECE SAYING HOW BIG THE CIRCLE IS
// -------------------------------------------------------






// -------------------------------------------------------
// ANSWER
// -------------------------------------------------------

// function addAreaToString(areaValue) {
//   console.log(`your circle was ${areaValue}`)
// }

// addAreaToString(getArea(5))


// -------------------------------------------------------
// CHALLENGE: CREATE A FUNCTION THAT CALCULATES YOUR AGE IN DOG YEARS
// HINT: 1 HUMAN YEAR IS 7 "DOG YEARS"
// -------------------------------------------------------







// -------------------------------------------------------
// ANSWER
// -------------------------------------------------------

// function getDogYears(humanYears) {
//   return humanYears*7
// }

// console.log(getDogYears(28))


// -------------------------------------------------------
// CHALLENGE: WRITE A FUNCTION THAT CALCULATES THE AMOUNT OF A PRODUCT
// YOU WILL NEED TO CONSUME IT FOR THE REST OF YOUR LIFE. OUTPUT A STRING
// THAT SAYS "YOU WILL NEED (NUMBER_OF_PRODUCT) TO LAST YOU UNTIL THE
// THE RIPE OLD AGE OF (MAX_AGE)"
// HINT: SET A CONST FOR MAX_AGE(OR AN ADDITIONAL ARGUEMNT) & YOUR AGE WILL NEED TO BE AN ARGUEMENT 
// -------------------------------------------------------









// -------------------------------------------------------
// ANSWER
// -------------------------------------------------------

// function calculateSupply(age, maxAge, numPerDay, typeOfProduct) {
//   var totalNeeded = (numPerDay * 365) * (maxAge - age);
//   var message = `You will need ${totalNeeded} ${typeOfProduct} to last you until the ripe old age of ${maxAge}`;
//   console.log(message);
// }

// calculateSupply(20, 99, (5/7), "burgers")

// -------------------------------------------------------
//  CHALLENGE: CREATE A FUNCTION THAT RECEIEVE PRODUCTS AND A TAX 
//  AS PARAMETERS AND RETURNS A BILL
//  HINT: USE A FOR LOOP IN YOUR FUNCTION
// -------------------------------------------------------








// -------------------------------------------------------
//  ANSWER:
// -------------------------------------------------------

// const bill = function(products, tax) {

//   let total = 0
//   for(let i = 0; i <products.length ; i++) {
//     total = total + products[i] + products[i] * tax
//   }
//  return total
// }

// console.log(bill([10,15,30], 0.2))





// -------------------------------------------------------
// THE DOM (DOCUMENT OBJECT MODEL)
// -------------------------------------------------------

// MADE UP OF NODES (ROOT, ELEMENT, TEXT, ETC.)
// WE USE QUERYING TO REACH INTO THE DOM AND CREATE REFERENCES TO DIFFERENT NODES

const para = document.querySelector('p')

function changeMode() {
  console.log(para.style)
}

changeMode()
// // THIS WILL TARGET THE FIRST "p" FOUND IN THE DOCUMENT AND ASSIGN IT TO THE VARIABLE PARA

const targetedPara = document.querySelector("main p:nth-child(6)")
targetedPara.style.backgroundColor = "green"
// // RIGHT CLICK AND COPY "JS PATH" FOR A UNIQUE IDENTIFIER IN THE ELEMENTS TAB OF YOUR BROWSER

document.querySelector("main > p:nth-child(5)")

document.querySelector("#nav-access")

document.querySelector(" main > div")

const paras = document.querySelectorAll('p')
console.log(paras)
console.log(paras[3])
// // THIS CONSOLE LOGS A NODE LIST 
// // -WE CAN USE .forEach METHOD ON THIS (IS NODE LIST)
// // -WE CAN TARGET A SPECIFIC QUERY VIA BRACKET NOTATION

// const paras2 = document.querySelectorAll(".threeLines")
// console.log("querySelectorAll")
// console.log(paras2)
// // CANNOT USE NUMBERS IN THE QUERYSELECTORALL WITHOUT GETTING AN INVALID SELECTOR ERROR
// // E.G. const paras2 = document.querySelectorAll("p.3Lines")



// const classElements = document.getElementsByClassName('threeLines')
// console.log(classElements)
// classElements[0]
// // THIS CONSOLE LOGS A HTMLCOLLECTION
// // -IT'S LIKE A NODE LIST BUT WE CANNOT USE A .forEach METHOD ON THIS
// // -WE CAN TARGET A SPECIFIC QUERY VIA BRACKET NOTATION HERE AS WELL


const paragraphs = document.querySelectorAll("p")
// console.log(paragraphs[6])
// console.log(paragraphs)
// // CAN ALSO SELECTED DOM ELEMENTS VIA THEIR TAG
// // THIS GIVES US ANOTHER HTMLCOLLECTION SO WE CAN NOT USE .forEach METHOD ON THEM!


// const h1 = document.querySelector("body > main > div.test > h1")
// const textNode = document.createTextNode("Hello World")
// paragraphs.forEach(p => {
//   console.log(p)
//   console.log(textNode)
//   p.appendChild(textNode)})

console.log(paragraphs[6].nodeType)
// // A <p> IS AN ELEMENT NODE! ABOVE IS AN EXAMPLE OF A HOW 2 TEXT NODES ARE ATTACHED TO THE ELEMENT NODE

para.innerText = "have a great day everyone!"
// // WE CAN USE .innerText TO ALTER THE TEXTNODE WITHIN AN ELEMENTS

para.textContent = "have a great day again!"; para.textContent += "addition text";
// // WE CAN ALSO USE A TEXTCONTENT
// // NOTE: TEXTCONTENT IS NOT AWARE OF TEXTSTYLING AND WILL EFFECT TEXT WHICH IS NOT HUMAN READABLE 
// // AS WELL AS INCLUDING <SCRIPT> ELEMENTS 

paras.forEach(para => {
  para.innerText += "(added text)"
})

11 == '11' // returns true

(11 !== 12 || "hi" == "h0") // returns true


paras.forEach(para => {
  para.addEventListener("click", e => {console.log(e)})
})
// //WE CAN USE THE .forEach METHOD TO ALTER MULTIPLE TARGETED ELEMENTS
// //NOTE: WE NEED TO USE THE NodeList NOT THE HTMLCollection


// const content = document.querySelector(".content")
// content.innerHTML += "<h2>This is the added content</h2>"
// //CAN USE .innerHTML TO OVERWRITE(USING =) OR ADD(USING +=) CONTENT INTO AN ELEMENT

// content.insertAdjacentHTML("beforebegin", "<h2>This is the added content</h2>")
// //CAN USE .insertAdjacentHTML TO INSERT HTML INSIDE (AT THE BEGINNING OR END OF AN ELEMENT) OR OUTSIDE
// //(BEFORE OR AFTER AN ELEMENT) 


// const people = ['mario', 'luigi', 'yoshi', 'peach']

// let peopleContainer = document.querySelector(".people")

// people.forEach(person => {
//   peopleContainer.innerHTML += `<p>${person}</p>`
// })
// // EXAMPLE OF USING ARRAY TO INPUT DATA INTO OUR HTML
// // THIS IS EXTREMELY IMPORTANT FOR RENDERING DATA RECIEVED FROM API CALLS FOR INSTANCE 


// console.log(peopleContainer.getAttribute("class"))
// // .getAttribute WILL RETURN THE VALUE OF THE KEY WE PROVIDE (IN THIS CASE CLASS) 

// peopleContainer.setAttribute("class", "people people-container")
// // .setAttribute LETS US SELECT THE CLASS KEY WHICH WE PROVIDE AND EDIT THE CONTENT INSIDE VIA JS
// // IF THE KEY EXSIST THE VALUE WILL BE UPDATED, OTHERWISE A NEW KEY WILL BE MADE AND THE GIVEN VALUE WILL BE ATTACHED

// peopleContainer.setAttribute("style", "color: darkgreen;")
// //EXAMPLE OF ADDING A NEW ATTRIBUTE TO A NODE

// peopleContainer.style.margin = '50px'
// // BETTER WAY OF ALTERING STYLE BECAUSE WE DON'T OVERWRITE PREVIOUS STYLES

// console.log(peopleContainer.style)






// -------------------------------------------------------
//  EXAMPLES OF ITERATIONS THAT RUN UNTIL A RADMONIZED REQUIREMENT IS MET
// -------------------------------------------------------
// function getRandomInt(max) {
//   return Math.floor(Math.random() * (max+1));
// }

// let count = 0
// for(let i = 0; i<5;){
//   let number = getRandomInt(5)
//   console.log("number: " + number)
//   count++
//   console.log("count:" + count)
//   if (number === 5) {i++}
//   console.log("i:" + i)
// }

// let i = 0
// let count = 0
// while (i<5){
//    let number = Math.floor(Math.random()*6)
//    if (number === 5) {i++}
//    console.log(i)
//    count ++
//    console.log(count)

// }







// -------------------------------------------------------
//  LINKING A FUNCTION TO ONCLICK
// -------------------------------------------------------
// document.querySelector(".cont-greeting").onclick = function() {
//   alert("onclick worked")
// }

// -------------------------------------------------------
//  EXAMPLE OF HOW HOISTING CREATES VARS OUTSIDE OF SCOPE
// -------------------------------------------------------
// var a

// function hoist() {
//     a = 20;
//     var b = 100;
//   }
  
//   hoist();
  
//   console.log(a);
//   console.log(b)

  // RESULTS:
  //   20
  //   index.js:13 Uncaught ReferenceError: b is not defined
  //   at index.js:13

// -------------------------------------------------------
// HOISTING IN ACTION ---- WE GET UNDEFINED INSTEAD OF REFERENCE ERROR
// -------------------------------------------------------

//   console.log(hoist); // Output: undefined

//   var hoist = 'The variable has been hoisted.';

// -------------------------------------------------------
// ISSUES WITH HOISTING IN ACTION
// -------------------------------------------------------

// variable shadowing
// let & const - block-scoped

// const price = 20;
// var isSale = true;

// if (isSale) {
// // discount price of product
//     let price = 18; 
//     console.log('sale price', price);
// };
// console.log('price', price);
// console.log('20% price', price - 4);


// -------------------------------------------------------
// // THE VALUE OF CONST --- CONST VS LET
// -------------------------------------------------------

//   const originalPrice = 50;
//   const percentOff = 20;
//   const priceOff = originalPrice * (percentOff / 100);

// // rest of our program (maybe 100s of lines)

//   console.log(priceOff);


// -------------------------------------------------------
// EXAMPLES OF TEMPLATE LITERALS
// -------------------------------------------------------

// let username = `Jane Doe`;
// let message = `Hi ${username}, how are you?`;
// console.log(message);

// // template literal ``

// const weight = 150;
// const moonWeight = `You weigh ${weight * 0.165} pounds on the moon`;
// console.log(moonWeight);


// const threeLines = "This is a string \n that spans \r across three lines.";

// threeLines = 
// `This is a string 
// that spans across 
// three lines.
// `;

// -------------------------------------------------------
// NOTES ON VARIABLE NAMING
// -------------------------------------------------------
// Should be self descriptive & in camelCase
// let isModalVisible = true -> boolean variables are often prefixed with is or has to quickly communicate
// that it is a boolean. 
// Variable that should never be changed even by other developers manually are written in all caps and with 
// underscores seperating each word. E.g. const COLOR_RED = '#f00';
  


// -------------------------------------------------------
// .EVERY ARRAY METHOD ACTUALLY WORKING :P
// ---NEED TO USE RETURN TO "RETURN" VALUE TO THE FUNCTION CALLER
// -------------------------------------------------------

// const arr = ["pig", "3", "goat", "sheep"]

// let passes = null
// function isString(item) {
//   passes = typeof item === 'string' 
//   console.log("passes: " + passes)
//   return typeof item === 'string'
// }

// console.log("passes.every: " + arr.every(isString()))



// -------------------------------------------------------
// EXAMPLE OF OBJECT
// -------------------------------------------------------
// let pokemon ={name: "Pikachu",
//           id: 7,
//           type: ["grass", "poison"],
//           stats: {baseStats: {},
//                   maxStats: {}}
//           }

// console.log(user.bestFriend.name)



// -------------------------------------------------------
// EXAMPLE OF BASIC LOOP TO RENDER ELEMENTS FROM AN ARRAY
// -------------------------------------------------------
// let div = document.querySelector(".cont-greeting")
// let shoppingList = ["butter", 1, "beer", 6, "apples", 9]

// shoppingList.push("hi")
// console.log(shoppingList)

// for(let i = 0; i<shoppingList.length; i++) {
//     if (i % 2 === 0) {
//         let p = document.createElement("p")
//         div.append(p)
//         p.innerText = `${shoppingList[i]}: ${shoppingList[i+1]}`
//     }
// }

// -------------------------------------------------------
// EXAMPLE OF BUBBLING
// -------------------------------------------------------

// let btn = document.getElementById("clickMe")
// let sec = document.querySelector("section")
// let h3 = document.querySelector("h3")

// function logging(event) {
//     console.log("current target: " + event.currentTarget)
//     console.log("target: " + event.target)
// }

// function alertMessage(event) {
//     window.alert(`${event.target}`)
// }

// btn.addEventListener("click", (event) => changeBGColor(event))
// sec.addEventListener("click", (event) => changeBGColor(event))
// h3.addEventListener("click", (event) => changeBGColor(event))





// -------------------------------------------------------
// THESE EXCERCISES ARE FOR LOOPING AND ARRAY METHODS
// -------------------------------------------------------

// -------------------------------------------------------
// 3) Using a for loop output the following array elements in reverse order
// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];
// -------------------------------------------------------



// -------------------------------------------------------
// ANSWER:
// -------------------------------------------------------

// let newArr = []

// for(i = arr.length; i >= 0 ; i--) {
//     newArr.push(arr[i])
// }
// console.log(newArr)

// -------------------------------------------------------
// 4) Given two arrays of integers. Add up each element in the same position and
//    create a new array containing the sum of each pair. Assume both arrays are of the same length.

// let arr_3   = [4, 6, 7];
// let arr_4    = [8, 1, 9];
// // Example output: 
// // [12, 7, 16]
// -------------------------------------------------------



// -------------------------------------------------------
// ANSWER:
// -------------------------------------------------------
// let newArr = []
// for(i= 0; i < arr_3.length; i++) {
//     newArr.push(arr_3[i]+arr_4[i])
// }
// console.log(newArr)


// -------------------------------------------------------
// ARRAY PRACTICE EXERCISES 
// -------------------------------------------------------

// -------------------------------------------------------
// 1) Write a function to check whether an `input` is an array or not.
// -------------------------------------------------------


// -------------------------------------------------------
// 2) Write a function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// -------------------------------------------------------



// -------------------------------------------------------
//3) Write a function to get the first n elements of an array. 
//   If n is ommited or the array is blank return null
//   Hing: use the slice method and feed it inputs 
//   Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// -------------------------------------------------------



// -------------------------------------------------------
// 4. Write a JavaScript function to get the last element of an array. 
// Passing a parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]
// -------------------------------------------------------



// -------------------------------------------------------
// 5. Make a function that joins all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
// -------------------------------------------------------



// -------------------------------------------------------
// 6) Write a JavaScript program which accept a number as input and 
//    insert dashes (-) between each two even numbers. 
//    For example if you accept 025468 the output should be 0-254-6-8. 
// -------------------------------------------------------


// -------------------------------------------------------
// 7) Create a function that accepts an array and can sorts it in alphabetical
//    order or in ascending order for numbers
// -------------------------------------------------------



// -------------------------------------------------------
// 8) Create a function that accepts an array and can sorts it in reverse 
//    alphabetical order or in descending order for numbers
// -------------------------------------------------------



// -------------------------------------------------------
// ANSWERS FOR JS ARRAY TASKS
// -------------------------------------------------------

// -------------------------------------------------------
// 1)
// -------------------------------------------------------


  // function arrayCheck(input) {
  //   return Array.isArray(input)
  // }

  // console.log(arrayCheck([55]))


// -------------------------------------------------------
// 2)
// -------------------------------------------------------

// function copy(arr) {
//   return [...arr]
// }
// console.log(copy([3, 4 ,[5,6]]))




// -------------------------------------------------------
// 3)
// -------------------------------------------------------

// const firstElements = (array, n) => {
// //   safety check line
//   if (array.length === 0 || n == null || n < 0) {return null}
//   return array.slice(0, n);
// };

// console.log(firstElements([3, 4, 55, 22, 66 ,33]))

// -------------------------------------------------------
// 4)
// -------------------------------------------------------

// function lastElements(arr, n) {
//   if (n == null) {return arr[arr.length-1]}
//   return arr.slice(Math.max(arr.length - n, 0))
// }

// console.log(lastElements([7, 9, 0, -2]));
// console.log(lastElements([7, 9, 0, -2]));
// console.log(lastElements([7, 9, 0, -2],3));
// console.log(lastElements([7, 9, 0, -2],6));

// -------------------------------------------------------
// 5)
// -------------------------------------------------------

// function joinToString(arr) {
//   return arr.join(" ")
// }

// console.log(joinToString(["Red", "Green", "White", "Black"]))

// -------------------------------------------------------
// 6)
// -------------------------------------------------------

// let testNumber = "234543566"

// function addDashOnEven(number) {
//   const splitNum = number.split("")
//   const splitNumsDashed = splitNum.map((num, index) => {
//     if (index === number.length - 1) return num
//     if (num % 2 === 0) return `${num}-`
//     return num
//     });
//   return splitNumsDashed.join("")
// }

// console.log(addDashOnEven(testNumber))

// -------------------------------------------------------
// 7)
// -------------------------------------------------------

// let array = [5, 44, 3, 290, 45, 50, 2]

// function sortAscending(arr) {
//    arr.sort(function(a, b) {
//      return a - b
//   })

// }

// console.log(sortAscending(array))


// -------------------------------------------------------
// 8)
// -------------------------------------------------------

// let array = [5, 44, 3, 290, 45, 50, 2]

// function sortDescending(arr) {
//   return arr.sort(function(a, b) {
//     return b - a 
//   })
// }

// console.log(sortDescending(array))
// length






// ----------------------------------------
// What I learned - break on debugger
// ----------------------------------------

// const greetingCont = document.querySelector('.cont-greeting')
// console.log(greetingCont)
// greetingCont.addEventListener("click", () => {
//   console.log("click worked")
//   greetingCont.style.color = "green"
// })

// const body = document.querySelector("body")



// variable is like a boss it can change but it will always be the boss 


