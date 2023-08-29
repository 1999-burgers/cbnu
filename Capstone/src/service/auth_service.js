import firebase from 'firebase';
import firebaseapp from './firebase';


class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseapp.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(() => {
      return new Promise((response) => firebaseapp.auth().onAuthStateChanged((user) => {
        console.log(user)
        if(user) response(new Promise((res) => res({user: user})))
        else response(firebaseapp.auth().signInWithPopup(authProvider))
      }))
    })
  }
}

export default AuthService;
