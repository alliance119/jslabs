/**
 * Created by maryna-yelakova on 07.04.16.
 */
myname = "global";
function func() {
    console.log(myname);
    var myname = "local";
    console.log(myname);
}
func();