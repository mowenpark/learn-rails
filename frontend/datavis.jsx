var React = require('react');
var ReactDOM = require('react-dom');

var Visone = require('./components/visone'),
    Navbar = require('./components/navbar');

var MyComponent = React.createClass({
  render: function () {
    return(
      <Navbar />
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
