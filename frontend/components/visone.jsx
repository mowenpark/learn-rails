var React = require('react');
var ReactDOM = require('react-dom');

var d3Chart = require('../charts/d3chart');

var ChartStore = require('../stores/chartstore'),
    ApiUtil = require('../util/api_util');

var Visone = React.createClass({

  getInitialState: function () {
    return {
      data: ChartStore.all(),
      domain: {x: [0, 30], y: [0, 100]}
    };
  },

  componentDidMount: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.create(el, {
      width: '100%',
      height: '1000px'
    }, this.getChartState());
    this.token = ChartStore.addListener(this.renderChart);
    ApiUtil.fetchChartData();
  },

  renderChart: function () {
    this.setState({
      data: ChartStore.all(),
      domain: this.state.domain
    });
  },

  componentDidUpdate: function() {
    var el = ReactDOM.findDOMNode(this);
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: ChartStore.all(),
      domain: this.state.domain
    };
  },

  componentWillUnmount: function() {
    this.token.remove();
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
