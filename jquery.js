function f1(){
    jQuery("#x").val()
    jQuery("#z").html()
}

function setup(){
    console.log("setup() got called")
    jQuery("#y").click(f1)
}

$(document).ready(setup)