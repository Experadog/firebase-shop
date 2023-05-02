import React from 'react';


interface ISubmit {
  location: string
}

const AuthSubmit: React.FunctionComponent<ISubmit> = ({location}) => 
  <button type="submit">{location}</button>

export default AuthSubmit;
