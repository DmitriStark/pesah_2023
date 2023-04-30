





/////////////////////////////////////////////////////////////
// 1. Write a JavaScript program to print the even numbers between 1 and 20 using a **`for`** loop.

// let number = []

// for (let index = 1; index <= 20; index++) {
    //     if (index % 2 == 0) {
        
        //         number.push(index)
    //     }

// }
// console.log(number)


/////////////////////////////////////////////////////////////
// 2. Write a JavaScript program to print the numbers from 1 to 10 using a **`for`** loop.

// for (let i = 1; i <= 10; i++) {
//     console.log(i)
// }


//////////////////////////////////////////////////////////////////////
// 3. Write a JavaScript program to print the numbers from 1 to 50. But for multiples of 3,
//  print "Fizz" instead of the number, and for the multiples of 5, print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".


// for (let i = 1; i <= 50; i++) {
    //     console.log(i)
    //     if (i % 3 == 0) {
//         console.log("Fizz")

//     }
//     else if (i % 5 == 0) {
    //         console.log("Buzz")
    
    //     }
    //     if (i % 3 == 0 && i % 5 == 0) {
        //         console.log("FizzBuzz")
        //     }
        // }
        
        //////////////////////////////////////////////////////////////////////////
        // 4. Write a JavaScript program to calculate the sum of the numbers from 1 to 5 using a **`while`** loop.
        
        // let numbers = [1, 2, 3, 4, 5]
// let sum
// let i =0

// while (i<=5) {
    //     i++
//   sum = numbers.reduce((total,amout)=>total+amout)



// }
// // console.log(numbers)
// console.log(sum)


////////////////////////////////////////////////////////////////////////////////////
// 5. Write a JavaScript program to find the sum of all odd numbers from 1 to 1000.

// let numbers =[]
// let sum
    // for (let index = 0; index <= 1000; index++) {
        //     numbers.push(index)
        
        // }
        // sum = numbers.reduce((total,amout)=>total+amout)
        // console.log(numbers)
        // console.log(sum)
    
    
        ///////////////////////////////////////////////////////////////////////////
    // 6. Write a JavaScript program to display the multiplication table of a number entered by the user.
    //  For example, if the user enters 5, display the multiplication table for 5.
    
    // let num = prompt("enter number")
    // for (let index = 0; index < num; index++) {
        //     for (let i = 0; i <= 10; i++) {
        
            
            //         console.log(index*i+"\t")
            //     }
            
            
            // }
            
            ///////////////////////////////////////////////////////////////////////////////////////////////
        // 7. Write a JavaScript program that iterates through an array of colors
        //  (e.g., **`['red', 'green', 'blue']`**) and logs each color to the console using a **`for`** loop.
        
        // let colors = ["red","blue","green","black"]
        
        // for (let index = 0; index < colors.length; index++) {
        //     console.log(colors[index])
            
            
        // }



        ////////////////////////////////////////////////////////////////////////////////////////
        // 8. Write a JavaScript program to find the factorial of a given positive integer.
        //  A factorial is the product of all the positive integers less than or equal to the given number.
        //  For example, the factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120.

    //  let num = prompt("enter number")
    //  for (let index = 0; index <=num; index++) {
        
        
        //  }
    // program to find the factorial of a number
    
// take input from the user
// const number = parseInt(prompt('Enter a positive integer: '));

// // checking if number is negative
// if (number < 0) {
//     console.log('Error! Factorial for negative number does not exist.');
// }

// // if number is 0
// else if (number === 0) {
//     console.log(`The factorial of ${number} is 1.`);
// }

// // if number is positive
// else {
//     let fact = 1;
//     for (i = 1; i <= number; i++) {
//         fact *= i;
//     }
//     console.log(`The factorial of ${number} is ${fact}.`);
// }

    ////////////////////////////////////////////////////////////////////////////////////////////////////
    // 9. Write a JavaScript program to create an array with the first n elements of the Fibonacci sequence.
    //  The Fibonacci sequence is a series of numbers in which each number is the sum of the two preceding ones,
    //  usually starting with 0 and 1. For example, the first 6 elements of the Fibonacci sequence are [0, 1, 1, 2, 3, 5].
    
// let number =parseInt(prompt("enter number"))
// let n1 =0 , n2 =1 , nextTerm ;
// console.log("fibonachi serios")

// for(let i =1 ;i<=number;i++){
//     console.log(n1)
//     nextTerm = n1+n2
//     n1=n2
//     n2 = nextTerm
// }

//////////////////////////////////////////////////////////////////////////////////////////
// 10. Write a JavaScript program to reverse a given string. For example, if the input is "hello",
//  the output should be "olleh".

// let something = prompt("enter something to reverse it")
// let reversed =something.reverse()
// console.log(reversed)


// function reversedstring(str){
    //     var newstring = ""
//     for(var i =str.length -1;i>=0;i--){
//         newstring +=str[i]
//     }
//     console.log(newstring)
//     return newstring
// }
// reversedstring("pizda is good")


//////////////////////////////////////////////////////////////////////////////////////////////////////
// 11. Write a JavaScript program to find the smallest common multiple (SCM) of two numbers. 
// The smallest common multiple is the smallest number that is a multiple of both input numbers. For example
// , the smallest common multiple of 4 and 6 is 12.

// const num1 = parseInt(prompt("enter number"))
// const num2 = parseInt(prompt("enter number"))
// console.log(num1,num2)
// let min =(num1>num2) ? num1 : num2
// while(true){
//     if(min % num1==0 && min%num2 ==0){
//         console.log("the lcm of "+num1+" and "+num2+" is "+min)
//         break
//     }
//     min++
// }

///////////////////////////////////////////////////////////////////////////////////////////////////
// 12. Write a JavaScript program to generate the first n prime numbers. 
// A prime number is a number greater than 1 that has no positive divisors other than 1 and itself.
//  For example, the first 5 prime numbers are 2, 3, 5, 7, and 11.


// const lowernumber = parseInt(prompt("enter lower number"))
// const higthernumber = parseInt(prompt("enter higther number"))


// console.log("the prime number between " + lowernumber +" and"+higthernumber +" are")

// for(let i = lowernumber;i<=higthernumber;i++){
//     let flag =0
    
//     for(let j=2;j<i;j++){
//         if(i%j==0){
//             flag =1
//             break
//         }
    
    
//     }
//     if(i>1&&flag ==0){
//         console.log(i)
//     }
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////
// 13. Write a JavaScript program to calculate the product of the numbers from 1 to 5 using a **`for`** loop.

// let userinput = parseInt(prompt("enter number"))
// const numbers = []

// for(i=1 ;i<=userinput;i++){
//     numbers.push(i)
// }
// console.log(numbers)
// let sum=numbers.reduce((partialsum,a)=>partialsum+a)
// console.log(sum)


///////////////////////////////////////////////////////////////////////////////////////
// 14. Write a JavaScript program to print a pyramid of asterisks (*) with the given height.
//  For example, if the input is 4, the output should be:

//     ```
//     	 *
//       ***
//      *****
//     *******
//     ```

// function generatepyramid (){
//     var rows =5 
//     var arr =[]
//     for(let i =1;i<=rows;i++){
//         for(let j =1;j<=i ;j++){
//             arr.push(j)
//             console.log(j+"\t")
//         }
//         console.log("\n")
//     }
// }
// generatepyramid(5)

// function pyramid(n){
//     for(let i =1 ;i<=n ;i++){
//         let str = " ".repeat(n-i)
//         let str2 = "*".repeat(i*2-1)
//         console.log(str+str2+str)
//     }
// }
// pyramid(5)


///////////////////////////////////////////////////////////////////////////////////////////////////////////
// 15. Write a JavaScript program to calculate the sum of the elements in an array of numbers.
//  For example, if the input is [1, 2, 3, 4], the output should be 10. However, if any element of the array is not a number,
//   the program should return an error message.


// let userinput = parseInt(prompt("enter number"))
// if(userinput){
    
//     const numbers = []
    
//     for(i=1 ;i<=userinput;i++){
//         numbers.push(i)
//     }
//     console.log(numbers)
//     let sum=numbers.reduce((partialsum,a)=>partialsum+a)
//     console.log(sum)

// }
// else{
//     console.log("enter valid number")
// }