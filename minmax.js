/**
 * Created by maryna-yelakova on 24.04.16.
 */
/*
1. Задаём массив.
2. Сравниваем первый элемент массива с каждым следующим на больше.
3. Если больше - записываем в переменную.

 */
var arr = [1,2,3,4,5,6,7,8,9,10,-1,100,-50,12];
var j;
var minmax = function(mas)
{
    var maxel = mas[0];
    var minel = mas[0];
    for (var i=0; i<mas.length; i++)
    {
        if (mas[i]>maxel)
        {
            maxel = mas[i];
        }
        else if (mas[i]<minel)
            {
                minel = mas[i];
            }
    }
        return [maxel, minel];
}

console.log(minmax(arr));
console.log(j);
//console.log(maxel);
//console.log(minel);