/* Задание 5.
Напишите функцию, которая принимает два натуральных числа x и n и возвращает x в степени n. 
Иначе говоря, умножает x на себя n раз и возвращает результат.
Используйте Arrow Function синтаксис.
Протестируйте функцию на любых значениях и выведите результат в консоль. */

const exponentiation = (x, n) => {
    if (Number.isInteger(x) && Number.isInteger(n) && (x > 0) && (n > 0)) {
            let res = x;
            for (let index = 1; index < n; index++) {
                res *= x;
            }
            console.log(`${x} in degree ${n} equals: ${res}`);
    } else {
        console.log("Please use 2 integer numbers");
    }
}

//exponentiation(0, 2);
exponentiation(2, 2);