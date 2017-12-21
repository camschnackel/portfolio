myApp.controller('ProjectsController', function ($scope, GithubService) {
    console.log('ProjectsController created');
    $scope.currNav = 'projects';

    const vm = this;

    vm.user = GithubService.user;
    vm.repos = GithubService.repos;
    vm.featRepos = [
        {
            name: 'FreshList',
            url: 'https://solo-fresh-list.herokuapp.com/',
            info: 'Please note that it may take up to 30 seconds to appear on intial load due to hosting limitations.',
            tech: 'MEAN Stack (MongoDB, Express.js, AngularJS, Node.js), HTML5, CSS3, JavaScript, Angular Material, Passport, Edamom Recipe API',
            images: ['../../images/screenFresh1.png', '../../images/screenFresh2.png'],
            description: 'FreshList is a full-stack and mobile responsive application that was created to rememdy a personal bad habit I had of wasting groceries and not knowing what to cook.It allows the user to intuitively enter and track their grocery items which are sorted by their expiry date.Beside each grocery item in the list, there is a button that when clicked will provide the user with up to 5 recipe suggestions generated through the Edamom Recipe API.'
        },

        {
            name: 'GrowNorth',
            url: 'http://grownorthdemo.herokuapp.com/',
            info: 'Please note that it may take up to 30 seconds to appear on intial load due to hosting limitations.',
            creds: 'Username: "guest" Password: "guest"',
            tech: 'pSQL, Express.js, AngularJS, Node.js, HTML5, CSS3, JavaScript, Angular Material, AWS, Nodemailer, Passport',
            images: ['../../images/screenGrow1.png', '../../images/screenGrow2.png'],
            description: 'This app was created for a client working for a startup known as Grow North. She had been tracking local agriculture volunteers and entrepreneurs using a rather inefficient process based partially from memory. Together with five other developers, we created a full stack application that improved her engagement with her clients by encouraging participation in her project via survey forms that made the data easily searchable and organized. My role within the project was varied, but I was most involved in the public facing survey forms which I ensured were user friendly and intuitive.'
        }
    ];
    vm.miscRepos = [
        {
            name: 'Giphy Generator',
            tech: 'MEAN Stack (MongoDB, Express.js, AngularJS, Node.js), HTML5, CSS3, JavaScript, Bootstrap',
            images: ['../../images/screenGiphy.PNG'],
            description: 'This basic app that was created as part of an excercise to better understand how to use an API. The app contains a search bar that takes the entered query and renders up to 20 image results onto the page pulled from the Giphy API.'
        },

        {
            name: 'EverList',
            tech: 'Node.js, HTML5, CSS3, JavaScript, jQuery, Express, PostgresSQL, Bootstrap',
            images: ['../../images/noScreen.png'],
            description: 'Everlist was my first crack at a basic to-do list app. Using Bootstrap and jQuery, it allows the user to enter a task with an optional field for a due date. Tasks can be checked off and deleted, with completed tasks sent to the bottom of the page. '
        }
    ];
    vm.format = 'MMM/d/yy';
    vm.featModal = {};
    vm.miscModal = {};
    vm.featModalToggle = function(index){
        console.log('vm.featModalToggle ran!');
        vm.featModal[index] = !vm.featModal[index];
    };
    vm.miscModalToggle = function (index) {
        console.log('vm.miscModalToggle ran!');
        vm.miscModal[index] = !vm.miscModal[index];
    };

    console.log('vm.user ->', vm.user);
    console.log('vm.repos ->', vm.repos);

    // get profile and repo info on load
    GithubService.githubProfile();
    GithubService.githubRepos();


});