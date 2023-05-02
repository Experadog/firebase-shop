


import React from 'react';

interface IError {
  err: string | undefined | any
}

const Errors:React.FunctionComponent<IError> = ({err}) => <p style={{color:"red"}}>{err}</p>

export default Errors;
