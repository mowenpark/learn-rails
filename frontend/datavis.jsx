var React = require('react');
var ReactDOM = require('react-dom');

var Visone = require('./components/visone');

var MyComponent = React.createClass({
  render: function () {
    return(
      <Visone />
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<MyComponent />, document.getElementById('main'));
});
