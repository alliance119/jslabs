/**
 * Created by maryna-yelakova on 19.04.16.
 */
 var testarr = ["java","script"];
testarr.reverse();
console.log(testarr);
var newarr = testarr.concat(2,7,8,65,6);
console.log(newarr);
var tb = function(n){
    for (var i= 1; i<=10;i++){
        console.log(i*n);
    }
}
tb(2);
var arrius = [-2,-5,-87,-4,-3,-7,-9,-67,-4];
var minmaxelement = function(){
    var minel=arrius[0];
    var maxel=arrius[0];
    for (var i=0;i<arrius.length; i++){
        if(arrius[i]< minel){
            minel = arrius[i];
        }
        if(arrius[i]>maxel){
            maxel = arrius[i];
        }
    }
    return [minel,maxel]
}
console.log(minmaxelement())