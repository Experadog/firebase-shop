import React from 'react';

import cls from "./index.module.scss";

interface IChildren {
  children: React.ReactNode
}

const Container:React.FunctionComponent<IChildren> = ({children}) => {
  return (
    <React.Fragment>
      <section className={cls.container}>
        {children}
      </section>
    </React.Fragment>
  )
}

export default Container;
