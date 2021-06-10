import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBZN26LZ48HQbX04A6uwZpm4e2JsaQCdwQ",
  authDomain: "mini-blog-36968.firebaseapp.com",
  projectId: "mini-blog-36968",
  storageBucket: "mini-blog-36968.appspot.com",
  messagingSenderId: "438290882091",
  appId: "1:438290882091:web:b5444c4475c2c3846c946e",
};
firebase.initializeApp(firebaseConfig);
const ref = firebase.firestore().collection("blogs");
export default ref;
