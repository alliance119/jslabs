/**
 * Created by maryna-yelakova on 20.04.16.
 */
var m1 = [3,5,77,1,5,77,9,0,5];
var fu = function(){
    var m2 = [];
    var i =0;
    do {
        m2[i] = m1[i];
        i++;
    }
    while (m2[i]===m1[i])
    return m2;
};
console.log(fu(m1));