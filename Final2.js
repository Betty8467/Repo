menu_value = ""
data = ""
page_number = 1
page_size = 0
first_index = 1
last_index = 1

function process_res(x){
    data = x
    page_number = 1
    display()

}

    
function search_(){
    m = $("#movie").val();
    $.ajax({
        url: `https://api.themoviedb.org/3/search/movie?api_key=d8fcbb65bbe42ec3406ca275457c6f6f&language=en-US&query=${m}&page=1&include_adult=false`,
        type: "Get",
        success: process_res
    })
}


 

function display() {
    $("#results").empty();
    $('#buttons').empty();
    $('#fpnl').empty();
    
    page_size = Number(page_size)
    first_index = page_size * (page_number - 1)
    last_index = page_size * (page_number - 1) + (page_size - 1)
    for( i = first_index; i <= last_index; i++){
        if(i < 20){
            
            
            $("#results").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"> <br>`)    
            
        }
    }    
    for(i = 1; i <= Math.ceil(data.results.length / page_size); i++){
        $("#buttons").append(`<button class="display"onclick="change_page_number(this)" id="${i}"> ${i}</button>`)
    }

    $("#fpnl").append(`<button id= "first"onclick="first()"> First </button>`)
    $("#fpnl").append(`<button id= "previous"onclick="prev()"> Prev </button>`)
    $("#fpnl").append(`<button id= "next"onclick="next()"> Next </button>`)
    $("#fpnl").append(`<button id= "last"onclick="last()"> Last </button>`)
    
}

function change_page_number(thisis) {
    page_number = $(thisis).attr("id");
    page_number = Number(page_number)   
    display()

}


function first (){
    page_number = 1
    display()
}

function prev(){
    if (page_number == 1){
        return
    }
    else{
        page_number = page_number - 1
        display()
    }

}

function next(){
    if (page_number >= Math.ceil(data.results.length / page_size)){
        return
    }
    else {
        page_number = page_number + 1
        display()
    }
}

function last (){
    page_number = Math.ceil(data.results.length / page_size)
    display()
}


 
function setup() {
    $("#movie_info").click(search_)
    

    page_size = $("#page_size option:selected").val();
    $("#page_size").change(function () {
        page_size = $("#page_size option:selected").val();
    })
    $("#page_size").click(change_page_number, display)
    $("body").on("click",  ".display", change_page_number)


}

jQuery(document).ready(setup)