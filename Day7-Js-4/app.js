// // select by id
// let paragraph = document.getElementById('para');
// // select by class
// let paragraphClass = document.getElementsByClassName('para')
// // select by query selector
// let heading = document.querySelector("h1")
// heading.style.color='red';
// heading.style.backgroundColor='black'
// // set attributes
// let class1 = paragraph.setAttribute('class','paragraph')
// let class2 = paragraph.getAttribute('class')
// let para = document.querySelector("p")
// para.classList.add("para1")
//  let dis= para.getAttribute("class")
//  console.log(dis

//  )
//  // adding new element
//  let add = document.createElement('div')
//  let body = document.querySelector('body')
//  body.appendChild(add)
//  add.innerText='Hi, i am adding by body.'
//  // remove elemetn

//  add.remove()

// paratice question

// let body1 = document.querySelector('body')
// let para1 = document.createElement('p')
// para1.innerText='Hy , i am Red'
// para1.style.color='red';

// body1.appendChild(para1)

// let heading1 = document.createElement('h3')
// heading1.innerText='hi i am blue'
// heading1.style.color='blue'
// body1.appendChild(heading1)

// let addDiv = document.createElement('div')
// let heading2 = document.createElement('h1')
// heading2.innerText='i am inside a div'
// addDiv.appendChild(heading2)
// let alink = document.createElement('a')
// alink.innerText='i am also in div'
// addDiv.appendChild(alink)

// addDiv.style.backgroundColor='pink'
// addDiv.style.border='black'

// body1.appendChild(addDiv)

// let btn = document.querySelector('button')
// btn.onclick = function (){
//     console.log("btn")
// }

// practice question


// let btn = document.querySelector('button')
// btn.addEventListener('click',()=>{
//     let random = getRandom();
//     let h3 = document.querySelector('h3');
//     h3.innerText=random;
//     let div1 = document.querySelector('div');
//     div1.style.backgroundColor= random;
// })
// function getRandom (){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let colors = `rgb(${red},${green},${blue})`;
//     return colors;

// }

// Call Stack
// function hello(){
//     console.log('Inside the Hello Function')
//     console.log('Hello')
// }
// function demo(){
//     console.log('Inside the Demo Function')
//     console.log('Hello')
//     hello()
// }
// console.log('Before Calling Demo Function')
// demo()
// console.log("By!")
// CallBack Hell
//  let h1= document.querySelector('h1')
//  setTimeout(() => {
//     h1.style.color='red'
    
//  },1000);
//  setTimeout(() => {
//     h1.style.color='blue'
    
//  },2000);
//  setTimeout(() => {
//     h1.style.color='black'
    
//  },3000);
// function changeColor(Color,delay){
//     setTimeout(()=>{
//         h1.style.color=Color;
//     },delay)
// }

// changeColor('red',1000)
// changeColor('blue',2000)
// changeColor('black',3000)

// function changeColor(color,delay,nextColorChange){
//     setTimeout(()=>{
//         h1.style.color=color;
//         if(nextColorChange) nextColorChange()
//     },delay)
// }
// changeColor('red',2000,()=>{
//     changeColor('green',2000,()=>{
//         changeColor('yellow',2000)
//     })
// })
// promise in JS
//  function saveToDb (data,success,failure){
//     let interSpeed = Math.floor(Math.random()*6)+1
//     if(interSpeed>4){
//         success()
//     }else{
//         failure()
//     }

//  }
//  saveToDb('pakistan',()=>{
//     console.log('success1');
//     saveToDb('lahore',()=>{
//         console.log('success2')
//         saveToDb('kasur',()=>{
//             console.log('success3')
//         },()=>{
//             console.log('faliure3')
//         })
//     },()=>{
//         console.log('faliure2')
//     })
//  },()=>{
//     console.log('failure1')
//  })

//  function getNum (){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num = Math.floor(Math.random()*6)+1;
//             console.log(num)
//               resolve()
//         },1000)
      
//     })
//  }
//   async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
    
//   }
// fetch api 
 let url = 'https://catfact.ninja/fact'
 fetch(url).then((res)=>{
    return res.json()
 })
 .then((data)=>{
    console.log(data)
     return fetch(url)
 }).then((res)=>{
    return res.json()
 })
 .then((data)=>{
    console.log(data)
 })
 .catch((err)=>{
    console.log(err)
 })




