import React, { FC } from 'react';
import styles from './TemplateName.module.css';

interface TemplateNameProps {}

const TemplateName: FC<TemplateNameProps> = (props) => {
  return(
  <div className={styles.TemplateName} data-testid="TemplateName">
    TemplateName Component
  </div>
);}
TemplateName.defaultProps={}
export default TemplateName;
