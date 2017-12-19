myApp.controller('ProjectsController', function ($scope, GithubService) {
    console.log('ProjectsController created');
    $scope.currNav = 'projects';

    const vm = this;

    vm.user = GithubService.user;
    vm.repos = GithubService.repos;
    vm.featRepos = {}
    vm.format = 'MMM/d/yy'

    console.log('vm.user ->', vm.user);
    console.log('vm.repos ->', vm.repos);

    // get profile and repo info on load
    GithubService.githubProfile();
    GithubService.githubRepos();


});