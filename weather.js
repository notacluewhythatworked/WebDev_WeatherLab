
$(function(){
    $("#location").submit(function(e) {
    e.preventDefault();
});

var apiKey = '652e529325929c4c514a35647472ab28';
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var combined = city + ", " + state + ", US";
    var url = 'https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=' + combined + '&appid=' + apiKey;
    //whatever.com?key=value&key=value&key=value


    $.getJSON(url, function(data){
        console.log(data);
        console.log(combined);

        showWeather(data, 0);
        showWeather(data, 8);
        showWeather(data, 16);
        showWeather(data, 24);
        showWeather(data, 32);
    });
});

function showWeather(data, day){
    //id=day0temp
    $('#city-output').html(data.city.name);
    $('#day' + day + 'dayandtime').html(data.list[day].dt_txt);
    $('#day' + day + 'description').html(data.list[day].weather[0].description);
    $('#day' + day + 'temp').html(data.list[day].main.temp + ' °F');
    $('#day' + day + 'feelslike').html('Will feel like ' + data.list[day].main.feels_like);
    $('#day' + day + 'windspeed').html(data.list[day].wind.speed + 'mph '+'wind speed');
    $('#day' + day + 'prob').html(data.list[day].pop + '% precipitation');
    var icon = 'http://openweathermap.org/img/wn/' + data.list[day].weather[0].icon + '.png';
    
    $('#day' + day + 'icon').html('<img src="' + icon + '"/>');
}