// Easy Problems::////////////////////////////////////////////
// Append an Element:
// const arr = [1,2,3,4,5]
// Given an array of numbers, add a new number to the end of the array .
////////////////////
// arr.push(6)
// console.log(arr)

// Remove the Last Element:
// Remove the last element from an array .
//////////////
// arr.pop()
// console.log(arr)

// Insert at the Beginning:
// Add an element at the start of an array .
////////////////////
// arr.unshift(0)
// console.log(arr)

// Remove the First Element:
// Remove the first element from an array .
/////////////////
// arr.shift(0)
// console.log(arr)

// console.log(arr.includes(1))

// Check if Element Exists:
// Write a function that checks if a given element exists .


// function check (ele,arr){

//     const message = arr.includes(ele) ? "element exist" : "element does not exist"
//      console.log(message)
// }

// check(10,arr)


// Combine two arrays into one .

///////////////////

// const arr = [1,2,3,4,5]
// const arr2 = [6,7,8,9,10]
// const arr3 = arr.concat(arr2)
// console.log(arr3)

// Reverse an Array:
// Reverse the elements in an array .

//////////////////
// const arr = [1,2,3,4,5]
// console.log(arr.reverse())

// Slice a Subarray:
// Extract a subarray from a given array. Return elements between index 2 and 5.
////////////////////
// const arr = [1,2,3,4,5,6,7,8]  /// 3,4,5,6
// const arr2 = arr.slice(2,6)
// console.log(arr2)


// Splice to Remove Elements:
//  remove 3 elements from an array starting from index 2.
///////////////////////////
// const arr = [1,2,3,4,5,6,7,8]   //// arr = [1,2,6,7,8]
// console.log(arr)
// arr.splice(2,3)
// console.log(arr)


// Intermediate Problems:::://///////////////////////////////////////////////

// Sum of Array Elements:
// Write a function that uses forEach to calculate the sum of all elements in an array.
///////////////////////
// const arr = [1,10,2,3]
// const sum = function (arr){    ///// function expression ... 
//     let sum = 0 ; 
//     arr.forEach(function(ele){
//      sum+= ele
//     }); 
//     return sum
// }
  
// console.log(sum(arr))

// Remove Element by Index:
// Given an array, remove the element at a specific index using splice.
///////////////////////
// let array = ["jhon","steven","meachel","peter"]
// let indexToRemove = 2 ; 
// array.splice(indexToRemove,1)
// console.log(array)

// Replace Elements :
// Replace the second and third elements of an array with two new values using splice.
/////////////////////
// let array = ["jhon","steven","meachel","peter"]
// array.splice(2,3,"eya","yomna")
// console.log(array)


// Extract Last 3 Elements:
// Use slice to get the last 3 elements from an array.
////////////////////
// let array = ["jhon","steven","meachel","peter"]
// console.log(array.slice(-3))


// Concatenate and Sort:
// Concatenate two arrays, then sort the result in ascending order.
////////////////////
// const arr = [5,100,1]
// const arr2 = [6,20,22]
// let arr3 = arr.concat(arr2)
// console.log(arr3)
// arr3.sort((x,y)=> x-y)
// // arr3.sort(function(y,z){return y-z})
// console.log(arr3)


// Multiply Elements by 2 :
// Create a function that multiplies every element of an array by 2 .
//////////////////// 
//  const arr = [1,2,3,4,5]

//  function multiplyByTwo (arr){
     
//  }

// Find Maximum Number:
// Use forEach to find the largest number in an array.

//////////////// 
// const arr = [1,2,3,100,4,5]

// function max (arr){
    
//     let max = arr[0]   //// max = 5 
    
//     arr.forEach(function(ele){
//         console.log(ele)
//         if (ele>max){
//             max = ele
//         }
//     });
//     return max
// }

// console.log(max(arr))



// Count Occurrences of a Value:
// Write a function that counts how many times a specific value appears in an array using forEach.
// const arr = [1,10,2,10,5,6,10,100]

// const counterElement = function (arr,value){
// let count = 0 ; 
// arr.forEach(function(noumrou){
//     if (noumrou === value){
//         count ++ ;  ///// count = count + 1
//     }
// })
// return count 
// }

// console.log(counterElement(arr,10))

// Filter Negative Numbers:
// Use forEach  to remove all negative numbers from an array.

////////////////////
//  const arr = [-1,-2,-3,-4,-5,1,2,3]

// function removeNegative (arr){
//  let postiveNumber = [] 
//  arr.forEach(function(ele){
//      if (ele>=0){
//       postiveNumber.push(ele)
//      }
//  })
//  return postiveNumber
// }

// console.log(removeNegative(arr))

// Flatten an Array of Arrays:
// Use concat and forEach to flatten an array of arrays (e.g., [[1, 2], [3, 4]] into [1, 2, 3, 4]).
////////////////////////////////
// const arr = [[1,2,3],[10,20,30],[50,60,100]]
// console.log(arr) /////====> [1,2,3,10,20,30,50,60,100]
// function flaaten (arr){
//    let flat = [] 
//    arr.forEach(function(ele){
//     flat = flat.concat(ele)
//    })

//    return flat

// }

// console.log(flaaten(arr))


// Advanced Problems:://////////////////////////////////////////////////////////////////////////////


// Remove Duplicates from an Array:
// Use forEach and includes to remove duplicates from an array.

//////////////////////////////////
// const arr = [1,2,10,11,10,5,6,5,10,11]
// console.log(arr)
// function removeDublicate (arr){
//  let withoutDouble = [] ; 
//  arr.forEach(function(ele){
//   if (!withoutDouble.includes(ele)){
//    withoutDouble.push(ele)
//   }
//  })
//  return withoutDouble ; 
// }
// console.log(removeDublicate(arr))

// Interleave Two Arrays:
// Given two arrays of equal length, return a new array where the elements of the two arrays are interleaved (i.e., [a1, b1, a2, b2, ...]).
///////////////////////////////
// const arr1 = [1,2,3]
// const arr2 = [4,5,6]  ///// const arr3 = [1,4,2,5,3,6]
// function interleave (arr1,arr2){
// const result = [] ; 
// arr1.forEach(function(ele,i){
//   result.push(ele,arr2[i])  
// })
// return result
// }

// console.log(interleave(arr1,arr2))


// Create a New Array Without Specific Elements:
// Write a function that removes all occurrences of a specific value from an array using forEach and splice.

////////////////////////////////////////

// function removeEelement (arr,eleToRemove){
//  arr.forEach(function(ele,i){
//     if (ele === eleToRemove){
//         arr.splice(i,1)
//     }
//  })
//  return arr
// }

// const arr = [1,2,30,10,30,20]
// console.log(arr)
// console.log(removeEelement(arr,30))

// Sort an Array in Descending Order:
// Create a function that sorts an array in descending order using reverse and the sort method.
//////////////////////////////////////

// function sortDescending (arr){
//  return arr.sort((a,b)=>b-a)
// }

// const arr = [10,20,200,5,1000]
// console.log(sortDescending(arr)) // [ 1000, 200, 20, 10]

// Bonus Problem for Deeper Practice
// Group Numbers by Even and Odd:
// Use forEach to separate the even and odd numbers from an array into two different arrays.

/////////////////////////////////////////


// function separate (arr){
// let evenNumbers = [] ; 
// let oddNumbers = [] ; 

// arr.forEach(function(ele){
//     if (ele %2 === 0 ){
//         evenNumbers.push(ele)
//     }else {
//         oddNumbers.push(ele)
//     }
// })
// return {evenNumbers,oddNumbers}

// }

// const arr = [1,2,3,5,3,810,11,20,5,9,12]
// console.log(separate(arr))