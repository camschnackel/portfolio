myApp.controller('ContactController', function ($scope, ContactService) {
    console.log('ContactController created');
    $scope.currNav = 'contact';

    var vm = this;
    vm.contactForm = {
        name: this.name,
        email: this.email,
        message: this.message
    };
    vm.modal = {};
    vm.modalToggle = function (type) {
        if (type === 'success'){
            vm.modal.success = !vm.modal.success;
        } else {
            vm.modal.error = !vm.modal.error;
        }
    
    }

    vm.clearFields = function () {
        vm.contactForm.name = '';
        vm.contactForm.email = '';
        vm.contactForm.message = '';
    }

    vm.sendMessage = function () {
        console.log('sendMessage ran');
        ContactService.sendMessage(vm.contactForm).then( function() {
            vm.modalToggle('success');
            vm.clearFields();
        });
    }
});