import React, {  useContext } from 'react';

import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthProvider';
import Loading from '../Page/Loading';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location =useLocation();
    
   if (loading){
    return <Loading></Loading>
   }
    if (user && user?.email){
         return children;

    }
if(!user){
     return <Navigate state={location.pathname} to="/login"></Navigate>
}
   
};

export default PrivateRoute;