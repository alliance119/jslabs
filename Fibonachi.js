/**
 * Created by maryna-yelakova on 14.04.16.
 */
function fib(n){
    if (n > 2) {
        return fib(n-1) + fib(n-2);
    } else {
        return 1 ;
    }

}

console.log(fib(5)); //