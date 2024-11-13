////////////// slice :: ///////////////// (copie)

//// slice :: matbadelech el origin array ...
///// slice :: mtehssebech el end number ...
/// slice ::: slice(2) ===> tehseeblek mel index 2 lel lekher ...

// let arr = ["a","b","c","d","e"]

// console.log("before:" , arr)

// console.log("after:" , arr.slice(1,3))
// console.log("before:" , arr)

// console.log(arr[arr.length-1])

// console.log(arr.slice(-1)[0])

// console.log(...arr)     //// spread operator ....

// ********/////////////// splice ///////////////////// ::::
//// splice :: tbadel el origin array ...

/// splice ::: splice(1,3) ===> ta3mel delete lel element fil origin array mel index 2 , 3 number after ...

// let arr = ["a","b","c","d","e"]

//  console.log("before splice : " , arr)
//  arr.splice(1,3) //// remove lel element
// // arr.splice(1,3,10,20,30) /// replace by new element

// console.log("after splice : " , arr)

// arr.splice(2,1)

// console.log(arr)

/////// reverse /////////

// let arr = ["a","b","c","d","e"]

// arr.reverse()

// console.log(arr)

//////// concat /////
// const arr = ["a","b","c","d","e"]
// const arr2 = ["f","j","h"]

// const arr3 = arr.concat(arr2)
// console.log(arr3)

//// const arr3 = ["a","b","c","d","e","f","j","h"]

// const arr3 = [...arr , ...arr2 ]
// console.log( arr3)

//////// join ////////////////   (copie)

// const arr = ["a","b","c","d","e"]

// console.log(arr.join("!!"))

// console.log(arr)

/// push() ; pop () ; shift () ; unshift ; includes ; indexOf ; length ; slice ; splice ; reverse ; concat ; join

//////////////////////// at  //////////////////

// const arr = [23,11,64]

// console.log(arr[arr.length-1])
// console.log(arr.at(-1))

// const country = "tunisia"

// console.log(country.at(3))

///////////////////// for ////////////////////////////

// const numbers = [1,2,365,5,6,8]

// for (let i=0 ; i<numbers.length ; i++){
//   console.log(numbers[i])
// }

// for (let i= numbers.length-1 ; i>=0 ; i--){
//   console.log(numbers[i])
// }

//  for (const ele of numbers) {
//     console.log(ele)
//  }

//////////////// for /////////////////////

// const movements = [200, 450, -400, 1000, -800, 100];

//  for (const movement of movements){
//   if (movement>0){
//     console.log(`you deposited ${movement}`)
//   }
//   else{
//     console.log(`you withdrew ${Math.abs(movement)}`)
//   }
//  }

//////////////////// forEach ///////////////////////

//   movements.forEach(function(ele,index){
//  if (ele>0){
//      console.log(`movement ${index+1} : you deposited ${ele}`)
//    }
//    else{
//      console.log(` movement ${index+1} :   you withdrew ${Math.abs(ele)}`)
//   }

//   });

/// :0 :: function(200)
/// :1 :: function(450)
/// :2 :: function(-400)



/////// break !!!! forEach



  // const names = ["marwa","nessrine","yomna","karim","salma","eya"]

  //  for (const name of names){
  //    if (name === "karim") break ; 
  //    console.log(name) 
  //  }
    

// names.forEach(function(essem){
// if (essem === "yomna") break ; 
// console.log(essem)
// })


/////// function declaration :: 

  // function hello (){
  //   console.log("hello")
  // }

  // hello()


  ///// function expression : 

  // const hello = function (){
  //   console.log("hello")
  // }


  // hello()

  ///// arrow function  :::: 
 
  // const hello = () => console.log("hello arrow")

  

  // hello()

  // const info = namee => console.log(`my name is ${namee} !! `)

  // info("salma")

  // const info = (namee,country) => console.log(`my name is ${namee} im from ${country} !! `)

  // info("salma","tunisia")


   const car = age => {
     if(age>18){
      return "you can drive"
     }
     else {
      return "you cant drive"
     }
   }

   console.log(car(19))


