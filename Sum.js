/**
 * Created by maryna-yelakova on 14.04.16.
 */
/**
 * Created by maryna-yelakova on 14.04.16.
 */
function sum(n){
    if (n > 1) {
        return n + sum(n-1);
    } else {
        return n ;
    }

}

console.log(sum(20)); //