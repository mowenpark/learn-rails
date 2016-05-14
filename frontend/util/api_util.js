var React = require('react');
var ApiActions = require('../actions/api_actions');

var ApiUtil = {

	fetchChartData: function () {

		$.ajax({
			url: '/api/populations',
			type: 'get',
			success: function(params) {
				ApiActions.receiveChartData(params);
			},
			error: function (params) {

			}
		});
	}

};

module.exports = ApiUtil;
