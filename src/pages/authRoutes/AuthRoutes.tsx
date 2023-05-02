import React from 'react';
import { Route, Routes as Switch } from 'react-router-dom';
import { PATH } from '../../service/Path';
import { AuthPages } from '../Lazy';



const AuthRoutes:React.FunctionComponent = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path={PATH.AuthPath.login} element={<AuthPages.Login />} />
        <Route path={PATH.AuthPath.register} element={<AuthPages.Register />} />
      </Switch>
    </React.Fragment>
  )
}

export default AuthRoutes;
