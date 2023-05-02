
import React from 'react';

import cls from "./index.module.scss";

const Avatar:React.FunctionComponent = () => {
  const [avatar, setAvatar] = React.useState<string>("");
  const user = {
    avatar: ""
  };
  const NoneAvatar = "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049__340.png";

  React.useEffect(() => {
    if(user.avatar) {
      setAvatar(user.avatar)
    } else {
      setAvatar(NoneAvatar)
    }
  }, []);

  return (
    <React.Fragment>
      <img className={cls.avatar} src={avatar} alt="" />
    </React.Fragment>
  )
}

export default Avatar;
