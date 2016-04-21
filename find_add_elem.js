/**
 * Created by maryna-yelakova on 21.04.16.
 */
    /*
    [2,6,87,9,9,5,7,7,4,4,6]
    chislo 87

    vernet funkcija
    [2,6,87,9,9,5,7,7,4,4,6]

    [2,6,87,9,9,5,7,7,4,4,6]
    chislo 13

    vernet funkcija
     [2,6,87,9,9,5,7,7,4,4,6,13]



     1 Берем i-ый элемент массива и сравниваем его с n на равенство
      а)если равно, то возвращаем исходный массив
      б)если не равно, тогда смотрим есть ли у нас следующий элемент в массиве
          а) есть идем к шагу 1
          б) нет выводим массив плюс n

     */

var arr =[2,6,87,9,9,5,7,7,4,4,6]
var fu = function(n,mas){
    for (var i=0; i<mas.length; i++) {
        if (mas[i] === n) {
            console.log(i);
            return mas;
        }
    }
    mas[mas.length] = n;
    console.log(i);
    return mas;
}
console.log(fu(13,arr))
console.log(arr.length)