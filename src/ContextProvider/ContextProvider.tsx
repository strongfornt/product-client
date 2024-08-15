import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";

import auth from "../Firebase/firebase.config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AuthContext = createContext<null | any>(null);

export default function ContextProvider({ children }: { children: ReactNode }) {
  const googleProvider = new GoogleAuthProvider();

  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<string>("light");
  const [menu, setMenu] = useState<boolean>(false);
  const [dropdown, setDropdown] = useState<boolean>(false);

  const createUser = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInUser = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const updateUserProfile = (
    user: User,
    update: { displayName: string }
  ) => {
    return updateProfile(user, update);
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setLoading(false);
      } else {
        setUser(null);
        setLoading(false);
      }
    });

    return () => {
      unSubscribe();
    };
  }, [user?.email]);

  console.log(user);
  

  const authInfo = {
    user,
    createUser,
    signInUser,
    googleLogin,
    logOut,
    loading,
    setUser,
    updateUserProfile,
    setLoading,
    theme,
    setTheme,
    menu,
    setMenu,
    dropdown,
    setDropdown,
  };
  return (
    <>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </>
  );
}
