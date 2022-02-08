import React, { FC } from 'react';
import styles from './MemeSvgViewer.module.css';

interface MemeSvgViewerProps {}

const MemeSvgViewer: FC<MemeSvgViewerProps> = (props) => {
  return(
  <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
    MemeSvgViewer Component
  </div>
);}
MemeSvgViewer.defaultProps={};
export default MemeSvgViewer;
