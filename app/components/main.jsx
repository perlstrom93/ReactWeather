var React = require('react'),
    Nav = require('Nav');

var Main = React.createClass({
    render: function(){
        return(
            <div>
                <Nav />
                <h2>Main Comp</h2>
                {this.props.children}
            </div>
        );
    }
});

module.exports = Main;