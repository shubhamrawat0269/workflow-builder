// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDwZ9v6uThT7sinelbAqxpoZ7sJvti6FKQ",
  authDomain: "flowsandbox-11a36.firebaseapp.com",
  projectId: "flowsandbox-11a36",
  storageBucket: "flowsandbox-11a36.appspot.com",
  messagingSenderId: "602956639909",
  appId: "1:602956639909:web:470c4c96928ca7ffcde74c",
  measurementId: "G-6569JCT1PF",
  databaseURL: "https://flowsandbox-11a36-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);
