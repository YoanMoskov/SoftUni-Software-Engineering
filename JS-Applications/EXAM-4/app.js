const db = firebase.firestore();
const app = Sammy('#root', function () {// - root is the id
    this.use('Handlebars', 'hbs');

    //GET
    this.get('#/home', function (context) {
        db.collection('articles').get()
            .then((res) => {
                const articles = res.docs.map((article) => {
                    return {
                        id: article.id,
                        ...article.data()
                    }
                });
                let articlesJS = [];
                let articlesCS = [];
                let articlesJ = [];
                let articlesP = [];
                articles.forEach((article) => {
                    if (article.category === 'JavaScript') {
                        articlesJS.push(article);
                    } else if (article.category === 'C#') {
                        articlesCS.push(article);
                    } else if (article.category === 'Java') {
                        articlesJ.push(article);
                    } else if (article.category === 'Pyton') {
                        articlesP.push(article);
                    }
                });
                context.articlesJS = articlesJS.sort((a, b) => a.title.localeCompare(b.title));
                context.articlesCS = articlesCS;
                context.articlesJ = articlesJ;
                context.articlesP = articlesP;
                console.log(context)
                getPartials(context)
                    .then(function () {
                        this.partial('templates/home.hbs');
                    });
            })
            .catch(errorHandler());

    });
    this.get('#/register', function (context) {
        getPartials(context)
            .then(function () {
                this.partial('templates/register.hbs');
            });
    });
    this.get('#/login', function (context) {
        getPartials(context)
            .then(function () {
                this.partial('templates/login.hbs');
            });
    });
    this.get('#/logout', function (context) {
        firebase.auth().signOut()
            .then(function () {
                clearUserData();
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
        db.collection('articles').doc(id).get()
            .then((article) => {
                if (getUserData().uid === article.data().creator) {
                    context.isCreator = true;
                }
                context.article = {
                    id,
                    ...article.data()
                }
                getPartials(context)
                    .then(function () {
                        this.partial('templates/details.hbs');
                    });
            })
            .catch(errorHandler());
    });
    this.get('#/edit/:id', function (context) {
        const id = context.params.id;
        db.collection('articles').doc(id).get()
            .then((article) => {
                context.article = {
                    id,
                    ...article.data()
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
        db.collection('articles').doc(id).delete()
            .then(() => {
                this.redirect('#/home');
            })
            .catch(errorHandler())
    });


    //POST
    this.post('#/register', function (context) {
        const {email, password, rePass} = context.params;
        if (password !== rePass) {
            return;
        }
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((res) => {
                const uid = res.user.uid;
                localStorage.setItem('user', JSON.stringify({email, uid}));
                this.redirect('#/home');
            })
            .catch(errorHandler());
    });
    this.post('#/login', function (context) {
        const {email, password} = context.params;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((res) => {
                let user = {
                    email,
                    uid: res.user.uid,
                }
                localStorage.setItem('user', JSON.stringify(user));
                this.redirect('#/home');
            })
            .catch(errorHandler());
    });
    this.post('#/create', function (context) {
        const {title, category, content} = context.params;
        db.collection('articles').add({
            title,
            category,
            content,
            creator: getUserData().uid,
        })
            .then(function () {
                context.redirect('#/home')
            })
            .catch(errorHandler());
    });
    this.post('#/edit/:id', function (context) {
        const id = context.params.id;
        const { title, category, content } = context.params;
        db.collection('articles').doc(id).set({
            title,
            category,
            content,
            creator: getUserData().uid,
        })
            .after(this.redirect('#/home'))
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
            'noArticlesMsg': 'partials/noArticlesMsg.hbs',
            'article': 'partials/article.hbs',
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