
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

function t1() {
    let out = document.querySelector(".out-1");
    out.innerHTML = "touch";
}

// ваше событие здесь!!!
document.querySelector(".div-1").addEventListener("touchstart", t1)

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

let counter = 1;

function t2() {
    let out = document.querySelector(".out-2");
    out.innerHTML = counter;
    counter++;
}

// ваше событие здесь!!!
document.querySelector(".div-2").addEventListener("touchstart", t2);


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */

function t3(event) {
    let out = document.querySelector(".out-3");
    out.innerHTML = event.target.innerHTML;
    console.log(event)
}

// ваше событие здесь!!!
document.querySelector(".div-3_1").addEventListener("touchstart", t3);
document.querySelector(".div-3_2").addEventListener("touchstart", t3);


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

function t4() {
    let div = document.querySelector(".div-4");
    // console.log(1);
    div.ontouchstart = () => {
        // console.log(2);
        let out = document.querySelector(".out-4");
        out.innerHTML = "touch";
    }
}

// ваше событие здесь!!!
document.querySelector(".b-4").ontouchstart = t4;


// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5() {
    let div = document.querySelector(".div-4");
    // console.log(3);
    div.ontouchstart = () => {
        // console.log(4);
        return false;
    }
}

// ваше событие здесь!!!
document.querySelector(".b-5").onclick = t5;


// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6() {
    let out = document.querySelector(".out-6");
    out.innerHTML = "touchend";
}

// ваше событие здесь!!!
document.querySelector(".div-4").ontouchend = t6;


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */

function t7(event) {
    event.target.style.backgroundColor = "red";
}

// ваше событие здесь!!!
document.querySelector(".div-7").addEventListener("touchstart", t7);


// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

function t8(event) {
    let a8 = ["red", "green", "blue", "orange", "pink", "yellow"];
    let randomColor = Math.floor(Math.random() * a8.length);

    event.target.style.backgroundColor = a8[randomColor];
}

// ваше событие здесь!!!
document.querySelector(".div-8").addEventListener("touchstart", t8);


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

function t9(event) {
    let out = document.querySelector(".out-9");
    out.innerHTML = event.touches.length;
}

// ваше событие здесь!!!
document.querySelector(".div-9").ontouchstart = t9;


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */

let bW = 75;

function t10(event) {
    event.preventDefault();
    event.target.style.width = bW + "px";
    bW++;
}

// ваше событие здесь!!!
document.querySelector(".div-10").addEventListener("touchmove", t10);


// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */

function t11(event) {
    let out = document.querySelector(".out-11");

    out.innerHTML = event.touches[0].radiusX + " " + event.touches[0].radiusY
}

// ваше событие здесь!!!
document.querySelector(".div-11").ontouchstart = t11;


// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/
let img = document.querySelector(".img-12-max");

let reset = document.querySelector(".reset");
reset.onclick = resetFunction;

const images = document.querySelectorAll('.img-12-min');
let count = 1; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;

function nextFunction() {
    // Удаляем рамку у всех изображений
    images.forEach(element => {
        element.classList.remove("active-img");
    });

    // Прибавляем к счетчику единицу
    count++;  
    
    // Если счетчик больше чем длина массива то обнуляем счетчик  и присваиваем ему единицу
    if (count > images.length) {
        count = 1;
    }

    // Добавляем номер счетчика как номер изображения
    img.src = `img/${count}.png`;

    // Добавляем класс элементу 
    images[count - 1].classList.add("active-img");
}

function prevFunction() {
    // Удаляем рамку у всех изображений
    images.forEach(element => {
        element.classList.remove("active-img");
    });

    // Отнимаем у счетчика единицу
    count--;
    
    // Если счетчик равен нулю, то мы присваиваем счетчику номер количества элементов массива, то есть номер последнего элемента
    if (count == 0) {
        count = images.length;
    }

    // Добавляем номер счетчика как номер изображения
    img.src = `img/${count}.png`;

    // Добавляем класс элементу 
    images[count-1].classList.add("active-img");
}

// ваше событие здесь!!!
function resetFunction() {
    // Удаляем рамку у всех изображений
    images.forEach(element => {
        element.classList.remove("active-img");
    });

    // Обнуляем счетчик и присваиваем ему единицу
    count = 1;

    // Присваиваем номер счетчика как номер картинки
    img.src = `img/${count}.png`;

    // Добавляем класс элементу
    images[count-1].classList.add("active-img");
}