import React, { FC } from 'react';
import { I_meme, I_memeImage } from '../../../interfaces/I_meme';
import styles from './MemeSvgViewer.module.css';

interface MemeSvgViewerProps {
  meme:I_meme;
  image:I_memeImage;
}

const MemeSvgViewer: FC<MemeSvgViewerProps> = (props) => {
  return(
  <div className={styles.MemeSvgViewer} data-testid="MemeSvgViewer">
    MemeSvgViewer Component
  </div>
);}
MemeSvgViewer.defaultProps={};
export default MemeSvgViewer;
