
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. Во всех последующих задачах - работаем с латиницей и цифрами.*/

function t1(event) {
    let out = document.querySelector(".out-1");
    // let input = document.querySelector(".i-1");

    out.innerHTML = event.key;
    return event.key;
}

// ваше событие здесь!!!
document.querySelector(".i-1").onkeypress = t1;


// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */

function t2(event) {
    let out = document.querySelector(".out-2");

    out.innerHTML = event.charCode;
    return event.charCode;
}

// ваше событие здесь!!!
document.querySelector(".i-2").onkeypress = t2;


// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false если цифра. Для определения - используйте код клавиши. */

let w3 = 75;

function t3(event) {
    let out = document.querySelector(".out-3");

    if (event.charCode >= 48 && event.charCode <= 57) {
        out.innerHTML = false;
    } else {
        out.innerHTML = true;
    }

    console.log(event)
}

// ваше событие здесь!!!
document.querySelector(".i-3").onkeypress = t3;


// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. ввели ab4Bci в out получаем ab4bci. */

function t4(event) {
    let out = document.querySelector(".out-4");

    // if (event.charCode >= 65 && event.charCode <= 90) {
    //     // console.log(event.key = event.charCode + 32)
    //     // out.innerHTML = event.charCode + 32;
    // } else {
    //     // console.log(event.key = event.charCode)
    //     out.innerHTML = event.key
    // }

    if (event.shiftKey) {
        out.innerHTML += event.key.toLowerCase();
    } else {
        out.innerHTML += event.key;
    }
    console.log(event);

    // a - 97 A - 65
    // z - 122 Z - 90
    // key - 32
}

// ваше событие здесь!!!
document.querySelector(".i-4").onkeypress = t4;


// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. Т.е. пользователь ввел AbCd и функция выведет ABCD. */

function t5(event) {
    let out = document.querySelector(".out-5");
    out.innerHTML += event.key.toUpperCase();
}

// ваше событие здесь!!!
document.querySelector(".i-5").onkeypress = t5;


// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в нижнем регистре.  */

function t6(event) {
    let input = document.querySelector(".i-6");
    input.value = input.value.toLowerCase();
}

// ваше событие здесь!!!
document.querySelector(".i-6").onkeydown = t6;


// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный символ из массива a7 при каждом вводе символа. */

const a7 = [];
function t7(event) {
    let out = document.querySelector(".out-7");

    let randElem = Math.round(Math.random() * a7.length);
    a7.push(event.key);

    out.innerHTML = a7[randElem];
}

// ваше событие здесь!!!
document.querySelector(".i-7").onkeypress = t7;


// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый в input текст, но заменяет i на 1, o на 0, l на 7. */

function t8(event) {
    let out = document.querySelector(".out-8");

    let obj = {
        "i": "1",
        "o": "0",
        "l": "7",
    }

    if (event.key == "i") {
        out.innerHTML += obj["i"];
        return true;
    } else if (event.key == "o") {
        out.innerHTML += obj["o"];
        return true;
    } else if (event.key == "l") {
        out.innerHTML += obj["l"];
        return true;
    }

    out.innerHTML += event.key;
}

// ваше событие здесь!!!
document.querySelector(".i-8").onkeypress = t8;


// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */

let count = 0;

function t9(event) {
    let out = document.querySelector(".out-9");

    if (event.key == "ArrowDown") {
        count++
        out.innerHTML = count;
    }
}

// ваше событие здесь!!!
document.querySelector(".i-9").onkeydown = t9;


// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту изображения. Одно нажатие клавиши - 1px. */

let wis = 64;
let his = 64;

function t10(event) {
    let image = document.querySelector(".div-10 > img");

    if (event.key == "ArrowLeft" || event.key == "ArrowRight") {
        image.style.width = wis + "px";
        wis++;
    } else if (event.key == "ArrowDown" || event.key == "ArrowUp") {
        image.style.height = his + "px";
        his++;
    }
}

// ваше событие здесь!!!
document.querySelector(".i-10").onkeydown = t10;


// Task 11 ============================================
/*  Проект. 
1. Выполните в html верстку клавиш клавиатуры. Сверстайте – блок цифровых клавиш от 1 до 0. И ряд клавиш q – p. Добавьте клавишу левый shift, левый  alt, левый ctrl,  пробел, enter.
2. Добавьте на input .i-11 событие onkeypress или onkeyup или onkeydown ( по вашему выбору). Когда событие происходит ( ввод символа в input) необходимо подсветить ( добавить класс active) клавише с таким символом. Со всех остальных клавиш – удалить класс active.
3. Если вводится следующий символ – повторить удаление active и подсветить клавишу с введенным символом.
4. Ограничения проекта – тестируются только указанные клавиши в латинской раскладке. Комбинации клавиш не тестируются. Т.е. нажиматься shift+A, ctrl+shift – не будут. Все символы вводятся в нижнем регистре.
*/

function t11() {

}

// ваше событие здесь!!!

