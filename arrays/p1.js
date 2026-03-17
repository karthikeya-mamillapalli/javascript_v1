const salad = ["potato", "lime", "litchi"];

const anotherSalad = new Array("potato", "lime", "litchi");
console.log(anotherSalad);
console.log(salad === anotherSalad);
const two = new Array(1, 7);
console.log(two);

let ret = salad.push("groundnut");
console.log(ret);
console.log(salad);

let ref = salad.unshift("peanut");

console.log(ref);

console.log(salad);

// salad.pop();
// console.log(salad);
// salad.shift();
// console.log(salad);

const saladCopy = salad.slice();
console.log(saladCopy);

//how to check if it is arrray or not

const tr = Array.isArray(["apple", "mam", "litchi"]);
console.log(tr);
const tr1 = Array.isArray("tomato");
console.log(tr1);
const tr2 = Array.isArray({ tomato: "tom" });
console.log(tr2);

const nested = [1, 2, [1, 2, 3, 4, [6, 9]]];
console.log(nested);

const [tom, mash, ...rest] = ["tomato", "mushroom", "mango", "pine", "potato"];
console.log(tom);
console.log(mash);
console.log(rest);

const mySla = ["tomato", "mushroom", "mango", "pine", "potato"];
const mySlacopy = [...mySla];
console.log(mySlacopy);

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const mer = num1.concat(num2);
console.log(mer);

const num4 = ["aman", "ads"];
const num5 = ["abhay"];
const nu6 = num5.concat(num4);
console.log(nu6);

const emotions = ["happy", "sad0", "angry"];
const joined = emotions.join(",");
console.log(joined);

const emo = [];
const joy = emo.join();
console.log(`"${joy}"`);

const colors = ["red", "green", "pink"];
const mutates = colors.fill("pink");
console.log(mutates);

const mySlaaa = [
  "tomato",
  "mushroom",
  "mango",
  "pine",
  "potato",
  "jam",
  "ram",
  "vam",
  "ram",
];
const mychanged = mySlaaa.fill("sapota", 1, 2);
console.log(mychanged);

let a = {};
let b = { key: "b" };
console.log(b.key);
let c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]);

const names = ["macha", "agipetta", "tom", "ram"];

console.log(names.includes("Tom"));
console.log(names.includes("mach"));

const namw = ["alex", "bob", "vara", "alex"];

console.log(namw.indexOf("alex"));

console.log(namw.indexOf("Alex"));

console.log(namw.lastIndexOf("alex"));

const toBe = ["tom", "ram", "shuym"];
console.log(toBe.splice(1, 0, "john", "bob"));
console.log(toBe);

const copywi = [1, 2, 3, 4, 5, 6, 7];
copywi.copyWithin(0, 4);
console.log(copywi);

const fla = [1, 2, [1, 34, 4]];
console.log(fla.flat());
const fla3 = [1, 2, [2, [1, 34, [4, 5]]]];

console.log(fla3.flat(3));
console.log(fla3.flat(Infinity));
console.log("*******************");

/*
const group = [
  { name: "karthik", dept: "hr", empid: 43 },
  { name: "karan", dept: "eng", empid: 44 },
  { name: "kiki", dept: "mac", empid: 45 },
];

const original = Object.groupBy(group, ({ dept }) => dept);
console.log(original); */

const numbersArray = [1, 2, 3, 4, 5, 6];

// const revers = numbersArray.reverse();
// console.log(revers);
// console.log(numbersArray);

const revrseto = numbersArray.toReversed();
console.log(revrseto);
console.log(numbersArray);

const months = ["mar", "jan", "feb", "dec"];
const sortedMonths = months.toSorted();

console.log(sortedMonths);
console.log(months);

const withMethod = [1, 2, 3, 4];
const newWith = withMethod.with(-1, 0);
console.log(newWith);
console.log(withMethod);

let myArray = [2, 4, 5];
myArray[50] = 6;
console.log(myArray);
console.log(myArray.length);

console.log("//////////////////////////////////////////");
var ab = 6;
var bc = 6;
var ab = 5;
console.log(ab);
for (var j = ab; j > 0; j--) {
  console.log(bc);
  bc = bc - 3;
}

console.log([] + []);
//above returns strings

/////Arraay fromasync

/*const retur = Array.fromAsync({
  0: Promise.resolve("karthi"),
  1: Promise.resolve("google"),
  2: Promise.resolve("apple"),
  length: 3,
}).then((value) => console.log(value));

console.log(ret); */

const a1 = new Array(2, 3, 4, 5);

const a2 = [6, 7, 8];

const outpu = Array.of(2, true, "test", a1, [1, 2, 3], a2);

console.log(outpu);

let customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Karthi",
    l_name: "Kumar",
    gender: "M",
    married: false,
    age: 25,
    expense: 300,
    purchased: ["Laptop", "Phone"],
  },
  {
    id: 4,
    f_name: "Priya",
    l_name: "Sharma",
    gender: "F",
    married: true,
    age: 29,
    expense: 700,
    purchased: ["Dress", "Bag", "Shoes"],
  },
  {
    id: 5,
    f_name: "Sneha",
    l_name: "Raj",
    gender: "F",
    married: false,
    age: 22,
    expense: 450,
    purchased: ["Book", "Pen"],
  },
];

const above30 = customers.filter((random) => random.age > 30, {});
console.log(above30);

const fullName = customers.map((customer) => {
  let title = "";
  if (customer.gender === "M") {
    title = "Mr";
  } else if (customer.gender === "F" && customer.married) {
    title = "Mrs";
  } else title = "Miss";
  customer["full_name"] = `${title} ${customer.f_name} ${customer.l_name}`;
  return customer;
});
console.table(fullName);

const avgAges =
  customers.reduce((total, customer) => {
    return total + customer.age;
  }, 0) / customers.length;

console.log(avgAges);
