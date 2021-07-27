const db = firebase.firestore();
const app = Sammy('#root', function () {// - root is the id
    this.use('Handlebars', 'hbs');

    //GET
    this.get('#/home', function (context) {
        db.collection('posts').get()
            .then((res) => {
                context.posts = res.docs.map((post) => {
                    return {id: post.id, ...post.data()}
                });
                getPartials(context)
                    .then(function () {
                        this.partial('templates/home.hbs');
                    });
            })
            .catch(errorHandler());

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
    })
    this.get('#/logout', function (context) {
        firebase.auth().signOut()
            .then(function () {
                clearUserData();
                context.redirect('#/home');
            })
            .catch(errorHandler());
    })
    this.get('#/details/:id', function (context) {
        const id = context.params.id;
        db.collection('posts').doc(id).get()
            .then((res) => {
                context.title = res.data().title;
                context.category = res.data().category;
                context.content = res.data().content;
                getPartials(context)
                    .then(function () {
                        this.partial('templates/details.hbs');
                    });
            })
            .catch(errorHandler());

    });
    this.get('#/edit/:id', function (context) {
        db.collection('posts').get()
            .then((res) => {
                context.posts = res.docs.map((post) => {
                    return {id: post.id, ...post.data()}
                });
                getPartials(context)
                    .then(function () {
                        this.partial('templates/home.hbs');
                    });
            })
            .catch(errorHandler());
        const id = context.params.id;
        db.collection('posts').doc(id).get()
            .then((res) => {
                console.log(res.data())
                context.currPost = {
                    id,
                    ...res.data(),
                }
                getPartials(context)
                    .then(function () {
                        this.partial('templates/edit.hbs');
                    });
            })
            .catch(errorHandler());
    });
    this.get('#/delete/:id', function (context) {
        const id = context.params.id;
        db.collection('posts').doc(id).delete()
            .then(() => {
                this.redirect('#/home');
            })
            .catch(errorHandler())
    })

        //POST
    this.post('#/register', function (context) {
        const {email, password, repeatPassword} = context.params;
        if (password !== repeatPassword) {
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                this.redirect('#/login');
            })
            .catch(errorHandler());
    })
    this.post('#/login', function (context) {
        const {email, password} = context.params;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                let user = {
                    email,
                    uid: res.user.uid,
                }
                localStorage.setItem('user', JSON.stringify(user));
                this.redirect('#/home')
            })
            .catch(errorHandler());
    })
    this.post('#/create-post', function (context) {
        const {title, category, content} = context.params;
        db.collection('posts').add({
            title,
            category,
            content,
            creator: getUserData().uid,
        })
            .then((res) => {
                this.redirect('#/home');
            })
            .catch(errorHandler());
    });
    this.post('#/edit/:id', function (context) {
        const id = context.params.id;
        console.log(id);
        const {title, category, content} = context.params;
        db.collection('posts').doc(id).get()
            .then((res) => {
                db.collection('posts').doc(id).set({
                    title,
                    category,
                    content,
                    creator: res.data().creator,
                })
                    .then(this.redirect('#/home'))
                    .catch(errorHandler());
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
            'post': 'partials/post.hbs',
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
        localStorage.removeItem('user');
    }
});
(() => {
    app.run('#/home');
})();