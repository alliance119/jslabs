/**
 * Created by maryna-yelakova on 08.04.16.
 */
var fc = function(n){
//Сначала проверяем является ли n числом, если нет, то:
    if (isNaN(n)) {
        return "Error";
    } else {
//Потом ставим условие выполнения кода при n < 150, так как факториал числа больше 150 - это огромное
        // число и все просто зависнет
        if (n<150){
//Собственно вычисление факториала
            var res = 1;
            for (var i = 2; i <= n; i++) {
                res = res * i;
            }
            return res;
        }
        else {
            return "Please enter a number above 150"
        }
    }

};

console.log(fc(5));