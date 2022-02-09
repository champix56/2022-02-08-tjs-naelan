import React, { FC } from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {
  children:string|Array<any>
}

const TemplateName: FC<TemplateNameProps> = (props) => {
  return(
  <div className={styles.TemplateName} data-testid="TemplateName">
    {props.children}
  </div>
);}
export default TemplateName;
