function process_res(data){
   console.log(data);
    for(i=0; i<data.results.length; i++){
        $("#results").append(JSON.stringify(data.results[i].original_title) + "<br>")
        $("#results").append(JSON.stringify(data.results[i].overview) + "<br><br>")
        $("#results").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}">`)
        }
        image_html = `<img src ='https://image.tmdb.org/t/p/w500/${x}'>`
        $("#results").append(image_html + "<br>");

        z = `<button id="${data.result[i].backdrop_path}"
        class="backdrop_button> backdrop image!</button>`
        $("#results").append(z + "<br>");
    }
    
    function search_ (){
       movie = $("#movie").val()
        $.ajax({
            url:`https://api.themoviedb.org/3/search/movie?api_key=d8fcbb65bbe42ec3406ca275457c6f6f&language=en-US&query=${movie}&page=1&include_adult=false`,
            type: "get",
            success: process_res
        })
    }
    
menu_value = ""
data = ""
page_number = ""
page_size = ""


function process_res(x){
    data = x
    page_number = 1
    display()
    page_num()
}

function call_ajax(){
    w =$("#movie").val();
    $.ajax({
        "url":`https://api.themoviedb.org/3/search/movie?api_key=d8fcbb65bbe42ec3406ca275457c6f6f&language=en-US&query=${w}&page=1&include_adult=false`,
        type: "get",
        success: process_res
    })
}

function display_backdrop() {
    w = $(this).attr("id");
    console.log(`<img src= "https://image.tmdb.otg/t/poriginal${w}" width= "100%>`);
    $("#right_div").html(`<img src= ""https://image.tmdb.otg/t/poriginal${w}" width= "100%>"`)

}

function display(){
    page_size = Number(page_size)
    first_index = page_size (page_number - 1)
    last_index = page_size * (page_number - 1) + (page_size -1)
        for (i = first_index; i<= last_index; i++) {
            $("#results").append(data.results[i].original_title + "<br>");

            $("#results").append(data.results[i].overview + "<br>");
            x = data.results[i].poster_path
            image_html = `<img src= 'https://image.tmdb.org/t/p/w500/${x}'>`

            $("#results").append(image_html + "<br>");

            z = `<button id= "${data.results[i].backdrop_path}" class="backdrop_button"> backdrop image!</button>`
            $("#results").append(z + "<br>")

        }
}



function change_page_number(){
    page_number = $(this).attr("id");
    page_number = Number(page_number)
    display()
}

function page_numb(){
    for (i = 1; i <= Math.ceil(data.results.length/page_number); i++){
        $("#buttons").append(`button class = <"display" id="${i}"> ${i}</button>`)
    }
}

function setup(){
    $("#movie_info").click(call_ajax)
    $("body").on("click", ".backdrop_button", display_back_drop)

    page_size = $("#page_size option:selected").val();
    $("#page_size").change(function () {
        page_size = $("#page_size option:selected").val();
    })

    $("body").on("click", ".display", change_page_number)
}


jQuery(document).ready(setup)
