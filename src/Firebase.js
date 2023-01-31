// Setup ==================================================================================================
import { initializeApp } from "firebase/app";

// getAuth: returns an object that contains information about the currently logged in user, 
//          such as their email address and display name
import { getAuth, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, signOut } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAfsUuMxULF2_uz5waWc6MoeO9I7lW1wzI",
    authDomain: "auth-bd075.firebaseapp.com",
    projectId: "auth-bd075",
    storageBucket: "auth-bd075.appspot.com",
    messagingSenderId: "473222586940",
    appId: "1:473222586940:web:fd606787f547cda32a9939"
};

// connecting the front end to our project in Firebase
const app = initializeApp(firebaseConfig);
// ========================================================================================================

// this is to see who is authenticated
export const auth = getAuth(app);

// =============================================
// create a function that signs in with google
// =============================================
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, provider)
            .then((res) => {
                // console.log(res)
                resolve(res);
            })
            .catch((err) => {
                alert(err)
                reject(err);
            })
    });
}
// ** instead of doing our login function in this file, we'll return promise and do what we want in our login page
// export const signInWithGoogle = () => {
//     // returns a promise
//     signInWithPopup(auth, provider)
//     .then((res) => {
//         console.log(res.user)
//         sessionStorage.setItem('token', JSON.stringify(res.user.accessToken))
//         sessionStorage.setItem('user', JSON.stringify(res.user))
//         window.location.reload(false);
//     })
//     .catch((err) => {
//         alert(err)
//     })
// }



// =============================================
// create a function that signs in with fb
// =============================================
const fbProvider = new FacebookAuthProvider();
export const signInWithFacebook = () => {
    return new Promise((resolve, reject) => {
        signInWithPopup(auth, fbProvider)
            .then((res) => {
                console.log(res)
                resolve(res);
            })
            .catch((err) => {
                alert(err)
                reject(err);
            })
    });
}
// export const signInWithFacebook = () => {
//     signInWithPopup(auth, fbProvider)
//         .then((res) => {
//             console.log(res)
//             sessionStorage.setItem('token', JSON.stringify(res.user.accessToken))
//             sessionStorage.setItem('user', JSON.stringify(res.user))
//             window.location.reload(false);
//         })
//         .catch((err) => {
//             alert(err)
//         })
// }


// create a logout function


// =============================================
// logout function
// =============================================
export const logOut = () => {
    signOut(auth).then(() => {
        alert('logout successfully')
        sessionStorage.clear();
        window.location.reload(false);
    }).catch((error) => {
        alert(error)
    });
}



