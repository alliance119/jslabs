/**
 * Created by maryna-yelakova on 14.04.16.
 */
function fac(n){
    if (n >1) {
        return n * fac(n-1);
    } else {
        return n ;
    }
}

console.log(fac(3)); //