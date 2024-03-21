import { createContext } from "react";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Firebase";
import { toast } from "react-toastify";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setError("");
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  // when user first visiting flowSandbox
  const registerUser = (email, name, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        return updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
        setError(<h4>Invalid User Credentials</h4>);
      })
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        setUser(res.user);
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("Invalid User Credentials");
      })
      .finally(() => setLoading(false));
  };
  const logoutUser = () => {
    signOut(auth);
    setUser(null);
  };

  const forgotPassword = (email) => sendPasswordResetEmail(auth, email);

  const context = {
    user,
    loading,
    error,
    registerUser,
    signInUser,
    logoutUser,
    forgotPassword,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
