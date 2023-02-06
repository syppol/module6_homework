/* Задание 2.
Написать функцию, которая принимает на входе любое число (но не больше 1 000), 
определяет, является ли оно простым, и выводит простое число или нет. 
Если введено больше 1 000, то выводится сообщение, что данные неверны. 
Обратите внимание на числа 0 и 1.
Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы. */

function primeNumbersLessThousand(num) {
    if (num === 2) {
        console.log("Простое число");
        return
    };
    if ((num > 2 && num <= 1000) && Number.isInteger(num)) {
        for (let index = 2; index < num; index++) {
            num = (num % index) === 0 ? 'Составное число' : 'Простое число' ;
            console.log(num);
        }
    } else {
        num = (num === 0 || num === 1) ? 'Вы ввели 0 или 1. Пожалуйста, попробуйте ввести целое число больше 1 и меньше 1000.' : 'Данные неверны. Пожалуйста, попробуйте ввести целое число больше 1 и меньше 1000.' ;
        console.log(num);
    }
}


primeNumbersLessThousand(10);
//primeNumbersLessThousand(11);
//primeNumbersLessThousand(1);
//primeNumbersLessThousand(0);
//primeNumbersLessThousand(-11);
//primeNumbersLessThousand(NaN);
//primeNumbersLessThousand(111);
//primeNumbersLessThousand(222);
//primeNumbersLessThousand(23.5);