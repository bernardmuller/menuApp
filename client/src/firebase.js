import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCm6IUuSWT-WsdkYzbJJr9VjPWPiqkz67M",
  authDomain: process.env.MENUAPP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.MENUAPP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.MENUAPP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.MENUAPP_FIREBASE_MESSAGING_SENDER,
  appId: process.env.MENUAPP_FIREBASE_APP_ID,
});

export const auth = app.auth();
export default app;
