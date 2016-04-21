/**
 * Created by maryna-yelakova on 19.04.16.
 */
var fuc = function(x)
{
    var res = 1;
    var slog = 0;
    var sum =0;
    for (var i=1; i<=20; i++) {
        res = res * i;
        slog = slog + Math.pow(x,i)/res;
        //sum = slog + (Math.pow(i,i)/res);
    }

    console.log(1+slog);
    console.log(Math.pow(2.71828182845904523536,x))
}
fuc(15);