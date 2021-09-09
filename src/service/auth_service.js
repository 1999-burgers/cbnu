import firebase from 'firebase';
import firebaseapp from './firebase';


class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseapp.auth().signInWithPopup(authProvider);
  }
}

export default AuthService;