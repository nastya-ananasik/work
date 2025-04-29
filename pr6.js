// const sum = 20000;
// const month = 12;
// const p = 1000;
//
// const credit = (sum, date, p) => {
//     return sum + p * date;
// };
//
// console.log(credit(sum, month, p));


// const credit = {
//     sum: 20000,
//     month: 12,
//     p: 1000,
//     result() {
//         return this.sum + this.p * this.month;
//     },
// };
//
// console.log(credit.result());


// class Bank {
//     static type = "Privat";
//
//     constructor(options) {
//         this.sum = options.sum;
//         this.month = options.month;
//         this.p = options.p;
//     }
//
//     credit() {
//         console.log(this.sum + this.p * this.month);
//     }
// }

// const userBank = new Bank({
//     sum: 20000,
//     month: 12,
//     p: 1000,
// });
//
// userBank.credit();
// console.log(Bank.type);

// class NewBank extends Bank {
//     constructor(options) {
//         super(options);
//         this.card = options.card;
//     }
//
//     credit() {
//         super.credit();
//         console.log("I'm Aval")
//     }
// }
//
// const aval = new NewBank({
//     sum: 20000,
//     month: 12,
//     p: 1000,
//     card: true,
// });
//
// console.log(aval.card);


// class User {
//     constructor(props) {
//         this.name = props.name;
//     }
//
//     firstName = "";
//     lastName = "";
//     age = "";
//     sity = "";
//
//     set name(newName) {
//         const nameRow = newName.split(" ");
//         this.firstName = nameRow[0];
//         this.lastName = nameRow[1];
//     }
//
//     get name() {
//         return `First name: ${this.firstName}, last name: ${this.lastName}`;
//     }
// }
//
// const Kris = new User({
//     name: "Kristina Malitowska",
// });
//
// const Dasha = new User({
//     name: "Dasha Happy",
// });
//
// console.log(Dasha);


// const a = [1, 2, 3];
// console.log(a);


// const a = {
//     x: 1,
//     y: 2,
// };
// const b = Object.create(a);
// console.log(b);
// console.log(b.hasOwnProperty("x"));


// const Manager = function (name, sales) {
//     this.name = name;
//     this.sales = sales;
// };
//
// const ann = new Manager("Anna", 5);
// const ivan  = new Manager("Ivan ", 10);
//
// console.log(ann);
//
// Manager.prototype.sale = function () {
//     this.sales += 1;
// };
//
// console.log(ann.sales);
// ann.sale();
// console.log(ann.sales);
// console.dir(Manager);


// class CoffeeMachine {
//     water = 0;
//     #waterLimit = 500;
//
//     constructor(power) {
//         this.power = power;
//     }
//
//     set waterAmount(value) {
//         if (value < 0)
//             value = 0;
//         this.water = value;
//     }
// }
//
// let coffeeMachine = new CoffeeMachine(100);
//
// console.log(coffeeMachine);
//
// coffeeMachine.waterAmount = -20;
// console.log(coffeeMachine);
