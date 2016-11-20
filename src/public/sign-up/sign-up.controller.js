(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$location', 'MenuService'];
function SignUpController($location, MenuService) {
  var signUpCtrl = this;
  signUpCtrl.user = {};
  signUpCtrl.menuCheckFlag = false;
  signUpCtrl.submit = function () {
    console.log(signUpCtrl.user);
    MenuService.saveData(signUpCtrl.user);
    $location.path('https://www.google.com');
  };

  signUpCtrl.checkMenuNumber = function () {

    var menu_number = signUpCtrl.user.favDish;
    console.log(menu_number);
    if(menu_number) {
        MenuService.getMenuItems(menu_number.toUpperCase()).then(function(response){
          if(response.menu_items.length){
            console.log(response.menu_items.length);
            signUpCtrl.menuCheckFlag = true;
          } else {
            signUpCtrl.menuCheckFlag = false;
            $("#myModal").modal();
          }
        });
    }
  }
}


})();
