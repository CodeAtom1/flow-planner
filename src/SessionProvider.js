import { useState } from "react";
import SessionContext from "./SessionContext";

const SessionProvider = ({ children }) => {
    const [user, setUser] = useState({email: '', isAuthenticated:false, token:''});

    const login = (email)=>{
        setUser(prevState => ({...prevState, email: email, isAuthenticated:true}));
    }
    
    const setToken = (token)=>{
      setUser(prevState => ({...prevState, token: token}));
  }
    const logout = () =>{
        setUser(null);
    }
  
    return (
      <SessionContext.Provider value={{user, login, logout, setToken}}>
        {children}
      </SessionContext.Provider>
    );
  };

export default SessionProvider;