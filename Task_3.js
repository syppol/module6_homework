/* Задание 3.
Написать функцию, которая принимает число как аргумент 
и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. 
Выведите в консоль результат. */

/* function sum(num) {
    return function(newNum){
        console.log(num + newNum)
    } 
}

const resultSum = sum(2);

resultSum(1); */

/* OR */

function sum(num){
    return function(nextNum){
      console.log(num + nextNum);
    };
}

sum(2)(1);
