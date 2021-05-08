class Goods {
    constructor(name, amount, image, count, element) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
        this.element = element;
    }

    draw() {
        let el = document.querySelector(this.element);
        el.innerHTML = `<div><img src="img/${this.image}.png"> <p>${this.name}</p> <p>${this.count}</p></div>`;
    }
}

let goods = new Goods();
console.log(goods);

let goods2 = new Goods("Apple", "200T", 1, "2000", ".out-4");
console.log(goods2);
goods2.draw();


