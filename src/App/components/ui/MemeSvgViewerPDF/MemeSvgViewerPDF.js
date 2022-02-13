import { Image, Svg, Text, View } from "@react-pdf/renderer";
import React, { useEffect, useState } from "react";
import { I_memeImage } from "../../../interfaces/I_meme";
import { store } from "../../../store/store";

const MemeSvgViewerPDF = (props) => {
  const [image, setimage] = useState(undefined);
  useEffect(() => {
    setimage(
      store
        .getState()
        .ressources.images.find((e) => e.id === props.meme.imageId)
    );
    console.log(
      props,
      image,
      store
        .getState()
        .ressources.images.find((e) => e.id === props.meme.imageId)
    );
    store.subscribe(() => {
      setimage(
        store
          .getState()
          .ressources.images.find((e) => e.id === props.meme.imageId)
      );
      console.log(props, image);
    });
  }, []);
  //pas de dependances pour le useeffect => componentdidmount
  return (
    
      <Svg
        data-testid="MemeSvgViewerPDF"
       width={'100%'}
       height={'100%'}
        viewBox={`0 0 ${image ? image.w : "1000"} ${image ? image.h : "1000"}`}
      >
        {image && <Image src={image.href} x="0" y="0" />}
        <Text
          x={props.meme.x}
          y={props.meme.y}
          style={{
            fontSize: props.meme.fontSize,
            fontWeight: props.meme.fontWeight,
            textDecoration: props.meme.underline ? "underline" : "none",
            fontStyle: props.meme.italic ? "italic" : "normal",
            fill: props.meme.color,
          }}
        >
          {props.meme.text}
        </Text>
      </Svg>
    
  );
};
MemeSvgViewerPDF.defaultProps = {};

//export avec les props provennant uniquement du parent
export default MemeSvgViewerPDF;
