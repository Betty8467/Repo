function process_res(data){
  
    for( i = 0; i < data.results.length; i++){
    $("#results").append(JSON.stringify(data.results[i].original_title) + "<br>")
    $("#results").append(JSON.stringify(data.results[i].overview) + "<br><br>")
    $("#results").append(`<img src="https://image.tmdb.org/t/p/w500/${data.results[i].poster_path}"> <br>`)
        
    z = `<button id="${data.results[i].backdrop_path}"
    class = "backdrop_button> backdrop image! </button>`
    $("#results").append(z + "<br>");
    }
}
    
function search_(){
    w = $("#movie").val();
    $.ajax({
        "url": `https://api.themoviedb.org/3/search/movie?api_key=d8fcbb65bbe42ec3406ca275457c6f6f&language=en-US&query=${w}&page=1&include_adult=false`,
        "type": "GET",
        "success": process_res
    })
}
    
function display_back_drop(){
    w = $(this).attr("id");
    console.log(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%>`);
    $("#right_div").html(`<img src="https://image.tmdb.org/t/p/original${w}" width="100%>`);
}  
 
function setup(){
    $("#movie_info").click(search_)
    $("body").on ("click",".backdrop_button", display_back_drop)
}
    
    
$(document).ready(setup)
