/**
 * Created by maryna-yelakova on 20.04.16.
 */
var chetnie = function(n){
    var j =0;
    var arr = [];
        for(var i = 0;i<=n; i =i+2){
        //    if(i % 2 ==0) {
                arr[j] = i;
                j++;
       //     }
        }
    return arr;
    }
console.log(chetnie(25));