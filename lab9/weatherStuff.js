function process_reponse(data){
    $("#z").html(JSON.stringify(data.main.temp))
}

function init_ajax(){
    city_name = $("#x").val()
    $.ajax({
        url:"https://api.openweathermap.org/data/2.5/weather?q=${city name}&appid=26dc79919f157e91a9df87f3e2459bdd&units=metric",
        type:"GET",
        success: process_response
    })
}
function setup(){
    $("#y").click(init_ajax)
}

$(document).ready(setup);