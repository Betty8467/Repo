function f1(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp3 = parseInt(tmp1)
    tmp4 = parseInt(tmp2)
    jQuery("#finalR").html("Result: " + tmp3 + " + " + tmp4 + " = " + (tmp3 + tmp4))
    $("#history").append(`<span class='addClass'>" ${tmp3}  " + "  ${tmp4} = ${(tmp3 + tmp4)} <span> <br>`)
}


function f2(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp = Number(tmp1)
    tmp = Number(tmp2)
    jQuery("#finalR").html("Result: " + tmp3 + " - " + tmp4 + " = " + (tmp3 - tmp4))
    $("#history").append(`<span class='subClass'>" ${tmp1}  " - "  ${tmp2} = ${(tmp3 - tmp4)} <span> <br>`)
}

function f3(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp = Number(tmp1)
    tmp = Number(tmp2)
    jQuery("#finalR").html("Result: " + tmp3 + " * " + tmp4 + " = " + (tmp3 * tmp4))
    $("#history").append(`<span class='multClass'>" ${tmp3}  " * "  ${tmp4} = ${(tmp3 * tmp4)} <span> <br>`)
}

function f4(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp = Number(tmp1)
    tmp = Number(tmp2)
    jQuery("#finalR").html("Result: " + tmp3 + " / " + tmp4 + " = " + (tmp3 / tmp4))
    $("#history").append(`<span class='divClass'>" ${tmp3}  " / "  ${tmp4} = ${(tmp3 / tmp4)} <span> <br>`)
}



function setup(){
    console.log("setup() got called")
    jQuery("#add").click(f1)
    jQuery("#sub").click(f2)
    jQuery("#mult").click(f3)
    jQuery("#div").click(f4)

    function hide_(){
        $(this).parent().remove();
      }
      setup = function() {
        
        jQuery('.button_').click(function (){
          calc(this.id);
        });
       
      
        jQuery('body').on("click", ".hide", hide_);
    }
}



$(document).ready(setup)
