class Goods2 extends Goods {
    constructor(name, amount, image, count, element, sale) {
        super(name, amount, image, count, element);
        this.sale = sale;
    }

    draw() {
        let el = document.querySelector(this.element);
        el.innerHTML = `<div><img src="img/${this.image}.png"> <p>${this.name}</p> <p>${this.count}</p> <p>Sale - ${this.sale}</p></div>`;
    }
}

let goods3 = new Goods2("Juse", "500T", 2, "100", ".out-6", true);
goods3.draw();
console.log(goods3);