context.collection_name = res.docs.map((singleObj) => { return {id: singleObj.id, ...singleObj.data()} });
//Sammy init and firebase.firestore
const db = firebase.firestore();
const app = Sammy('#root', function () {// - root is the id
    this.use('Handlebars', 'hbs');

});
(() => {
    app.run('#/home');
})();

//Create user
firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((res) => {
        this.redirect('');
    })
    .catch(errorHandler());

//Sign in user


//Sign out user
firebase.auth().signOut()
    .then(function () {
        clearUserData();
        context.redirect('');
    })
    .catch(errorHandler());

//Add to firestore
const {params} = context.params;
db.collection('articles').add({
    params
})
    .then(function () {
        context.redirect('')
    })
    .catch(errorHandler());
});
//Get from firestore
db.collection('collection-name').get()
    .then((res) => {
        const articles = res.docs.map((article) => {
            return {
                id: article.id,
                ...article.data()
            }
        });
    })
//Edit document
        const id = context.params.id;
        const { title, category, content } = context.params;
        db.collection('collection-name').doc(id).set({
            params
        })
            .after(this.redirect(''))
            .catch(errorHandler());
    });
//Delete from firestore
this.get('#/delete/:id', function (context) {
    const id = context.params.id;
    db.collection('articles').doc(id).delete()
        .then(() => {
            this.redirect('#/home');
        })
        .catch(errorHandler())
});

//Functions
function getPartials(context) {
    const user = getUserData();
    context.isLogged = Boolean(user);
    if (context.isLogged) {
        context.email = user.email;
    }
    return context.loadPartials({
        ...
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