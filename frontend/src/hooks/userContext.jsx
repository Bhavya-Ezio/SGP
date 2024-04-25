import { createContext, useContext, useState, useEffect } from 'react';

const CurrentUserContext = createContext({
  currentUser: null, // Initial value
  setCurrentUser: (user) => {}, // Empty function for initial state
});

const useCurrentUser = () => {
  const [currentUser, setCurrentUser] = useState(null);

  return { currentUser, setCurrentUser };
};

const CurrentUserProvider = ({ children }) => {
  const value = useCurrentUser();

  return (
    <CurrentUserContext.Provider value={value}>
      {children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserContext, useCurrentUser, CurrentUserProvider };
