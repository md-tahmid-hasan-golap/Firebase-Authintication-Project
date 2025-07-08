import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const FirebaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  console.log(user);

  const creatUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  useEffect(() => {
    const unSuscribe = onAuthStateChanged(auth, (crueentUser) => {
      setUser(crueentUser);
    });
    return () => {
      unSuscribe();
    };
  }, []);
  const authData = {
    user,
    setUser,
    creatUser,
  };
  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default FirebaseAuthProvider;
