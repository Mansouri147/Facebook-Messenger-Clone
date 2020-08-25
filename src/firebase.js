import firebase from "firebase"


const firebaseApp = firebase.initializeApp({

        apiKey: "AIzaSyBEHAeu-S3XMu58kfVC0hjHlmSkixn4i44",
        authDomain: "facebook-messenger-clone-f17b7.firebaseapp.com",
        databaseURL: "https://facebook-messenger-clone-f17b7.firebaseio.com",
        projectId: "facebook-messenger-clone-f17b7",
        storageBucket: "facebook-messenger-clone-f17b7.appspot.com",
        messagingSenderId: "147483668794",
        appId: "1:147483668794:web:c202a0fed3e2da854f6003"
        
});

const db = firebaseApp.firestore();

export default db;