import React from 'react';
import useAuth from '../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../../components/LogInAndRegistetion/Loading';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user,loading} = useAuth();

    if(loading){
        return <Loading/>
    }
    
    if(user){
        return children;
    }
    
    return <Navigate to={"/login"} state={{from:location}} replace/>
};

export default PrivateRoute;