let std={
    name:"karthik",
    age:34,
    grade:"a",
    city:"Nandyal",
    country:"India",
    planet:"Earth"
}


let {name,age,...otherDetails}=std;

console.log("Name:",name)
console.log("otherDetails",otherDetails)


function sayHello(){
    console.log("hello")
}

sayHello()


// This works! (Hoisting)
greet();  // Hello!

function greet() {
  console.log("Hello!");
}


let sayHelloa = function() {
  console.log("Hello World!");
};

sayHelloa(); // Call cheyyadam

