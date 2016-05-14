var AppDispatcher = require('../dispatcher/dispatcher');

var ApiActions = {

  receiveChartData: function (data) {
    AppDispatcher.dispatch({
      actionType: "RECEIVE_DATA",
      data: data
    });
  }
};

module.exports = ApiActions;
