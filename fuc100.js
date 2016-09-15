/**
 * Created by maryna-yelakova on 28.04.16.
 */
/*var f = function(n)
{
    var r = 1;
    var i = 0;
    for (i=2; i<=n; i++)
    {
        r = r*i;
    }
    return r;
}
console.log(f(0));
    */

/*
1. Задаём массив 1
2. Задаём массив 2
3. Сравниваем поочередно элементы массива 1 с элементами массива 2.
4. Выводим результат.
 */

var arr1 = [1,2,3,4,5];
var arr2 = [1,2,6,4,5];
function f(mas1,mas2)
{
    var i = 0
        , r = true
        ,arrlength = mas1.length;

/*    for (i=0; i<mas1.length; i++)
    {
        if (mas1[i]!==mas2[i])
        {
            r = false;
            return r;
        }

    }
    return r; */

    while (i<arrlength && mas1[i]===mas2[i]){
        i++
    }
    if (i<arrlength){
        r = false
    }
    return r
}

console.log(f(arr1,arr2));
