class Calculator {
    constructor() {
        this.a = 0;
        this.b = 0;
    }

    read() {
        this.a = +prompt('Введіть перше значення:', 0);
        this.b = +prompt('Введіть друге значення:', 0);
    }

    sum() {
        return this.a + this.b;
    }

    mul() {
        return this.a * this.b;
    }
}

const calculator = new Calculator();
calculator.read();
alert('Сума: ' + calculator.sum());
alert('Добуток: ' + calculator.mul());
