import firebase from 'firebase';
import firebaseapp, { auth } from './firebase';


class AuthService{
  login(providerName){
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebaseapp.auth().signInWithPopup(authProvider);
  }
  signUp(email, password){
    return auth().createUserWithEmailAndPassword(email, password);
  }
  signIn(email, password){
    return auth().signInWithEmailAndPassword(email, password);
  }
}

export default AuthService;