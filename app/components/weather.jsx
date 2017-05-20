var React = require('react'),
    WeatherForm = require('./weather/weatherForm'),
    WeatherMessage = require('./weather/weatherMessage'),
    OpenWeatherMap = require('OpenWeatherMap');

var Weather = React.createClass({
    getInitialState: function(){
        return{
            isLoading: false,
            locations: []
        };
    },

    weatherFormSubmit: function(location){
        var weather = this;

        this.setState({
            isLoading: true
        });

        OpenWeatherMap.getInfo(location).then(function (res) {
            var locations = [];

            res.forEach((location) => {
                var name = location.name,
                    temp = location.main.temp;

                locations.push([
                    name,
                    temp
                ]);
            })

            weather.setState({
                locations: locations,
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
        var { isLoading, locations } = this.state;

        function renderMessage () {
            if (isLoading){
                return <h3>Fetching Weather...</h3>;
            } else if (locations) {
                return renderLocations();
            }
        };

        function renderLocations () {
            var allLocations = locations.map((location) => {
                return <WeatherMessage location={location[0]} temp={location[1]}/>;
            });

            return allLocations;
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
