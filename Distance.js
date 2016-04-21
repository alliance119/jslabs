// d=sqrt((x2-x1)^2 + (y2-y1)^2)
var rezultat;
var d;
var x1 = 9;
var x2 = 81;
var y1 = 10;
var y2 = 11;
var M1 = (x2-x1)*(x2-x1);
var M2 = (y2-y1)*(y2-y1);
d = M1+M2;
console.log(Math.sqrt(d));
/*
{
    if (isNaN(n)){
        return "Ошибка";
    }
else {
        for (var i=1; i<=n; i++) {
            rezultat = rezultat*i;
            return rezultat;
        }
    }

}
factorial (5);

var k = 9;
console.log(Math.sqrt(k));
    */