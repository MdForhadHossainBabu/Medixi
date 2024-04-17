// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDloCF9C0K5gxZDxCql5kC4YZvR1MILPVs',
  authDomain: 'assignment-projects-fb8fc.firebaseapp.com',
  projectId: 'assignment-projects-fb8fc',
  storageBucket: 'assignment-projects-fb8fc.appspot.com',
  messagingSenderId: '935591274519',
  appId: '1:935591274519:web:ae358b6cbe5ff9799dd452',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
