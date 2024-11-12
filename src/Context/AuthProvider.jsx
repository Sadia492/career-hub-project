import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  TwitterAuthProvider,
  updateCurrentUser,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";
import { useNavigate } from "react-router-dom";
export const authContext = createContext();
export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const twitterProvider = new TwitterAuthProvider();
  const signInWithGoogle = (navigate) => {
    setLoading(true);
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result.user);
      navigate("/");
    });
  };
  const signInWithGithub = (navigate) => {
    setLoading(true);
    signInWithPopup(auth, githubProvider).then((result) => {
      setUser(result.user);
      navigate("/");
    });
  };
  const signInWithTwitter = (navigate) => {
    setLoading(true);
    signInWithPopup(auth, twitterProvider).then((result) => {
      setUser(result.user);
      navigate("/");
    });
  };

  const signUpWithEmail = (email, password, name, navigate) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
      const profile = {
        displayName: name,
      };
      updateProfile(auth.currentUser, profile).then(() => {
        console.log("profile updated");
        navigate("/");
      });
    });
  };
  const signInWithEmail = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password).then((result) => {
      setUser(result.user);
    });
  };

  const signOutUser = () => {
    setLoading(true);
    signOut(auth).then(() => {});
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
      return () => unsubscribe();
    });
  }, []);

  const authInfo = {
    signInWithGoogle,
    signInWithGithub,
    signInWithTwitter,
    signUpWithEmail,
    user,
    loading,
    signOutUser,
    signInWithEmail,
  };
  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
}
