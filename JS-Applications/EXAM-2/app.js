const db = firebase.firestore();

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    //GET

    this.get('#/index', function (context) {
        db.collection('movies').get()
            .then((res) => {
                context.movies = res.docs.map((movie) => {
                    return {id: movie.id, ...movie.data()}
                });
                getPartials(context).then(function () {
                    this.partial('./templates/index.hbs');
                });
            });
    });
    this.get('#/login', function (context) {
        getPartials(context).then(function () {
            this.partial('templates/login.hbs');
        });
    });
    this.get('#/register', function (context) {
        getPartials(context).then(function () {
            this.partial('templates/register.hbs')
        })
    });
    this.get('#/logout', function (context) {
        firebase.auth().signOut()
            .then(function () {
            clearUserData();
            context.redirect('#/login');
        })
            .catch(errorHandler());
    })
    this.get('#/add-movie', function (context) {
        getPartials(context).then(function () {
            this.partial('templates/addMovie.hbs');
        });
    });
    this.get('#/details/:id', function (context) {
        const id = context.params.id;
        const uid = getUserData().uid;
        db.collection('movies').doc(id).get()
            .then((res) => {
                const {title, imageUrl, description, likes} = res.data();
                const creator = res.data().creator;
                if (res.data().likes.includes(uid)){
                    context.isLikedByUser = true;
                }
                context.movie = {
                    id,
                    title,
                    imageUrl,
                    description,
                    likes: likes.length,
                }
                context.isCreator = true ? res.data().creator === getUserData().uid : false;
                getPartials(context).then(function () {
                    this.partial('templates/details.hbs');
                });
            }).catch(errorHandler());
    });
    this.get('#/edit-movie/:id', function (context) {
        const id = context.params.id;
        db.collection('movies').doc(id).get()
            .then((res) => {
                const {title, imageUrl, description, likes} = res.data();
                const creator = res.data().creator;
                context.movie = {
                    id,
                    title,
                    imageUrl,
                    description,
                    likes: likes.length,
                }
                getPartials(context).then(function () {
                    this.partial('templates/editMovie.hbs');
                });
            });
    });
    this.get('#/like/:id', function (context) {
        const id = context.params.id;
        const uid = getUserData().uid;
        db.collection('movies').doc(id).get()
            .then((res) => {
                let collection = res.data().likes;
                collection.push(uid)
                db.collection('movies').doc(id).set({
                   ...res.data(),
                    likes: collection,
                });
                this.redirect(`#/details/${id}`)
            }).catch(errorHandler());
    });
    this.get('#/delete/:id', function (context) {
        const id = context.params.id;
        db.collection('movies').doc(id).delete()
            .then(() => {
                this.redirect('#/index');
            }).catch(errorHandler())
    })

    //POST
    this.post('#/register', function (context) {
        const {email, password, rePass} = context.params;
        if (password != rePass) {
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.redirect('#/login');
            })
            .catch(errorHandler());
    });
    this.post('#/login', function (context) {
        const { email, password } = context.params;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                let user = {
                    email,
                    uid: res.user.uid,
                }
                localStorage.setItem('user', JSON.stringify(user));
                toastr.success('Successfull login!')
                this.redirect('#/index')
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
            });
    });
    this.post('#/add-movie', function (context) {
        const {title, description, imageUrl} = context.params;
        if (title === '' || description === '' || imageUrl === ''){
            return;
        }
        db.collection('movies').add({
            title,
            description,
            imageUrl,
            creator: getUserData().uid,
            likes: [],
        }).then((res) => {
            this.redirect('#/index');
        }).catch(errorHandler());
    });
    this.post('#/edit-movie/:id', function (context) {
        const id = context.params.id;
        const { title, description, imageUrl } = context.params;
        db.collection('movies').doc(id).get()
            .then((res) => {
                db.collection('movies').doc(id).set({
                    title,
                    description,
                    imageUrl,
                    creator: res.data().creator,
                    likes: res.data().likes,
                }).catch(errorHandler());
                this.redirect(`#/details/${id}`);
            }).catch(errorHandler());
    });

});

function getPartials(context) {
    const user = getUserData();
    context.isLogged = Boolean(user);
    if (context.isLogged) {
        context.email = user.email;
    }
    return context.loadPartials({
        'navbar': 'partials/navbar.hbs',
        'footer': 'partials/footer.hbs',
    });
}

function errorHandler() {
    return (error) => {
        console.log(error);
    };
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData() {
    this.localStorage.removeItem('user');
}
(() => {
    app.run('#/index');
})();