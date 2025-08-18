// object Literals
// used to store keyed collection and complex entities

const student ={
    Name:'Mohsin',
    Age:22,
    Marks:92,
    Country:'pakistan'
}
// Get Values

console.log(student.Name)

// Add Values
student.City='lahore'

// Update Values
student.City='london'
// Delete Values
delete student.City;
// Nested Objects
const classInfo ={
    mohsin:{
        grade:"A",
        city:'lahore'
    },
    usman:{
        grade:'B',
        city:'london'
    },
    umar:{
        grade:"A+",
        city:'karachi'
    }
}
//Arrays of Objects 
const arrayInfo =[
    {
        name:'mohsin',
        grade:'A',
        city:'lahore'
    },
    {
        name:'usman',
        grade:'C',
        city:'kasur'
    }
]
console.log("arrays of object")
console.log(arrayInfo[0].grade)
// console.log(classInfo.mohsin.city)
console.log(classInfo)
console.log(student)