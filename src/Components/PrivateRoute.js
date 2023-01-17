import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
    // console.log('private route')
    // const navigate = useNavigate();
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;