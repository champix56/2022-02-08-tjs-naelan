import React, { FC } from 'react';
import styles from './FlexWLayout.module.css';

interface FlexWLayoutProps {
  children:string|Array<any>
}

const FlexWLayout: FC<FlexWLayoutProps> = (props) => {
  return(
  <div className={styles.FlexWLayout} data-testid="FlexWLayout">
    {props.children}
  </div>
);}
export default FlexWLayout;
