var React = require('react');

var ErrorModal = React.createClass({
    getDefaultProps: function(){
        return {
            title: 'Error'
        };
    },

    propTypes: {

    },

    componentDidMount: function(){
        var modal = Foudation.Reveal($('#error-modal'));
        model.open();
    },

    render: function(){
        var { title, message } = this.props;

        return (
            <div id="error-modal" className="reveal tiny text-center" data-reveal="">
                <h4>{title}</h4>
                <p>{message}</p>
                <p>
                    <button className="button hollow" data-close="">
                        Okay
                    </button>
                </p>
            </div>
        );
    }
});

module.exports = ErrorModal;
