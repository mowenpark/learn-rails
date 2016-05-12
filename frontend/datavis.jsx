var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router').Router;
var IndexRoute = require('react-router').IndexRoute;
var Route = require('react-router').Route;
var Link = require('react-router').Link;


var Visone = require('./components/visone'),
    Navbar = require('./components/navbar'),
    Home = require('./components/home');

var sampleData = [
      {id: '5fbmzmtc', x: 7, y: 41, z: 6},
      {id: 's4f8phwm', x: 11, y: 45, z: 9}]

var App = React.createClass({

  getInitialState: function () {
    return {
      data: sampleData,
      domain: {x: [0, 30], y: [0, 100]}
    };
  },

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
      <Route path="visone" component={Visone} />
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>, document.getElementById('main'));
});
