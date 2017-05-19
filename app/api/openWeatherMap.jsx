var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?appid=a42ffe692ff447c98f9d6433780c18a2';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}&units=metric`;

        return axios.get(requestUrl).then(function(res){
            return res.data.list[0].main.temp;
        }, function(res) {
            throw new Error(res.data.message);
        })
    }
}