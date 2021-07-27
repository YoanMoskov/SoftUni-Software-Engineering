const user = firebase.auth();
const db = firebase.firestore();

const app = Sammy('#root', function () {
    this.use('Handlebars', 'hbs');

    //GET
    //home
    this.get('#/home', function (context) {
        db.collection('offers')
            .get()
            .then((res) => {
                context.offers = res.docs.map((offer) => { return {id: offer.id, ...offer.data()} });
                getLoadPartials(context).then(function () {
                    this.partial('./templates/homePage.hbs');
                })
            });
    });
    //user
    this.get('#/register', function (context) {
        getLoadPartials(context).then(function () {
            this.partial('./templates/register.hbs');
        })
    })
    this.get('#/login', function (context) {
        getLoadPartials(context).then(function () {
            this.partial('./templates/login.hbs');
        })
    });
    this.get('#/create-offer', function (context) {
        getLoadPartials(context).then(function () {
            this.partial('./templates/createOffer.hbs');
        })
    });
    this.get('#/edit-offer/:offerId', function (context) {
        const offerId = context.params.offerId;
        db.collection('offers').doc(offerId).get()
            .then((res) => {
                context.offer = {
                    id: offerId,
                    ...res.data(),
                }
                getLoadPartials(context).then(function () {
                    this.partial('./templates/edit-offer.hbs');
                })
            })
    });
    this.get('#/details/:offerId', function (context) {
        const {offerId}  = context.params;

        db.collection('offers')
            .doc(offerId)
            .get()
            .then((res) => {
                let isBought = false;
                const offerData = res.data();
                const isSeller = offerData.seller === getUserData().uid;
                offerData.clients.forEach(client => {
                    if (client === getUserData().uid){
                        isBought = true;
                    }
                })
                context.offer = {...offerData, isSeller, id: offerId, isBought };
                getLoadPartials(context).then(function () {
                    this.partial('./templates/details.hbs');
                })
            });

    });
    this.get('#/logout', function (context) {
        user.signOut()
            .then(function () {
                clearUserData();
                context.redirect('#/home')
            })
            .catch(function (error) {
                console.log(error);
            });
    });
    this.get('#/delete/:offerId', function (context) {
        const offerId = context.params.offerId;
        db.collection('offers').doc(offerId).delete()
            .then(() => {
                this.redirect('#/home')
            }).catch((error) => {
            console.log(error);
        })
    });
    this.get('#/buy/:offerId', function (context) {
        const offerId = context.params.offerId;
        const userId = getUserData().uid;
        db.collection('offers')
            .doc(offerId)
            .get()
            .then((res) => {
                const offerData = { ...res.data() };
                offerData.clients.push(getUserData().uid)

                return db.collection('offers')
                    .doc(offerId)
                    .set(offerData)
            })
            .then(() => {
                this.redirect(`#/details/${offerId}`)
            }).catch((error) => {
            console.log(error)
        })
    });
    //POST
    this.post('#/register', function (context) {
        let email = context.params.email;
        let password = context.params.password;
        let rePassword = context.params.rePassword;
        if (password != rePassword) {
            return;
        }
        user.createUserWithEmailAndPassword(email, password)
            .then((user) => {
                this.redirect('#/login');
            })
            .catch((error) => {
                console.log(error);
            });
    });
    this.post('#/login', function (context) {
        let email = context.params.email;
        let password = context.params.password;
        user.signInWithEmailAndPassword(email, password)
            .then((user) => {
                saveUserData(user);
                this.redirect('#/home')
            })
            .catch((error) => {
                console.log(error);
            });
    });
    this.post('#/create-offer', function (context) {
        const {name, price, imageURL, description, brand} = context.params
        db.collection('offers').add({
            name,
            price,
            imageURL,
            description,
            brand,
            seller: getUserData().uid,
            clients: [],
        }).then((registeredOffer) => {
            this.redirect('#/home');
        }).catch((error) => {
            console.log(error);
        })
    });
    this.post('#/edit-offer/:offerId', function (context) {
        const {offerId, name, price, description, imageURL} = context.params;
        db.collection('offers').doc(offerId).get()
            .then((res) => {
                db.collection('offers').doc(offerId).set({
                    ...res.data(),
                    name,
                    price,
                    description,
                    imageURL,
                    offerId,
                })
                    .then((res) => {
                        this.redirect(`#/details/${offerId}`)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            });

    });
    this.post('#/details/:offerId', function () {

    });

});

function getLoadPartials(context) {
    const user = getUserData();
    context.isLoggedIn = Boolean(user);
    context.email = user ? user.email : '';

    return context.loadPartials({
        'header': './partials/header.hbs',
        'footer': './partials/partials.hbs',
    });
}

function saveUserData(user) {
    const userEmail = user.user.email;
    const userUid = user.user.uid;
    const userData = {
        email: userEmail,
        uid: userUid,
    }
    localStorage.setItem('user', JSON.stringify(userData));
}

function getUserData() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

function clearUserData() {
    this.localStorage.removeItem('user');
}

(() => {
    app.run('#/home');
})();