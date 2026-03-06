function test() {
  x = y + 10;
}

var y = 10;
test();
console.log(x, y);

const salaries = [25000, 55000, 80000, 42000, 90000];
for (let i = 0; i < salaries.length; i++) {
  if (salaries[i] > 50000) {
    console.log(salaries[i]);
  }
}

function developerInfo(name, experience) {
  // console.log(
  //   "developer Name is " + " " + name,
  //   "developer experience  is " + " " + experience,
  // );
  console.log(`${name} has ${experience} years of experience`);
}

developerInfo("karthi", 6);

function calculateHike(salary) {
  let fullsalaryHike = salary * 0.1;
  return fullsalaryHike;
}
console.log(calculateHike(50000));

const favourites = ["aman", "arnab", "akhil"];

console.log(favourites[0]);
console.log(favourites.length);
favourites.push("karthik");
console.log(favourites);
console.log(favourites.length);

const students = [
  { name: "Karthi", marks: 85 },
  { name: "Ravi", marks: 45 },
  { name: "Kumar", marks: 72 },
  { name: "Priya", marks: 91 },
];

for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
  if (students[i].marks > 60) {
    console.log(students[i].name);
  }
}

let highest = students[0].marks;
console.log(highest);
let topstudent = students[0].name;
console.log(topstudent);

for (i = 0; i < students.length; i++) {
  if (students[i].marks > highest) {
    highest = students[i].marks;
    topstudent = students[i].name;
  }
}
console.log(topstudent + " has highest marks: " + highest);

const developer = {
  name: "karthik",
  age: 12,
  gender: "male",
  city: "lucknow",
  skills: ["javascript", "angular", "React"],
};

console.log(developer.name);
console.log(developer.skills);
console.log(developer.skills[0]);

function developerSummary(dev) {
  console.log(`${dev.name} is from ${dev.city}`);

  for (let i = 0; i < dev.skills.length; i++) {
    console.log(dev.skills[i]);
  }
}
developerSummary(developer);

const developers = [
  { name: "Karthi", salary: 80000, skills: ["JS", "Angular"] },
  { name: "Ravi", salary: 45000, skills: ["Java", "Spring"] },
  { name: "Priya", salary: 90000, skills: ["React", "Node"] },
  { name: "Kumar", salary: 35000, skills: ["PHP", "MySQL"] },
];
const devSalaries = developers.filter((sal) => sal.salary > 50000);
console.log(devSalaries);
const names = developers.map((dev) => dev.name);
console.log(names);

const totalSalary = developers.reduce(
  (sum, current) => sum + current.salary,
  0,
);
console.log(totalSalary);
