import { createContext } from "react";
import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
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
        toast.success("User Register Successfully");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        toast.error(err.message);
      })
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        // console.log(res);
        setUser(res.user);
        toast.success("User Login Successfully");
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

  const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((res) => {
        toast.success("User SignIn Successfully");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        toast.error(err.message);
      });
  };

  const signInWithGithub = () => {
    signInWithPopup(auth, new GithubAuthProvider())
      .then((res) => {
        toast.success("User SignIn Successfully");
      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
        toast.error(err.message);
      });
  };

  const context = {
    user,
    loading,
    error,
    registerUser,
    signInUser,
    logoutUser,
    forgotPassword,
    signInWithGoogle,
    signInWithGithub,
  };

  return (
    <UserContext.Provider value={context}>{children}</UserContext.Provider>
  );
};

export { UserProvider, UserContext };
