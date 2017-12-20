myApp.controller('ContactController', function ($scope, ContactService) {
    console.log('ContactController created');
    $scope.currNav = 'contact';

    var vm = this;
    vm.contactForm = {
        name: this.name,
        email: this.email,
        message: this.message
    }
    vm.modal = false;
    vm.modalToggle = function () {
        vm.modal = !vm.modal;
    }

    vm.clearFields = function () {
        vm.contactForm.name = '';
        vm.contactForm.email = '';
        vm.contactForm.message = '';
    }

    vm.sendMessage = function () {
        console.log('sendMessage ran');
        ContactService.sendMessage(vm.contactForm).then( function() {
            vm.modalToggle();
            vm.clearFields();
        });
    }
});