

function solv_quad() {
    a = $("#a_value").val();
    b = $("#b_value").val();
    c = $("#c_value").val();


    if (a == 0) {
        console.log("is not quadratic");
        if (b == 0) { console.log("bye! cuz a=0 and b=0"); }
        else {
            x1 = -1 * c / b
            console.log(X1)
        }
    }

    else {
        d = b ** 2 - 4 * a * c;

        if (d < 0)
            console.log("No Real Answer!");
        else {
            var x1 = -b + Math.sqrt(d) / (2 * a)
            var x2 = -b - Math.sqrt(d) / (2 * a)
            console.log(x1);
            console.log(x2);
        }
    }
}
//a = 3
//b = 4
//c = 1

//solv_quad(a,b,c)
//solv_quad(2,2,1)
//solv_quad(2,2,1)
//solv_quad(2,2,1)
//solv_quad(2,2,1)

function setup() {
    console.log("jQuery works");
    $("#cal_the_route_of_quad").click(solv_quad)
}

//solv_quad(?,?,?)

$(document).ready(setup)