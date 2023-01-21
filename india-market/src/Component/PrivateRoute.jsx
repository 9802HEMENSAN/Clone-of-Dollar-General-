import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router';
import { AuthContext } from '../Context/AuthContext'

const PrivateRoute = ({children}) => {

const{isAuth}=useContext(AuthContext);
if(!isAuth){
    return <Navigate to="/login"/>
}

  return (
      children
  )
}

export default PrivateRoute
