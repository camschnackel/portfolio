myApp.controller('ProjectsController', function ($scope, GithubService) {
    console.log('ProjectsController created');
    $scope.currNav = 'projects';

    const vm = this;

    vm.user = GithubService.user;
    vm.repos = GithubService.repos;
    vm.featRepos = [
        {
            name: 'Individual Health Record™ (UHG)',
            tech: 'React.js, JavaScript, Typescript, MaterialUI, Freemarker, Liferay, Gradle, npm, and Java',
            images: ['../../images/screenIHR1.png', '../../images/screenIHR2.png'],
            description: 'The Individual Health Record™, or IHR, is a technology platform owned and operated by UnitedHealth Group that provides a digital record of a person\'s health care history. It provides and all-in-one record of an individual\'s health, enabling a person and their care team to improve collaboration and care. My task during this project was to aid in a complete front end redesign of the portal. Together alongside a team of talented developers, we refined the code strcture into clean reusable components, dramatically improved performance, added mobile support, implemented support for screen readers, and brought the site into the modern era in terms of design and polish.'
        },
                {
            name: 'Blue Ocean Properties',
            tech: 'Angular 15, Typescript, PrimeNG / PrimeFlex, HTML5, Sass, and npm',
            images: ['../../images/screenBlue1.png', '../../images/screenBlue2.png'],
            description: 'Blue Ocean Properties had a highly outdated Wix site that needed an update that would better showcase their talent in home renovations. This pro-bono project gave me the opportunity to learn Angular 15, and was created as a straightforward means for potential clients to see some of the skilled work Blue Ocean has done throughout their myriad of projects. It features an eye-catching \"splash screen\" of sorts, a gallery of project photos, and a card containing contact information.',
            url: 'http://www.blueoceanproperties.co'
        }
    ];
    vm.miscRepos = [
        {
            name: 'FreshList',
            tech: 'MEAN Stack (MongoDB, Express.js, AngularJS, Node.js), HTML5, CSS3, JavaScript, Angular Material, Passport, Edamom Recipe API',
            images: ['../../images/screenFresh2.png'],
            description: 'FreshList is a full-stack and mobile responsive application that was created to remedy a personal bad habit I had of wasting groceries and not knowing what to cook. It allows the user to intuitively enter and track their grocery items which are sorted by their expiry date. Beside each grocery item in the list, there is a button that when clicked will provide the user with up to 5 recipe suggestions generated through the Edamom Recipe API.'
        },

        {
            name: 'GrowNorth',
            tech: 'pSQL, Express.js, AngularJS, Node.js, HTML5, CSS3, JavaScript, Angular Material, AWS, Nodemailer, Passport',
            images: ['../../images/screenGrow2.png'],
            description: 'This app was created for a client working for a startup known as Grow North. She had been tracking local agriculture volunteers and entrepreneurs using a rather inefficient process based partially from memory. Together with five other developers, we created a full stack application that improved engagement with her clients by encouraging participation in the project via survey forms that made the data easily searchable and organized.'
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