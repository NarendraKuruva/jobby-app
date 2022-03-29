import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = (props): JSX.Element => {
   const token = Cookies.get('jwt_token')
   if (token === undefined) {
      return <Redirect to='/jobby/login' />
   }
   return <Route {...props} />
}

export default ProtectedRoute
