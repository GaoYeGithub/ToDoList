import firebase from 'firebase'


var firebaseConfig = {
    apiKey: "AIzaSyCB_qLrq43mHzs1ZuL_B_ynLMcDydsCAkE",
    authDomain: "test-form-f2df9.firebaseapp.com",
    databaseURL: "https://test-form-f2df9.firebaseio.com",
    projectId: "test-form-f2df9",
    storageBucket: "test-form-f2df9.appspot.com",
    messagingSenderId: "684444083467",
    appId: "1:684444083467:web:9e3134e8e566638242ae0e",
    measurementId: "G-NYNSC1FB6G"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase