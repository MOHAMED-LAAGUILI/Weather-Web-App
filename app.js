$(document).ready(function() {
    $('form').submit(function(e) {
            e.preventDefault();
            let city = $('#city').val();
            let apiKey = '54ad5596f50e97323a2fc38be488fb4b';
            let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
            
            $.get(weatherAPI, function(data) {
              let temperature = data.main.temp;
              let humidity = data.main.humidity;
              let wind = data.wind.speed;
 
              $('#temperature').text(`Temperature: ${temperature}`);
              $('#humidity').text(`Humidity: ${humidity}`);
              $('#wind').text(`Wind: ${wind}`);
              $('#weather').show();
        });
    });
  });