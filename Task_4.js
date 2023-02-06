/* Задание 4.
Напишите функцию, которая принимает два числа. 
Каждую секунду необходимо выводить в консоль, начиная от первого и заканчивая вторым. 
Используйте setInterval.
Например, пользователь ввёл числа 5 и 15. 
Каждую секунду в консоль должно печататься число, начиная с 5 и заканчивая 15 (всего 11 чисел: 5 6 7 8 9 10 11 12 13 14 15). */

function printNumbersInInterval(first, last) {
    if (Number.isInteger(first) && Number.isInteger(last) && (first < last)) {
        let intervalId = setInterval(function() {
            console.log(first++);
            if (first === last) {
                clearInterval(intervalId);
            }
        }, 1000);
    } else if (first === last) {
        console.log(first)
    } else {
        console.log('Error. Please use integer numbers');
    }
};

printNumbersInInterval(-3, 2);