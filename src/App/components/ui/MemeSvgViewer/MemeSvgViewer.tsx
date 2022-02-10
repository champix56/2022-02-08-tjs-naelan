import React, { FC } from "react";
import { connect, connectAdvanced } from "react-redux";
import { I_meme, I_memeImage } from "../../../interfaces/I_meme";
import { E_Curent_Actions } from "../../../store/store";
import styles from "./MemeSvgViewer.module.css";

interface MemeSvgViewerProps {
  meme: I_meme;
  image: I_memeImage|undefined;
}

const MemeSvgViewer: FC<MemeSvgViewerProps> = (props) => {
  return (
    <svg
      className={styles.MemeSvgViewer}
      data-testid="MemeSvgViewer"
      width="100%"
      height="100%"
      viewBox={`0 0 ${props.image?props.image.w:'1000'} ${props.image?props.image.h:'1000'}`}
    >
     {props.image&& <image href={props.image.href} x="0" y="0" />}
      <text
        x={props.meme.x}
        y={props.meme.y}
        fontSize={props.meme.fontSize}
        fontWeight={props.meme.fontWeight}
        textDecoration={props.meme.underline ? "underline" : "none"}
        fontStyle={props.meme.italic ? "italic" : "normal"}
        fill={props.meme.color}
      >
        {props.meme.text}
      </text>
    </svg>
  );
};
MemeSvgViewer.defaultProps = {};
function mapStateToProps(storeState:any,ownProps:any){
  return {
    ...ownProps,
    meme:{...storeState.current},
    image:storeState.ressources.images.find((img:I_memeImage)=>img.id===storeState.current.imageId)
  };
}
function mapDispatchToProps(dispatch:Function){
  return {
    
  };
}
//export avec les props provennant uniquement du parent
export default MemeSvgViewer;
//export avec connection au meme courrant du store et l'image de la liste d'images du store
export const MemeSvgViewerWithStore=connect(mapStateToProps, mapDispatchToProps)(MemeSvgViewer);
function mapStateToPropsOnlyImage(storeState:any,ownProps:any){
  return {
    ...ownProps,
    image:storeState.ressources.images.find((img:I_memeImage)=>img.id===ownProps.imageId)
  }
}
//export avec connexion partiel: le meme a 
//afficher provient du parent et l'image proviens de la liste d'images du parent
export const MemeSvgViewerWithStoreImage=connect(mapStateToPropsOnlyImage, mapDispatchToProps)(MemeSvgViewer);

