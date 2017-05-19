var React = require('react'),
    WeatherForm = require('./weather/weatherForm'),
    WeatherMessage = require('./weather/weatherMessage'),
    OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false
        };
    },

    weatherFormSubmit: function(location){
        var weather = this;

        this.setState({
            isLoading: true
        });

        OpenWeatherMap.getTemp(location).then(function (temp) {
            weather.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function (err) {
            weather.setState({
                isLoading: false
            });
            alert(err);
        });
    },

    render: function(){
        var { isLoading, temp, location } = this.state;

        function renderMessage () {
            if (isLoading){
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp}/>;
            }
        };

        return(
            <div>
                <h3>Weather Comp</h3>
                <WeatherForm onFormSubmit={this.weatherFormSubmit}/>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;