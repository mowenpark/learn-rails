var React = require('react');
var PropTypes = React.PropTypes;

var data = [4, 8, 15, 16, 23, 42];

var Visone = React.createClass({

  render: function() {
    
    d3.select(".chart")
      .selectAll("div")
        .data(data)
      .enter().append("div")
        .style("width", function(d) { return d * 10 + "px"; })
        .text(function(d) { return d; });

    return (
      <div class="chart"></div>
    );
  }

});

module.exports = Visone;
