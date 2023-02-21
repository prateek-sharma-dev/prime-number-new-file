// to find prime numbers using recursion method 

//     let number = 100;
// let start = 0;

// function primeNumber(start){

//     if(start == number){
//     return;
// }  
//     start++;
//    primeNumber(start)

//     if(start == 0 || start == 1) {
//       return; console.log( start, "Not a Prime Number");
//     }else if(start == 2 || start == 3 || start == 5 || start == 7){
//        return console.log(start, "Prime Number")
//     }
//     else if(start % 2 == 0 || start % 3 == 0 || start % 5 == 0 || start % 7 == 0){
//         return; console.log(start, "Not a Prime Number");
//     }else {
//         return console.log(start, "Prime Number");
//     }
// };
// console.log(primeNumber(start));






// to find if a number is prime or not

// let number = 67;
// function primeNumber(number){
//     if(number == 0 || number == 1) {
//         console.log("Not a Prime Number");
//     }else if(number == 2 || number == 3 || number == 5 || number == 7){
//         console.log("Prime Number")
//     }
//     else if(number % 2 == 0 || number % 3 == 0 || number % 5 == 0 || number % 7 == 0){
//         console.log("Not a Prime Number");
//     }else {
//         console.log("Prime Number");
//     }
// };
// console.log(primeNumber(number));



// to split digits in an integer
// const number = 234;
// let newNumber = [];
// function myNumber(number){
//     if(number == 0){
//         return;
//     }
//     let digits = number % 10;
//     number = parseInt(number/10);
//     console.log(digits);

//     newNumber.push(digits)
//      while(number >= 0 )
//     myNumber(number);
// };
// console.log(myNumber(number));



// to find length of an integer
// function digits(n){
// var count = 0;
// if(n>=1)count++;

// while (n / 10 >= 1 )
// {n/=10;
// count++;
// }
// return count;
// }
// console.log(digits(211355));



// // to find if an array is sorted or not...
// let array = [1,5,7,9,11,13,14,15,15,15,23,23,23,23];
// let size = array.length;

// function isSorted(array,size){
//     //base case
//     if(size === 0 || size === 1){
//       return true;
//     }
//     if(array[size-1] < array[size-2]){
//       return false;
//     }
//     else{
//         remainingpart = isSorted(array.slice(0), size - 1);
//         return remainingpart;  
//       }
      
// }
//  console.log(isSorted(array,size));




// to find digits using binary search

// let odd= [1,5,7,9,15,27,485];
// let start = 0;
// let end = odd.length-1;
// let key = 485;
// position = -1;

// function binarysearch(odd,key){
    
//     while(start <= end){
//       let mid = Math.floor((start+end)/2);

//       if(odd[mid] === key){
//         position = mid;
//         break;
//       }
//      else if(key > odd[mid]){
        
//         start = mid+1;
//       }
//       else
//             {
//         end = mid-1;   
//       }
//     }
//     return position;
// };
// console.log(binarysearch(odd,key));



// let arr = ["zero","one","two","three","four","five","six","seven","eight","nine"];
// let number = 123;
// let newary=[]
// function saydigit(number,arr){
//     if(number == 0)
//     return;
//     //
//     let digit = number % 10;
//     number = parseInt(number / 10);
//     console.log(arr[digit]);
//     //
//     newary.push(digit)
//     while(number >= 0 ){
//       saydigit(number,arr);
//     }
    
// }
// console.log(saydigit(number,arr));


  


// // fibonacci to find the number
// let r = 3;

// function fib(r){
//     //back case
//     if(r == 0)
//     return 0;

//     if(r == 1)
//     return 1;
//     //recursive relation
//     let ans = fib(r-1) + fib(r-2);

//     return ans;

// }console.log(fib(r));




// // to find the product between two integers
// let s = 1;
// let t = 4;

// function product(s){
//     //base case
//     if(s > t )
//     return 1;
//     //recursive relation 
//     let no = product(s+1);
//     let bigno = s * no;

//     return bigno;

// }console.log(product(s));



// // to find the sum between two integers
// let q = 1;
// let p = 10;

// function sum(q){
//     //base case
//     if(q > p )
//     return 0;
//     //recursive relation
//     let no = sum(q+1);
//     let bigno = q + no;

//     return bigno;

// }console.log(sum(q));





// // code to print recursion for start and destination
// let start = 0;
// let dest = 8;

// function office(start,dest){
//     //base case
//     if(start == dest){
//         return console.log("Reached");
//     }
//     //recursive relation
//      console.log("start " , start, "destination ", dest);
//      office(start+1,dest);


// }console.log(office(start,dest));




// // to print counting numbers
// let k = 1;
// function Counting(k){
//     //base case
//     if(k == 0)
//     return;

//     //recursive relation
//     Counting(k-1);

//     console.log(k);

// } console.log(Counting(k)); 




// // to find power using Recursion
// let m = 5;
     
// function power(m){
// //base case
// if(m == 0)
// return 1;

// //recursive relation 
// let smallerProblem = power(m-1);
// let biggerProblem = 2 * smallerProblem;

// return biggerProblem;

// } console.log(power(m));






// // to find factorils using Recursion 

// let n = 4;
// //let a = factorial(n);

// function factorial(n){
//     //base case
//      if(n==0)
//      return 1;

//      //recursive relation
//     let smaller = factorial(n-1);
//     let bigger = n * smaller;

//     return bigger;

// }
// console.log(factorial(n));









