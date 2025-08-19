// // object Literals
// // used to store keyed collection and complex entities

// const student ={
//     Name:'Mohsin',
//     Age:22,
//     Marks:92,
//     Country:'pakistan'
// }
// // Get Values

// console.log(student.Name)

// // Add Values
// student.City='lahore'

// // Update Values
// student.City='london'
// // Delete Values
// delete student.City;
// // Nested Objects
// const classInfo ={
//     mohsin:{
//         grade:"A",
//         city:'lahore'
//     },
//     usman:{
//         grade:'B',
//         city:'london'
//     },
//     umar:{
//         grade:"A+",
//         city:'karachi'
//     }
// }
// //Arrays of Objects 
// const arrayInfo =[
//     {
//         name:'mohsin',
//         grade:'A',
//         city:'lahore'
//     },
//     {
//         name:'usman',
//         grade:'C',
//         city:'kasur'
//     }
// ]
// console.log("arrays of object")
// console.log(arrayInfo[0].grade)
// // console.log(classInfo.mohsin.city)
// console.log(classInfo)
// console.log(student)

// Math Object

// absolute math
// console.log(Math.abs(-80))
// // power funtion
// console.log(Math.pow(3,5))
// // Floor Function
// console.log(Math.floor(4.8))
// // ceiling Funtion 
// console.log(Math.ceil(5.1))

// // Random Number 

// let Num = Math.floor(Math.random()*5)+1;
// console.log(Num)

// let num = Math.floor(Math.random() *50 )+1;
// if(num >=10){
//     console.log(`please try again no greater than this `)
// }else if( num <= 30){
//     console.log("please try agian")
// }else if( num >=30 || num <=40){
//     console.log("congrats")
// }else{
//     console.log("error")
// }
// Functions in javascript
// piece of code that reuseable any where.

function hello(){
    console.log("hello world")
}
// hello()
 
// practice question 

function randomNumber(){
    let Num = Math.floor(Math.random()*6)+1;
    console.log(Num)
}
randomNumber()
// function with arguments that calculate the average of three numbers
function average(a,b,c){
    let sum = (a+b+c)/3;
    console.log(sum)
}
average(3,5,4)
// function that print table of any number
function table(n){
    for(let i=1;i<=10;i++){
        console.log(`${i} * ${n} = ${i*n}`)
    }
}
table(5)
// function that sum from 1 to n
 function sum(n){
    let sum = 0;
    for(let i=1;i<=n;i++){
        sum=sum+i;
    }
    return sum;
 }
 let sum1 = sum(6)
 
setInterval(()=>{
    console.log("hello pakistan")
},3000)
setTimeout(() => {
    console.log("mohsin")
}, 3000);