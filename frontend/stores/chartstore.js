var AppDispatcher = require('../dispatcher/dispatcher');
var Store = require('flux/utils').Store;

var ChartStore = new Store(AppDispatcher);

var _data = {};

var resetUser = function(user){
  _data = jQuery.extend(true, {}, user);
};

ChartStore.all = function () {
  return _data;
};

ChartStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case "RECEIVE_USER":
      resetUser(payload.user);
      ChartStore.__emitChange();
      break;
  }
};

module.exports = ChartStore;
