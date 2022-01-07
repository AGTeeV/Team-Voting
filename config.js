import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBkB-yc_5TgtFxyGI23FT2Vfkkcv1I8Jt4",
    authDomain: "pro-player-e6499.firebaseapp.com",
    projectId: "pro-player-e6499",
    storageBucket: "pro-player-e6499.appspot.com",
    messagingSenderId: "124170889521",
    appId: "1:124170889521:web:2372a81bd8cb1fe13c6810",
    measurementId: "G-QWZB34X7N5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();