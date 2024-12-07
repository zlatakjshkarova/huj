let red = [10, 20, 30, 40, 50];
//r.forEach(function(элемент ,индекс, массив){
//код для каждого элементы массива
//})
//Вывести элументы массива в консоль
r.forEach(function (element) {
    console.log(element);
})

//вывести элементы и их индексы
r.forEach(function (element, index) {
    console.log(index + ":" + element);
})

//D
let sum = 0;
r.forEach((element) => {
    sum = element + sum
})
console.log(sum)
//sum=0

//sum=10+0=10
//sum=20+10=30
//sum =30+30=60
//sum=50
//




///map
let redw = red.map((element) => {
    let result = element * 2
    return result;

})
console.log(red);
Создать





