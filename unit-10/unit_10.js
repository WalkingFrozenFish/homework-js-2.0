// Task 1
//Создайте массив ar1 содержащий строки, числа, булевы значения. Выведите его в .out-1. Вывод - по нажатию кнопки b-1

// let ar1 = // переменную обьявляем здесь!!!!
let ar1 = ["Hello", "World", 1, 42, true];

function f1() {
    //ваш_элемент.innerHTML = ar1; // да так можно выводить!!!!
    let out = document.querySelector(".out-1");
    out.innerHTML = ar1;
}

document.querySelector('.b-1').onclick = f1;

// Task 2
//Создайте массив ar2 содержащий строки, числа, булевы значения. Выведите его в div.out-2. Используйте шаблон вывода из кода в JS. Вывод - по нажатию кнопки b-2

// let ar2 = // переменную обьявляем здесь!!!!
let ar2 = ["Hello", "World", 1, 42, true];

function f2() {
    let out = document.querySelector(".out-2");
    let res = "";

    for (let i = 0; i < ar2.length; i++) {
        res += ar2[i] + " ";
    }

    out.innerHTML = res;

    // let out = '';
    // for (let i = 0; i < ar2.length; i++) {
    //     out +=arr2[i]+' ';
    // }
    // document.querySelector('.out-2').innerHTML = out;
}

document.querySelector('.b-2').onclick = f2;

// Task 3
//Создайте массив ar3, заполните его любыми значениями. Выведите длину массива.
// Вывод - по нажатию кнопки b-3
// Вывод в out-3
// Тест допустим массив [1,2,3] вывод - 3

// let ar3 =  // переменную обьявляем здесь!!!!
let ar3 = ["Hello", "World", 1, 42];
function f3() {
    let out = document.querySelector(".out-3");
    out.textContent = ar3.length;
}

document.querySelector('.b-3').onclick = f3;

// Task 4
//Создайте массив ar4. Выведите нулевой, третий, восьмой элемент массива в out-4 через пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-4
// Вывод в out-4
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 1 4 9

// let ar4 =  // переменную обьявляем эту здесь!!!!
let ar4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = "";

function f4() {
    let out = document.querySelector(".out-4");
    for (let i = 0; i < ar4.length; i++) {
        if (i == 0 || i == 3 || i == 8) {
            result += ar4[i] + " ";
        }
    }

    out.textContent = result;
}

document.querySelector('.b-4').onclick = f4;

// Task 5
//Создайте массив ar5 длина которого больше 5. Выведите сумму нулевого, второго и третьего элементов массива (нуль, второй - и третий это индексы 0, 2, 3)
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-5
// Вывод в out-5
// Тест допустим массив [1,2,3,4,5,6,7,8,9,10] вывод: 8

// let ar5 =
let ar5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let res5 = 0;

function f5() {
    let out = document.querySelector(".out-5");
    for (let i = 0; i < ar5.length; i++) {
        if (i == 0 || i == 2 || i == 3) {
            res5 += ar5[i];
        }
    }
    out.textContent = res5;
}

document.querySelector('.b-5').onclick = f5;

// Task 6
//Создайте массив ar6, который содержит ваше имя, знак зодиака, день рождения и месяц рождения. Выведите массив на страницу в div-6. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-6
// Вывод в out-6

// let ar6 =
let ar6 = ["Oleg", "Leo", "17.08.1997", "August"];

function f6() {
    let out = document.querySelector(".out-6");
    let res = "";
    for (let i = 0; i < ar6.length; i++) {
        res += ar6[i] + " ";
    }
    out.textContent = res;
}

document.querySelector('.b-6').onclick = f6;

// Task 7
// Добавьте в массив ar7  значения 'vietnam' с индексом 7 , 'turkey' с индексом 6, 'italy' с индексом 5. Добавление элементов сделайте в f7. Выведите массив на страницу в .out-7. Разделитель - пробел. Обращаю ваше внимание! Это программирование. Поэтому - никаких больших букв и тому подобного!!!!
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-7
// Вывод в out-7

let ar7 = ['china', 'india', 'brazil', 'japan', 'egypt'];

function f7() {
    ar7[5] = "italy";
    ar7[6] = "turkey";
    ar7[7] = "vietnam";
    result = "";

    let out = document.querySelector(".out-7");
    for (let i = 0; i < ar7.length; i++) {
        result += ar7[i] + " ";
    }

    out.textContent = result;
}

document.querySelector('.b-7').onclick = f7;

// Task 8
// Добавьте в массив ar8 третий (индекс 3) элемент равный 3.14, 4 (индекс 4) элемент равный 17, 6 элемент (индекс 6) равный 5. Выведите массив в .out-8. Разделитель - дефис. В .out-8-1 выведите длину массива ar8.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-8
// Вывод в out-8

let ar8 = [];

function f8() {
    ar8[3] = 3.14;
    ar8[4] = 17;
    ar8[6] = 5;

    let out1 = document.querySelector(".out-8");
    let out2 = document.querySelector(".out-8-1");
    let result = "";

    for (let i = 0; i < ar8.length; i++) {
        result += ar8[i] + "-";
    }

    out1.textContent = result;
    out2.textContent = ar8.length;

}

document.querySelector('.b-8').onclick = f8;

// Task 9
// Выведите последний элемент массива ar9. Вывод последнего элемента  - реализуйте по индексу. Чтобы рассчитать индекс последнего элемента - используйте на длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-9
// Вывод в out-9

let ar9 = [100, 200, 300, 400, 700, 121];

function f9() {
    let out = document.querySelector(".out-9");
    out.textContent = ar9[ar9.length - 1]
}

document.querySelector('.b-9').onclick = f9;

// Task 10
// Выведите сумму первого (индекс 1) и последнего массива ar10 в блок out-10. Индекс последнего элемента массива не указывайте напрямую, а вычисляйте через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-10
// Вывод в out-10

let ar10 = [100, 200, 300, 400, 700, 121];

function f10() {
    let out = document.querySelector(".out-10");
    out.textContent = ar10[0] + ar10[ar10.length - 1];
}

document.querySelector('.b-10').onclick = f10;


// Task 11
// Напишите функцию, которая меняет местами второй (индекс 2) и четвертый (индекс 4) элемент массива ar11 и выводит его в out-11. Разделитель - пробел.

// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-11
// Вывод в out-11

let ar11 = [2, 3, 4, 5, 6, 7];

function f11() {
    let out = document.querySelector(".out-11");
    let result = "";
    let i2 = ar11[2];
    ar11[2] = ar11[4];
    ar11[4] = i2;

    for (let i = 0; i < ar11.length; i++) {
        result += ar11[i] + " ";
    }

    out.textContent = result;
}

document.querySelector('.b-11').onclick = f11;


// Task 12
// Напишите функцию f12, которая меняет местами нулевой и последний элемент массива ar12 и выводит его в out-12. Разделитель - пробел. Последний элемент вычислять через длину массива.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-12
// Вывод в out-12

let ar12 = ['test', 'west', 'list', 'class', 'best'];

function f12() {
    let out = document.querySelector(".out-12");
    let res = "";
    let ix = ar12[0];
    ar12[0] = ar12[ar12.length - 1];
    ar12[ar12.length - 1] = ix;

    for (let i = 0; i < ar12.length; i++) {
        res += ar12[i] + " ";
    }

    out.textContent = res;

}

document.querySelector('.b-12').onclick = f12;

// Task 13
// Выведите массив ar13 в out-13 в формате индекс пробел значение пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-13
// Вывод в out-13
// Тест допустим массив [1,2,3] вывод:
//  0 1 1 2 2 3


let ar13 = ['test', 'west', 'list', 'class', 'best'];

function f13() {
    let out = document.querySelector(".out-13");
    let res = "";

    for (let i = 0; i < ar13.length; i++) {
        res += `${i} ${ar13[i]} `;
    }

    out.textContent = res;
}

document.querySelector('.b-13').onclick = f13;


// Task 14
// Используя цикл выведите на страницу массив ar14 в обратном порядке. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-14
// Вывод в out-14

let ar14 = [1, 2, 3, 'hello', 66, true];

function f14() {
    let out = document.querySelector(".out-14");
    let res = "";

    for (let i = ar14.length - 1; i >= 0; i--) {
        res += ar14[i] + " ";
    }

    out.textContent = res;
}

document.querySelector('.b-14').onclick = f14;

// Task 15
// Используя цикл выведите на страницу элементы массива ar15, которые больше нуля. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-15
// Вывод в out-15

let ar15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];

function f15() {
    let out = document.querySelector(".out-15");
    let res = "";

    for (let i = 0; i < ar15.length; i++) {
        if (ar15[i] > 0) {
            res += ar15[i] + " ";
        }
    }

    out.textContent = res;
}

document.querySelector('.b-15').onclick = f15;

// Task 16
// Выполните перебор массива arr16. Четные элементы добавьте в массив ar16_even, нечетные в ar16_odd. Добавление в массив - по индексу, а не +=!!!!!. Протестируйте задачу на повторный запуск! Выведите ar16_odd в div.out-16-odd, а ar16_even в div.out-16-even. Разделитель - пробел.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-16
// Вывод в out-16

let ar16 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78];
// let ar16 = [2, 2, 2, 4, 5, 5, 5, 5, 5, 9, 11];
let ar16_odd = [];
let ar16_even = [];

function f16() {
    let out_o = document.querySelector(".out-16-odd");
    let out_e = document.querySelector(".out-16-even");
    let flag_e = 0;
    let flag_o = 0;

    let res_o = "";
    let res_e = "";

    for (let i = 0; i < ar16.length; i++) {
        if (ar16[i] % 2 == 0) {
            ar16_even[flag_e] = ar16[i];
            flag_e++;
        } else {
            ar16_odd[flag_o] = ar16[i];
            flag_o++;
        }

    }

    for (let o = 0; o < ar16_odd.length; o++) {
        res_o += ar16_odd[o] + " ";
    }

    for (let e = 0; e < ar16_even.length; e++) {
        res_e += ar16_even[e] + " ";
    }

    // out_o.textContent = ar16_odd;
    out_o.textContent = res_o;
    // out_e.textContent = ar16_even;
    out_e.textContent = res_e;

}

document.querySelector('.b-16').onclick = f16;

// Task 17
// Используя цикл выведите в .out-17 количество элементов ar17, значение которых больше 3. Для расчета используйте цикл и переменную счетчик.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-17
// Вывод в out-17

let ar17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0];

function f17() {
    let out = document.querySelector(".out-17");
    let counter = 0;

    for (let i = 0; i < ar17.length; i++) {
        if (ar17[i] > 3) {
            counter++;
        }
    }

    out.textContent = counter;
}

document.querySelector('.b-17').onclick = f17;


// Task 18
// Используя цикл выведите в .out-18 максимальный элемент массива ar18.
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-18
// Вывод в out-18

let ar18 = [15, 24, 13, 78, 21, 4, 45, 67];

function f18() {
    let out = document.querySelector(".out-18");
    let max = ar18[0];

    for (let i = 0; i < ar18.length; i++) {
        if (ar18[i] > max) {
            max = ar18[i];
        }
    }

    out.textContent = max;
}

document.querySelector('.b-18').onclick = f18;


// Task 19
// Выведите в .out-19 индекс минимального элемента в массиве ar19
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-19
// Вывод в out-19

let ar19 = [15, 424, 4, -313, -4, 78, 241, 4, 45, -3, 67];

function f19() {
    let out = document.querySelector(".out-19");
    let min = ar19[0];
    let index = 0;

    for (let i = 0; i < ar19.length; i++) {
        if (ar19[i] < min) {
            min = ar19[i];
            index = i;
        }
    }

    out.textContent = `${min}, ${index}`;
}

document.querySelector('.b-19').onclick = f19;

// Task 20
// Выведите в .out-20 сумму элементов в массиве ar20
// Во всех задачах где говорим второй, третий и т.д. имеем ввиду индекс
// Вывод - по нажатию кнопки b-20
// Вывод в out-20

// let ar20 = [4, 5, 6, 7, 8, 9, 10];
let ar20 = [1, 2, 3, 4];

function f20() {
    let out = document.querySelector(".out-20");
    let sum = 0;

    for (let i = 0; i < ar20.length; i++) {
        sum += ar20[i];
    }

    out.textContent = sum;
}

document.querySelector('.b-20').onclick = f20;