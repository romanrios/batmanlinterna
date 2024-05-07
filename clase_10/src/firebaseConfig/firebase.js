import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMKbluD8VBWERgXm2VCglrC9Gn4SefIX8",
  authDomain: "codoacodo-react.firebaseapp.com",
  projectId: "codoacodo-react",
  storageBucket: "codoacodo-react.appspot.com",
  messagingSenderId: "889487536947",
  appId: "1:889487536947:web:e64c5909f3f23a92428446",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// export const auth = getAuth(app);
