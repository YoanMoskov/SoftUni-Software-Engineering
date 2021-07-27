const app = Sammy('#main', function () {
    this.use('Handlebars', 'hbs');

    //GET

    this.get('#/home', function (context) {
        const user = localStorage.getItem('user');
        if (user) {
            const {uid, email} = JSON.parse(user);
            context.loggedIn = true;
            context.email = email;
        }

        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/home/home.hbs');
        });
    });
    this.get('#/about', function (context) {

        const user = localStorage.getItem('user');
        if (user) {
            const {uid, email} = JSON.parse(user);
            context.loggedIn = true;
            context.email = email;
        }

        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/about/about.hbs');
        })
    })
    this.get('#/login', function (context) {

        const user = localStorage.getItem('user');
        if (user) {
            console.log(user)
            const {uid, email} = JSON.parse(user);
            context.loggedIn = true;
            context.email = email;
        }

        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'loginForm': './templates/login/loginForm.hbs',
        }).then(function () {
            this.partial('./templates/login/loginPage.hbs');
        });
    });
    this.get('#/register', function (context) {

        const user = localStorage.getItem('user');
        if (user) {
            const {uid, email} = JSON.parse(user);
            context.loggedIn = true;
            context.email = email;
        }

        this.loadPartials({
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
            'registerForm': './templates/register/registerForm.hbs',
        }).then(function () {
            this.partial('./templates/register/registerPage.hbs');
        });
    })
    this.get('#/logout', function (context) {

        const user = localStorage.getItem('user');
        if (user) {
            const {uid, email} = JSON.parse(user);
            context.loggedIn = true;
            context.email = email;
        }

        firebase.auth().signOut()
            .then((res) => {
                localStorage.removeItem('user');
                this.redirect('#/home');
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    this.get('#/catalog', function (context) {
        const user = localStorage.getItem('user');
        if (user) {
            const {uid, email} = JSON.parse(user);
            context.loggedIn = true;
            context.email = email;
        }
        this.loadPartials({
            'team': './templates/catalog/team.hbs',
            'header': './templates/common/header.hbs',
            'footer': './templates/common/footer.hbs',
        }).then(function () {
            this.partial('./templates/catalog/teamCatalog.hbs');
        });
    })

    //POST

    this.post('#/register', function (context) {
        //Create user
        const {email, password, repeatPassword} = context.params
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user)
                console.log(user.user.uid)
                console.log(email)
                fetch('https://teammanager-979e0.firebaseio.com/users.json', JSON.stringify({
                    method: 'POST',
                    body:{
                        uID: user.user.uid,
                        email: email,
                        hasNoTeam: true,
                    }
                }));
                this.redirect('#/login');
            })
            .catch((error) => {
                console.log(error.code);
                console.log(error.message);
            });
    });
    this.post('#/login', function (context) {
        const {email, password} = context.params;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user);
                localStorage.setItem('user', JSON.stringify({id: user.user.uid, email: user.user.email}));
                this.redirect('#/home');
            }).catch((error) => {

        })
    })
});
(() => {
    app.run('#/home');
})();