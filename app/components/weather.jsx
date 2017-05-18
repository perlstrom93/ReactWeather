var React = require('react'),
    WeatherForm = require('./weather/weatherForm'),
    WeatherMessage = require('./weather/weatherMessage'),
    OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            location: 'this is the default state of location',
            temp: 200
        };
    },

    weatherFormSubmit: function(location){
        var weather = this;

        OpenWeatherMap.getTemp(location).then(function (temp) {
            weather.setState({
                location: location,
                temp: temp
            });
        }, function (err) {
            alert(err);
        });
        
        // this.setState({
        //     location: location,
        //     temp: 10
        // });
    },

    render: function(){
        return(
            <div>
                <h3>Weather Comp</h3>
                <WeatherForm onFormSubmit={this.weatherFormSubmit}/>
                <WeatherMessage location={this.state.location} temp={this.state.temp}/>
            </div>
        );
    }
});

module.exports = Weather;