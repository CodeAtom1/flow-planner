
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './pages/SignIn'
import { Dashboard } from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import { useMsal } from "@azure/msal-react";
import { useContext, useEffect, useState } from 'react';
import SessionContext from './SessionContext';
import SessionProvider from './SessionProvider';
import { msalConfig } from './config';

function App() {
  //const { instance } = useMsal();
  var { user, login, setToken } = useContext(SessionContext);
  var [isTokenRequestProcess,setIsTokenRequestProcess] = useState(false);

  const { instance, accounts, inProgress } = useMsal();

  useEffect(() => {
    instance.handleRedirectPromise().then((response) => {
      if (response) {
        var token = JSON.parse(sessionStorage.getItem(`msal.token.keys.${instance.controller.config.auth.clientId}`)).accessToken[0]
        login(response.account.username);
        // You can handle the token or account info here
        console.log(response);
      }
      return response;
    }).then((response) => {
      if(response && accounts.length > 0)
        requestToken();
    });

    const requestToken = async () => {
      if(isTokenRequestProcess)
        return;
      setIsTokenRequestProcess(true);
      try {
        // If the user is already signed in, use acquireTokenSilent
        const silentRequest = {
          ...msalConfig,
          scopes: ['api://7c4e0cd8-9ccd-42ca-999e-2c15f6a18801/access_as_user'],
          account: accounts[0], // User account
        };

        const response = await instance.acquireTokenSilent(silentRequest);
        console.log('Access Token:', response.accessToken);
        setToken(response.accessToken);

      } catch (error) {
        // If silent token acquisition fails, fall back to interactive
        if (error?.name == 'InteractionRequiredAuthError') {
          const interactiveResponse = await instance.acquireTokenPopup(msalConfig);
          console.log('Interactive Access Token:', interactiveResponse.accessToken);
        } else {
          console.error(error);
        }
      }
      
      setIsTokenRequestProcess(false);
    };
  }, [accounts]);

  if (accounts.length > 0) {
    return <>
      <Dashboard />
      <span>There are currently {accounts.length} users signed in!</span>
    </>
  } else if (inProgress === "login") {
    return <span>Login is currently in progress!</span>
  } else {
    return (
      <>
        <span>There are currently no users signed in!</span>
        <SignIn />
      </>
    );
  }

}
export default App;
