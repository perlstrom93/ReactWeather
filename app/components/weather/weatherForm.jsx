var React = require('react');

var WeatherForm = React.createClass({
    handleSubmit: function(e){
        e.preventDefault();
        var location = this.refs.location.value;

        if(location.length > 0){
            this.refs.location.value='';
            this.props.onFormSubmit(location);
        }
    },

    render: function(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" ref="location"/>
                <input type="submit"/>
            </form>
        );
    }
});

module.exports = WeatherForm;