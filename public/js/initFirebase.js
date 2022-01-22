const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
};
//firebase initalization


firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();






