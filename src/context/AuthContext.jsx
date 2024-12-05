import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null; // Load from localStorage if available
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return !!localStorage.getItem("authToken"); // Check if there's a token in localStorage
  });

  // Use effect to persist `user` and `isLoggedIn` to localStorage
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user)); // Save user to localStorage
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem("authToken", localStorage.getItem("authToken")); // Save authToken (you might update it with actual token)
    } else {
      localStorage.removeItem("authToken");
    }
  }, [isLoggedIn]);

  const value = {
    user,
    setUser,
    isLoggedIn,
    setIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
