/**
 * Created by maryna-yelakova on 09.04.16.
 */
var arr = new Array(2,5,78,99,-65,33,55,676,7);

var minmax= function(arr) {
    var minel = arr[0];
    var maxel = arr[0];

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < minel) {
            minel = arr[i];
        }

        if (arr[i] > maxel) {
            maxel = arr[i];

        }
    }
    return [minel, maxel]
}

console.log(minmax(arr))