
function add_() {
    op1 = $("#operand_1").val()
    op1 = Number(op1)
  
  
    op2 = $("#operand_2").val()
    op2 = Number(op2)
  
    result = op1 + op2
  
    $("#result").html(result)
    $("#history").append(`
       <div class="addStyle">  
        ${result}
        <button class="hide_row">
            Hide this!
        </button>
       </div> 
    `)
  
  }
  
  function div_() {
    op1 = $("#operand_1").val()
    op1 = Number(op1)
  
  
    op2 = $("#operand_2").val()
    op2 = Number(op2)
  
    result = op1 / op2
  
    $("#result").html(result)
    $("#history").append(`
    <div class="divStyle">  
     ${result}
     <button class="hide_row">
         Hide this!
     </button>
    </div> 
  `)
  }
  
  function x_(){
    $(this).parent().hide()
  }
  
  setup = function () {
    $("#add_").click(add_) // add_ is a function handle
    // $("#add_").on("click", add_) 
  
    $("#sub_").click(function () {
      op1 = $("#operand_1").val()
      op1 = Number(op1)
  
  
      op2 = $("#operand_2").val()
      op2 = Number(op2)
  
      result = op1 - op2
  
      $("#result").html(result)
      $("#history").append(`
        <div class="subStyle">  
        ${result}
        <button class="hide_row">
            Hide this!
        </button>
        </div> 
      `)
  
  
    }) // Anonymous function
  
  
    $("#mul_").click(() => {
      op1 = $("#operand_1").val()
      op1 = Number(op1)
  
  
      op2 = $("#operand_2").val()
      op2 = Number(op2)
  
      result = op1 * op2
  
      $("#result").html(result)
  
      $("#history").append(`
      <div class="mulStyle">  
       ${result}
       <button class="hide_row">
           Hide this!
       </button>
      </div> 
     `)
    }) // Arrow Function
  
    $("#div_").click(div_) // add_ is a function handle
  
    // $(".hide_row").click(()=>{
    //   alert("One of the Hide Buttons got clicked !")
    // })
  
    $("body").on("click", ".hide_row", x_)
  
  
  }
  
  jQuery(document).ready(setup); 