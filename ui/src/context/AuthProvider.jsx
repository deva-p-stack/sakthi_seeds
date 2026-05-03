"use client";

import { useRouter } from "next/navigation";
import { AuthContext } from "./AuthContext";
import { useCallback, useEffect, useState } from "react";

export default function AuthProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = !!user;

  const refreshSession = useCallback(async () => {
    try {
      const response = await fetch("/api/me", {
        method: "GET",
        credentials: "include",
      });

      if (!response.ok) {
        setUser(null);
        return null;
      }

      const data = await response.json();
      setUser(data.user);
      return data.user;
    } catch {
      setUser(null);
      return null;
    }
  }, []);

  useEffect(() => {
    (async () => {
      await refreshSession();
      setLoading(false);
    })();
  }, [refreshSession]);

  // state for login and logout 
  //  const login = async () => {
  //   const me = await refreshSession();
  //   if (me) {
  //     // redirect to user dashboard // admin dashboard based on role
  //     if (me.role === "admin") {
  //       router.push("/admin/dashboard");
  //     } else {
  //       router.push("/dashboard");
  //     }
  //   }
  // };
const login = async (userData) => {
   console.log("USER STORED IN CONTEXT:", userData);
  setUser(userData);
};

  const logout = async () => {
    try {
      await fetch("/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // cookies 
        credentials: "include",               
      });

      // clear user state and  redirect to login page  
       setUser(null);

         window.location.href = "/login";
    } catch (error) {
      console.error("Error logging out:", error);
    }

    setUser(null);
    router.push("/login");
  };

  const value = {
    user,
    setUser,
    loading,
    login,
    logout,
    isAuthenticated,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
