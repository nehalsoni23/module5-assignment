(function(){
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['info'];
function MyInfoController(info) {
    var myInfoCtrl = this;
    if(!info) {
        myInfoCtrl.errorMessage = "Please sign up first to persist your information";
    } else {
        myInfoCtrl.info = info;   
    }
};

})();