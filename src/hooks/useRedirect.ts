

import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../service/Path';

const useRedirect = () => {
  const navigate = useNavigate();

  const goToLogin = React.useCallback(() => navigate(PATH.ConnectedAuthPath.login), [navigate])

  return {
    actions: {
      goToLogin
    }
  }
}

export default useRedirect;
