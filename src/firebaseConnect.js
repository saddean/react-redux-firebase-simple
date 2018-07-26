import * as firebase from 'firebase';

const config = {
    apiKey: "x",
    authDomain: "x",
    databaseURL: "x",
    projectId: "x",
    storageBucket: "x,
    messagingSenderId: "x"
  };
firebase.initializeApp(config);

export const noteData = firebase.database().ref('dataForNote'); 