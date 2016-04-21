/**
 * Created by maryna-yelakova on 11.04.16.
 */
var arr = new Array(5,7,4,7,9,4,67)
var bubblsort = function(A){
    var n = A.length;
    for (var i = 0; i<n-1;i++){
        for (var j=0;j<n-1-i;j++){
            if(A[j + 1]< A[j]){
               var t = A[j+1];
                A[j+1]=A[j];
                A[j] = t
            }
        }
    }
    return A
}
console.log(bubblsort(arr))