let fibo = [1, 1];
for (let i = 1; i < 49; ++i) {
    fibo.push(fibo[i] + fibo[i - 1]);
}
console.log(fibo);


for (;Math.random() >= 0.1;) {
   console.log("попробуй еще"); 
}


let i = 15;
for (;i>0;) {
    console.log("i = " + i--);
}


let fruits = ["яблоко", "банан", "ананас"];
console.log("Сегодня я ел: ");
for (let fruit of fruits) {
    console.log(fruit);
}

let rat = ["Катя", "Маша", "Вася", "Петя"];
console.log("Рейтинг");
for (let i in rat) {
    console.log(`${parseInt(i) + 1} место: ${rat[i]}`);
}

let tea = 200;

console.log("Вы налили себе" + tea + " мл чая");

while (tea>0) {
    tea -= 10;
    console.log("В чашке осталось" + tea + " мл чая");
}
console.log("Чай выпит");


do {
    console.log("нажимаем на курок");
} while (Math.random() > 0.2);
console.log("похоже, не повезло");