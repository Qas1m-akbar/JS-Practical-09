// Task 01: 

// function addNumber(num1,num2){
//       return num1 + num2;

// }

// // Call the function and Testing 

// let result1 = addNumber(2,4);
// console.log(result1);

// let result2 = addNumber(5,4);
// console.log(result2);




// Task-02 :

// function toUpper(str){
    //     return str.toUpperCase();
    // }
    
    // // testing by given different inputs 
    
    // console.log(toUpper("hello"));
    // console.log(toUpper("my"));
    // console.log(toUpper("is"));
    // console.log(toUpper("qasim"));
    
    
    
    // Task-03 :


    // function averageArray(arr){
    //     let sum = 0;

    //     for(let i = 0; i < arr.length; i++){
    //         sum = sum + arr[i];
    //     }
    //         return sum / arr.length;
    // }


    // // testing function by different inputs 

    // console.log(averageArray([1,2,3]));

    // console.log(averageArray([5,5,5]));

    // console.log(averageArray([4,5,6]));

    // console.log(averageArray([1,22,13]));



    // Task-04 : Removing Vowels using regular Expression .include()  

//     function removeVowels(str){
//         // create empty using storing a string
//         let result = '';

//         for(let i = 0; i < str.length; i++){
//             // mentioning Vowels to avoid
//              const vowels = 'aeiouAEIOU';
//              // if check condition to character is not as vowels ,if,so append it to result 
//              if(!vowels.includes(str[i]))
//              result +=  str[i];
//         }
//         return result;
// }

//     console.log(removeVowels("hello"));
//     console.log(removeVowels("qasim"));
//     console.log(removeVowels("khattak"));


/***********************  USING REGULAR EXPRESSION by  .replace() method****/

//  function removeVowels(str){
//     return str.replace(/[aeiouAEIOU]/g, '' );
//  }

//  console.log(removeVowels("hello world"));
//  console.log(removeVowels("jhon cena"));
//  console.log(removeVowels("rock"));
//  console.log(removeVowels("open ai"));
    



// Task 05 : Solving for Loop


//  function factorial(n){
   
//   if(n < 0) return "Factorial is not defined for negative numbers"
//   let result = 1;
//   for(let i = 1; i <=n; i++){
//     result = result*i;
//   }  
//   return result;

// } 

// console.log(factorial(5));
// console.log(factorial(4));
// console.log(factorial(2));
   

/**************** SOLVING USING RECURSION  ******/

// function factorial(n){
//     if(n < 0) return  "Factorial is not defined for negative numbers"
     
//     if(n === 0 || n === 1) return 1; // base case factorial 0,1 result 1
//      return n* factorial(n-1); 
// }

// console.log(factorial(6));
// console.log(factorial(5));
// console.log(factorial(4));
// console.log(factorial(-1));





// Task 06 : SOLVING USING LOOP 

// function reverseString(str){
//     let reverse = '';
//     for(let i = str.length-1; i>=0; i--){
//         reverse += str[i];
//     }
//     return reverse

// }

// console.log(reverseString("Hello world"));
// console.log(reverseString("flexibility"));





// Task 06 : SOLVING USING RECURSION 

// function reverseString(str){
//     if(str === ''){
//         return str;
//     }else
//       {
//         return reverseString(str.substr(1))+str[0];

//     }
// }

// console.log(reverseString("my name"));
// console.log(reverseString("is methew"));