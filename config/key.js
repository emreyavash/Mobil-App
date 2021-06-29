import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDSmNph91bMaHplo2oqUNutfGMe1Csynpg",
    authDomain: "mobil-app-9c088.firebaseapp.com",
    projectId: "mobil-app-9c088",
    storageBucket: "mobil-app-9c088.appspot.com",
    messagingSenderId: "326455626159",
    appId: "1:326455626159:web:a7410c498461500dae075a",
    measurementId: "G-B4EWMLK973"
  };

  const Firebase =firebase.initializeApp(firebaseConfig);

  export default Firebase;