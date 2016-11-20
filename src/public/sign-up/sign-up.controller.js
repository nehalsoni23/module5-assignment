(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {
  var signUpCtrl = this;
  signUpCtrl.user = {};
  signUpCtrl.menuCheckFlag = false;
  signUpCtrl.submit = function () {
    MenuService.saveData(signUpCtrl.user);
    window.scrollTo(0, 0);
    signUpCtrl.resultMessage = "Your information is getting saved successfully. Go to Information section please.";
    $('#myModal').modal();
  };

  signUpCtrl.checkMenuNumber = function () {

    var menu_number = signUpCtrl.user.favDish;
    if(menu_number) {
        MenuService.getMenuItems(menu_number.toUpperCase()).then(function(response){
          if(response.menu_items.length){
            signUpCtrl.user.menu_items = response.menu_items;
            signUpCtrl.menuCheckFlag = true;
          } else {
            signUpCtrl.menuCheckFlag = false;
            signUpCtrl.resultMessage = "No such Menu number exists. Please enter again";
            $("#myModal").modal();
          }
        });
    }
  }
}

})();