var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Link = require('react-router').Link;


var Visone = require('./components/visone'),
    Navbar = require('./components/navbar'),
    Home = require('./components/home');

var App = React.createClass({

  render: function(){
    return (
        <div>
          <Navbar />
          {this.props.children}
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('main'));
});
