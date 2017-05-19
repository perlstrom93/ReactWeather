var React = require('react'),
    Nav = require('Nav');

// var Main = React.createClass({
//     render: function(){
//         return(
//             <div>
//                 <Nav />
//                 <h2>Main Comp</h2>
//                 {this.props.children}
//             </div>
//         );
//     }
// });

var Main = (props) => {
    return(
        <div>
            <Nav />
            <h2>Main Comp</h2>
            {props.children}
        </div>
    );
}

module.exports = Main;