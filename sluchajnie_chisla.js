/**
 * Created by maryna-yelakova on 10.04.16.
 */
// функция генерации случайных чисел
function rand(min, max)
{
   // max = max || false;
    //min = min || 255;

    if (max)
    {
        return Math.floor(Math.random()*(max-min+1))+min;
    }
    else
    {
        return Math.floor(Math.random()*(min+1));
    }
};


// функция генерации массива заполненного случайными числами
function array_fill_random(limit, min, max)
{
   // limit = parseInt(limit);
    min = min || 0;
    max = max || 255;

    arr = new Array(limit);

    for (var i=0; i<limit; i++)
    {
        arr[i] = rand(min, max);
    }

    return arr;
};
console.log(array_fill_random(30,0,100))