var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var ChartStore = new Store(AppDispatcher);

var _data = [];

var resetData = function(data){
  _data = data;
};

ChartStore.all = function () {
  return _data;
};

ChartStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_DATA":
      resetData(payload.data);
      ChartStore.__emitChange();
      break;
  }
};

module.exports = ChartStore;
