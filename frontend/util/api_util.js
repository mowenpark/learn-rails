var React = require('react');
var ApiActions = require('../actions/api_actions'),
		ApplicationErrors = require('../components/errors.jsx');

var ApiUtil = {

	fetchChartData: function () {
		$.ajax({
			url: '/api/session',
			type: 'post',
			data: {_method: 'delete'},
			success: function() {
				window.location.replace("/#/signin");
				ApiActions.receiveCurrentUser({});
			},
			error: function () {
				window.location.replace("/#/signin");
				ApiActions.receiveCurrentUser({});
			}
		});
	}

};

module.exports = ApiUtil;
