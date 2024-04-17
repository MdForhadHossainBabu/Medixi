import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../Firebase/firebase.config";
import { toast } from 'react-hot-toast';





 export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
 
  const [user, setUser] = useState(null);
  const [update, setUpdate] = useState(null)
  const [loading, setLoading] = useState(true);

  const registerUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    
  }
  
  const ProfileUpdate = (currentUser) => {
    return updateProfile(auth, currentUser)
  }

  const loginUser = (email, password) => {
    setLoading(true);
  return signInWithEmailAndPassword(auth, email, password)
 }

 const provider = new GoogleAuthProvider();
  const registerPopUp = () => {
    setLoading(true);
  return signInWithPopup(auth, provider)
 }

 const facebookProvider = new FacebookAuthProvider();
  const facebookLogin = () => {
    setLoading(true);
  return signInWithPopup(auth, facebookProvider)
 }

 const githubProvider = new GithubAuthProvider();

  const githubLogin = () => {
    setLoading(true);
  return signInWithPopup(auth, githubProvider)
 }

 useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, currentUser => {
     if (currentUser) {
       setUser(currentUser);
        setLoading(false)
     } else {
       setUser(null);
     }
     return () => {
       unSubscribe();
     };
   });
 }, []);

 const loggedOut = () => {
   setLoading(true);
   signOut(auth)
     .then(result => toast.success('log out successfully'))
     
   .then(error => console.log(error))
 }


 const authInfo = {
   registerUser,
   loginUser,
   loggedOut,
   registerPopUp,
   user,
   setUser,
   facebookLogin,
   githubLogin,
   ProfileUpdate,
   loading,
   update,
   setUpdate
 };

 return (
   <div>
     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   </div>
 );
};

export default AuthProvider;