// # Arrays




////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of words and returns a new 
// array with the words sorted in reverse alphabetical order using the **`sort()`** method.

// function sorter(array){
//     let newarr =[]
//     newarr = array.sort()
//     newarr.reverse()
//     console.log(newarr)
//     return newarr
// }

// let words = ["a","z","sdas","vccxxc"]
// sorter(words)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of numbers and returns a new array containing only the even numbers
// . Use the **`filter()`** method to achieve this.

// let number = [1,2,3,5,6,7,8,9,0,12,32]

// let evens = number.filter(item => item%2==0)
// console.log(evens)


// function sorter(array){
//     let sorted = []
//     if(array%2==0){
//         sorted.push(array)
//     }
//     return sorted
// }

// let newarr = number.filter(sorter)

// console.log(newarr)

// function evennumbers(array){
//     even = []
//     for(let i=1 ;i<=array.length;i++){
//         if(i %2==0){
//             even.push(number[i])
//             console.log(even)
//         }
//     }
//     return even
// }
// evennumbers(number)

/////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that takes an array of strings and returns a new array with each string's length.
//  Use the **`map()`** method to achieve this.

// let words = ["asdsf","asdasdasd","gfdsvsdfv","dsfdsf"]
// let mapped = words.map(string => string.length)
// console.log(mapped)


///////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that takes an array of numbers and returns a new array with each number
//  multiplied by 2 using the **`map()`** method.

// let numbers = [1,3,5,6,7,9]
// let multiplied = numbers.map(item => item*2)
// console.log(multiplied)


/////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function to find the sum of all numbers in an array. 
// Use the **`reduce()`** method to achieve this. For example, if the input is [1, 2, 3, 4], the output should be 10.

// let numbers = [1,3,5,6,7,9]
// let sumofall = numbers.reduce((sum =0, item)=> sum + item )
// console.log(sumofall)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of words and returns a new array with
//  the words sorted alphabetically. Use the **`sort()`** method to achieve this.


// let words = ["payne","vayne","main","ambrosia","odesa"]
// let upper = words.map(word => word.toUpperCase())
// console.log(upper)
// let sortedwords = words.sort()
// console.log(sortedwords)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function to remove duplicate values from an array.
//  Use the **`forEach()`** method to achieve this. For example, if the input is [1, 2, 3, 3, 4, 4, 5], 
//  the output should be [1, 2, 3, 4, 5].

// let numbers = [1, 2, 3, 3, 4, 4, 5]

// let sortednums = []
// numbers.forEach(element => {
//     if(!sortednums.includes(element)){
//         sortednums.push(element)
//     }
// })

// console.log(sortednums)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of numbers and returns the product of all numbers in the array.
//  Use the **`reduce()`** method to achieve this. For example, if the input is [1, 2, 3, 4], the output should be 24.

// let numbers =[1, 2, 3, 4]
// let mnums = numbers.reduce((sum,num)=> sum*num)
// console.log(mnums)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of numbers and returns a new array with only the odd numbers 
// using the **`filter()`** method. For example, if the input is [1, 2, 3, 4], the output should be [1, 3].

// let numbers =[1, 2, 3, 4]
// let nums = numbers.filter(item => item%2!=0)
// console.log(nums)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function to find the minimum value in an array of numbers using the **`reduce()`** method.
//  For example, if the input is [1, 2, 3, 4], the output should be 1.

// let numbers =[1, 2, 3, 4]
// let minnums = numbers.reduce((item,item2)=>item2-item)
// console.log(minnums)

// // למה לא יצא לי 1 כי מטמתיקה כזאת
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of strings and returns a new array 
// with the strings sorted by length. Use the **`sort()`** method to achieve this.

// let somestrings = ["i was here","went here","last the only one","does it matter"]
// let sortedstring = somestrings.sort((a,b)=> a.length-b.length)
// console.log(sortedstring)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of numbers and returns the total count of 
// even numbers in the array using the **`forEach()`** method.


// let numbers = [1, 2, 3, 3, 4, 4, 5]

// let sortednums = []
// numbers.forEach(element => {
//     if(!sortednums.includes(element)){
//         sortednums.push(element)
//     }
// })

// console.log(sortednums)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of objects with properties **`name`** and **`age`** 
// and returns a new array containing only the objects with an age greater than or equal to 18. Use the **`filter()`*
// * method to achieve this.

// let students = [
//     {name :"bar",age :19},
//     { name: "dave", age: "17", student: true },
//     { name: "oriya", age: "34", student: false },
//     { name: "yaniv", age: "44", student: false }
// ]

// let sortedpeaple = students.filter((key)=>key.age>=18)
// console.log(sortedpeaple)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// - Write a JavaScript function that accepts an array of numbers and returns a new array with each number squared.
//  Use the **`map()`** method to achieve this. For example, if the input is [1, 2, 3, 4],
//   the output should be [1, 4, 9, 16].

// let numbers =[1, 2, 3, 4]

// let squared = numbers.map(item => item**2)
// console.log(squared)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // - Write a JavaScript function that accepts an array of words and returns a new array containing only the words
//  that start with the letter 'a' (case-insensitive). Use the **`filter()`** method to achieve this.

// let fruits = [ "apple","banana","mango","apelsine","akashka","vines"]
// let filteredfruits = fruits.filter((item)=> item.startsWith("a") )
// console.log(filteredfruits)


////////////////////////////////////////////////////////////////////////////////////////////////////////////////






