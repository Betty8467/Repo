function calc(operation){
    firstOp = jQuery('#operand1').val();
    secondOp = jQuery('#operand2').val();
    firstOpNum = parseInt(firstOp);
    secondOpNum = parseInt(secondOp);



    if ("#add"){
        finalR = firstOpNum + secondOpNum;
        text = firstOpNum + " + " + secondOpNum + " = ";
        stylefinalR = "<div id='addStyle'>" + text + finalR + "</div>"; 

    }
        else if ("#sub"){
            finalR = firstOpNum - secondOpNum;
            text = firstOpNum + " - " + sceondOpNum + " = ";
            stylefinalRt = "<div id='subStyle'>" + text + finalR + "</div>"; 
        }
        
        else if ("#mult"){
            finalR = firstOpNum * secondOpNum;
            text = firstOpNum + " x " + secondOpNum + " = ";
            stylefinalR = "<div id='multStyle'>" + text + finalR + "</div>"; 
        }
        
        else if ("#div"){
            finalR = firstOpNum / secondOpNum;
            text = firstOpNum + " / " + secondOpNum + " = ";
            stylefinalR = "<div id='divStyle'>" + text + finalR + "</div>"; 
        }
    else {
        console.log("ERROR!ERROR! TRY AGAIN");
    }

finalR = text + finalR;

jQuery('#finalR').html(finalR);



oldDivContent = jQuery('#history').html();
newDivContent = oldDivContent + styleResult;
jQuery('#history').html(newDivConetent);

}

function hide(){
    $(this).parent().remove();
}

setup = function() {
    jQuery(".button").click(function(){
        calc(this.id);
    
});

jQuery('body').on("click", ".hide", hide);

}

jQuery(document).ready(setup);






function f1(){
    tmp1 = jQuery("#op1").val()
    tmp2 = jQuery("#op2").val()
    tmp = Number(tmp1)
    tmp = Number(tmp2)
    jQuery("#finalR").html(tmp1 + tmp2)
    $("#history").append(tmp1 / tmp2)
}