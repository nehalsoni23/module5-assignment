(function(){
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['info', 'ApiPath'];
function MyInfoController(info, ApiPath) {
    var myInfoCtrl = this;
    if(!info) {
        myInfoCtrl.errorMessage = "You have not signed up yet ";
    } else {
        myInfoCtrl.info = info;
        myInfoCtrl.basePath = ApiPath;
    }
};

})();