import React, { createContext, useContext, useReducer } from 'react';
import { Navigate } from 'react-router-dom';

const UserContext = createContext();


export function UserProvider({ children }) {
  const [user, setUser] = useReducer((state, newUser) => newUser, {});

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
