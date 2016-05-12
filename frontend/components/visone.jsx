var React = require('react');
var PropTypes = React.PropTypes;
var d3Chart = require('../charts/d3chart');

var Visone = React.createClass({

  propTypes: {
    data: [{id: '5fbmzmtc', x: 7, y: 41, z: 6},
          {id: 's4f8phwm', x: 11, y: 45, z: 9}],
    domain: {x: [0, 30], y: [0, 100]}
  },

  componentDidMount: function() {
    var el = this.getDOMNode();
    console.log(el);
    d3Chart.create(el, {
      width: '100%',
      height: '300px'
    }, this.getChartState());
  },

  componentDidUpdate: function() {
    var el = this.getDOMNode();
    d3Chart.update(el, this.getChartState());
  },

  getChartState: function() {
    return {
      data: [{id: '5fbmzmtc', x: 7, y: 41, z: 6},
            {id: 's4f8phwm', x: 11, y: 45, z: 9}],
      domain: {x: [0, 30], y: [0, 100]}
    };
  },

  componentWillUnmount: function() {
    var el = this.getDOMNode();
    d3Chart.destroy(el);
  },

  render: function() {
    return (
      <div className="Chart"></div>
    );
  }
});

module.exports = Visone;
