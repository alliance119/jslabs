/**
 * Created by maryna-yelakova on 17.04.16.
 */
function infsum(){
    var summa = 0;
    for (var i=1;i<10000; i++){
        slog = 1/(i*(i+2));
        summa = summa + slog;
    }
    return summa;
}
console.log(infsum());

function othersum(ecu){
    var sum = 0;
    var slog;
    var tochn = 1;
    for (var i = 1;i <= ecu; i++){
        tochn = tochn/10
    }
    i = 1;
    do {
        slog = 1/(i*(i+2));
        sum = sum + slog;
        i++;

    }
    while (slog > tochn );
    return sum
}
console.log(othersum(11))
