import { useState } from "react";
import SessionContext from "./SessionContext";

const SessionProvider = ({ children }) => {
    const [user, setUser] = useState({email: '', isAuthenticated:false});

    const login = (email)=>{
        setUser({email: email, isAuthenticated:true});
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