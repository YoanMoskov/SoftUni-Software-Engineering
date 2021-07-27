const db = firebase.firestore();

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    //GET
    this.get('#/home', function (context) {
        loadingBar();
        db.collection('destinations').get()
            .then((res) => {
                loadingBarHide();
                context.destinations = res.docs.map((destination) => {
                    return {
                        id: destination.id,
                        imgUrl: destination.data().imgUrl,
                        city: destination.data().city,
                        destination: destination.data().destination,
                        departureDate: destination.data().departureDate,
                    }

                })
                getPartials(context)
                    .then(function () {
                        this.partial('templates/home.hbs');
                    });
            })
            .catch(errorHandler())
    });
    this.get('#/login', function (context) {
        getPartials(context)
            .then(function () {
                this.partial('templates/login.hbs');
            });
    });
    this.get('#/register', function (context) {
        getPartials(context)
            .then(function () {
                this.partial('templates/register.hbs');
            });
    });
    this.get('#/logout', function (context) {
        loadingBar();
        firebase.auth().signOut()
            .then(function () {
                loadingBarHide();
                clearUserData();
                successMsgHandler('Logout successful.')
                context.redirect('#/login');
            })
            .catch(errorHandler());
    });
    this.get('#/create', function (context) {
        getPartials(context)
            .then(function () {
                this.partial('templates/create.hbs');
            });
    });
    this.get('#/details/:id', function (context) {
        const id = context.params.id;
        loadingBar();
        db.collection('destinations').doc(id).get()
            .then((destination) => {
                loadingBarHide();
                if (getUserData().uid === destination.data().creator) {
                    context.isCreator = true;
                }
                context.destination = {
                    id,
                    ...destination.data(),
                }
                getPartials(context)
                    .then(function () {
                        this.partial('templates/details.hbs');
                    });
            })
            .catch(errorHandler());
    })
    this.get('#/edit/:id', function (context) {
        const id = context.params.id;
        loadingBar();
        db.collection('destinations').doc(id).get()
            .then((destination) => {
                loadingBarHide();
                context.destination = {
                    id,
                    ...destination.data()
                }
                getPartials(context)
                    .then(function () {
                        this.partial('templates/edit.hbs');
                    });
            })
            .catch(errorHandler());

    });
    this.get('#/my-destinations', function (context) {
        loadingBar();
        db.collection('destinations').get()
            .then((res) => {
                loadingBarHide();
                let userDestinations = [];
                res.docs.map((destination) => {
                    if (destination.data().creator === getUserData().uid){
                        let dest = {
                            id: destination.id,
                            imgUrl: destination.data().imgUrl,
                            city: destination.data().city,
                            destination: destination.data().destination,
                            departureDate: destination.data().departureDate,
                            duration: destination.data().duration,
                        }
                        userDestinations.push(dest);
                        context.destinations = userDestinations;
                    }
                    console.log(context.destinations)
                })
                getPartials(context)
                    .then(function () {
                        this.partial('templates/myDestinations.hbs');
                    });
            })
    });
    this.get('#/delete/:id', function (context) {
        const id = context.params.id;
        loadingBar();
        db.collection('destinations').doc(id).delete()
            .then(() => {
                loadingBarHide();
                successMsgHandler('Destination deleted.')
                this.redirect('#/my-destinations');
            })
            .catch(errorHandler())
    });

    //POST
    this.post('#/register', function (context) {
        const {email, password, rePassword} = context.params;
        loadingBar();
        if (password !== rePassword) {
            errorMsgHandler("Passwords do not match.");
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                localStorage.setItem('user', JSON.stringify({email: user.user.email, uid: user.user.uid}));
                successMsgHandler('User registration successful.')
                this.redirect('#/home');
            })
            .catch(errorHandler('Invalid email or password.'));
    });
    this.post('#/login', function (context) {
        const {email, password} = context.params;
        loadingBar();
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                localStorage.setItem('user', JSON.stringify({email: user.user.email, uid: user.user.uid}));
                successMsgHandler('Login successful.')
                this.redirect('#/home')
            })
            .catch(errorHandler('Invalid email or password.'));
    });
    this.post('#/create', function (context) {
        const {destination, city, duration, departureDate, imgUrl} = context.params;
        if (destination === ''){
            errorMsgHandler('Destination field is empty.')
            return;
        }
        if (city === ''){
            errorMsgHandler('City field is empty.');
            return;
        }
        if (duration === '') {
            errorMsgHandler('Duration field is empty.');
            return;
        }
        if (departureDate === ''){
            errorMsgHandler('Departure date field is empty.');
            return;
        }
        if (imgUrl === ''){
            errorMsgHandler('Image url field is empty.');
            return;
        }
        loadingBar();
        db.collection('destinations').add({
            destination,
            city,
            duration,
            departureDate,
            imgUrl,
            creator: getUserData().uid,
        })
            .then(function () {
                loadingBarHide();
                successMsgHandler('Added new destination.')
                context.redirect('#/home')
            })
            .catch(errorHandler());
    });
    this.post('#/edit/:id', function (context) {
        const id = context.params.id;
        const {destination, city, duration, departureDate, imgUrl} = context.params;
        if (destination === ''){
            errorMsgHandler('Destination field is empty.')
            return;
        }
        if (city === ''){
            errorMsgHandler('City field is empty.');
            return;
        }
        if (duration === '') {
            errorMsgHandler('Duration field is empty.');
            return;
        }
        if (departureDate === ''){
            errorMsgHandler('Departure date field is empty.');
            return;
        }
        if (imgUrl === ''){
            errorMsgHandler('Image url field is empty.');
            return;
        }
        loadingBar();
        db.collection('destinations').doc(id).set({
            destination,
            city,
            duration,
            departureDate,
            imgUrl,
            creator: getUserData().uid,
        })
            .then(function () {
                loadingBarHide();
                successMsgHandler('Successfully edited destination.')
                context.redirect('#/home');
            })
            .catch(errorHandler());
    });

    function getPartials(context) {
        const user = getUserData();
        context.isLogged = Boolean(user);
        if (context.isLogged) {
            context.email = user.email;
        }
        return context.loadPartials({
            'header': 'partials/header.hbs',
            'footer': 'partials/footer.hbs',
        });
    }

    function errorHandler(msg) {
        return (error) => {
            console.log(error);
            errorMsgHandler(msg)
        };
    }

    function loadingBar() {
        loadingBarEl = document.getElementById('loading');
        loadingBarEl.innerHTML = "Loading...";
        loadingBarEl.setAttribute('style', 'display: block');
    }
    function loadingBarHide() {
        loadingBarEl = document.getElementById('loading');
        loadingBarEl.setAttribute('style', 'display: none');
    }

    function getUserData() {
        const user = localStorage.getItem('user');
        return user ? JSON.parse(user) : null;
    }

    function clearUserData() {
        localStorage.removeItem('user');
    }
    function successMsgHandler(msg) {
        loadingBarHide()
        const infoEl = document.getElementById('success')
        infoEl.innerHTML = msg;
        infoEl.setAttribute('style', 'display: block');

        infoEl.addEventListener('click', hideInf)
        function hideInf() {
            infoEl.setAttribute('style', 'display: none');
        }

        setTimeout(function () {
            infoEl.setAttribute('style', 'display: none');
        }, 3000);
    }
    function errorMsgHandler(msg) {
        loadingBarHide();
        const errorEl = document.getElementById('error')
        errorEl.innerHTML = `Error: ${msg}`;
        errorEl.setAttribute('style', 'display: block');

        errorEl.addEventListener('click', hideErr)
        function hideErr() {
            errorEl.setAttribute('style', 'display: none');
        }
    }
});
(() => {
    app.run('#/home');
})();