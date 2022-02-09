import React, { FC } from "react";
import { I_meme, I_memeImage } from "../../../interfaces/I_meme";
import styles from "./MemeSvgViewer.module.css";

interface MemeSvgViewerProps {
  meme: I_meme;
  image: I_memeImage;
}

const MemeSvgViewer: FC<MemeSvgViewerProps> = (props) => {
  return (
    <svg
      className={styles.MemeSvgViewer}
      data-testid="MemeSvgViewer"
      width="100%"
      height="100%"
      viewBox={`0 0 ${props.image.w} ${props.image.h}`}
    >
      <image href={props.image.href} x="0" y="0" />
      <text
        x={props.meme.x}
        y={props.meme.y}
        fontSize={props.meme.fontSize}
        fontWeight={props.meme.fontWeight}
        textDecoration={props.meme.underline ? "underline" : "none"}
        fontStyle={props.meme.italic ? "italic" : "normal"}
      >
        {props.meme.text}
      </text>
    </svg>
  );
};
MemeSvgViewer.defaultProps = {};
export default MemeSvgViewer;
