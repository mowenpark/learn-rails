var d3Chart = {};

var margin = {top: 19.5, right: 19.5, bottom: 19.5, left: 39.5},
    width = 1000 - margin.right,
    height = 1000 - margin.top - margin.bottom;

var xScale = d3.scale.log().domain([1, 10000000]).range([10, width]),
    yScale = d3.scale.sqrt().domain([0, 1]).range([height, 0]);

var xAxis = d3.svg.axis().orient("bottom").scale(xScale).ticks(12, d3.format(",d")),
    yAxis = d3.svg.axis().orient("right").scale(yScale).ticks(9, d3.format(",d"));

d3Chart.create = function(el, props, state) {

  var svg = d3.select(el).append('svg')
      .attr('class', 'd3')
      .attr('width', props.width)
      .attr('height', props.height);

  svg.append("g")
  	.attr("class", "labels");
  svg.append("g")
  	.attr("class", "lines");
  svg.append('g')
      .attr('class', 'd3-points');

  // Add the x-axis.
  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);
  // Add the y-axis.
  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis);

  this.update(el, state);
};

d3Chart.update = function(el, state) {
  // Re-compute the scales, and render the data points
  var scales = d3.scale.sqrt().domain([0, 10000000]).range([0, 100]);
  this._drawPoints(el, scales, state.data);
};

d3Chart.destroy = function(el) {
  // Any clean-up would go here
};

d3Chart._drawPoints = function(el, scales, data) {

  var color = d3.scale.category20c();

  var g = d3.select(el).selectAll('.d3-points');

  var text = d3.select(el).selectAll(".labels");

  text.selectAll('.label')
      .data(data, function(d) { return d.country; })
      .enter()
  		.append("text")
  		.attr("dy", function(d) { return yScale(Math.random()); })
      .attr('dx', function(d) { return xScale(d.population); })
  		.text(function(d) {
  			return d.country;
  		});

  var point = g.selectAll('.d3-point')
    .data(data, function(d) { return d.country; });

  // ENTER
  point.enter().append('circle')
      .attr('class', 'd3-point');

  // ENTER & UPDATE
  point.attr('cx', function(d) { return xScale(d.population); })
      .attr('cy', function(d) { return yScale(Math.random()); })
      .attr('r', function(d) { return scales(d.population); })
      .style("fill", function(d) { return color(d.country); })
      .text(function (d) {
        d.country
      })

      .on("mouseenter", function(d) {
        var rect = event.target.getBoundingClientRect();
        point.transition()
            .duration(200)
            .style("opacity", .4);
        d3.select(this).transition()
            .duration(200)
            .style("opacity", 1);
      })

      .on("mouseleave", function () {
        // point.style("opacity", 1)
      });


  // EXIT
  point.exit()
      .remove();
};


module.exports = d3Chart;
