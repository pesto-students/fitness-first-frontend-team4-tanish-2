

/* TODO: Complete func1 so that for any input `arr`
 *       the main function always consoles "Success"
 */

var func1 = function(arr, i, cb)  {

    /* add your logic here */




    func1(arr, ++i, cb); /* Do not change this line */

    /* add your logic here */



    return true



};

/* ----------------------------------------------- */
/* Do not edit anything below */

var main = function() {
    var arr = [ 1, 30, 40, 20, 10, 9, 8]

    func1(arr, 0, function(output) {
        if (!output || !output.length) {
            console.log("Failure");
            return;
        }
        for (var i = 0; i < output.length; i++) {
            if (output[i] > 10 && output[i] != 100) {
                console.log("Failure");
                return;
            }
        }
        console.log("Success");
    });
}

main();
