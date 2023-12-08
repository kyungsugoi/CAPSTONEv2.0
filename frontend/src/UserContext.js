import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const UserContext = createContext();

export function UserProvider({ children }) {
  // Load user data from localStorage on component mount
  const storedUser = JSON.parse(localStorage.getItem('user')) || {};
  const [user, setUser] = useReducer((state, newUser) => newUser, storedUser);

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  const handleLogout = () => {
    setUser({}); // Clear user data
  };

  return (
    <UserContext.Provider value={{ user, setUser, handleLogout }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
