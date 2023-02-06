/* Задание 1.
В прошлом модуле в разделе «Циклы» вы выполняли следующее задание:
"Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. 
Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 
При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее."

На этот раз оформите решение в виде функции, 
постарайтесь дать этой функции корректное название, вызовите функцию, проанализируйте синтаксис. */

function countOddEvenNullInArray() {
    const array = [1, 2, NaN, 4, 5, null, 8, 0, 13, true, 43, 0, '=', 'hello', false, 11.11, 19.5, -9, -10]
    let countOdd = 0
    let countEven = 0
    let countNull = 0
    array.forEach(element => {
        if ((Math.abs(element) % 2 === 1) && (typeof element === 'number')) {
          countOdd++
        } else if ((Math.abs(element) % 2 === 0) && (element !== 0) && (typeof element === 'number')) {
          countEven++
        } else if (((element === null) || (element === 0)) && !isNaN(element)) {
          countNull++
        }
      })
    console.log(`Odd numbers: ${countOdd}`)
    console.log(`Even numbers: ${countEven}`)
    console.log(`Amount of nulls: ${countNull}`)
}

countOddEvenNullInArray();