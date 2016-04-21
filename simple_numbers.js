/**
 * Created by maryna-yelakova on 10.04.16.
 */
var numbdiapason = function(konecDiapazonaChisel) {
    var k = 0;
    var arrsimple = new Array();
    for (var i = 0; i <= konecDiapazonaChisel; i++) {

        if (arrsimple.length === 0) {
            arrsimple[arrsimple.length] = i
        }

        else {
            flag = true;
            k = 0;
            while (k < arrsimple.length && flag) {

                if (arrsimple[k] != 1) {

                    if (i % arrsimple[k] === 0) {
                        flag = false
                    }
                }
                k++
            }
            if (k === arrsimple.length) {
                arrsimple[k] = i
            }
        }
    }
    return arrsimple
}
console.log("Искомый массив " + numbdiapason(1000))

