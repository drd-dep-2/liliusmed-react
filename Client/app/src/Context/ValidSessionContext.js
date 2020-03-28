import React, { useEffect, useState } from 'react';

export const ValidSessionContext = React.createContext();

export default ({ children }) => {
    /*
  const prevAuth = JSON.parse(window.localStorage.getItem('authenticated')) || false;
  const prevAuthBody = window.localStorage.getItem('authBody') || null;
  const [authenticated, setAuthenticated] = useState(prevAuth);
  const [authBody, setAuthBody] = useState(prevAuthBody);
  useEffect(
    () => {
      window.localStorage.setItem('authenticated', JSON.stringify(authenticated));
      window.localStorage.setItem('authBody', authBody);     
    },
    [authenticated, authBody]
  );*/
  const fakeAuth = () =>
  {
    console.log("fake auth")
  }
  const defaultContext = {
    fakeAuth
  };
  return (
    <ValidSessionContext.Provider value={defaultContext}>
      {children}
    </ValidSessionContext.Provider>
  );
};