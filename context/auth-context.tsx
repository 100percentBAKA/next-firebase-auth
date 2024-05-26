"use client";

import FullScreenLoader from "@/components/ui/screen-loader";
import { auth } from "@/firebase/config/firebase";
import { User, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  loading: boolean;
  user: User | null | false;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);
// @param defaultValue
// The value you want the context to have when there is no matching Provider in the tree above the component reading the context. This is meant as a "last resort" fallback.

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [user, setUser] = useState<User | null | false>(false);

  const logout = async () => {
    await signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }

      setLoading(false);
    });

    // component unmounts here, performing clean up
    return () => unsubscribe();
  }, []);

  const values = {
    loading,
    user,
    logout,
  };

  return (
    <AuthContext.Provider value={values}>
      {loading ? <FullScreenLoader /> : children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
