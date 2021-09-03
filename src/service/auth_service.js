import firebase from 'firebase';

class AuthService{
  login(providerName){
    const authProvider = new firebase.auth.[`${providerName}AuthProvider`]();
    return
  }
}