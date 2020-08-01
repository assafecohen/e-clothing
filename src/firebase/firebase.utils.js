import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyD72V7ELx1zehmZXJQ9dQADphWa0NicI70',
  authDomain: 'clothing-db-a4985.firebaseapp.com',
  databaseURL: 'https://clothing-db-a4985.firebaseio.com',
  projectId: 'clothing-db-a4985',
  storageBucket: 'clothing-db-a4985.appspot.com',
  messagingSenderId: '520313411834',
  appId: '1:520313411834:web:77cb278803869e4cde9143',
  measurementId: 'G-YHYK6MZXEE',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
