var arr = new Array(1,2,3,-10);

var k = 0;
//var arrneotr = [];
var f = 0;
    for (var i = 0; i < arr.length; i++) {

        if (arr[i] >= 0) {
            f = arr[i] + f;
            k++
        }

    }
var middle = function (arr) {
    return f/k
};
console.log(middle(arr))



