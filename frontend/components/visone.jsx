var React = require('react');
var ReactDOM = require('react-dom');
var d3Chart = require('../charts/d3chart');
var ChartStore = require('../stores/chartstore');

var Visone = React.createClass({

  getInitialState: function () {
    return {
      data: [{id: '5fbmzmtc', x: 7, y: 41, z: 6},
            {id: 's4f8phwm', x: 11, y: 45, z: 9}],
      domain: {x: [0, 30], y: [0, 100]}
    };
  },

  componentDidMount: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  renderChart: function () {
    this.setState({
      data: this.state.data,
      domain: this.state.domain
    });
  },

  componentDidUpdate: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: this.state.data,
      domain: this.state.domain
    };
  },

  componentWillUnmount: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.destroy(el);
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  }
});

module.exports = Visone;
