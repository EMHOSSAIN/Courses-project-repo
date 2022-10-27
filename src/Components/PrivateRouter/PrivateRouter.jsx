import React from 'react';
import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const PrivateRouter = ({children}) => {
   const {user,loading}= useContext(AuthContext)
   if(loading){
    return<div>Loading.....</div>
   }


   
   if(!user){
    return <Navigate to = '/login' />

   }
   return children
};

export default PrivateRouter;