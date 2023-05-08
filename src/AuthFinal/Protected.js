import React from 'react';
import { Navigate } from "react-router-dom"
import { useUserAuth } from '../context/AuthContexts';

const Protected = ({ children }) => {
  const { user } = useUserAuth();

    if(!user){
        <Navigate to="/login" replace />;
    }else{
      return children
    }
};

export default Protected;