"use strict";
// 1

// function Talabalar(name1, age1, name2, age2, name3, age3) {
//     this.students = {
//         [name1]: age1,
//         [name2]: age2,
//         [name3]: age3,
//     };
// }

// const studentInfo = new Talabalar("Anvar", 18, "Jamila", 20, "Mirza", 19);

// let keys = Object.keys(studentInfo.students);
// let numberOfStudents = keys.length;

// console.log("Number of students: " + numberOfStudents);

// SECOND METHOD

// let talabalar = { Anvar: 18, Jamila: 20, Mirza: 19 };

// let keys = Object.keys(talabalar);

// let numberOfStudents = keys.length;

// console.log(numberOfStudents);

// 2

// function Products(fruit1, price1, fruit2, price2, fruit3, price3) {
//     this.product = {
//         [fruit1]: price1,
//         [fruit2]: price2,
//         [fruit3]: price3,
//     };
// }

// Products.prototype.totalPrice = function() {
//     return Object.values(this.product).reduce((sum, price) => sum + price, 0);
// };

// const productsInfo = new Products("Olma", 1000, "Banana", 8000, "Kiwi", 6000);
// console.log("Total price: " + productsInfo.totalPrice());

// 3

// function Timetable(weekdays1, subjuct1, weekdays2, subjuct2, weekdays3, subjuct3) {
//     this.subjects = {
//         [weekdays1]: subjuct1,
//         [weekdays2]: subjuct2,
//         [weekdays3]: subjuct3,
//     };
// }

// const tableInfo = new Timetable("dushanbe", "matematika", "seshanbe", "fizika", "chorshanbe", "informatika");

// let weekdays = Object.keys(tableInfo.subjects);

// console.log("weekdays: " + weekdays.join(", "));

// 4

// const person = {
//     name: "shohjahon",
//     age: "18"
// };
// object.freeze(person);
// person.name = "Abduvohid";
// console.log(person.name);

// 5

// function Task(task1, done1, task2, done2, task3, done3) {
//     this.subjects = {
//         [task1]: done1,
//         [task2]: done2,
//         [task3]: done3,
//     };
// }

// Task.prototype.totalDone = function() {
//     let trueCount = Object.values(this.subjects).filter(value => value === true).length;
//     let falseCount = Object.values(this.subjects).filter(value => value === false).length;

//     return {
//         totalTrue: trueCount,
//         totalFalse: falseCount,
//     };
// };

// const subjectsInfo = new Task("uy_ishi:", true, "dastur_ishi:", false, "sport:", true);
// const totals = subjectsInfo.totalDone();

// console.log("Total done taks: " + totals.totalTrue);
// console.log("Total not done taks: " + totals.totalFalse);

// MEDIUM SECTION

// 1

// function Product(item1, price1, item2, price2, item3, price3) {
//     this.pro = {
//         [item1]: price1,
//         [item2]: price2,
//         [item3]: price3,
//     };
// }

// Product.prototype.higherPrice = function() {
//     const productEntries = Object.entries(this.pro);
//     const highValueProducts = productEntries.filter(([item, price]) => price > 3000);

//     return Object.fromEntries(highValueProducts);
// };

// const productsInfo = new Product("Olma", 2000, "Banana", 4000, "Cherry", 1000);
// const highValueProducts = productsInfo.higherPrice();

// console.log("High value products:", highValueProducts);

// 2

// function School(name1, num1, name2, num2, name3, num3) {
//     this.detail = {
//         [name1]: num1,
//         [name2]: num2,
//         [name3]: num3,
//     };
// }

// School.prototype.trueValues = function() {
//     return Object.values(this.detail).filter(value => value > 0);
// };

// const schoolInfo = new School("Ahmad", 15, "Murod", -3, "Shox", 18);
// const validValues = schoolInfo.trueValues();

// console.log("Valid values: ", validValues);

// 3

// const bankAccount = {
//     Balance: 45000,
//     Password: 1953
// };
// Object.defineProperty(bankAccount, "Password", {
//     writable: false,
// });

// bankAccount.Password = " 0000";
// console.log(bankAccount.Password);
// console.log("You cannot change the pin" + bankAccount.Password);

// 4

// function personDetail(name, surname) {
//     this.name = name;
//     this.surname = surname;
//     this.fullName = function () {
//         return "Info: " + this.name + " " + this.surname ;
//     };
// }
// const PersonalInfo = new personDetail("Shohjahon", "Niyazov");
// console.log(PersonalInfo.fullName());

// 5

// const numbers = {
//     a: 5,
//     b: 10,
//     c: 15
// };
// function addNumbers() {
//     return this.a + this.b + this.c;
// }
// const result = addNumbers.call(numbers);
// console.log("Add: ", result);

// 6 

// function greet() {
//     return `Price: ${this.name} - ${this.price}`;
// }

// const products = [
//     { name: "apple", price: 3000 },
//     { name: "banana", price: 5000 }
// ];

// const greetApple = greet.bind(products[0]);

// const greetBanana = greet.bind(products[1]);

// const selectedProductGreeting = greetApple();
// console.log(selectedProductGreeting); 

// 7

// function sum(a, b, c) {
//     return a + b + c;
// }
// const numbers = [20, 30, 10];
// const result = sum.apply(null, numbers);
// console.log(result);


// 8 

// function ProductDetail(apple, price1, banana, price2, cherry, price3) {
//     this.apple = apple;
//     this.price1 = price1;
//     this.banana = banana;
//     this.price2 = price2
//     this.cherry = cherry;
//     this.price3 = price3;
//     this.income = function () {
//         return + this.price1 + this.price2 + this.price3;
//     };
// }
// const prices = [20, 50, 40];

// const [price1, price2, price3] = prices;

// const productDetail = new ProductDetail("apple", price1, "banana", price2, "cherry", price3);

// console.log("Total Income: $" + productDetail.income());

// 9 

// const classRoom = {
//     Students: 25,
//     Teacher: 1
// };
// Object.seal(classRoom);
// classRoom.Students = 30;
// classRoom.Teacher = 2;
// console.log(classRoom);


// 10 

// function introduce() {
//     return ` Hi, ${this.name}`;
// }

// const person2 = {
//     name: "Shohjahon"
// };
// const introduceBob = introduce.bind(person2, "Hi", "!");

// console.log(introduceBob()); 

// HARDER SECTION

// 1 

// function carDetails(name) {
//     this.name = name;
//     this.gapir = function () {
//         return "Person: " + this.name;
//     }
// }
// const detail = new  carDetails("Shohjahon");
// console.log(detail.gapir());


// 2

// let talabalar = { Ahmad: {}, Laylo: {} };

// Object.defineProperty(talabalar.Ahmad, 'congratulations', {
//     value: "Congratulations, Ahmad!",
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// Object.defineProperty(talabalar.Laylo, 'congratulations', {
//     value: "Congratulations, Laylo!",
//     writable: true,
//     enumerable: true,
//     configurable: true
// });

// console.log(talabalar);

// console.log(talabalar.Ahmad.congratulations);
// console.log(talabalar.Laylo.congratulations);

// 3 

// Array.prototype.ortacha = function() {
//     const sum = this.reduce((acc, curr) => acc + curr, 0);
//     return sum / this.length;
// };

// let ballar = [90, 80, 70];

// let average = ballar.ortacha();

// console.log(average); 