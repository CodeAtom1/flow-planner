import { useState } from "react";
import SessionContext from "./SessionContext";

const SessionProvider = ({ children }) => {
    const [user, setUser] = useState({email: '', isAuthenticated:false, accessToken:''});

    const login = (email, token)=>{
        setUser({email: email, isAuthenticated:true, token: token});
    }
    const logout = () =>{
        setUser(null);
    }
  
    return (
      <SessionContext.Provider value={{user, login, logout}}>
        {children}
      </SessionContext.Provider>
    );
  };

export default SessionProvider;