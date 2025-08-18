/*
what is loops?
loop are iterative piece of code that execute for certain  conditions 
type of loops
for loop
for(initialisation;condition;updation){
do something
}
while loop
while(condition){
 do something
}
do while loop
*/ 
// for loop
//print number from 1 to 5.
// for(let i=1;i<=5;i++){
//     console.log(i);
// }
//print odd number from 1 to 15.
// for(let i =1;i<=15 ; i++){
//     if(i%2==1){
//         console.log(i)
//     }
// } 
//print even number from 2 to 10
// for(let i=2;i<=10;i=i+2){
//     console.log(i)
// }
//multiplication table of 5
// for(let i=1;i<=10;i++){
//     console.log(i*5)
// }
// let n = prompt("Enter table no")
// n = Number(n)
// for(let i=n;i<=n*10;i=i+n){
//     console.log(i)

// }
// let n = 1;
// while(n<=10){
//     console.log(n);
//     n++;
// }
// let fruits = [ 'mango','apple','orange','pineapple']
// for(let i=0;i<fruits.length;i++){
//     console.log(i,fruits[i])
// }
let todo=[];
let req= prompt("What You Want")
while(true){
    if(req == 'quit'){
        console.log("quiting the app")
        break;
    }
    if(req =='list'){
        console.log("---------------")

        for (const task of todo) {
            console.log(task)
            
        }
        console.log("------------------")
    }else if(req =='add'){
        let task = prompt("What task U want to add");
        todo.push(task);
        console.log("task added")
    }else if(req =='delete')
    {
        let task = prompt("which index task u want to delete");
        todo.splice(task,1)
        console.log("task deleted")
    }else{
        console.log("wrong request")
    }
    req=prompt("what u want");

}