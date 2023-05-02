

import React from 'react';
import { Link } from 'react-router-dom';
import { PATH } from '../../../service/Path';

interface INavigate {
  location: string
}

const AuthNavigate:React.FunctionComponent<INavigate> = ({location}) => {
  return (
    <Link style={{color: "white"}} to={
        location === "signIn" 
          ? PATH.ConnectedAuthPath.register 
          : PATH.ConnectedAuthPath.login
      }
    >
      {
        location === "signIn"
          ? "If you don't have an account?"
          : "Already have an account?"
      }
    </Link>
  )
}

export default AuthNavigate;
