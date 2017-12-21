myApp.service('ContactService', function ($http) {
    const self = this;

    //Call to Github API to fetch user's profile info
    self.sendMessage = function (obj) {
        console.log('ContactService.sendMessage ran');
        return $http({
            method: 'POST',
            url: '/mailer',
            data: obj,
        }).then(function (response) {
            console.log('mailer POST response.data ->', response.data);
        });
    }
});