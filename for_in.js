/**
 * Created by maryna-yelakova on 06.04.16.
 */
var arr = [3, 4, 5];
for (var i in arr){
    console.log(i);
}

console.log(Object.keys(arr));
console.log(Object.getOwnPropertyNames(arr));