/**
 * Created by valery-kurbatov on 20.04.16.
 */
/*
1. Задаём число через переменную.
2. Формируем массив через цикл ограниченный выбранным числом.
3. Выбираем чётные числа:
    3.1 Делим каждый элент массива на 2.
    3.2 Если остаток от деления 0, то записываем в новый массив.
4. Выводим новый массив через console.log()

i=0     i=1        i=2      i=3
m[0]=0  m[1]=1     m[2]=2   m[3]=3
         [1]=1*2   [2]=2*2  [3]=3*2
 */
var m1 = function(c)
{
    var m = [];
    for (var i = 0; i<=c/2; i++)
    {
         m[i] = i*2;
    }
    return m;

}

console.log(m1(3));
