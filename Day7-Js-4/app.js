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

let body1 = document.querySelector('body')
let para1 = document.createElement('p')
para1.innerText='Hy , i am Red'
para1.style.color='red';

body1.appendChild(para1)

let heading1 = document.createElement('h3')
heading1.innerText='hi i am blue'
heading1.style.color='blue'
body1.appendChild(heading1)

let addDiv = document.createElement('div')
let heading2 = document.createElement('h1')
heading2.innerText='i am inside a div'
addDiv.appendChild(heading2)
let alink = document.createElement('a')
alink.innerText='i am also in div'
addDiv.appendChild(alink)

addDiv.style.backgroundColor='pink'
addDiv.style.border='black'

body1.appendChild(addDiv)