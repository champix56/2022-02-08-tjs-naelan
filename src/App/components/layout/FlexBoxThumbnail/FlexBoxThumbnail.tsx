import React, { FC, ReactNode } from 'react';
import styles from './FlexBoxThumbnail.module.css';

interface FlexBoxThumbnailProps {
  children:Array<ReactNode>|ReactNode|undefined
}

const FlexBoxThumbnail: FC<FlexBoxThumbnailProps> = (props) => {
  return(
  <div className={styles.FlexBoxThumbnail} data-testid="FlexBoxThumbnail">
    {props.children}
  </div>
);}
export default FlexBoxThumbnail;
