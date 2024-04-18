import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

 const  ProtectedRoute = (props) => {
    const { Component } = props;
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return <div>{isLoggedIn ? <Component /> : <Navigate to="/auth" />}</div>;
}
 
export default ProtectedRoute;