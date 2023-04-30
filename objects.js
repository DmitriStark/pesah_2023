// # Objects





///////////////////////////////////////////////////////////////////////////////////////////////////////
// // 1. Write a JavaScript function to create an object named **`person`** with properties **`firstName`**,
//  **`lastName`**, **`age`**, and a method called **`getFullName`** 
//  that returns the full name (firstName and lastName concatenated with a space in between).

// function creater(firstname,lastname,age){
// let person ={}
// person.firstname = firstname
// person.lastname = lastname
// person.age = age
// let fullname= person.firstname +" "+lastname
// console.log(fullname)
// return person


// }
// let persons = creater("dima","stark","33")
// console.log(persons)



////////////////////////////////////////////////////////////////////////////////////////////////////
// 2. Write a JavaScript function to count the number of occurrences of each character in a given string.
//  Return the result as an object with properties for each character and their corresponding counts. For example,
//   if the input is "hello", the output should be: **`{ h: 1, e: 1, l: 2, o: 1 }`**.


// function occurrences(string) {
//     var result = [...string].reduce((a, e) => { a[e] = a[e] ? a[e] + 1 : 1; return a }, {});
//     console.log(result); // {h: 1, e: 1, l: 2, o: 1}
//     return result


// }
// occurrences("how do u do")


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 3. Write a JavaScript function that accepts an object and a key as arguments, 
// and returns the value associated with the key. If the key is not found in the object, return **`null`**.



// let obj = { name: "dudu", lastname: "budin" }

// function checker(obj,key){

//     if(  key in obj ){
//         console.log(key+" "+obj[key])
//     }
//     else{
//         console.log("null")
//     }

// }
// checker(obj,"age")



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 4. Write a JavaScript program to create an object named **`counter`** with a property *
// *`count`** initialized to 0, and methods **`increment`** and **`reset`**. The **`increment`** 
// method should increase the count by 1, and the **`reset`** method should set the count back to 0.

// function sufux(object) {
//     let counter = object
//     counter.count = 0
//     counter.increment = function () { ///  lama ze lo oved ufff
//         this.count = this.count + 1   // ahrei shaataim ezlahti 
//     }
//     counter.reset = function () {
//         return counter.count = 0

//     }
//     return counter
// }

// let obj3 = {}
// sufux(obj3).increment()
// console.log(obj3)
// sufux(obj3).reset
// console.log(obj3)








/////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 5. Write a JavaScript function that accepts an array of objects, each with a property called **`price`**. 
// Calculate the average price of all objects in the array and return the result.

// let osef = [
//     {
//         name: "kakashka",
//         price: 199
//     }
//     ,
//     {
//         name: "mersedes",
//         price: 200000
//     }
//     ,
//     {
//         name: "pelephone",
//         price: 3500
//     }
// ]

// function pricecalculator(array){
//     let prices = array.map(object =>object.price)
//     let total = prices.reduce((acc,curr)=>acc+curr)

//     let totalprice = array.reduce((acc,curr)=>acc+curr.price, 0)
//     return total , totalprice
// }
// console.log(pricecalculator(osef))


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 6. Write a JavaScript program to create an object named **`rectangle`** with properties **`width`** 
// and **`height`**, and a method called **`area`** that returns the area of the rectangle (width * height).

// function creater(width, height) {
//     let rectangle = {}
//     rectangle.width = width
//     rectangle.height = height

//     let area = rectangle.width * rectangle.width
//     console.log(area)
//     return area
// }

// creater(9, 8)

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 7. Write a JavaScript program to create an object named **`book`** with properties **`title`**, **`author`**,
//  and **`year`**, and a method called **`getInfo`** that returns a string containing 
//  the book's title, author, and year, formatted as: "Title by Author (Year)".

// function bookcreator(title, author, year) {
//     let book = {}
//     book.title = title
//     book.author = author
//     book.year = year
//     book.getInfo = function () {
//        console.log (this.title + " by " + this.author + " " + (this.year))
//     }

//     return book


// }
// let newbook =bookcreator("harry potter", "jk rowling", "1997")
// console.log(newbook.getInfo())

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 8. Write a JavaScript function to merge two objects. If both objects have the same property,
//  the values should be combined into an array. For example, 
//  if the input objects are **`{ a: 1, b: 2 }`** and **`{ b: 3, c: 4 }`**, 
//  the output should be **`{ a: 1, b: [2, 3], c: 4 }`**.

let o1 = { a: 1, b: 2 }
let o2 = { b: 3, c: 4 }


function merge(obj,obj2){

   for(let i=0;i<obj2.length;i++){
        obj.push(obj2[i])
        
    }
    console.log(obj)
    return obj
}
merge(o1,o2)
let merged = [o1,...o2] ;
console.log(merged)


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 9. Write a JavaScript function that accepts an array of objects with properties
// **`name`** and **`score`**. Sort the array by the **`score`** property in descending order,
// and return the sorted array.



// const shopingcart = [
//     {
//         name : "kivi" ,
//         price : 78
//     }
//     ,
//     {
//         name : "banana" ,
//         price : 43
//     }
//     ,
//     {
//         name : "orange" ,
//         price : 55
//     }
//     ,
//     {
//         name : "melon" ,
//         price : 20
//     }
//     ,
//     {
//         name : "apple" ,
//         price : 66
//     }
// ]

// function sorterbyprice(array){
//    let sorted = array.sort((a,b)=>a.price - b.price)
//    console.log(sorted)
//    return sorted

// }
// sorterbyprice(shopingcart)




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 10. Write a JavaScript program to create a function that accepts an object and returns a new object with the 
// keys and values swapped. For example, if the input is **`{ a: 1, b: 2, c: 3 }`**,
//  the output should be **`{ '1': 'a', '2': 'b', '3': 'c' }`**.


// let yourobj = { a: 1, b: 2, c: 3 }

// var swap = function(object){
//     const swapped = Object.entries(object).map(([key,value])=>[value,key])
//     console.log(Object.fromEntries(swapped))
//     return Object.fromEntries(swapped)
// }

// swap(yourobj)



/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // 11. Write a JavaScript program to create an object named **`circle`** with a property **`radius`** 
// and a method called **`circumference`** that returns the circumference of the circle (2 * π * radius).

function circlecreator(radius) {
    const circle = {}
    circle.radius = radius
    const pi = Math.PI;
    circle.circumference = function () {
        2 * 2
    }


}

console.log(circlecreator(2))


////////////////////////////////////////////////////////////////////////////////////////////////////
// 12. Write a JavaScript program to create a function that accepts an object with properties **`firstName`** 
// and **`lastName`** and returns a new object with the properties swapped. For example, if the input is
//  **`{ firstName: 'John', lastName: 'Doe' }`**, the output should be **`{ firstName: 'Doe', lastName: 'John' }`**.

function swapkeyvalue(obj){
let objectentries = Object.entries(obj)
const finalobject =objectentries.map(([prop,propvalue])=>{
    return [propvalue,prop]
})
let newobj =Object.fromEntries(finalobject)

console.log(newobj)
return newobj

}

let oldone ={ firstName: 'John', lastName: 'Doe' }
swapkeyvalue(oldone)








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 13. Write a JavaScript program to create a function that takes an object and a key-value pair, 
// and returns a new object with the key-value pair added to it. If the key already exists in the object,
//  update its value.

function keyvalueadder(obj, key, value) {
    const newobj = obj
    Object.assign(newobj, {[key] : value})

    console.log(newobj)

    return newobj



}
let old = { a: 1, b: 2, c: 3 }
keyvalueadder(old, gg, paak)

























/////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 14. Write a JavaScript program to create a function that accepts an object and returns an array of its keys
// . Do not use the built-in **`Object.keys()`** method.


// let lefros={ a: 1, b: 2, c: 3 }

// function onlykeyshower(obj){
//     let keysarray = []
//     for(let key in obj){
//         keysarray.push(key)
//     }
//     console.log(keysarray)
//     return keysarray
// }

// onlykeyshower(lefros)


////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Write a JavaScript program to create a function that accepts an object and returns an array of its values.
//  Do not use the built-in **`Object.values()`** method.



// let lobj ={ a: 1, b: 2, c: 3 }

// function onlyvalueshower(obj){
//     let valuesarray = []
//     for(let key in obj){
//         valuesarray.push(obj[key])
//     }
//     console.log(valuesarray)
//     return valuesarray
// }

// onlyvalueshower(lobj)





/////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                            //   end