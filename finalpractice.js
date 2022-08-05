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

    
function display_back_drop(){
    m = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${m}" width="100%">`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${m}" width="100%">`)
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
            $("#results").append(JSON.stringify(data.results[i].original_title) + "<br>")
            $("#results").append(JSON.stringify(data.results[i].overview) + "<br><br>")
            $("#results").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"> <br>`)    
            image =`<button id="${data.results[i].backdrop_path}"
            class = "backdrop_button"> backdrop image! </button>`
            $("#results").append(image + "<br>");
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
    $("body").on ("click",".backdrop_button", display_back_drop)

    page_size = $("#page_size option:selected").val();
    $("#page_size").change(function () {
        page_size = $("#page_size option:selected").val();
    })
    $("#page_size").click(change_page_number, display)
    $("body").on("click",  ".display", change_page_number)


}

jQuery(document).ready(setup)