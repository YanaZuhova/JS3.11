let user = Object();

let user2 = {
    name: "Bob",
    age: 27,
};

console.log(user2);

user2.job = "marksheider";
console.log(user2);

delete user2.age;
console.log(user2);

console.log(user2.name);
console.log(user2["name"]);

let jobName = "job";
console.log(user2[jobName]);

// let a = 5;
// let b =a ;

// console.log(a);
// console.log(b);

// let b = 7;

// console.log(a);
// console.log(b);

let firstUser = {name: "John"};
let secondUser = firstUser;

console.log(firstUser);
console.log(secondUser);

secondUser.name = "Alex";

console.log(firstUser);
console.log(secondUser);

