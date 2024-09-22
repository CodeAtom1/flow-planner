
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from './pages/SignIn'
import { Dashboard } from './pages/Dashboard';
import ProtectedRoute from './pages/ProtectedRoute';
import { useMsal } from "@azure/msal-react";
import { useContext, useEffect } from 'react';
import SessionContext from './SessionContext';
import SessionProvider from './SessionProvider';

function App() {
  //const { instance } = useMsal();
  var {user, login} = useContext(SessionContext);

  const { instance, accounts, inProgress } = useMsal();

  useEffect( () =>{
    instance.handleRedirectPromise().then((response) => {
        if (response) {
          login(response.account.username);
            // You can handle the token or account info here
            console.log(response);
        }
    });
  },[instance]);

 //return ;

    
if (accounts.length > 0) {
    return <>
    {/* <Router>
      <Routes>
        <Route path="/" element={<Dashboard/>} />
          <Route path="/login" element={<SignIn/>} />
          <Route path="/" element={<ProtectedRoute />} >
            <Route path="/" element={<Dashboard/>} />
          </Route>
      </Routes>
    </Router> */}
    <Dashboard />
    <span>There are currently {accounts.length} users signed in!</span>
    </>
} else if (inProgress === "login") {
    return <span>Login is currently in progress!</span>
} else {
    return (
        <>
            <span>There are currently no users signed in!</span>
            <SignIn/>
        </>
    );
}

}




export default App;
