/**
 * Created by maryna-yelakova on 15.04.16.
 */
function sum(n){
    var slog;
    var summa = 0;
    for(var i =1; i<=n; i++ ){
        slog =1/(1+i*i);
        summa = summa + slog;
    }
    return summa;
}
console.log(sum(10))