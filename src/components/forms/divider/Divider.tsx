
import React from 'react';

import cls from "./index.module.scss";

interface IDivider {
  children: React.ReactNode
}

const Divider:React.FunctionComponent<IDivider> = ({children}) => 
  <section className={cls.divider}>{children}</section>

export default Divider
