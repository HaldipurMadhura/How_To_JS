//console.log("hello!!!")

//--------------Assignment 1 ------------

let fruits =["apple","banana","orange"]

let newFruits = fruits.splice(0, 1);

fruits.push("grape")

fruits.splice(1,1,"Pear")

console.log(fruits) 

//OUTPUT OF ASSIGNMENT 1 :['banana', 'Pear', 'grape'] 0:'banana' 1:'Pear' 2:'grape'

//-------------------Assignment 2 -------------

let person = {
    name: "John",
    age: "30",
    city: "New York",
}
 delete person.age;
 person.job = "Engineer"
 person.city = "San Francisco"
 console.log(person)

 //OUTPUT OF ASSIGNMENT 2 :{name: 'John', city: 'San Francisco', job: 'Engineer'}

 //-------------------Assignment 3--------------

 let cars =[]

 cars.push(
    {make:"Toyota",model:"Camry",year:2018},
    {make:"Toyota",model:"Camry",year:2018},
    {make:"Toyota",model:"Camry",year:2018}
 )

 cars.splice(0,1)
 cars.push({make:"Honda",model:"Civic",year:2020})

 cars[1].model="Accord"

 console.log(cars)

 //OUTPUT OF ASSIGNMENT 3 : (3) [{…}, {…}, {…}]   0:{make: 'Toyota', model: 'Camry', year: 2018} 1:{make: 'Toyota', model: 'Accord', year: 2018} 2:{make: 'Honda', model: 'Civic', year: 2020}
