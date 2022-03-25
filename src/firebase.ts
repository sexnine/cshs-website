import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDRj3IP9ZFuH7MI8QKT3y6xtuxcgpBshSU",
  authDomain: "cshs-website.firebaseapp.com",
  projectId: "cshs-website",
  storageBucket: "cshs-website.appspot.com",
  messagingSenderId: "848700220904",
  appId: "1:848700220904:web:fda2053a9a5e95f512305d",
  measurementId: "G-4BL65H3C0V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
