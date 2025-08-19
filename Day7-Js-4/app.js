// select by id
let paragraph = document.getElementById('para');
// select by class
let paragraphClass = document.getElementsByClassName('para')
// select by query selector
let heading = document.querySelector("h1")
heading.style.color='red';
heading.style.backgroundColor='black'
// set attributes
let class1 = paragraph.setAttribute('class','paragraph')
let class2 = paragraph.getAttribute('class')
let para = document.querySelector("p")
para.classList.add("para1")
 let dis= para.getAttribute("class")
 console.log(dis

 )
 // adding new element
 let add = document.createElement('div')
 let body = document.querySelector('body')
 body.appendChild(add)
 add.innerText='Hi, i am adding by body.'