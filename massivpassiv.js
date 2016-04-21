/**
 * Created by maryna-yelakova on 20.04.16.
 */
/*
[3,5,77,1,5,77,9,0,5]
[3,5,77,1,9,0]
1. берём первый элемент 3 из м1 и записываем в м2
2. сравниваем второй элемент м с первым элементом м2 на равно
3. если не равно, то записываем в м2
4. берём следующий элемент м и сравниваем его со всеми элементами м2 на равно
4. если
*/

var m1 = [3,5,77,1,5,77,9,0,5];
var fu = function(m1){
    var m2 = [];
    var j=0;
    for (var i=0; i<=m1.length; i++){
        if (m1[i]!=m2[j]){
            for(j=0;j<=m2.length;j++)
            m2[j]=m1[i];

        }

    }
    return m2;
};
console.log(fu(arr));





































/*
 var arr=[3,5,77,0,77,3,8];
 function fu(m1) {
    k=0;
    var m2 = [];
    for(var i=0;i<m1.length;i++) {
        var j=0;
        while(j<k && m2[j]!==m1[i]){
            j++;
        };
        if(j==k){
            m2[k]=m1[i];
            k++;
        };
     }
    return m2;
 }
 console.log(fu(arr));


 var a=5
 , b=2
 , c=a+++b

 console.log(c);
 */