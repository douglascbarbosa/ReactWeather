var axios = require('axios');

const OPEN_WEATHER_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=ceb9fb963d7186b30f7a011041fba178&units=metric';

// ceb9fb963d7186b30f7a011041fba178

module.exports = {
	getTemp : function(location){
		var encodedLocation = encodeURIComponent(location);
		var requestUrl = `${OPEN_WEATHER_URL}&q=${encodedLocation}`;

		return axios.get(requestUrl).then(function(res){
			if(res.data.cod && res.data.message){
				throw new Error(res.data.message);
			}else{
				return res.data.main.temp;
			}
		}, function(err){
			throw new Error(err.response.data.message);
		});
	}
}