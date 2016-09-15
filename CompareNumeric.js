/**
 * Created by maryna-yelakova on 13.05.16.
 */
    function compareNumeric(a,b){
    return a-b;
}
var arr = [2,5,78,9,0,54,3,3,36];
arr.sort(compareNumeric);
console.log(arr);
console.log(arr.indexOf(36))
var kolob = {
    name: "Vasya",
    age: 20,
    profession: "doctor"

};
var keys = Object.keys(kolob);
console.log(keys);

switch(arr){
    case [2,5,7,9,0,0]:
        console.log("nonono");
        break;
    case [2,5,78,9,0,54,3,3,36]:
        console.log("ohayo");
        break;
    default:
        console.log("oops");
        break
}
function argumentsList(){
    console.log(arguments);
    var args = [];
    for (var i=0; i<arguments.length; i++){
        args[i] = arguments[i];
    }
    console.log(args);
}
argumentsList(2,4,6,8);
argumentsList(2,5);
var name =4;
var a = "col"
function undefindVariables(){
      var a=name;
    console.log(a)
}

undefindVariables();
console.log(a);

function undefindVariables2(){
    a=name;
    console.log(a)
}
undefindVariables2();
console.log(a);
function myAdd(n){
    return function(anyNumber){
        return n + anyNumber;
    }
}/*
var v = myAdd(5);
console.log(v(4));
result = prompt("Введите, пожалуйста, свой возраст","Пиши,ежели не стыдно)");
function checkAge(age) {
    return age>18 ? true : confirm('родители разрешили?');
}
alert(checkAge(result));

function checkAge(age) {
    return age>18 || confirm('родители разрешили?');
}
alert(checkAge(result));

function pow(x,n){
    var res = x;
        for (var i = 1;i<n;i++){
            res *= x;
        }
    return res;

}
var x = prompt("Enter x","");
var n = prompt("Enter n","");
if (n<=1){
    alert("Степень" + n + " не поддерживается, введите целое число больше 1");
}else{
    alert(pow(x,n));
}
alert(0.1 + 0.2 == 0.3);*/
