// src/ProtectedRoute.js
import React, { useContext } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { Navigate, Outlet } from "react-router-dom";
import SessionContext from "../SessionContext";

const ProtectedRoute = () => {

    const { user }=  useContext(SessionContext);
    const isAuthenticated = user.isAuthenticated;//useIsAuthenticated();
    const { instance } = useMsal();

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return <Outlet/>;
};

export default ProtectedRoute;
