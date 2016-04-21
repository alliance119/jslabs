/**
 * Created by maryna-yelakova on 06.04.16.
 */
var a = 90100;
function someFunc(){
    if(false){
        var a = 1;
    } else {
        var b = 2;
    }
    console.log(b);
    console.log(a); //(1)
}
someFunc();